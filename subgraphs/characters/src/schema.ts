import { gql } from 'apollo-server'

export const typeDefs = gql`

type Character @key(fields: "id"){
    id: ID
    # The name of this character.
    name: String
    # The birth year of the character, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope
    birthYear: String
    # The eye color of this character. Will be "unknown" if not known or "n/a" if the person does not have an eye.
    eyeColor: String
    # The skin color of this character.
    skinColor: String
    # The gender of this character. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
    gender: String
    # The height of the character in centimeters.
    height: String
    # The mass of the character in kilograms.
    mass: String
}

extend type Query {
    character(id: ID!): Character
    characters: [Character]
}
`
