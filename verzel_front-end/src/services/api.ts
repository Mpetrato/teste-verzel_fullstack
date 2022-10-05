import axios from "axios"

interface LoginInputsProps {
    rest: {
        username: string,
        email: string,
        password: string,
    }
}

export const Api = {
    Login: async ({ rest }: LoginInputsProps) => {
        try {
            const res = await axios.post('http://localhost:3306/api/auth/register', rest)
            console.log(res)
        }catch(err) {
            console.log(err)
        }
    }
}