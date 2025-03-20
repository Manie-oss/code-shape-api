import express from "express";
import {CodeModel} from "./../models/code.model"

const route = express.Router();

route.post('/share-code', async (req, res) => {
    const code = req.body.code;
    if(!code) {
        res.status(400).send({message: 'code is required'});
        return;
    }
    const response = await CodeModel.create({code});
    res.status(201).send({message: 'code saved successfully', data: {id: response._id}});
  });
  
route.get('/get-code/:id', async (req, res) => {
    const code = await CodeModel.findById(req.params.id);
    if(!code) {
        res.status(404).send({message: 'code not found'});
        return;
    } 
    res.status(200).send({message: "Code found", data: code});
  });

export default route;