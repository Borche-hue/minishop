import { gql } from '@apollo/client'

const GET_DATA = gql `
query{
    categories{
        name
      products{
        id
        name
        inStock
        gallery
        description
        attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
        prices{
          currency{
            label
            symbol
          }
          amount
        }
        brand
      }
    }
    currencies{
     label
      symbol
    }
  }
`

export default GET_DATA;