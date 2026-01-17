const mongoose = require('mongoose')

async function checkDatabases() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://globespotmlm:globespotmlm@cluster0.qwwrkho.mongodb.net/skystar'
    console.log('Connecting to:', MONGODB_URI)
    
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB')
    
    // List all databases
    const admin = mongoose.connection.db.admin()
    const dbs = await admin.listDatabases()
    console.log('\n📊 Available databases:')
    dbs.databases.forEach(db => {
      console.log(`- ${db.name} (${(db.sizeOnDisk / 1024 / 1024).toFixed(2)} MB)`)
    })
    
    // Check current database
    console.log('\n🎯 Current database:', mongoose.connection.db.databaseName)
    
    // List collections in current database
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log('\n📁 Collections in current database:')
    collections.forEach(col => {
      console.log(`- ${col.name}`)
    })
    
    // Check if admins collection exists and has data
    if (collections.find(c => c.name === 'admins')) {
      const adminCount = await mongoose.connection.db.collection('admins').countDocuments()
      console.log(`\n👤 Admins collection has ${adminCount} documents`)
      
      if (adminCount > 0) {
        const admins = await mongoose.connection.db.collection('admins').find({}).toArray()
        console.log('\n👥 Admin users:')
        admins.forEach(admin => {
          console.log(`- Email: ${admin.email}`)
          console.log(`  Created: ${admin.createdAt}`)
          console.log(`  Has password: ${!!admin.password}`)
        })
      }
    } else {
      console.log('\n❌ No admins collection found')
    }
    
    await mongoose.disconnect()
  } catch (error) {
    console.error('Error:', error)
    await mongoose.disconnect()
  }
}

checkDatabases()
