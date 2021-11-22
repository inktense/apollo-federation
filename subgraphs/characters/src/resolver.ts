import { CharacterResolvers, QueryCharacterArgs } from './types'
import { getData } from './utils'

export const characterResolver: CharacterResolvers = {
  Query: {
    character: async (_parent: undefined, args: QueryCharacterArgs, context: any) => {
      const { id } = args

      const character = await getData(id)
      console.log(character.species)
      //const formattedCharacter = { ...otherProps}
     return character
    }, 
    characters: async (_parent: undefined, args: any, context: any) => {
      const characters = await getData()
      return characters?.results
    },

  }
}
