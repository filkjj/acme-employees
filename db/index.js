const Sequelize = require('sequelize');
// add horoku db in below
const db = new Sequelize(PROCESS.ENV.DATABASE_URL || 'postgres://localhost/acme_employees');


const Employees = db.define('employees', {
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    department:{
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull:true
    }
});



module.exports = {
    db,
    models:{
        Employees
    },
};

