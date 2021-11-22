import { SpeciesResolvers, QuerySpeciesArgs } from './types'
import { getData } from './utils'

export const speciesResolver: SpeciesResolvers = {
  Query: {
    species: async (_parent: undefined, args: QuerySpeciesArgs, context: any) => {
      const { id } = args

      const species = await getData(id)
      //const formattedCharacter = { ...otherProps}
     return species
    }, 
    allSpecies: async (_parent: undefined, args: any, context: any) => {
      const species = await getData()
      return species?.results
    }
  }
}
