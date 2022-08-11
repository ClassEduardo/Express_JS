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


groceryListy.forEach(element => {
   if(element.item == 'rice') {
      element.quantity++;
   }
   console.log(element)
});

