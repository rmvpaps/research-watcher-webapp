import {useState} from "react";
import {login} from './api/auth'
import './Login.css'
export const Login = ({isOpen, onClose, onLoginSuccess}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            setLoading(false);
            await onLoginSuccess();
            onClose();
        } catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <div className="modal-overlay" onClick={() => onClose()}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => onClose()}>&times;</button>

                <h3>Secure Login Portal</h3>
                <form onSubmit={handleLogin}>
                    <h3>Login Context Panel</h3>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit" disabled={loading}>Authenticate</button>
                </form>

            </div>
        </div>
    );



}