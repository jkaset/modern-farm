export const plantSeeds = (yearlyPlan) => {
  for (const row of yearlyPlan) {
    for (const plot of row) {
      if (plot.type === "asparagus") {
        return createAsparagus();
      }
    }
  }

}



//let thisSeed = yearlyPlan[i][j]
// import { createAsparagus } from "./seeds/asparagus"
