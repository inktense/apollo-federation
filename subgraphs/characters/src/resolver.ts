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
    character: async (_parent: undefined, args: QueryCharacterArgs, context: any): Promise<Character| null> => {
      const { id } = args

      try {
        const character = await getData(id)
        const formatedCharacter: Character = formatCharacter(character)

        return formatedCharacter
      } catch (error) {
        console.log(`Error in Character resolver. ${error}`)
        return null
    }
    }, 

    characters: async (_parent: undefined, args: any, context: any): Promise<Character[] | null> => {
      try {
      const characters = await getData()
      const formatedCharacters: [Character] = characters.results.map((item: any) => {
        return formatCharacter(item)
      })

      return formatedCharacters
      } catch (error) {
        console.log(`Error in allSpecies resolver. ${error}`)
        return null
      }
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
