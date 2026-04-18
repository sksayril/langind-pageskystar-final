'use client'

import { useState, useEffect, useCallback } from 'react'
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
  RefreshCw,
  Search,
  Bell,
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  User as UserIcon,
  Filter,
  LayoutGrid,
  Plus,
  Trash2,
  Edit,
  Save,
  Globe
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [showBlogForm, setShowBlogForm] = useState(false)
  const [editingBlog, setEditingBlog] = useState<any>(null)
  const [blogLoading, setBlogLoading] = useState(false)
  const router = useRouter()

  const verifyAuth = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/verify')
      if (!response.ok) {
        router.push('/superadmin')
      }
    } catch (error) {
      router.push('/superadmin')
    }
  }, [router])

  useEffect(() => {
    fetchContacts()
    fetchBlogs()
    verifyAuth()
  }, [verifyAuth])

  const fetchBlogs = async () => {
    try {
      setBlogLoading(true)
      const response = await fetch('/api/blogs')
      if (response.ok) {
        const data = await response.json()
        setBlogs(data.blogs || [])
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error)
    } finally {
      setBlogLoading(false)
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
        // Update the contacts list
        setContacts(contacts.map(contact => 
          contact._id === id ? { ...contact, status: status as any } : contact
        ))
        
        // Update the selected contact if it's the one being updated
        if (selectedContact?._id === id) {
          setSelectedContact({ ...selectedContact, status: status as any })
        }
      } else {
        const errorData = await response.json()
        alert(`Failed to update status: ${errorData.error}`)
      }
    } catch (error) {
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

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return

    try {
      const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      if (response.ok) {
        setBlogs(blogs.filter(b => b._id !== id))
      }
    } catch (error) {
      console.error('Delete blog error:', error)
    }
  }

  const handleSaveBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    
    // Add processed tags and fix boolean casting for checkbox
    const tags = (data.tags as string).split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    const isPublished = data.isPublished === 'on'
    const blogData = { ...data, tags, isPublished }

    setBlogLoading(true)
    try {
      const url = editingBlog ? `/api/blogs/${editingBlog._id}` : '/api/blogs'
      const method = editingBlog ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      })

      if (response.ok) {
        setShowBlogForm(false)
        setEditingBlog(null)
        fetchBlogs()
      } else {
        const error = await response.json()
        alert(error.error || 'Failed to save blog')
      }
    } catch (error) {
      console.error('Save blog error:', error)
      alert('Network error while saving blog')
    } finally {
      setBlogLoading(false)
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
      case 'new': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
      case 'contacted': return 'bg-blue-500/10 text-blue-400 border-blue-500/30'
      case 'in-progress': return 'bg-orange-500/10 text-orange-400 border-orange-500/30'
      case 'completed': return 'bg-green-500/10 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30'
    }
  }

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
    { icon: Mail, label: 'Inquiries', id: 'contacts' },
    { icon: LayoutGrid, label: 'Blogs', id: 'blogs' },
    { icon: Users, label: 'Clients', id: 'clients' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ]

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.service.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex font-sans">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0f0f12] border-r border-white/5 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-neon-gradient rounded-xl flex items-center justify-center neon-glow">
            <BarChart3 className="w-6 h-6 text-dark-bg" />
          </div>
          <h1 className="text-2xl font-heading font-bold tracking-tight">
            <span className="neon-text">Skystar</span>
          </h1>
        </div>

        <nav className="mt-4 px-4 flex-1 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id)
                setSidebarOpen(false)
              }}
              className={`w-full flex items-center p-4 rounded-2xl transition-all group relative ${
                activeTab === item.id
                  ? 'bg-neon-cyan/10 text-neon-cyan'
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-5 h-5 mr-4 transition-transform group-hover:scale-110 ${
                activeTab === item.id ? 'text-neon-cyan' : ''
              }`} />
              <span className="font-semibold">{item.label}</span>
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 w-1 h-8 bg-neon-cyan rounded-r-full"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-gradient p-[2px]">
                <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center overflow-hidden">
                  <UserIcon className="w-6 h-6 text-gray-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">Super Admin</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center p-4 text-red-400 hover:bg-red-500/10 rounded-2xl transition-all group"
          >
            <LogOut className="w-5 h-5 mr-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 px-8 flex items-center justify-between z-10">
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setSidebarOpen(true)} className="p-2 text-gray-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-neon-cyan transition-colors" />
              <input
                type="text"
                placeholder="Search inquiries, clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-neon-cyan rounded-full border-2 border-dark-bg"></span>
            </button>
            <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 hover:bg-white/10 transition-all cursor-pointer">
              <p className="text-sm font-semibold hidden sm:block">Status:</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-green-500">Live</span>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-heading font-bold">Good morning, <span className="neon-text">Admin</span></h2>
                    <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your agency today.</p>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={fetchContacts} className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
                      <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                      Sync Data
                    </button>
                    <button className="bg-neon-gradient text-dark-bg px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-neon-cyan/20 hover:scale-105 transition-all">
                      Download Report
                    </button>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Inquiries', value: contacts.length, icon: Mail, color: 'text-neon-cyan', trend: '+12%', up: true },
                    { label: 'New Submissions', value: contacts.filter(c => c.status === 'new').length, icon: AlertCircle, color: 'text-yellow-400', trend: '+5%', up: true },
                    { label: 'In Progress', value: contacts.filter(c => c.status === 'in-progress').length, icon: Eye, color: 'text-orange-400', trend: '-2%', up: false },
                    { label: 'Conversion Rate', value: '24%', icon: TrendingUp, color: 'text-green-400', trend: '+8%', up: true },
                  ].map((stat, i) => (
                    <div key={i} className="group bg-[#0f0f12] p-6 rounded-[2rem] border border-white/5 hover:border-neon-cyan/30 transition-all hover:bg-white/[0.02]">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors`}>
                          <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                          {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          {stat.trend}
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                      <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                    </div>
                  ))}
                </div>

                {/* Main Dashboard Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Visual Graph Mockup */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-[#0f0f12] rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8">
                        <BarChart3 className="w-12 h-12 text-neon-cyan/10 group-hover:text-neon-cyan/20 transition-colors" />
                      </div>
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-xl font-bold">Inquiry Traffic</h3>
                          <p className="text-sm text-gray-500">Submissions over the last 30 days</p>
                        </div>
                        <select className="bg-white/5 border border-white/10 text-xs font-bold rounded-lg px-3 py-1.5 focus:outline-none">
                          <option>Last 7 days</option>
                          <option>Last 30 days</option>
                        </select>
                      </div>
                      
                      {/* Simple Mock Chart using CSS grid/divs */}
                      <div className="flex items-end justify-between h-48 gap-3 mt-12">
                        {[40, 70, 45, 90, 65, 30, 85, 55, 100, 75, 50, 80].map((h, i) => (
                          <div key={i} className="flex-1 bg-white/5 rounded-t-lg relative group/bar">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: i * 0.05, duration: 0.8 }}
                              className="absolute bottom-0 left-0 w-full bg-neon-gradient rounded-t-lg opacity-40 group-hover/bar:button:opacity-80 transition-opacity"
                            />
                            <div className="hidden group-hover/bar:block absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded text-[10px] text-dark-bg font-bold z-20">
                              {h}%
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-600 px-1">
                        <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
                        <span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
                      </div>
                    </div>

                    <div className="bg-[#0f0f12] rounded-[2rem] border border-white/5 p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold">Recent Activity</h3>
                        <button onClick={() => setActiveTab('contacts')} className="text-sm text-neon-cyan font-semibold hover:underline flex items-center gap-1">
                          View all <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-4">
                        {contacts.slice(0, 3).map((contact, i) => (
                          <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-neon-gradient/10 flex items-center justify-center text-neon-cyan font-bold text-lg">
                                {contact.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-bold">{contact.name}</p>
                                <p className="text-xs text-gray-500 capitalize">{contact.service} • {new Date(contact.createdAt).toLocaleDateString()}</p>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${getStatusColor(contact.status)}`}>
                              {contact.status}
                            </div>
                          </div>
                        ))}
                        {contacts.length === 0 && (
                          <div className="text-center py-8 text-gray-500 italic">No recent activity</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Mini Stats/Tasks */}
                  <div className="space-y-8">
                    <div className="bg-neon-gradient rounded-[2rem] p-8 text-dark-bg relative overflow-hidden group">
                      <ArrowUpRight className="absolute top-4 right-4 w-12 h-12 text-white/20 group-hover:scale-125 transition-transform" />
                      <h4 className="text-lg font-bold mb-2">Agency Performance</h4>
                      <p className="text-sm font-medium opacity-80 mb-6">Your agency is performing 15% better than last month.</p>
                      <button className="w-full bg-dark-bg text-white py-3 rounded-xl text-sm font-bold hover:bg-black transition-colors">
                        View Analytics
                      </button>
                    </div>

                    <div className="bg-[#0f0f12] rounded-[2rem] border border-white/5 p-8">
                      <h3 className="text-xl font-bold mb-6">Lead Distribution</h3>
                      <div className="space-y-6">
                        {[
                          { label: 'Web Development', value: 45, color: 'bg-neon-cyan' },
                          { label: 'SEO Services', value: 30, color: 'bg-purple-500' },
                          { label: 'Marketing', value: 15, color: 'bg-yellow-400' },
                          { label: 'Other', value: 10, color: 'bg-gray-500' },
                        ].map((item, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                              <span className="text-gray-500">{item.label}</span>
                              <span>{item.value}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.value}%` }}
                                transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                className={`h-full ${item.color}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#0f0f12] rounded-[2rem] border border-white/5 p-8">
                      <h3 className="text-xl font-bold mb-6">System Health</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Server Load</span>
                          <span className="text-sm font-bold text-green-500">Normal</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">DB Connections</span>
                          <span className="text-sm font-bold text-green-500">Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Response Time</span>
                          <span className="text-sm font-bold text-blue-500">124ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'contacts' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-heading font-bold">Inquiry Management</h2>
                    <p className="text-gray-500">Manage and track your agency leads.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                    <button className="bg-white text-dark-bg px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all">
                      Export CSV
                    </button>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden min-h-0">
                  {/* Contact List */}
                  <div className="lg:col-span-1 bg-[#0f0f12] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-white/5">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          placeholder="Search inquiries..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-neon-cyan/50"
                        />
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                      {filteredContacts.length === 0 ? (
                        <div className="text-center py-20 opacity-50">
                          <Mail className="w-12 h-12 mx-auto mb-4" />
                          <p>No inquiries found</p>
                        </div>
                      ) : (
                        filteredContacts.map((contact) => (
                          <div
                            key={contact._id}
                            onClick={() => setSelectedContact(contact)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                              selectedContact?._id === contact._id
                                ? 'border-neon-cyan bg-neon-cyan/5'
                                : 'border-white/5 hover:bg-white/[0.03]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold truncate">{contact.name}</h4>
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${getStatusColor(contact.status)}`}>
                                {contact.status}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 truncate mb-2">{contact.email}</p>
                            <div className="flex items-center justify-between text-[10px] font-bold text-gray-600 uppercase">
                              <span>{contact.service}</span>
                              <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="lg:col-span-2 bg-[#0f0f12] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col relative">
                    {selectedContact ? (
                      <div className="flex-1 flex flex-col overflow-hidden">
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-neon-gradient flex items-center justify-center text-dark-bg font-bold text-2xl">
                              {selectedContact.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold">{selectedContact.name}</h3>
                              <p className="text-gray-500 font-medium">{selectedContact.email}</p>
                            </div>
                          </div>
                          <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase border ${getStatusColor(selectedContact.status)}`}>
                            {selectedContact.status}
                          </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2 block">Phone Number</label>
                              <p className="text-lg font-semibold">{selectedContact.phone || 'N/A'}</p>
                            </div>
                            <div>
                              <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2 block">Company</label>
                              <p className="text-lg font-semibold">{selectedContact.company || 'N/A'}</p>
                            </div>
                            <div>
                              <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2 block">Service Requested</label>
                              <p className="text-lg font-semibold capitalize">{selectedContact.service}</p>
                            </div>
                            <div>
                              <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2 block">Budget Range</label>
                              <p className="text-lg font-semibold">{selectedContact.budget || 'N/A'}</p>
                            </div>
                          </div>

                          <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5">
                            <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 block">Message Thread</label>
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {selectedContact.message}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-white/5">
                            <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 block">Status Action</label>
                            <div className="flex flex-wrap gap-3">
                              {['new', 'contacted', 'in-progress', 'completed'].map((status) => (
                                <button
                                  key={status}
                                  onClick={() => updateContactStatus(selectedContact._id, status)}
                                  disabled={updatingStatus === selectedContact._id}
                                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                                    selectedContact.status === status
                                      ? 'bg-neon-cyan text-dark-bg'
                                      : 'bg-white/5 hover:bg-white/10 text-gray-400'
                                  }`}
                                >
                                  {status}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-8 border-t border-white/5 flex gap-4">
                          <button className="flex-1 bg-neon-gradient text-dark-bg py-3 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                            <Mail className="w-4 h-4" />
                            Send Direct Email
                          </button>
                          <button className="px-6 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-all">
                            Archive
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center opacity-30 p-20 text-center">
                        <Mail className="w-24 h-24 mb-6" />
                        <h3 className="text-2xl font-bold">Select an inquiry</h3>
                        <p className="max-w-xs mt-2">Choose a lead from the list to view full details and take actions.</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'blogs' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-heading font-bold">Blog Management</h2>
                    <p className="text-gray-500">Create and optimize your SEO-ready articles.</p>
                  </div>
                  <button 
                    onClick={() => {
                      setEditingBlog(null)
                      setShowBlogForm(true)
                    }}
                    className="flex items-center gap-2 bg-neon-gradient text-dark-bg px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-neon-cyan/20 hover:scale-105 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    New Article
                  </button>
                </div>

                {showBlogForm ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#0f0f12] rounded-[2rem] border border-white/5 p-8"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold">{editingBlog ? 'Edit Article' : 'Create New Article'}</h3>
                      <button onClick={() => setShowBlogForm(false)} className="text-gray-500 hover:text-white">
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <form onSubmit={handleSaveBlog} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Left Column: Content */}
                      <div className="space-y-6">
                        <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Article Title</label>
                          <input 
                            name="title"
                            defaultValue={editingBlog?.title}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
                            placeholder="Enter a catchy title..."
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Slug (URL)</label>
                            <input 
                              name="slug"
                              defaultValue={editingBlog?.slug}
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
                              placeholder="how-to-optimize-seo"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Category</label>
                            <select 
                              name="category"
                              defaultValue={editingBlog?.category || 'SEO'}
                              className="w-full bg-[#1a1a1e] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
                            >
                              <option>SEO</option>
                              <option>Digital Marketing</option>
                              <option>AIO</option>
                              <option>LMO</option>
                              <option>Case Studies</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Featured Image URL</label>
                          <input 
                            name="featuredImage"
                            defaultValue={editingBlog?.featuredImage}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
                            placeholder="https://unsplash.com/..."
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Excerpt (Short Description)</label>
                          <textarea 
                            name="excerpt"
                            defaultValue={editingBlog?.excerpt}
                            required
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 resize-none"
                            placeholder="Briefly describe what this article is about..."
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Article Content (Rich Text/HTML)</label>
                          <textarea 
                            name="content"
                            defaultValue={editingBlog?.content}
                            required
                            rows={15}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 font-mono text-sm"
                            placeholder="<p>Write your article here...</p>"
                          />
                        </div>
                      </div>

                      {/* Right Column: SEO Settings */}
                      <div className="space-y-6">
                        <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 space-y-6">
                          <h4 className="flex items-center gap-2 text-neon-cyan font-bold">
                            <Globe className="w-4 h-4" />
                            SEO Optimization
                          </h4>
                          
                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Focus Keyword</label>
                            <input 
                              name="focusKeyword"
                              defaultValue={editingBlog?.focusKeyword}
                              placeholder="e.g. Digital Marketing Trends"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Meta Title</label>
                            <input 
                              name="metaTitle"
                              defaultValue={editingBlog?.metaTitle}
                              placeholder="SEO Title (Google result title)"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Meta Description</label>
                            <textarea 
                              name="metaDescription"
                              defaultValue={editingBlog?.metaDescription}
                              rows={3}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 resize-none"
                              placeholder="Google search snippet description..."
                            />
                          </div>

                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Image Alt Text</label>
                            <input 
                              name="imageAltText"
                              defaultValue={editingBlog?.imageAltText}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
                            />
                          </div>

                          <div>
                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Tags (comma separated)</label>
                            <input 
                              name="tags"
                              defaultValue={editingBlog?.tags?.join(', ')}
                              placeholder="marketing, seo, 2024"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
                            />
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <input 
                                type="checkbox" 
                                name="isPublished" 
                                defaultChecked={editingBlog?.isPublished ?? true}
                                className="w-5 h-5 accent-neon-cyan" 
                              />
                              <label className="text-sm font-bold">Publish Immediately</label>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <button 
                            type="submit" 
                            disabled={blogLoading}
                            className="flex-1 bg-neon-gradient text-dark-bg py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all disabled:opacity-50"
                          >
                            <Save className="w-5 h-5" />
                            {blogLoading ? 'Saving...' : 'Save Article'}
                          </button>
                          <button 
                            type="button"
                            onClick={() => setShowBlogForm(false)}
                            className="px-8 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-all"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.length === 0 ? (
                      <div className="col-span-full bg-[#0f0f12] rounded-[2rem] border border-white/5 p-20 text-center opacity-50">
                        <LayoutGrid className="w-20 h-20 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold">No articles yet</h3>
                        <p className="mt-2">Start writing your first SEO-optimized blog post.</p>
                      </div>
                    ) : (
                      blogs.map((blog) => (
                        <div key={blog._id} className="bg-[#0f0f12] rounded-[2rem] border border-white/5 overflow-hidden group">
                          <div className="relative h-48">
                            <Image 
                              src={blog.featuredImage} 
                              alt={blog.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-dark-bg/80 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-widest text-neon-cyan border border-neon-cyan/20">
                                {blog.category}
                              </span>
                            </div>
                            <div className="absolute bottom-4 right-4 flex gap-2">
                              <button 
                                onClick={() => {
                                  setEditingBlog(blog)
                                  setShowBlogForm(true)
                                }}
                                className="p-2 bg-white/10 backdrop-blur rounded-lg text-white hover:bg-neon-cyan hover:text-dark-bg transition-all"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteBlog(blog._id)}
                                className="p-2 bg-white/10 backdrop-blur rounded-lg text-white hover:bg-red-500 transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="p-6">
                            <h4 className="text-lg font-bold line-clamp-2 mb-2 group-hover:text-neon-cyan transition-colors">{blog.title}</h4>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-4">{blog.excerpt}</p>
                            <div className="flex items-center justify-between text-[10px] font-bold text-gray-600 uppercase">
                              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                              <div className="flex items-center gap-1">
                                <div className={`w-2 h-2 rounded-full ${blog.isPublished ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                {blog.isPublished ? 'Published' : 'Draft'}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'clients' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#0f0f12] rounded-[2rem] border border-white/5 p-12 text-center"
              >
                <div className="w-20 h-20 bg-neon-gradient rounded-[2rem] flex items-center justify-center mx-auto mb-6 neon-glow">
                  <Users className="w-10 h-10 text-dark-bg" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Client Management</h2>
                <p className="text-gray-500 max-w-md mx-auto">We are currently building the comprehensive client portal. Stay tuned for advanced CRM features.</p>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#0f0f12] rounded-[2rem] border border-white/5 p-12 text-center"
              >
                <div className="w-20 h-20 bg-purple-500/10 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border border-purple-500/20">
                  <Settings className="w-10 h-10 text-purple-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Admin Settings</h2>
                <p className="text-gray-500 max-w-md mx-auto">Configure your dashboard preferences and security settings from this panel in the next update.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
}
