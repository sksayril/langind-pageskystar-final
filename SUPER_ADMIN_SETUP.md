# Super Admin Setup Guide

## 🚀 Quick Start

### 1. Environment Setup
Create a `.env.local` file in your project root with:
```
MONGODB_URI=mongodb://localhost:27017/skystar-admin
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### 2. MongoDB Setup
- Install MongoDB locally or use MongoDB Atlas
- Update `MONGODB_URI` in `.env.local` with your connection string

### 3. Create Admin User
Run the admin creation script:
```bash
npm run create-admin
```

### 4. Test Login Credentials
Verify the admin user was created correctly:
```bash
npm run test-login
```

### 5. Start the Application
```bash
npm run dev
```

## 🔐 Admin Access

**URL**: `/superadmin`
**Email**: `sksayril123@gmail.com`
**Password**: `sksayril123@`

## 📋 Features

### ✅ Authentication System
- Secure login with JWT tokens
- HTTP-only cookies for session management
- Password hashing with bcrypt

### ✅ Admin Dashboard
- Responsive sidebar navigation
- Contact form submissions management
- Status tracking (New, Contacted, In Progress, Completed)
- Real-time updates

### ✅ Contact Form Integration
- Enhanced contact form with phone and timeline fields
- Automatic submission to MongoDB
- Real-time admin notifications

### ✅ Database Models
- **Admin**: User authentication
- **Contact**: Form submissions with full details

## 🛠️ API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify admin session
- `POST /api/auth/logout` - Admin logout

### Contact Management
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all contacts
- `PUT /api/contacts/[id]` - Update contact status

## 📱 Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile
- Touch-friendly interface

## 🔒 Security Features
- Password hashing
- JWT token authentication
- HTTP-only cookies
- Input validation
- Error handling

## 🎨 UI Components
- Dark theme with neon accents
- Smooth animations and transitions
- Professional admin interface
- Status indicators with colors

## 📊 Contact Form Fields
- Name (required)
- Email (required)
- Phone (required)
- Company (optional)
- Service (required)
- Budget (optional)
- Timeline (optional)
- Message (required)

## 🚀 Deployment Notes
1. Set up MongoDB Atlas for production
2. Update environment variables
3. Use strong JWT secret
4. Enable HTTPS in production
5. Set up proper CORS policies

## 🔧 Troubleshooting

### Login Issues
1. **401 Unauthorized Error**: 
   - Run `npm run create-admin` to create the admin user
   - Run `npm run test-login` to verify credentials
   - Ensure MongoDB is running

2. **Database Connection Issues**:
   - Check MongoDB is running locally or Atlas connection is correct
   - Verify `MONGODB_URI` in `.env.local`
   - Check network connectivity

3. **Environment Variables**:
   - Ensure `.env.local` exists with correct values
   - Restart the development server after changing env vars

### Common Commands
```bash
# Create admin user
npm run create-admin

# Test login credentials
npm run test-login

# Start development server
npm run dev

# Check if admin exists
curl http://localhost:3000/api/auth/check-admin
```

