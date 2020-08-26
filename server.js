const path = require('path');
const {router} = require('./routes/router');
const express = require('express');
const app = express();
app.use(require('body-parser').json());
app.use(express.urlencoded({extended: true}))

app.use('/', router);

app.use((err, req, res, next)=> {
  res.status(500).send({ error: err.message });
});

const init = async()=> {
  try {
    const port = (process.env.PORT || 3000);
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();
