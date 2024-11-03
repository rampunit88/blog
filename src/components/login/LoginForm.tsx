import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../commons/logo/Logo';
import { userLogin } from '../../services/authApi';
const initValue = {
    email: '',
    password: ''
}
function LoginForm({onLoginSuccess}:any) {
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [values, setData] = useState(initValue);
    const changeHandler = (e:any) => {
        const {name,value} = e.target;
        setData({...values,[name]:value})
    }
    const handleLogin = async (e:any) => {
        e.preventDefault();
        const {email,password} = values;
        const { data, error } = await userLogin(email,password);
        onLoginSuccess(data)
        if (error) {
          console.error("Error during login:", error);
          alert("Login failed. Please check your credentials and try again.");
          return;
        }
      
        if (data) {
          console.log("Login successful:", data);
          // Proceed with storing the user data, e.g., context or session storage
        }
      };
    
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Logo/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={changeHandler}
                                required
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={changeHandler}
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    {error && <p className='text-red-500 text-sm mb-3'>{error}</p>}
                    {message && <p className='text-green-600 text-sm mb-3'>{message}</p>}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?{' '}
                    <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Start a 14 day free trial
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginForm