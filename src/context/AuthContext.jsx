import { createContext, useContext, useState, useEffect } from 'react';
import { login, logout,verify, getUser, getUserSync, getRefresh } from '../api/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

  const hasValidToken = () => {
    const token = localStorage.getItem('token');
    console.log("hasValidToken",token)
    return !!(token && verify(token)); // Returns true if valid, false otherwise
  };
  const [user, setUser] = useState(getUserSync);
  const [isLoggedIn,setisLoggedIn] = useState(hasValidToken)
  const [isAuthenticating, setIsAuthenticating] = useState(true);


  // Check if user is already logged in on refresh
  useEffect(() => {
    const checkAuth = async () => {
      try {
        //check if token has expired
        if(hasValidToken()){
          const userData = await getUser();
          setUser(userData);
          setisLoggedIn(true)
        }
        else{
          console.log("token expired, trying refresh")
          //try refresh token
          const refresh_token = localStorage.getItem('refresh')
          if(!refresh_token || !verify(refresh_token)){
            console.log("no refresh token, logging out")
            logoutcallback()
          }
          else {
            const userData = await getRefresh(refresh_token)
            setUser(userData);
            setisLoggedIn(true)

          }
        }
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
    setisLoggedIn(true)
  };

  const logoutcallback = () => {
    setUser(null);
    logout()
    setisLoggedIn(false)
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isAuthenticating, logincallback, logoutcallback }}>
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