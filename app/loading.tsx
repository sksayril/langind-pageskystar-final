export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-gradient">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-neon-cyan/20" />
          
          {/* Spinning gradient ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-neon-cyan border-r-neon-magenta animate-spin" />
          
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-neon-cyan/10 blur-xl animate-pulse" />
        </div>
        
        <p className="text-gray-400 animate-pulse">Loading...</p>
      </div>
    </div>
  )
}

