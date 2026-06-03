
import './App.css';
import {useState, useEffect} from "react";
import {Login} from "./Login";
import {ArticlePage} from "./ArticlePage";
import {Header} from "./Header";
import {logout,getUser} from './api/auth'
function App() {

    const [showlogin,setShowLogin] = useState(false);
    const [user,setUser] = useState({});
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const LoginModalOpen = () => {
        console.log("attemptng to open login")
        setShowLogin(true);
    }

    const onLoginModalClose = () => {
        console.log("attemptng to close login")
        setShowLogin(false);
    }

    const onLogout = () => {
        console.log("attemptng logout")
        logout()
        setUser(null)
    }

    const loadUserProfile = async () => {
        console.log("loading profile")

        try {
            const userData = await getUser();
            setUser(userData); // 🟢 Saves your user profile data into global state
        } catch (err) {
            console.error("Failed to load user profile context:", err);
            // If the token is invalid or expired, clean up
            localStorage.removeItem('token');
            setUser(null);
        }
    };
    const loginSucess = async ()=> {
        alert("logged in")
        setIsLoggedIn(true)
        //set the user in app
        await loadUserProfile();
    }


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            loadUserProfile();
        }
    }, []);

    return (

    <div className="App">
        <Login
            isOpen={showlogin}
            onClose={onLoginModalClose}
            onLoginSuccess={loginSucess}
        />
        <Header user={user} onLogin={LoginModalOpen} onLogout={onLogout}  >
            Research Watcher
        </Header>
        {/*<ArticleList backgroundColor="red" items={[article,article]} />*/}
        <ArticlePage/>
    </div>
  );
}

export default App;
