
//TO SEE ARRAYS IN CONSOLE
// import { createPlan } from './plan.js' 

// const yearlyPlan = createPlan()

// for (const plan of yearlyPlan) {
//   console.log(plan)
// }

// TO SEE ASPARAGUS IN CONSOLE
// import { createAsparagus } from './seeds/asparagus.js'

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// import { createCorn } from './seeds/corn.js'

// const cornSeed = createCorn()
// console.log(cornSeed)

import { addPlant } from './field.js'
import { createAsparagus } from './seeds/asparagus.js'
const seed = createAsparagus()
const tryAdd = addPlant(seed)
console.log(tryAdd)