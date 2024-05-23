import { gql } from "graphql-request";
import { getClient } from "../lib/graphQLClient";

export const getAllPosts = async () => {
  const client = getClient();

  const allPosts = await client.request(
    gql`
      query allPosts {
        publication(host: "avik.hashnode.dev") {
          title
          posts(first: 20) {
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                author {
                  name
                  profilePicture
                }
                title
                subtitle
                brief
                slug
                coverImage {
                  url
                }
                tags {
                  name
                  slug
                }
                publishedAt
                readTimeInMinutes
              }
            }
          }
        }
      }
    `
  );

  return allPosts;
};