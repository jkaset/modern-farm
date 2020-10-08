export const createAsparagus = ()=> {
  
  let seed = {}
  seed.type = "asparagus";
  seed.height = 24
  seed.output = 4
  return seed 
}


/*
first try at function:
{
  return `
  type: "asparagus",
  height: 24,
  output: 4
  `
}

David's work which returns {type: "asparagus", height: 24, output: 4}
{
  let seed={}
  seed.type="asparagus";
  seed.height=24
  seed.output=4
  return seed
}

return `
<section class="asparagus">
  <div class="type">${asparagus.type}</div>
  <div class="height">${asparagus.height}</div>
  <div class="output">${asparagus.output}</div>
</section>
*/
