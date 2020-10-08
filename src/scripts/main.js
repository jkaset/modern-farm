import { createPlan } from './plan.js' 

const yearlyPlan = createPlan()

for (const plan of yearlyPlan) {
  console.log(plan)
}