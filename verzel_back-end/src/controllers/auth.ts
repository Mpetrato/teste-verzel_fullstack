import { db } from '../db'
import { Request, Response } from 'express'
import { compareSync, genSaltSync, hashSync } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

export const register = (req: Request, res: Response) => {

    const q = 'SELECT * FROM users WHERE email = ? OR username = ?'

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json('User already exists!');

        const salt = genSaltSync(10);
        const hash = hashSync(req.body.password, salt);

        const q = 'INSERT INTO users(`username`, `email`, `password`) VALUES (?)'
        const values = [
            req.body.username, 
            req.body.email, 
            hash 
        ]


        db.query(q, [values], (err, data) => {
            if(err) return res.json(err);
            return res.status(200).json('User has been created')
        })
    })
}

export const login = (req: Request, res: Response) => {

    const q = 'SELECT * FROM users WHERE email = ?'

    db.query(q, [req.body.email], (err, data) => {
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json('User not found!');

        const isPasswordCorrect = compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json('Wrong username or password');

        const token = sign({}, 'jwtkey', {
            subject: String(data[0].id),
            expiresIn: '1d'
        });

        const {password, ...other} = data[0]

        
        const tokenReturn = {
            token,
            other
        }

        res.send(tokenReturn)
    })

}

export const logout = (req: Request, res: Response) => {


    res.clearCookie('acess_token', {
        sameSite: 'none',
        secure: true
    }).status(200).json('User has been logout')
}