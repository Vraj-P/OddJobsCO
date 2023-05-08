/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
};

export type CreateListing = {
  __typename?: 'CreateListing';
  completed?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<Maybe<FilterType>>>;
  listing?: Maybe<ListingType>;
  listingId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type DeleteListing = {
  __typename?: 'DeleteListing';
  id?: Maybe<Scalars['ID']>;
  listings?: Maybe<Array<Maybe<ListingType>>>;
};

export type FilterInput = {
  name: Scalars['String'];
  options?: InputMaybe<Array<InputMaybe<FilterOptionInput>>>;
};

export type FilterOptionInput = {
  name: Scalars['String'];
};

export type FilterType = {
  __typename?: 'FilterType';
  filterId: Scalars['ID'];
  name: Scalars['String'];
  options?: Maybe<Array<Maybe<OptionType>>>;
};

export type ListingInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
  description: Scalars['String'];
  filters?: InputMaybe<Array<InputMaybe<FilterInput>>>;
  listingId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type ListingType = {
  __typename?: 'ListingType';
  completed: Scalars['Boolean'];
  description: Scalars['String'];
  filters?: Maybe<Array<Maybe<FilterType>>>;
  listingId: Scalars['ID'];
  title: Scalars['String'];
  user: UserType;
};


export type ListingTypeFiltersArgs = {
  listingId: Scalars['Int'];
};

export type LoginUser = {
  __typename?: 'LoginUser';
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createListing?: Maybe<CreateListing>;
  deleteListing?: Maybe<DeleteListing>;
  loginUser?: Maybe<LoginUser>;
  registerUser?: Maybe<RegisterUser>;
  updateListing?: Maybe<UpdateListing>;
};


export type MutationCreateListingArgs = {
  listingData: ListingInput;
};


export type MutationDeleteListingArgs = {
  listingId?: InputMaybe<Scalars['ID']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationUpdateListingArgs = {
  listingData: ListingInput;
};

export type OptionType = {
  __typename?: 'OptionType';
  name: Scalars['String'];
  optionId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  filters?: Maybe<Array<Maybe<FilterType>>>;
  listing?: Maybe<ListingType>;
  listings?: Maybe<Array<Maybe<ListingType>>>;
  listingsByTitle?: Maybe<Array<Maybe<ListingType>>>;
  user?: Maybe<UserType>;
  userListings?: Maybe<Array<Maybe<ListingType>>>;
  users?: Maybe<Array<Maybe<UserType>>>;
};


export type QueryFiltersArgs = {
  listingId?: InputMaybe<Scalars['Int']>;
};


export type QueryListingArgs = {
  listingId: Scalars['Int'];
};


export type QueryListingsByTitleArgs = {
  title?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryUserListingsArgs = {
  userId: Scalars['Int'];
};

export type RegisterUser = {
  __typename?: 'RegisterUser';
  token?: Maybe<Scalars['String']>;
};

export type UpdateListing = {
  __typename?: 'UpdateListing';
  completed?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<Maybe<FilterType>>>;
  listingId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  bio: Scalars['String'];
  email: Scalars['String'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  listingSet: Array<ListingType>;
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  userId: Scalars['ID'];
  username: Scalars['String'];
};

export type CreateListingMutationVariables = Exact<{
  listingData: ListingInput;
}>;


export type CreateListingMutation = { __typename?: 'Mutation', createListing?: { __typename?: 'CreateListing', listingId?: string | null } | null };

export type UpdateListingMutationVariables = Exact<{
  listingData: ListingInput;
}>;


export type UpdateListingMutation = { __typename?: 'Mutation', updateListing?: { __typename?: 'UpdateListing', listingId?: string | null } | null };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'LoginUser', token?: string | null } | null };

export type RegisterUserMutationVariables = Exact<{
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'RegisterUser', token?: string | null } | null };

export type ListingQueryVariables = Exact<{
  listingId: Scalars['Int'];
}>;


export type ListingQuery = { __typename?: 'Query', listing?: { __typename?: 'ListingType', listingId: string, title: string, description: string, completed: boolean, filters?: Array<{ __typename?: 'FilterType', name: string, options?: Array<{ __typename?: 'OptionType', name: string } | null> | null } | null> | null } | null };


export const CreateListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listingId"}}]}}]}}]} as unknown as DocumentNode<CreateListingMutation, CreateListingMutationVariables>;
export const UpdateListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listingId"}}]}}]}}]} as unknown as DocumentNode<UpdateListingMutation, UpdateListingMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"phoneNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const ListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listingId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListingQuery, ListingQueryVariables>;