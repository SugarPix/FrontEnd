/* eslint-disable no-unused-vars */
import React from "react";
import { api } from "../services/api";

type User = {
  name: string;
  pix: string;
  email: string;
  description?: string;
  image?: string;
  instagram?: string;
};

interface AuthContextProps {
  authenticated: boolean;
  user?: User;
  signIn?: (
    userLogin: string,
    password: string,
    rememberUser: boolean
  ) => Promise<void>;
  signOut?: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextProps>({
  authenticated: false,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User>(null as User);

  React.useEffect(() => {
    async function getStoredUser() {
      const storedUser = localStorage.getItem("@SugarPix:user");

      if (!storedUser) return;

      setUser(JSON.parse(storedUser));
    }

    getStoredUser();
  }, []);

  async function signIn(
    userLogin: string,
    password: string,
    rememberUser: boolean
  ) {
    const data = await api.post("/user/login", {
      email: userLogin,
      password,
    });
  }

  async function signOut() {
    setUser(null);
    localStorage.removeItem("@SugarPix:user");
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}
