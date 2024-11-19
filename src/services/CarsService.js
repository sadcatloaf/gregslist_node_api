import { dbContext } from "../db/DbContext.js"

class CarsService {
  async getCarById(carId) {
    // NOTE populate is a method that will run our virtual method
    const car = await dbContext.Cars.findById(carId).populate('creator')

    if (car == null) {
      throw new Error(`Invalid car id: ${carId}`)
    }

    return car
  }
  async getCars() {
    // NOTE populate is called on each document returned from find
    const cars = await dbContext.Cars.find().populate('creator')
    return cars
  }
}

export const carsService = new CarsService()