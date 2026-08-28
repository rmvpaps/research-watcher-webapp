import { useState } from 'react'
import PropTypes from 'prop-types';
import {login} from '@/api/auth'
import { useNavigate } from '@tanstack/react-router'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [loginError,setLoginError] = useState(false)
    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError(false)
        setLoading(true);
        try {
            await login(email, password);
            setLoading(false);
            navigate({ to: '/dashboard' })

        } catch (err) {
            console.log(err)
            setLoginError(true)
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <>

                    
                    <div className="col-span-1 md:col-span-5 w-full max-w-md mx-auto md:ml-auto md:mr-0 mt-8 md:mt-0">
                        <div className="bg-white rounded-xl border border-outline-blue p-8 shadow-sm">
                            <div className="mb-8 text-center">
                                <h2 className="font-headline-md text-headline-md text-primary mb-2">Login</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant">Access your automated literature pipeline</p>
                            </div>
                            <form  className="space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label className="block font-meta-sm text-meta-sm text-secondary mb-1" for="email">Email</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-outline-blue bg-white focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md placeholder:text-outline outline-none transition-colors" id="email" name="email" placeholder="researcher@university.edu" required="" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label className="block font-meta-sm text-meta-sm text-secondary mb-1" for="password">Password</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-outline-blue bg-white focus:border-primary focus:ring-1 focus:ring-primary text-on-surface font-body-md placeholder:text-outline outline-none transition-colors" id="password" name="password" placeholder="••••••••" required="" type="password"value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input className="h-4 w-4 rounded border-outline-blue text-primary focus:ring-primary" id="remember-me" name="remember-me" type="checkbox" />
                                        <label className="ml-2 block font-body-md text-body-md text-on-surface-variant" for="remember-me">Remember me</label>
                                    </div>
                                    <a className="font-meta-sm text-meta-sm text-primary hover:text-primary-container transition-colors" href="#">Forgot password?</a>
                                </div>
                                { loginError && <div className="flex items-center justify-between bg-error-container">
                                    <p className='text-black font-meta-sm '>Error: Could not log in</p>
                                    </div>}
                                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-headline-sm text-headline-sm text-white bg-primary hover:bg-primary-container focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors" type="submit" disabled={loading}>
                                    Sign In
                                </button>
                                
                            </form>
                        </div>
                        <p className="text-center mt-6 font-meta-sm text-meta-sm text-outline">
                            Need an account? <a className="text-primary hover:underline" href="#">Sign up</a>
                        </p>
                    </div>




        </>
    )
}



export default Login
