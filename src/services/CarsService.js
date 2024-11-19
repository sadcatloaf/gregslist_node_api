import { dbContext } from "../db/DbContext.js"

class CarsService {
  async getCarById(carId) {
    const car = await dbContext.Cars.findById(carId).populate('creator')

    if (car == null) {
      throw new Error(`Invalid car id: ${carId}`)
    }

    return car
  }
  async getCars() {
    const cars = await dbContext.Cars.find().populate('creator')
    return cars
  }
}

export const carsService = new CarsService()