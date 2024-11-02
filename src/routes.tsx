import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/login/LoginPage";
import ErrorPage from "./pages/error/ErrorPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import ProtectedLayout from "./commons/layouts/ProtectedLayout";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/auth/profile/ProfilePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />
    },
    {
        element: <ProtectedLayout />,
        children:[
            {
                path: "/profile",
                element: <ProfilePage />,
                errorElement: <ErrorPage />
            },
        ]
    },    
])