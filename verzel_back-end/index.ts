import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRoutes from './src/routes/auth'
import carRoutes from './src/routes/cars'



require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/cars', carRoutes)


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))