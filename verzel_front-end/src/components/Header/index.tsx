import * as C from './styles'

export const Header = () => {
    
    return (
        <C.Container>
            <C.LeftContainer>
                <img src="./logo_verzel.svg" alt="" />
            </C.LeftContainer>
            <C.RightContainer>
                <ul>
                    <li><a href="">Comprar carros</a></li>
                    <li><a href="">Meus anuncios</a></li>
                </ul>
            </C.RightContainer>
        </C.Container>
    )
}