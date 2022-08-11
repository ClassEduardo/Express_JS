exports.groceriesGET = (req, res) => {
   res.send(groceryListy);
}


exports.groceriesPOST = (req, res) => {
   console.log(req.body.item);
   console.log(req.body.quantity);
   //groceryListy.push(req.body)
}


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