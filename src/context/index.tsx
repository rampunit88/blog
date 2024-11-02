import React, { useContext, createContext, useState, useEffect, ReactNode } from 'react';

type User = {
  // Define your user properties, e.g., id: string, name: string, email: string
};

type AppContextType = {
  isLoggedIn: boolean;
  loading: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setIsLoggedIn(true);
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    sessionStorage.removeItem("user");
  };

  useEffect(() => {
    const storeUser = sessionStorage.getItem("user");
    if (storeUser) {
      try {
        setUser(JSON.parse(storeUser));
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Failed to parse user data from sessionStorage", error);
      }
    }
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ isLoggedIn, loading, user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
