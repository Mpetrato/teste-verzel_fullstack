import { ChangeEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { CarCard } from '../../components/CarCard'
import { Header } from '../../components/Header'
import { Api } from '../../services/api'
import { TCar } from '../../types'
import * as C from './styles'


export const CarrosPage = () => {
    const [filterParams, setFilterParams] = useSearchParams();
    const [filters, setFilters] = useState(filterParams.get('filter') || '');
    const [carList, setCarList] = useState<TCar[]>([]);

    const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterParams({ filter: e.target.value}, { replace: true })
        setFilters(e.target.value)
    }

    useEffect(() => {
        const getCars = async () => {
            try{
                const response = await Api.getAllCars()
                setCarList(response)
            }catch(err){
                console.log(err)
            }
        }
        getCars();
    }, [])
    
    // SWITCH FOR FILTER FUNCTIONS    
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
                    if(a.km > b.km) {
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
                return
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
                            <option value='default'>Mais Relevantes</option>
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
                    { carList.length === 0 && (
                        <div>Não há carros cadastrados!</div>
                    )}


                    
                    {carList.map((car, index) => (
                        <CarCard key={index} car={car}/>
                    ))}
                </C.CarListContainer>

            </C.CarContainer>
        </C.Container>
    )
}