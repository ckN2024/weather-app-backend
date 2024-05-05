import express from "express"
import { getCurrentWeather, getFiveDaysWeather } from "../controllers/weatherController.js"

const router = express.Router()

router.route('/current').get(getCurrentWeather)
router.route('/fiveDays').get(getFiveDaysWeather)

export default router