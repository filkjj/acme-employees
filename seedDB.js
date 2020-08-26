const dbIndex = require('./db/index');
const {db} = dbIndex;
const {Employees} = dbIndex.models;
const Sequelize = require('sequelize');
const faker = require('faker');

//couldnt figure out how to use faker to get only 5 unique depts
const depts = ['Computers','Shoes','Movies','Games','Home'];

const createEmployeeRecords = () =>{
    const retArr = [];
    for(let i=1;i<=50;i++){
        retArr.push({name: faker.name.findName(), department:depts[Math.floor(Math.random() * Math.floor(5))]});
    }
    return retArr;
}

const syncAndSeed = async()=> {
    try{
        await db.sync({ force: true });
        console.log('cleared db');
        await Promise.all(createEmployeeRecords().map(ele=>Employees.create(ele)));
        console.log("WOOT");
        db.close();
    }catch(err){
        console.log(err);
    }
  };

syncAndSeed();

