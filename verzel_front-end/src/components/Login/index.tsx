import { useNavigate } from 'react-router-dom'
import { ChangeEvent, SyntheticEvent, useContext, useState } from 'react'
import { Api } from '../../services/api';
import { useCookies } from 'react-cookie'
import * as C from './styles'
import { AuthContext } from '../../context/authContext';

type TInputs = {
    email: string;
    password: string;
}

export const Login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['access_token'])
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<TInputs>({
        email: '',
        password: ''
    });

    
    const { login } = useContext(AuthContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const  { password, email }  = inputs
        try {
            // const response = await Api.Login({ email, password })
            // const { data, token} = response 
            const response = await login({ password, email })
            const { token } = response
            setCookie('access_token', token)
            navigate('/')
        }catch(err) {
            console.log(err)
        }
    }

    return (
        <C.Container>
            <h4>Login</h4>
            <C.Form>
                <C.InputWrapper>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name='email' id='email' onChange={handleChange} placeholder='Digite seu E-Mail'/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <label htmlFor="password">Senha</label>
                    <input type="password" name='password' id='password' onChange={handleChange} placeholder='Digite sua Senha'/>
                </C.InputWrapper>
                <C.Button onClick={handleSubmit}>
                    Login
                </C.Button>
            </C.Form>
            <span>Ainda não tem uma conta? <a href="/register">Cadastre-se!</a></span>
        </C.Container>
    )
}