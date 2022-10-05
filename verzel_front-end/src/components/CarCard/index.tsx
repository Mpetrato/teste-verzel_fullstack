import * as C from './styles'
import { formatDistance, formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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
    
    const DateNow = new Date();
    
    const brlPrice = price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    
    const newDate = formatRelative(subDays(DateNow, 0), new Date(), { locale: ptBR}) 

    return (
        <C.Container>
            <C.BoxShadowWrapper>
                <C.ImageWrapper>
                    <img src={image} alt="" />
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
            </C.BoxShadowWrapper>
        </C.Container>
    )
}