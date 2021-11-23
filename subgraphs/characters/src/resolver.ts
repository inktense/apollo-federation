import fetch from 'node-fetch'
import { Character, Species, CharacterResolvers, QueryCharacterArgs } from './types'
import { getData } from './utils'

const speciesUrl = "http://localhost:4000"

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
      return characters?.results
    },
  },
  Character: {
    async species(character: Character) {
      const { species } = character
      if(species?.length) {
        const test = await Promise.all (species?.map(async (item: string): Promise<any | undefined> => {
          const substring = item?.split(/[//]/)
          const id = substring[substring.length - 2]
          const res = await fetch(`${speciesUrl}/species`)
          const characterSpecies = res.json()
          console.log("test ", item, characterSpecies)
        }))
      }
   
      
      return { __typename: "Species", id: character.id}
    }
  }
}
