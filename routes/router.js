const sequelize = require('sequelize');
const path = require('path');
const dbIndex = require('../db');
const {db} = dbIndex;
const {Employees} = dbIndex.models;
const router = require('express').Router();


//will have to fix this when put onto the horoku
//router.get('/', (req, res, next)=> res.send('../index.html'));
//||`D:\\fullStackOnWindows\\acme-employees\\index.html`)
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
  })

router.get('/api/employees', async (req,res,next)=>{
    try{
        const data = await Employees.findAll();
        res.send(data);
    }catch(err){
        next();
    }
});

router.get('/api/employees/:id', async (req,res,next)=>{
    try{
        const data = await Employees.findByPk(req.params.id);
        res.send(data);
    }catch(err){
        next();
    }
});


router.get('/api/departments', async (req,res,next)=>{
    try{
        //couldnt find distinct query with sequlize docs (so this was easier) 
        //probably should setup a different table and link employees&departments with a join but im lazy :^)
        const data = await db.query("SELECT DISTINCT department FROM employees",{ model: Employees })
        res.send(data);
    }catch(err){
        console.log('ynowork');
        next();
    }
});

router.put('/api/employees/:id', async (req,res,next)=>{
    try{
        const data = await Employees.findByPk(req.params.id);
        data.department = null;
        await data.save();
        res.sendStatus(200);
    }catch(err){
        next();
    }
});

router.delete('/api/employees/:id', async (req,res,next)=>{
    try{
        const data = await Employees.findByPk(req.params.id);
        data.destroy();
        res.sendStatus(200);
    }catch(err){
        next();
    }
});


module.exports = {router};