import { CharacterResolvers, QueryCharacterArgs } from './types'

// interface Resolvers {
//   Query: QueryResolvers<any>,
// }

export const characterResolver: CharacterResolvers = {
  Query: {
    character: (_parent: undefined, args: QueryCharacterArgs, context: any) => {
     console.log('id => ', args)
    }, 
    characters: (_parent: undefined, args: any, context: any) => {
      console.log("here")
    }
  }
}
