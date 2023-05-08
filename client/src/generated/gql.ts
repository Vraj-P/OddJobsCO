/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateListing($listingData: ListingInput!) {\n  createListing(listingData: $listingData) {\n    listingId\n  }\n}": types.CreateListingDocument,
    "mutation UpdateListing($listingData: ListingInput!) {\n  updateListing(listingData: $listingData) {\n    listingId\n  }\n}": types.UpdateListingDocument,
    "mutation LoginUser($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password) {\n    token\n  }\n}": types.LoginUserDocument,
    "mutation RegisterUser($name: String!, $password: String!, $phoneNumber: String!, $email: String!) {\n  registerUser(\n    name: $name\n    password: $password\n    phoneNumber: $phoneNumber\n    email: $email\n  ) {\n    token\n  }\n}": types.RegisterUserDocument,
    "query listing($listingId: Int!) {\n  listing(listingId: $listingId) {\n    listingId\n    title\n    description\n    completed\n    filters(listingId: $listingId) {\n      name\n      options {\n        name\n      }\n    }\n  }\n}": types.ListingDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateListing($listingData: ListingInput!) {\n  createListing(listingData: $listingData) {\n    listingId\n  }\n}"): (typeof documents)["mutation CreateListing($listingData: ListingInput!) {\n  createListing(listingData: $listingData) {\n    listingId\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateListing($listingData: ListingInput!) {\n  updateListing(listingData: $listingData) {\n    listingId\n  }\n}"): (typeof documents)["mutation UpdateListing($listingData: ListingInput!) {\n  updateListing(listingData: $listingData) {\n    listingId\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LoginUser($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password) {\n    token\n  }\n}"): (typeof documents)["mutation LoginUser($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password) {\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RegisterUser($name: String!, $password: String!, $phoneNumber: String!, $email: String!) {\n  registerUser(\n    name: $name\n    password: $password\n    phoneNumber: $phoneNumber\n    email: $email\n  ) {\n    token\n  }\n}"): (typeof documents)["mutation RegisterUser($name: String!, $password: String!, $phoneNumber: String!, $email: String!) {\n  registerUser(\n    name: $name\n    password: $password\n    phoneNumber: $phoneNumber\n    email: $email\n  ) {\n    token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query listing($listingId: Int!) {\n  listing(listingId: $listingId) {\n    listingId\n    title\n    description\n    completed\n    filters(listingId: $listingId) {\n      name\n      options {\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query listing($listingId: Int!) {\n  listing(listingId: $listingId) {\n    listingId\n    title\n    description\n    completed\n    filters(listingId: $listingId) {\n      name\n      options {\n        name\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;