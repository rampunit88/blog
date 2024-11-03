import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to="/">
            <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
            />
        </Link>
    )
}
Logo.Prologo = () => {
    return (
        <Link to="/dashboard">
            <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
            />
        </Link>
    )
}
Logo.Navlogo = () => {
    return (
        <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
            />
        </Link>
    )
}
export default Logo