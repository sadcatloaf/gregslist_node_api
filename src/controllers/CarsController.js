import BaseController from "../utils/BaseController.js";

export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getCars)
  }


  /**
* Gets all cars
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
  getCars(request, response, next) {
    response.send('Cars API is working!')
  }
}