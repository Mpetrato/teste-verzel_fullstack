import * as C from './styles'
import { useLocation } from 'react-router-dom'
import { Login } from '../../components/Login';
import { Register } from '../../components/Register';

export const LoginPage = () => {
    const location = useLocation();
    const pathname = location.pathname.replaceAll('/', '');
    console.log(pathname)

    return (
        <C.Container>
            <C.LeftContainer />

            <C.RightContainer>
                {pathname === 'login' && (
                    <Login />
                )}
                {pathname === 'loginregister' && (
                    <Register />
                )}
            </C.RightContainer>

        </C.Container>
    )
}