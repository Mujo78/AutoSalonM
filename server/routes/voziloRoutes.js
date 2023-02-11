const express = require("express")
const router = express.Router()
const {postVoziloValidator} = require("../validators/postVoziloValidator")
const {validationResult} = require("express-validator")


const {Cars} = require("../models")

router.get("/Cars", async(req, res) => {
    const vozila = await Cars.findAll();
    res.status(201).json(vozila);
})

router.get("/Cars/:id", async(req, res) => {
    const id = req.params.id;
    const vozilo = await Cars.findByPk(id);

    res.json(vozilo);
})

router.post("/post-cars",postVoziloValidator, async(req, res) =>{
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.json(errors);
        }else{
            const body = req.body
            const newCar = await Cars.create(body);

            res.json(newCar);
        }
    }catch(error){
        res.send("Error: " + error.message);
    }
})

router.post("/edit-cars/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const toUpdate = await Cars.findByPk(id);
        const {name, imageUrl, year, price, manufacturer} = req.body;
        if(toUpdate == null){
            res.send("Error: Nije pronađeno vozilo! ")
        }else{
            if(name != null) toUpdate.name = name;
            if(imageUrl != null) toUpdate.imageUrl = imageUrl;
            if(year != null) toUpdate.year = year;
            if(price != null) toUpdate.price = price;
            if(manufacturer != null) toUpdate.manufacturer = manufacturer;

            await toUpdate.save();
            res.send(toUpdate);
        }

    }catch(error){
        res.send("Error: " + error.message);
    }
})

router.delete("/:id", async(req, res) =>{
    const id = req.params.id;
    const toDelete = await Cars.findByPk(id);
    if(toDelete == null){
        res.send("Vozilo ne postoji!");
    }else{
       const deleted = await Cars.destroy({
        where: {id: id}
    });
        res.json(deleted);
    }
})
module.exports = router;