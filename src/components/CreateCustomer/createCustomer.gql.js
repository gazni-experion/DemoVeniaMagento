import { gql } from '@apollo/client';

export const CREATE_CUSTOMER = gql`
mutation createCustomer($firstname:String,$lastname:String,$email:String,$password:String,$subscribed:Boolean){
  createCustomer(
    input: {
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      is_subscribed: $subscribed
    }
  ) {
    customer {
      firstname
      lastname
      email
      is_subscribed
    }
  }
}
`