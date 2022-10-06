import * as C from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { Login } from '../../components/Login';
import { Register } from '../../components/Register';
import { useEffect } from 'react';

export const LoginPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname.replaceAll('/', '');

    useEffect(() => {
        pathname !== 'login' && pathname !== 'register'
        ? navigate('/')
        : ''
    }, [])

    return (
        <C.Container>
            <C.LeftContainer />

            <C.RightContainer>
                {pathname === 'login' && (
                    <Login />
                )}
                {pathname === 'register' && (
                    <Register />
                )}
            </C.RightContainer>

        </C.Container>
    )
}