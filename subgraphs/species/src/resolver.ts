import { Species, SpeciesResolvers, QuerySpeciesArgs } from './types/schemaTypes'
import { SpeciesDTO } from './types/species'
import { getData } from './utils'

const formatSpecies = (responseData: any): Species => {
  const {
    average_height: averageHeight,
    skin_colors: skinColors,
    hair_colors: hairColors,
    eye_colors: eyeColors,
    average_lifespan: averageLifespan,
    ...rest
  } = responseData

  return { 
    averageHeight,
    averageLifespan,
    eyeColors,
    hairColors,
    skinColors,
    ...rest
  }
}

export const speciesResolver: SpeciesResolvers = {
  Query: {
    species: async (_parent: undefined, args: QuerySpeciesArgs, context: any) => {
      const { id } = args

      try {
        const species: SpeciesDTO = await getData(id)
        const formatedSpecies: Species = formatSpecies(species)
        
        return formatedSpecies
      } catch (error) {
        console.log(`Error in Species resolver. ${error}`)
        return null
      }
    }, 

    allSpecies: async (_parent: undefined, args: any, context: any) => {
      try {
        const species = await getData()
        const formatedSpecies: [Species] = species.results.map((item: any) => {
          return formatSpecies(item)
        })

        return formatedSpecies
      } catch (error) {
        console.log(`Error in allSpecies resolver. ${error}`)
        return null
      }
    }
  },
  Species: {
    async __resolveReference(reference) {
      const { id } = reference
      const species: SpeciesDTO = await getData(id)
      const formatedSpecies: Species = formatSpecies(species)

      return formatedSpecies
    },

    character({character}) {
      console.log('character, ', character)
    }
  }
}
