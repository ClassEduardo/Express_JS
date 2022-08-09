// Loading modules
   const express = require('express');
   const app = express();

// Configs
   



// Routes
   app.get('/', (req, res) => {
      res.send('meuzovo')
   })

// Server
   const PORT = 3000;
   app.listen(PORT, () => {
     console.log(`Running Express server on http://localhost:${PORT}`);
   })