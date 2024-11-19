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
  async getCars(carQuery) {
    const pageNumber = parseInt(carQuery.page) || 1
    const carLimit = 10
    const skipAmount = (pageNumber - 1) * carLimit
    delete carQuery.page

    // NOTE populate is called on each document returned from find
    const cars = await dbContext.Cars.find(carQuery).skip(skipAmount).limit(carLimit).populate('creator')
    const carCount = await dbContext.Cars.countDocuments(carQuery)

    const carResponse = {
      count: carCount,
      page: pageNumber,
      totalPages: Math.ceil(carCount / carLimit),
      results: cars,
    }

    return carResponse
  }
}

export const carsService = new CarsService()