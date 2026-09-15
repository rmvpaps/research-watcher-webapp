import { createContext, useContext, useState, useEffect } from 'react';
import { login, logout,verify, getUser, getUserSync } from '../api/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getUserSync);
  const [isLoggedIn,setisLoggedIn] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  // Check if user is already logged in on refresh
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = getUSer();
        setUser(userData);
        setisLoggedIn(true)
      } catch {
        setUser(null);
      } finally {
        setIsAuthenticating(false);
      }
    };
    checkAuth();
  }, []);

  const logincallback = async (username,password) => {
    const userData = await login(username,password)
    setUser(userData);
  };

  const logoutcallback = () => {
    setUser(null);
    logout()
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, logincallback, logoutcallback }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}