let plants = []

export const addPlant = (seed) => {
  plants.push(seed)
  return plants
}

export const usePlants = () => {
  return plants.slice()
}


