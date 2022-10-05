import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Api } from '../../services/api';
import axios from 'axios'
import * as C from './styles'

export const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        confirm_pass: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const { confirm_pass, ...rest} = inputs
        Api.Login({ rest })
    }
    
    console.log(inputs)

    return (
        <C.Container>
            <h4>Cadastre-se</h4>
            <C.Form>
                <C.InputWrapper>
                    <label htmlFor="username">Usúario</label>
                    <input type="text" name='username' id='username' placeholder='Digite seu usúario' onChange={handleChange}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" name='email' id='email' placeholder='Digite seu E-Mail' onChange={handleChange}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <label htmlFor="password">Senha</label>
                    <input type="password"  name='password' id='password' placeholder='Digite sua senha' onChange={handleChange}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <label htmlFor="confirm_pass">Senha</label>
                    <input type="password" id='confirm_pass' name='confirm_pass' placeholder='Confirme sua senha' onChange={handleChange} />
                </C.InputWrapper>
                <C.Button onClick={handleSubmit}>
                    Login
                </C.Button>
            </C.Form>
            <span>Já possui uma conta?<a href="/login">Faça seu login!</a></span>
        </C.Container>
    )
}