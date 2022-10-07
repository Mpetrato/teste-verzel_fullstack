import { ChangeEvent, SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'

import { Header } from '../../components/Header'
import * as C from './styles'
import { AuthContext } from '../../context/authContext';

export const CriarAnuncioPage = () => {
    const { currentUser } = useContext(AuthContext)
    const uid = currentUser?.id
    const created = new Date().toLocaleString('pt-br');
    const [cookies, setCookie, removeCookie] = useCookies(['access_token'])
    const [token, setToken] = useState('')
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        model: '',
        brand: '',
        image: '',
        created_at: created,
        price: 0,
        km: '',
        car_year: '',
    })


    useEffect(() => {
        setToken(cookies.access_token)
    }, [])
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if(inputs.brand && inputs.car_year && inputs.image && inputs.image && inputs.km && inputs.model && inputs.name !== '' ) {
            const response = await axios.post(`http://localhost:3306/api/cars`, { inputs, token, uid })
            console.log(response.data)
            navigate('/meus-anuncios')
        }else {
            console.log('Preencha todos os campos')
        }

    }

    return (
        <C.Container>
            <Header />

            <C.FormContainer>
                <C.Form>

                    <C.InputWrapper>
                        <label htmlFor="model">Modelo</label>
                        <input type="text" value={inputs.model} name='model' id='model' onChange={handleChange} placeholder='Digite o modelo do carro' />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="marca">Marca</label>
                        <input type="text" value={inputs.brand} name='brand' id='marca' onChange={handleChange} placeholder='Digite a marca do carro'  />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="name">Nome</label>
                        <input type="text" value={inputs.name} name='name' id='name' onChange={handleChange} placeholder='Digite o nome do carro' />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="imagem">Imagem</label>
                        <input type="text"  value={inputs.image} name='image' id='image' onChange={handleChange} placeholder='URL da imagem' />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="price">Preço</label>
                        <input type="number" value={inputs.price} id='price' name='price' onChange={handleChange} placeholder='Preço do carro' />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="km">KM</label>
                        <input type="text" value={inputs.km} id='km' name='km' onChange={handleChange} placeholder='KM'  />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="car_year">Ano do Carro</label>
                        <input type="text" value={inputs.car_year} id='car_year' name='car_year' onChange={handleChange} placeholder='Digite o ano do carro' />
                    </C.InputWrapper>

                    <C.Button onClick={handleSubmit}>
                        Criar Anúncio
                    </C.Button>

                </C.Form>
            </C.FormContainer>
        </C.Container>
    )
}