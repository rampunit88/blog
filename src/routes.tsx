import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/login/LoginPage";
import ErrorPage from "./pages/error/ErrorPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import ProtectedLayout from "./commons/layouts/ProtectedLayout";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/auth/profile/ProfilePage";
import PublicLayout from "./commons/layouts/PublicLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ProjectPage from "./pages/project/ProjectPage";
import TeamPage from "./pages/team/TeamPage";
import TaskPage from "./pages/task/TaskPage";

export const router = createBrowserRouter([
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                errorElement: <ErrorPage />
            },
        ]
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
        element: <ProtectedLayout />,path: "/admin/",
        children: [
            {
                path: "",
                element: <DashboardPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "profile",
                element: <ProfilePage />,
                errorElement: <ErrorPage />
            },
            {
                path: "projects",
                element: <ProjectPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "teams",
                element: <TeamPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "tasks",
                element: <TaskPage />,
                errorElement: <ErrorPage />
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />
    },
])