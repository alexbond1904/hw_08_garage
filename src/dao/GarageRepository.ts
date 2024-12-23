import * as fs from "node:fs";
import Car from "../models/Car";

export default class GarageRepository {
    private readonly filePath: string;

    constructor(filePath = './db.txt') {
        this.filePath = filePath;
    }

    readAll(): Car[] {
        try {
            const res = fs.readFileSync(this.filePath,{encoding:'utf-8'});
            return JSON.parse(res) as Car[];
        } catch (err: any) {
            console.error(`Error -> ${err}`);
            return [];
        }
    }

    write(car: Car) {
        try {
            const cars = this.readAll();
            const index = cars.findIndex(c=>c.regNumber === car.regNumber);
            if(index >= 0) {
                return false;
            }
            cars.push(car);
            this.writeAll(cars);
            return true;
        }catch (err:any) {
            return false;
        }
    }

    writeAll(cars: Car[]):boolean {
        try {
            const data = JSON.stringify(cars);
            fs.writeFileSync(this.filePath,data,{encoding:'utf-8'});
            console.log("Success");
            return true;
        }catch (err){
            console.error(err)
            return false;
        }
    }
}