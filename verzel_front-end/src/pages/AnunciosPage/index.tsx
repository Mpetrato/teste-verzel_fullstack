import { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import { Header } from '../../components/Header'
import * as C from './styles'
import { AuthContext } from '../../context/authContext'
import { TCar } from '../../types'
import { CarCard } from '../../components/CarCard'

export const AnunciosPage = () => {
    const { currentUser } = useContext(AuthContext);
    const [carList, setCarList] = useState<TCar[]>([]);

    useEffect(() => {
        const getAllCars = async () => {
            try{ 
                const response = await axios.post('http://localhost:3306/api/cars/usercars', { id: currentUser?.id })
                setCarList(response.data)
            }catch(err: any){
                return err
            }
        }
        getAllCars();
    }, [])

    return (
        <C.Container>
            <Header />

            <C.AnunciosWrapper>
                <h2>Meus Anúncios</h2>

                <C.ContentWrapper>
                    { carList.length === 0 && (
                        <div>Não há carros cadastrados!</div>
                    )}
                    {carList.map((car, index) => (
                        <CarCard key={index} car={car} />
                    ))}
                </C.ContentWrapper>
            </C.AnunciosWrapper>
        </C.Container>
    )
}