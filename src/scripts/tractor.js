import { addPlant } from "./field"

export const plantSeeds = (yearlyPlan) => {
  //console.log(yearlyPlan)
  for (const plan of yearlyPlan) {
    plan.forEach(veggie) 
      if (veggie === "asparagus") {
        const seedAsparagus = createAsparagus()
        addPlant(seedAsparagus)
        console.log(veggie)
      }
      else if (veggie=== "potato") {
        const seedPotato = createPotato()
        addPlant(seedPotato)
      }
     
  
  }
  }





//let thisSeed = yearlyPlan[i][j]
// import { createAsparagus } from "./seeds/asparagus"

