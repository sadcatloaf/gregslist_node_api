import { dbContext } from "../db/DbContext"

class HouseService {
    getHouseById(houseId) {

    }
    async getHouse(houseQuery) {

    }
    async gethHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId).populate('creator')

        if (house == null) {
            throw new Error(`Invalid car id: ${houseId}`)
        }

        return house
    }

    // async getCars(carQuery) {
    //   const pageNumber = parseInt(carQuery.page) || 1
    //   const carLimit = 10
    //   const skipAmount = (pageNumber - 1) * carLimit
    //   delete carQuery.page

    //   const sortBy = carQuery.sortBy
    //   delete carQuery.sortBy

    //   const cars = await dbContext.Cars
    //     .find(carQuery)
    //     .sort(sortBy)
    //     .skip(skipAmount)
    //     .limit(carLimit)
    //     .populate('creator') // NOTE populate is called on each document returned from find
    //   const carCount = await dbContext.Cars.countDocuments(carQuery)

    //   const carResponse = {
    //     count: carCount,
    //     page: pageNumber,
    //     totalPages: Math.ceil(carCount / carLimit),
    //     results: cars,
    //   }

    //   return carResponse
    // }
}

export const houseService = new HouseService()