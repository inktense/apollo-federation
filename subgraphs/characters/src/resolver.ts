import { Character, Species, CharacterResolvers, QueryCharacterArgs } from './types'
import { getData } from './utils'

const formatCharacter = (responseData: any): Character => {
  const {
    birth_year: birthYear,
    skin_colors: skinColors,
    hair_colors: hairColors,
    eye_colors: eyeColors,
    ...rest
  } = responseData

  return { 
    birthYear,
    eyeColors,
    hairColors,
    skinColors,
    ...rest
  }
}

export const characterResolver: CharacterResolvers = {
  Query: {
    character: async (_parent: undefined, args: QueryCharacterArgs, context: any): Promise<Character> => {
      const { id } = args

      const character = await getData(id)
      const formatedCharacter: Character = formatCharacter(character)
     return formatedCharacter
    }, 

    characters: async (_parent: undefined, args: any, context: any): Promise<Character[]> => {
      const characters = await getData()
      return characters?.results
    },
  },
  Character: {
    async __resolveReference(reference: any) {
      const { id } = reference
      const character = await getData(id)
      return character
    },

    species({ species }) {
      let speciesArray = []
      if(species?.length) {
        speciesArray = species.map((item: any) => {
          const substring = item?.split(/[//]/)
          const id = substring[substring.length - 2]
          return { __typename: "Species", id };
        })
      }
      return speciesArray
    }
  }
}
