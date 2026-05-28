function App() {
  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col">
      
      {/* Navbar */}
      <div className="h-14 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
        <h1 className="text-lg font-bold text-purple-400">AI Code Reviewer</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg">
          Login with GitHub
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left panel - Code editor */}
        <div className="w-1/2 flex flex-col border-r border-gray-800">
          <div className="h-10 bg-gray-900 border-b border-gray-800 flex items-center px-4">
            <span className="text-sm text-gray-400">Code Editor</span>
          </div>
          <div className="flex-1 bg-gray-950 flex items-center justify-center">
            <span className="text-gray-600">Monaco Editor goes here (Day 3)</span>
          </div>
          <div className="h-14 bg-gray-900 border-t border-gray-800 flex items-center px-4">
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2 rounded-lg">
              Review Code
            </button>
          </div>
        </div>

        {/* Right panel - Review output */}
        <div className="w-1/2 flex flex-col">
          <div className="h-10 bg-gray-900 border-b border-gray-800 flex items-center px-4">
            <span className="text-sm text-gray-400">AI Review</span>
          </div>
          <div className="flex-1 bg-gray-950 flex items-center justify-center">
            <span className="text-gray-600">Review results will appear here</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App