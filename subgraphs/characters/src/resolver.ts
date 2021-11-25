import { Character, Species, CharacterResolvers, QueryCharacterArgs } from './types'
import { getData } from './utils'

export const characterResolver: CharacterResolvers = {
  Query: {
    character: async (_parent: undefined, args: QueryCharacterArgs, context: any) => {
      const { id } = args

      const character = await getData(id)
     // console.log(character.species)
      //const formattedCharacter = { ...otherProps}
     return character
    }, 
    characters: async (_parent: undefined, args: any, context: any) => {
      const characters = await getData()
      console.log(characters?.results)
      return characters?.results
    },
  },
  Character: {
    species({ species }) {
      console.log('species, ', species)
      let test = []
      if(species?.length) {
        test = species.map((item) => {
          const substring = item?.split(/[//]/)
          const id = substring[substring.length - 2]
          console.log("item => ", id)
          return { __typename: "Species", id };
        })
      }
      console.log("test => ", test)
      return test
    }
  }
}
