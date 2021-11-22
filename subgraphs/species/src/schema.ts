import { gql } from 'apollo-server'

export const typeDefs = gql`

type Species @key(fields: "id"){
  id: ID
  # The name of this species.
  name: String 
  # The classification of this species, such as "mammal" or "reptile".
  classification: String
  # The designation of this species, such as "sentient".
  designation: String
  # The average height of this species in centimeters.
  averageHeight: String
  # The average lifespan of this species in years.
  averageLifespan: String
  # A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
  eyeColors: String
  # A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
  hairColors: String
  # A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
  skinColors: String 
  # The language commonly spoken by this species.
  language: String 
  # The URL of a planet resource, a planet that this species originates from.
  homeworld: String 
  # An array of People URL Resources that are a part of this species.
  characters: [String]
  # An array of Film URL Resources that this species has appeared in.
  films: [String] 
  # The hypermedia URL of this resource.
  url: String
  # The ISO 8601 date format of the time that this resource was created.
  created: String
}

extend type Query {
    species(id: ID!): Species
    allSpecies: [Species]
}
`
