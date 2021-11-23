import fetch from 'node-fetch'

import { SpeciesResolvers, QuerySpeciesArgs } from './types'
import { getData } from './utils'

const apiUrl = "http://localhost:4000"

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
  },
  Species: {
    __resolveReference(ref) {
      console.log(ref)
      return fetch(`${apiUrl}/characters`).then(res => res.json());
    }
  }
}
