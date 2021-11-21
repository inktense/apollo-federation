import { gql } from 'apollo-server'

export const typeDefs = gql`

type Character @key(fields: "id"){
    id: ID!
    name: String
    birthYear: String
    eyeColor: String
    skinColor: String
    gender: String
    height: Int
    mass: Int
}

extend type Query {
    character(id: ID!): Character
    characters: [Character]
}
`
