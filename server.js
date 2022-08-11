// Loading modules
   const express = require('express');
   const app = express();

// Configs
   // Request
      app.use(express.json());
      app.use(express.urlencoded());

// Middlewares
   const before = (req, res, next) => {
      console.log('Before Handing Request');
      next();
   }
   const middle = (req, res, next) => {
      res.send(groceryListy);
      console.log('Middleware for Middle Request');
      next();
   }
   const finish = () => {
      console.log('Finished Executing Get Request')
   }

// Routes
   // GET
      app.get('/groceries', before, middle, finish);

   // POST
      app.post('/groceries', (req, res) => {
         console.log(req.body.item);
         console.log(req.body.quantity);
         //groceryListy.push(req.body)
      });

// Server
   const PORT = 3000;
   app.listen(PORT, () => {
     console.log(`Running Express server on http://localhost:${PORT}`);
   });

// Outros
   const groceryListy = [
      {
         item: 'rice',
         quantity: 2
      },
      {
         item: 'bean',
         quantity: 2
      },
      {
         item: 'milk',
         quantity: 3
      },
   ];