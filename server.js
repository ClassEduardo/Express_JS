// Loading modules
   const express = require('express');
   const app = express();
   const open = require('open');

   
// Configs
   // Request config
      app.use(express.json());
      app.use(express.urlencoded());

      
// Routes
   const routes = require('./routes')
   app.use(routes)


// Server
   const PORT = 3000;
   app.listen(PORT, () => {
      console.log(`Running Express server on http://localhost:${PORT}`);
      open(`http://localhost:${PORT}`)
   });