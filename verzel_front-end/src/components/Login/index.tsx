import * as C from './styles'

export const Login = () => {
    return (
        <C.Container>
            <h4>Login</h4>
            <C.Form>
                <C.InputWrapper>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" id='email' placeholder='Digite seu E-Mail'/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id='password' placeholder='Digite sua Senha'/>
                </C.InputWrapper>
                <C.Button>
                    Login
                </C.Button>
            </C.Form>
            <span>Ainda não tem uma conta? <a href="/register">Cadastre-se!</a></span>
        </C.Container>
    )
}