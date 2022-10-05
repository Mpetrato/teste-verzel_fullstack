import * as C from './styles'

export const Register = () => {
    return (
        <C.Container>
            <h4>Cadastre-se</h4>
            <C.Form>
                <C.InputWrapper>
                    <label htmlFor="username">Usúario</label>
                    <input type="text" id='username' placeholder='Digite seu usúario'/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" id='email' placeholder='Digite seu E-Mail'/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id='password' placeholder='Digite sua senha'/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <label htmlFor="confirm_pass">Senha</label>
                    <input type="password" id='confirm_pass' placeholder='Confirme sua senha'/>
                </C.InputWrapper>
                <C.Button>
                    Login
                </C.Button>
            </C.Form>
            <span>Já possui uma conta?<a href="/login">Faça seu login!</a></span>
        </C.Container>
    )
}