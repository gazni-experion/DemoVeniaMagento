import { gql } from '@apollo/client';

export const CONTACT_US = gql`
mutation contactUs($comment:String!, $email:String!, $name:String!, $phone: String){
 contactUs(
    input: {
      comment: $comment,
      email: $email,
      telephone: $phone,
      name: $name}
      ) {
    status
  }
}
`