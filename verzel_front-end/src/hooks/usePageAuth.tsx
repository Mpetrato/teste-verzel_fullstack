import { ReactNode, useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/authContext";

interface usePageAuthProps {
    children: ReactNode;
}

export const UsePageAuth = ({ children }: usePageAuthProps) => {
    const navigate = useNavigate();

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        !currentUser ? navigate('/register') : '';
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}