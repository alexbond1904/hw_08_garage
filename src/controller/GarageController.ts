import GarageService from "../services/GarageService";
import Car from "../models/Car";

export default class GarageController {
    private garageService: GarageService;

    constructor(garageService: GarageService) {
        this.garageService = garageService;
    }

    async allCars() {
        return await this.garageService.allCars();
    }

    async addCar(carDto: unknown) {
        return await this.garageService.addCar(carDto as Car);
    }

    async removeCar(regNumber: string) {
        return await this.garageService.removeCar(regNumber);
    }

    async findCarByRegNumber (regNumber: string) {
        return await this.garageService.findCarByRegNumber(regNumber);
    }

    async findCarsByModel (model: string) {
        return await this.garageService.findCarsByModel(model);
    }

    async findCarsByCompany(company: string) {
        return await this.garageService.findCarsByCompany(company);
    }

    async findCarsByEngine(min:number, max: number) {
        return await this.garageService.findCarsByEngine(min,max);
    }

    async findCarsByColor (color: string) {
        return await this.garageService.findCarsByColor(color);
    }

}