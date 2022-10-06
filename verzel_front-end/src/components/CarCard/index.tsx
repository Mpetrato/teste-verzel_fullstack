import * as C from './styles'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

interface CarCardProps  {
    car: {
        id: number 
        name: string; 
        model: string; 
        brand: string; 
        image: string;
        created_at: string;
        price: number; 
        km: string; 
        car_year: string;
    }
}



export const CarCard = ({ car }: CarCardProps) => {
    const { brand, car_year, created_at, id, image, km, model, name, price } = car
    const { currentUser } = useContext(AuthContext)
    const uid = currentUser?.id 
    const [cookies, setCookie, removeCookie] = useCookies(['access_token'])
    const [token, setToken] = useState('')

    const [isAdsUser, setIsAdsUser] = useState(false);
    const navigate = useNavigate();

    const DateNow = new Date();
    const brlPrice = price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    const newDate = formatRelative(subDays(DateNow, 0), new Date(), { locale: ptBR}) 
    const pathname = location.pathname.replaceAll('/', '');

    useEffect(() => {
        pathname === 'meus-anuncios' ? setIsAdsUser(true) : setIsAdsUser(false); 
        setToken(cookies.access_token)
    }, [])

    const handleEditAds = () => {
        navigate(`/editar-anuncio/${id}`)
    }

    const handleDeleteAds = async () => {
        const response = await axios.delete('http://localhost:3306/api/cars/6', { data: { uid, token }});
        console.log(response)
    }

    return (
        <C.Container>
            <C.BoxShadowWrapper>
                <C.ImageWrapper image={image}>
                    
                </C.ImageWrapper>
                <C.ContentWrapper>
                    <h4>{brand} {model}</h4>

                    <h2>{brlPrice}</h2>

                    <C.CarInfo>
                        <span>{car_year}</span>
                        <span>{km}km</span>
                    </C.CarInfo>
                    {newDate}
                </C.ContentWrapper>
                { isAdsUser && (
                    <C.ButtonsWrapper>
                        <button onClick={handleEditAds}>EDITAR ANUNCIO</button>
                        <button onClick={handleDeleteAds}>EXCLUIR ANUNCIO</button>
                    </C.ButtonsWrapper>
                )}
            </C.BoxShadowWrapper>
        </C.Container>
    )
}