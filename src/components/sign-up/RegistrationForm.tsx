import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../commons/logo/Logo';
import { userRegistration } from '../../services/authApi';
const initValue = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
}
function RegistrationForm() {
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [values, setData] = useState(initValue);
    const changeHandler = (e: any) => {
        const { name, value } = e.target;
        setData({ ...values, [name]: value })
    }
    const handleSignUp = async (e: any) => {
        e.preventDefault();
        const { email, password } = values;
        const { data, error } = await userRegistration(email, password);
        if (error) {
            console.error("Error during login:", error);
            alert("Registration failed. Please check your credentials and try again.");
            return;
        }

        if (data) {
            console.log("Registration successful:", data);
            // Proceed with storing the user data, e.g., context or session storage
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Logo />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign up to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSignUp} action="#" method="POST" className="space-y-6">
                    <div className='flex flex-col md:flex-row md:justify-between   md:items-center'>
                        <div>
                            <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={values.firstName}
                                    onChange={changeHandler}
                                    required
                                    autoComplete="firstName"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={values.lastName}
                                    onChange={changeHandler}
                                    required
                                    autoComplete="lastName"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>

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
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="cpassword"
                                type="password"
                                value={values.cpassword}
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
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    If already an account?{' '}
                    <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default RegistrationForm