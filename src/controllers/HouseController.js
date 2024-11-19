import { request, response } from "express"
import { houseService } from "../services/HouseService"
import BaseController from "../utils/BaseController"

export class HouseController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouse)
            .get('/:houseId', this.getHouseById)
    }

    /**
* Creates a new value from request body and returns the value
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/

    async getHouse(request, response, next) {
        try {
            const houses = await houseService.getHouse()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }
    /**
* Creates a new value from request body and returns the value
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/

    async getHouseById(request, response, next) {
        try {
            const houseId = request.params.houseId
            const house = await houseService.getHouseById(houseId)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }
}