import axios from "axios"
import { LoginInputsProps, RegisterInputsProps, TCar } from "../types"




export const Api = {
    Register: async ({ rest }: RegisterInputsProps) => {
        try {
            const res = await axios.post('http://localhost:3306/api/auth/register', rest)
            console.log(res)
        }catch(err) {
            console.log(err)
        }
    },
    Login: async ({ email, password }: LoginInputsProps) => {
        try {
            const res = await axios.post('http://localhost:3306/api/auth/login', { email, password} )
            return res.data
        }catch(err) {
            console.log(err)
        }
    },
    getAllCars: async (): Promise<TCar[]>  => {
        try{ 
            const response = await axios.get<TCar[]>('http://localhost:3306/api/cars')
            return response.data
        }catch(err: any){
            return err
        }
    }
}