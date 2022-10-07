import express from 'express'
import { addCar, deleteCar, getCar, getCars, getCarUser, updateCar } from '../controllers/cars'

const router = express.Router();

router.get('/', getCars);
router.post('/usercars', getCarUser);
router.get('/:id', getCar);
router.post('/', addCar);
router.delete('/:id', deleteCar);
router.put('/:id', updateCar);

export default router