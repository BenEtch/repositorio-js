function id_price_check(pizzas){
    for(let i = 0; i <= pizzas.length; i++)
      {
      if(pizzas[i].id % 2 === 1)
      {
        console.log(`La ${pizzas[i].nombre} tiene un id impar (id: ${pizzas[i].id})`)
        console.log(`La ${pizzas[i].nombre} tiene un valor de ${pizzas[i].precio}`)
          if(pizzas[i].precio < 600){
            console.log(`La ${pizzas[i].nombre} vale menos de $600`)
          }
        console.log(`-------------------------`)
        
      }
      else
      {
        console.log(`La ${pizzas[i].nombre} tiene un id par (id: ${pizzas[i].id})`)
        console.log(`La ${pizzas[i].nombre} tiene un valor de ${pizzas[i].precio}`)
        console.log(`-------------------------`)
      }
      }
    
    }
  
  function pizza_ingredient(pizzas){
    for(let i = 0; i <= pizzas.length; i++){
      console.log(`La ${pizzas[i].nombre} contiene: ${pizzas[i].ingredientes}`)
    }
  }