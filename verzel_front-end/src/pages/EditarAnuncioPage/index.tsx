import { ChangeEvent, SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'

import { Header } from '../../components/Header'
import * as C from './styles'
import { AuthContext } from '../../context/authContext';

export const EditarAnuncioPage = () => {
    const { currentUser } = useContext(AuthContext)
    const uid = currentUser?.id
    const [cookies, setCookie, removeCookie] = useCookies(['access_token'])
    const [token, setToken] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();
    const [inputs, setInputs] = useState({
        name: '',
        model: '',
        brand: '',
        image: '',
        price: 0,
        km: '',
        car_year: '',
    })

    

    useEffect(() => {
        const editCar = async () => {
            const response = await axios.get(`http://localhost:3306/api/cars/${id}`)
            setInputs(response.data)
        }
        editCar();

        setToken(cookies.access_token)
    }, [])
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.put(`http://localhost:3306/api/cars/${id}`, { inputs, token, uid })
        console.log(response)
        navigate('/meus-anuncios')
    }

    return (
        <C.Container>
            <Header />

            <C.FormContainer>
                <C.Form>

                    <C.InputWrapper>
                        <label htmlFor="model">Modelo</label>
                        <input type="text" value={inputs.model} name='model' id='model' onChange={handleChange} />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="name">Nome</label>
                        <input type="text" value={inputs.name} name='name' id='name' onChange={handleChange} />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="marca">Marca</label>
                        <input type="text" value={inputs.brand} name='marca' id='marca' onChange={handleChange} />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="imagem">Imagem</label>
                        <input type="text"  value={inputs.image} name='image' id='image' onChange={handleChange} />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="price">Preço</label>
                        <input type="number" value={inputs.price} id='price' name='price' onChange={handleChange} />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="km">KM</label>
                        <input type="text" value={inputs.km} id='km' name='km' onChange={handleChange} />
                    </C.InputWrapper>
                    <C.InputWrapper>
                        <label htmlFor="car_year">Ano do Carro</label>
                        <input type="text" value={inputs.car_year} id='car_year' name='car_year' onChange={handleChange} />
                    </C.InputWrapper>

                    <C.Button onClick={handleSubmit}>
                        Atualizar Anuncio
                    </C.Button>

                </C.Form>
            </C.FormContainer>
        </C.Container>
    )
}