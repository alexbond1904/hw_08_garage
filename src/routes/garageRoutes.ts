import {Router} from "express";
import GarageController from "../controller/GarageController";
import GarageServiceImpl from "../services/GarageServiceImpl";

const router = Router();

const garageService = new GarageServiceImpl();
const garageController = new GarageController(garageService);

router.get("/allCars", async (req, res) => {
    const allCars = await garageController.allCars();
    if (allCars) {
        res.status(200).send(allCars);
    } else {
        res.status(200).send([]);
    }

})

router.post("/addCar", async (req, res) => {
    const carDto = req.body;
    const isSuccess = await garageController.addCar(carDto);
    if (isSuccess) {
        res.status(200).send("Okay");
    } else {
        res.status(500).send("Not okay");
    }

})
router.delete("/removeCar", async (req, res) => {
    const regNumber: string = req.body.regNumber;
    if (regNumber) {
        const removed = await garageController.removeCar(regNumber);
        if (removed) {
            res.status(200).send(removed);
        } else {
            res.status(200).send(null);
        }
    } else {
        res.status(400).send("Bad Request");
    }
})

router.get("/findCarByRegNumber", async (req, res) => {
    const regNumber: string = req.body.regNumber;
    if (regNumber) {
        const car = await garageController.findCarByRegNumber(regNumber);
        if (car) {
            res.status(200).send(car);
        } else {
            res.status(200).send(null);
        }
    } else {
        res.status(400).send("Bad Request");
    }
})

router.get("/findCarsByModel", async (req, res) => {
    const model: string = req.body.model;
    if (model) {
        const cars = await garageController.findCarsByModel(model);
        if (cars && cars.length > 0) {
            res.status(200).send(cars);
        } else {
            res.status(200).send([]);
        }
    } else {
        res.status(400).send("Bad Request");
    }
});

router.get("/findCarsByCompany", async (req, res) => {
    const company: string = req.body.company;
    if (company) {
        const cars = await garageController.findCarsByCompany(company);
        if (cars && cars.length > 0) {
            res.status(200).send(cars);
        } else {
            res.status(200).send([]);
        }
    } else {
        res.status(400).send("Bad Request");
    }
});

router.get("/findCarsByEngine", async (req, res) => {
    const min: number = req.body.min;
    const max: number = req.body.max;
    if (min !== undefined && max !== undefined) {
        const cars = await garageController.findCarsByEngine(min, max);
        if (cars && cars.length > 0) {
            res.status(200).send(cars);
        } else {
            res.status(200).send([]);
        }
    } else {
        res.status(400).send("Bad Request");
    }
});


router.get("/findCarsByColor", async (req, res) => {
    const color: string = req.body.color;
    if (color) {
        const cars = await garageController.findCarsByColor(color);
        if (cars && cars.length > 0) {
            res.status(200).send(cars);
        } else {
            res.status(200).send([]);
        }
    } else {
        res.status(400).send("Bad Request");
    }
});

export default router;