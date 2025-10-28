'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Users, 
  Mail, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Eye,
  CheckCircle,
  Clock,
  AlertCircle,
  RefreshCw
} from 'lucide-react'

interface Contact {
  _id: string
  name: string
  email: string
  phone: string
  company?: string
  service: string
  message: string
  budget?: string
  timeline?: string
  status: 'new' | 'contacted' | 'in-progress' | 'completed'
  createdAt: string
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(false)
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [activeTab, setActiveTab] = useState('dashboard')
  const router = useRouter()

  useEffect(() => {
    fetchContacts()
    verifyAuth()
  }, [])

  const verifyAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify')
      if (!response.ok) {
        router.push('/superadmin')
      }
    } catch (error) {
      router.push('/superadmin')
    }
  }

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/contacts')
      if (response.ok) {
        const data = await response.json()
        setContacts(data.contacts || [])
      } else {
        console.error('Failed to fetch contacts:', response.statusText)
        setContacts([])
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error)
      setContacts([])
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = async (id: string, status: string) => {
    setUpdatingStatus(id)
    try {
      const response = await fetch(`/api/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        const updatedContact = await response.json()
        
        // Update the contacts list
        setContacts(contacts.map(contact => 
          contact._id === id ? { ...contact, status: status as any } : contact
        ))
        
        // Update the selected contact if it's the one being updated
        if (selectedContact?._id === id) {
          setSelectedContact({ ...selectedContact, status: status as any })
        }
        
        // Show success feedback
        const statusLabels = {
          'new': 'New',
          'contacted': 'Contacted', 
          'in-progress': 'In Progress',
          'completed': 'Completed'
        }
        console.log(`Status updated to: ${statusLabels[status as keyof typeof statusLabels]}`)
      } else {
        const errorData = await response.json()
        console.error('Failed to update status:', errorData.error)
        alert(`Failed to update status: ${errorData.error}`)
      }
    } catch (error) {
      console.error('Failed to update contact status:', error)
      alert('Failed to update contact status. Please try again.')
    } finally {
      setUpdatingStatus(null)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/superadmin')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <AlertCircle className="w-4 h-4 text-yellow-400" />
      case 'contacted': return <Clock className="w-4 h-4 text-blue-400" />
      case 'in-progress': return <Eye className="w-4 h-4 text-orange-400" />
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-400" />
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'contacted': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'in-progress': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
    { icon: Mail, label: 'Contact Forms', id: 'contacts' },
    { icon: Users, label: 'Clients', id: 'clients' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ]

  const handleSidebarClick = (itemId: string) => {
    setActiveTab(itemId)
    setSidebarOpen(false) // Close mobile sidebar
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-dark-gradient transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/10 flex-shrink-0">
          <h1 className="text-xl font-heading font-bold">
            <span className="neon-text">Skystar</span> Admin
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-8 px-4 flex-1">
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSidebarClick(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-neon-gradient text-white shadow-lg shadow-neon-cyan/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 hover:shadow-md'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="px-4 pb-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200 hover:shadow-md"
          >
            <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-dark-gradient border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-heading font-bold text-white">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'contacts' && 'Contact Forms'}
              {activeTab === 'clients' && 'Clients'}
              {activeTab === 'settings' && 'Settings'}
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">
                {activeTab === 'contacts' && `${contacts.length} total submissions`}
                {activeTab === 'dashboard' && 'Overview'}
                {activeTab === 'clients' && 'Client Management'}
                {activeTab === 'settings' && 'Configuration'}
              </div>
              {activeTab === 'contacts' && (
                <button
                  onClick={fetchContacts}
                  disabled={loading}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors disabled:opacity-50"
                  title="Refresh contacts"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Stats Cards */}
              <div className="bg-dark-gradient rounded-xl border border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Contacts</p>
                    <p className="text-3xl font-bold text-white">{contacts.length}</p>
                  </div>
                  <Mail className="w-8 h-8 text-neon-cyan" />
                </div>
              </div>
              
              <div className="bg-dark-gradient rounded-xl border border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">New Contacts</p>
                    <p className="text-3xl font-bold text-white">
                      {contacts.filter(c => c.status === 'new').length}
                    </p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              
              <div className="bg-dark-gradient rounded-xl border border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">In Progress</p>
                    <p className="text-3xl font-bold text-white">
                      {contacts.filter(c => c.status === 'in-progress').length}
                    </p>
                  </div>
                  <Eye className="w-8 h-8 text-orange-400" />
                </div>
              </div>
              
              <div className="bg-dark-gradient rounded-xl border border-white/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Completed</p>
                    <p className="text-3xl font-bold text-white">
                      {contacts.filter(c => c.status === 'completed').length}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contacts' && (
            loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="flex flex-col items-center space-y-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-neon-cyan border-t-transparent"></div>
                  <p className="text-gray-400 text-sm">Loading contacts...</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[600px]">
                {/* Contact List */}
                <div className="lg:col-span-2">
                  <div className="bg-dark-gradient rounded-xl border border-white/10 p-6 h-full flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4">Recent Submissions</h3>
                    <div className="flex-1 overflow-y-auto">
                      {contacts.length === 0 ? (
                        <div className="text-center py-8">
                          <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-400">No contact submissions yet</p>
                        </div>
                      ) : (
                        <div className="space-y-4 pr-2">
                          {contacts.map((contact) => (
                            <div
                              key={contact._id}
                              onClick={() => setSelectedContact(contact)}
                              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                                selectedContact?._id === contact._id
                                  ? 'border-neon-cyan bg-neon-cyan/5'
                                  : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-white truncate">{contact.name || 'Unknown'}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(contact.status)}`}>
                                  {contact.status || 'new'}
                                </span>
                              </div>
                              <p className="text-sm text-gray-400 mb-1 truncate">{contact.email || 'No email'}</p>
                              <p className="text-sm text-gray-400 capitalize">{contact.service || 'No service'}</p>
                              <p className="text-xs text-gray-500 mt-2">
                                {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'Unknown date'}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="lg:col-span-1">
                  {selectedContact ? (
                    <div className="bg-dark-gradient rounded-xl border border-white/10 p-6 h-full flex flex-col">
                      <h3 className="text-lg font-semibold text-white mb-4">Contact Details</h3>
                      
                      <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                        <div>
                          <label className="text-sm text-gray-400">Name</label>
                          <p className="text-white font-medium">{selectedContact.name || 'Not provided'}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400">Email</label>
                          <p className="text-white break-all">{selectedContact.email || 'Not provided'}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400">Phone</label>
                          <p className="text-white">{selectedContact.phone || 'Not provided'}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400">Company</label>
                          <p className="text-white">{selectedContact.company || 'Not provided'}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400">Service</label>
                          <p className="text-white capitalize">{selectedContact.service || 'Not specified'}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400">Budget</label>
                          <p className="text-white">{selectedContact.budget || 'Not specified'}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400">Timeline</label>
                          <p className="text-white">{selectedContact.timeline || 'Not specified'}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400">Message</label>
                          <p className="text-white text-sm bg-white/5 p-3 rounded-lg min-h-[60px]">
                            {selectedContact.message || 'No message provided'}
                          </p>
                        </div>
                        
                        <div>
                          <label className="text-sm text-gray-400">Status</label>
                          <div className="flex items-center gap-2 mt-1">
                            {getStatusIcon(selectedContact.status)}
                            <span className="text-white capitalize">{selectedContact.status || 'new'}</span>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <label className="text-sm text-gray-400">Update Status</label>
                          <div className="relative">
                            <select
                              value={selectedContact.status || 'new'}
                              onChange={(e) => updateContactStatus(selectedContact._id, e.target.value)}
                              disabled={updatingStatus === selectedContact._id}
                              className="w-full mt-1 px-3 py-2 bg-gray-800 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                              style={{
                                colorScheme: 'dark',
                                backgroundColor: '#1f2937',
                                color: 'white'
                              }}
                            >
                              <option value="new" className="bg-gray-800 text-white">New</option>
                              <option value="contacted" className="bg-gray-800 text-white">Contacted</option>
                              <option value="in-progress" className="bg-gray-800 text-white">In Progress</option>
                              <option value="completed" className="bg-gray-800 text-white">Completed</option>
                            </select>
                            {updatingStatus === selectedContact._id && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-neon-cyan border-t-transparent"></div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-dark-gradient rounded-xl border border-white/10 p-6 text-center h-full flex items-center justify-center">
                      <div>
                        <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400">Select a contact to view details</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          )}

          {activeTab === 'clients' && (
            <div className="bg-dark-gradient rounded-xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Client Management</h3>
              <p className="text-gray-400">Client management features coming soon...</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-dark-gradient rounded-xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Settings</h3>
              <p className="text-gray-400">Settings panel coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
