import { Character, Species, CharacterResolvers, QueryCharacterArgs } from './types'
import { getData } from './utils'

export const characterResolver: CharacterResolvers = {
  Query: {
    character: async (_parent: undefined, args: QueryCharacterArgs, context: any) => {
      const { id } = args

      const character = await getData(id)
     return character
    }, 
    characters: async (_parent: undefined, args: any, context: any) => {
      const characters = await getData()
      console.log(characters.results)
      return characters?.results
    },
  },
  Character: {
    async __resolveReference(reference) {
      console.log("ref" , reference)
      const { id } = reference
      const character = await getData(id)
      return character
    },

    species({ species }) {
      let test = []
      if(species?.length) {
        test = species.map((item) => {
          const substring = item?.split(/[//]/)
          const id = substring[substring.length - 2]
          return { __typename: "Species", id };
        })
      }
      return test
    }
  }
}
