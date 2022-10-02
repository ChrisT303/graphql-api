import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      __id
      username
      email
      bookCount
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;
