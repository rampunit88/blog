import api from './api'

// Define the expected response structure
interface UserLoginResponse {
    token: string; // Replace with actual properties returned by the API
    user: {
        id: string;
        username: string;
        // Add other fields as needed
    };
    data: {}
}
interface UserRegisterResponse {
    message: string; // Replace with actual properties returned by the API
}
export const userRegistration = async (username: string, password: string): Promise<{ data?: UserRegisterResponse; error?: string }> => {
    try {
        const { data } = await api.post<UserRegisterResponse>(
            "/auth/register",
            { username, password }
        );
        return { data };
    } catch (error) {
        console.error("Registration failed:", error);
        return { error: error instanceof Error ? error.message : "An unknown error occurred" };
    }
}
export const userLogin = async (username: string, password: string): Promise<{ data?: UserLoginResponse; error?: string }> => {
    try {
        const { data } = await api.post<UserLoginResponse>(
            "/auth/login",
            { username, password },
            { withCredentials: true }
        );
        return { data };
    } catch (error) {
        console.error("Login failed:", error);
        return { error: error instanceof Error ? error.message : "An unknown error occurred" };
    }
};