export const createCorn = () => { 
  
  let cornArray = [] 
  for (i = 0; i < 2; i++) {
  let seed = {}
  seed.type = "corn";
  seed.height = 180
  seed.output = 6
    cornArray.push(seed)
  }
  return cornArray
}

