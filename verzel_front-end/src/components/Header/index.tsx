import * as C from './styles'
import {FaUserCircle} from 'react-icons/fa'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext';

export const Header = () => {
    const { currentUser } = useContext(AuthContext);
    
    return (
        <C.Container>
            <C.LeftContainer>
                <img src="/logo_verzel.svg" alt="" />
            </C.LeftContainer>
            <C.RightContainer>
                <ul>
                    <li><a href="/">Comprar carros</a></li>
                    <li><a href="/meus-anuncios">Meus anuncios</a></li>
                </ul>

                { currentUser && (
                    <C.UserWrapper>
                        <FaUserCircle />
                        <span>{currentUser?.username}</span>
                    </C.UserWrapper>
                )}
                <button>ANUNCIAR</button>
            </C.RightContainer>
        </C.Container>
    )
}