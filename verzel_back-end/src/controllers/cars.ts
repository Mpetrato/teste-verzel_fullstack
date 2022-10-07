import { db } from '../db'
import { Request, Response } from "express"
import { verify } from 'jsonwebtoken'


export const getCars = (req: Request, res: Response) => {
    const q = 'SELECT * FROM cars'

    db.query(q, (err, data) => {
        if(err) return res.status(500).send(err)
        
        return res.status(200).json(data)
    })
}


export const getCar = (req: Request, res: Response) => {
    const q = 'SELECT p.id, `username`, `name`, `model`, `brand`, `image`, `created_at`, `price`, `km`, `car_year` FROM users u JOIN cars p ON u.id=p.uid WHERE p.id = ?'

    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json(data[0]);
    })
}


export const addCar = (req: Request, res: Response) => {
    const { inputs, token, uid } = req.body

    if(!token) return res.status(401).json('Not authenticated!')

    verify(token, 'jwtkey', (err: any, userInfo: any) => {
        if(err) return res.status(403).json('Token is not valid!');
    
        const q = 'INSERT INTO cars(`name`, `model`, `brand`, `image`, `created_at`,  `price`, `km`, `car_year`, `uid` ) VALUES (?)'
    
        const values = [
            inputs.name,
            inputs.model,
            inputs.brand,
            inputs.image,
            inputs.created_at,
            inputs.price,        
            inputs.km,        
            inputs.car_year,        
            uid,        
        ]

        db.query(q, [values], (err, data) => {
            if(err) return res.status(500).json(err);

            return res.json('Car has been created.')
        })
    });

}


export const deleteCar = (req: Request, res: Response) => {
    const { token, uid } = req.body
    if(!token) return res.status(401).json('Not authenticated!')
    

    verify(token, 'jwtkey', (err: any, userInfo: any) => {
        if(err) return res.status(403).json('Token is not valid!')

        const carId = Number(req.params.id)
        const q = 'DELETE FROM cars WHERE `id` = ? AND `uid` = ?'

        db.query(q, [carId, uid], (err, data) => {
            if(err) return res.status(403).json('You can delete only your post!')

            return res.json('Post has been deleted!')
        })
    })
}


export const updateCar = (req: Request, res: Response) => {
    const { inputs, token, uid } = req.body
    if(!token) return res.status(401).json('Not authenticated!')

    verify(token, 'jwtkey', (err: any, userInfo: any) => {
        if(err) return res.status(403).json('Token is not valid!');
    
        const carId = req.params.id
        const q = 'UPDATE cars SET `name`=?, `model`=?, `brand`=?, `image`=?, `price`=?, `km`=?, `car_year`=? WHERE `id` = ? AND `uid` = ?'
    
        const values = [
            inputs.name,
            inputs.model,
            inputs.brand,
            inputs.image,
            inputs.price,
            inputs.km,
            inputs.car_year
        ]

        db.query(q, [...values, carId, uid ], (err, data) => {
            if(err) return res.status(500).json(err);

            return res.json('Car has been updated.')
        })
    });
}

export const getCarUser = (req: Request, res: Response) => {
    const q = 'SELECT * FROM cars WHERE uid IN (?)'

    db.query(q, [req.body.id], (err, data) => {
        if(err) return res.status(500).send(err)
        
        return res.status(200).json(data)
    })
}