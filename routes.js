// Modules
   const express = require('express');
   const route = express.Router();


// Route groceries
   const groceriesControlle = require('./src/controllers/groceriesControllers')

   // GET
      route.get('/groceries', groceriesControlle.groceriesGET);

   // POST
      route.post('/groceries', groceriesControlle.groceriesPOST);

      
// Export 
   module.exports = route;
   