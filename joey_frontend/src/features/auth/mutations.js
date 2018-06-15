import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation Login($input: LoginInputType!) {
    login(input: $input) {
      email
    }
  }
`;
