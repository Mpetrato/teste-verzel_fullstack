import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { CarCard } from '../../components/CarCard'
import { Header } from '../../components/Header'
import * as C from './styles'

type TCarList = {
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

export const CarrosPage = () => {
    const [filterParams, setFilterParams] = useSearchParams();
    const [filters, setFilters] = useState(filterParams.get('filter') || '');
    const [carList, setCarList] = useState<TCarList[]>([
        {id: 2, name: 'civic', model: 'civic', brand: 'honda', image: 'https://images.kavak.services/images/203442/EXTERIOR-frontSidePilotNear-1663594141840.jpeg?d=756x434', created_at: '0000-00-00 00:00:00', price: 55000, km: '2000', car_year: '2021'},
        {id: 2, name: 'civic', model: 'civic', brand: 'honda', image: 'https://images.kavak.services/images/203442/EXTERIOR-frontSidePilotNear-1663594141840.jpeg?d=756x434', created_at: '0000-00-00 00:00:00', price: 54000, km: '2000', car_year: '2022'},
        {id: 2, name: 'civic', model: 'civic', brand: 'honda', image: 'https://images.kavak.services/images/203442/EXTERIOR-frontSidePilotNear-1663594141840.jpeg?d=756x434', created_at: '0000-00-00 00:00:00', price: 53000, km: '2000', car_year: '2023'},
        {id: 2, name: 'civic', model: 'civic', brand: 'honda', image: 'https://images.kavak.services/images/203442/EXTERIOR-frontSidePilotNear-1663594141840.jpeg?d=756x434', created_at: '0000-00-00 00:00:00', price: 58000, km: '2000', car_year: '2019'},
        {id: 2, name: 'civic', model: 'civic', brand: 'honda', image: 'https://images.kavak.services/images/203442/EXTERIOR-frontSidePilotNear-1663594141840.jpeg?d=756x434', created_at: '0000-00-00 00:00:00', price: 58000, km: '2000', car_year: '2020'}
    ]);


    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterParams({ filter: e.target.value}, { replace: true })
        setFilters(e.target.value)
    }

    useEffect(() => {
        switch(filters) {
            case 'maior-preco': 
                const newArray = carList.sort((a, b) => {
                    if(a.price > b.price) {
                        return -1
                    }else {
                        return 1;
                    }
                })
        
                setCarList([...newArray])
                break
            case 'menor-preco': 
                const newArray1 = carList.sort((a, b) => {
                    if(a.price < b.price) {
                        return -1
                    }else {
                        return 1;
                    }
                })
        
                setCarList([...newArray1])
                break
            case 'mais-antigo': 
                const newArray2 = carList.sort((a, b) => {
                    if(a.car_year < b.car_year) {
                        return -1
                    }else {
                        return 1;
                    }
                })
        
                setCarList([...newArray2])
                break
            case 'mais-novo': 
                const newArray3 = carList.sort((a, b) => {
                    if(a.car_year > b.car_year) {
                        return -1
                    }else {
                        return 1;
                    }
                })
        
                setCarList([...newArray3])
                break
            case 'menor-km': 
                const newArray4 = carList.sort((a, b) => {
                    if(a.km < b.km) {
                        return -1
                    }else {
                        return 1;
                    }
                })
        
                setCarList([...newArray4])
                break
            case 'maior-km': 
                const newArray5 = carList.sort((a, b) => {
                    if(a.km < b.km) {
                        return -1
                    }else {
                        return 1;
                    }
                })
        
                setCarList([...newArray5])
                break
            default:
                console.log('sorry')
        }
    },[filters])

    return (
        <C.Container>
            <Header />

            <C.CarContainer>
                <C.HeaderCarContainer>
                    <C.HeaderInfo>
                        <h3>Carros encontrados em todo o Brasil</h3>
                        <h4>{carList.length} carros encontrados</h4>
                    </C.HeaderInfo>
                    <C.SelectContainer>
                        <span>Ordernar:</span>
                        <select defaultValue={filterParams.get('filter') || ''} onChange={handleChangeSelect}>
                            <option value="maior-preco">Maior Preço</option>
                            <option value="menor-preco">Menor Preço</option>
                            <option value="mais-antigo">Mais Antigos</option>
                            <option value="mais-novo">Mais Novos</option>
                            <option value="menor-km">Menor KM</option>
                            <option value="maior-km">Maior KM</option>
                        </select>
                    </C.SelectContainer>
                </C.HeaderCarContainer>

                <C.CarListContainer>
                    {carList.map((car, index) => (
                        <CarCard key={index} car={car}/>
                    ))}
                </C.CarListContainer>

            </C.CarContainer>
        </C.Container>
    )
}