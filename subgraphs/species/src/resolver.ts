import { Species, SpeciesResolvers, QuerySpeciesArgs, Character } from './types/schemaTypes'
import { SpeciesDTO } from './types/species'
import { getData } from './utils'

const formatSpecies = (responseData: SpeciesDTO): Species => {
  const {
    average_height: averageHeight,
    skin_colors: skinColors,
    hair_colors: hairColors,
    eye_colors: eyeColors,
    average_lifespan: averageLifespan,
    people,
    ...rest
  } = responseData

  return { 
    averageHeight,
    averageLifespan,
    eyeColors,
    hairColors,
    skinColors,
    characters: people as Character[],
    ...rest
  }
}

export const speciesResolver: SpeciesResolvers = {
  Query: {
    species: async (_parent: undefined, args: QuerySpeciesArgs, context: any): Promise<Species | null> => {
      const { id } = args

      try {
        const species: SpeciesDTO = await getData(id) as any
        const formatedSpecies: Species = formatSpecies(species)
        
        return formatedSpecies
      } catch (error) {
        console.log(`Error in Species resolver. ${error}`)
        return null
      }
    }, 

    allSpecies: async (_parent: undefined, args: any, context: any): Promise<Species[] | null> => {
      try {
        const species = await getData() as any
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
    async __resolveReference(reference: any) {
      const { id } = reference
      const species: SpeciesDTO = await getData(id) as any
      const formatedSpecies: Species = formatSpecies(species)

      return formatedSpecies
    },

    characters(reference: any) {
      const { characters } = reference
      let charactersArray = []
      if(characters?.length) {
        charactersArray = characters.map((item: any) => {
          const substring = item?.split(/[//]/)
          const id = substring[substring.length - 2]
          return { __typename: "Character", id };
        })
      }
      return charactersArray
    }
  }
}
