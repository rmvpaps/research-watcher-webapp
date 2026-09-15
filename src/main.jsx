import './index.css'
// Import the auto-generated route tree
import { routeTree } from './routeTree.gen.ts'


import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { useAuth,AuthProvider } from './context/AuthContext.jsx'


// Create the router instance
const router = createRouter({ 
  routeTree,
  context : {
    user : null,
    isLoggedIn: false,
    logincallback : () => alert('Logged in!'),
    logoutcallback : () => alert('Logged out!'),

  }

 })

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//     <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>,
// )


function AppInner() {
  const auth = useAuth() // Grab values from your AuthProvider

  // Pass dynamic context state straight down to the router tree
  return <RouterProvider router={router} context={{ ...auth }} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  </React.StrictMode>,
)