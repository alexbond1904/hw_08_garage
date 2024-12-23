import GarageService from "./GarageService";
import Car from "../models/Car";
import GarageRepository from "../dao/GarageRepository";

export default class GarageServiceImpl implements GarageService{
    private garageRepository = new GarageRepository();

    addCar(car: Car): boolean {
        return this.garageRepository.write(car);
    }

    findCarByRegNumber(regNumber: string): Car | null {
        return this.garageRepository.readAll().find(c=>c.regNumber === regNumber) || null;
    }

    findCarsByColor(color: string): Car[] {
        return this.garageRepository.readAll()
            .filter(c=>c.color === color);
    }

    findCarsByCompany(company: string): Car[] {
        return this.garageRepository.readAll()
            .filter(c=>c.company === company);
    }

    findCarsByEngine(min: number, max: number): Car[] {
        return this.garageRepository.readAll()
            .filter(c=>c.engine >= min && c.engine < max);
    }

    findCarsByModel(model: string): Car[] {
        return this.garageRepository.readAll()
            .filter(c=>c.model === model);    }

    removeCar(regNumber: string): Car | null {
        let allCars = this.garageRepository.readAll();
        const index = allCars.findIndex(c=> c.regNumber === regNumber);
        if(index<0) return null;
        const victim = allCars[index];
        allCars.splice(index,1);
        this.garageRepository.writeAll(allCars);
        return victim;
    }

    allCars(): Car[] {
        return this.garageRepository.readAll();
    }


}