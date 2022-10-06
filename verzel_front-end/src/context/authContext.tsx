import { createContext, ReactNode, useEffect, useState } from "react";
import axios from 'axios'

interface AuthContextProviderProps {
    children: ReactNode;
}
interface LoginInputsProps {
    email: string;
    password: string;
}

interface currentUserProps {
    username: string;
    id: number;
    email: string;
}

interface dataProps {
    other: {
        id: number;
        username: string;
        email: string;
    }
    token: string
}

interface AuthContextProps {
    currentUser: currentUserProps | null;
    login: ({ email, password}: LoginInputsProps) => Promise<dataProps>
    logout: ({ email, password}: LoginInputsProps) => void

}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {
    const [currentUser, setCurrentUser] = useState<currentUserProps | null>(JSON.parse(localStorage.getItem('user')  || 'null'));
    // 


    const login = async ({ email, password }: LoginInputsProps) => {
        const response = await axios.post('http://localhost:3306/api/auth/login', { email, password })
        const { data } = response
        setCurrentUser(data.other)
        return data
    }
    const logout = async ({ email, password }: LoginInputsProps) => {
        const response = await axios.post('http://localhost:3306/api/auth/logout', { email, password })
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={ { currentUser, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}