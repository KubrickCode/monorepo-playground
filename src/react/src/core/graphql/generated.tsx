import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  userCreate: Array<UserCreateResult>;
  userDelete: Array<UserDeleteResult>;
  userEdit: Array<UserEditResult>;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  input: UserDeleteInput;
};


export type MutationUserEditArgs = {
  input: UserEditInput;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type UserCreateInput = {
  name: Scalars['String']['input'];
};

export type UserCreateResult = {
  __typename?: 'UserCreateResult';
  user: User;
};

export type UserDeleteInput = {
  id: Scalars['Float']['input'];
};

export type UserDeleteResult = {
  __typename?: 'UserDeleteResult';
  user: User;
};

export type UserEditInput = {
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type UserEditResult = {
  __typename?: 'UserEditResult';
  user: User;
};

export type UserPageQueryVariables = Exact<{ [key: string]: never; }>;


export type UserPageQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string }> };

export type UserCreateMutationVariables = Exact<{
  input: UserCreateInput;
}>;


export type UserCreateMutation = { __typename?: 'Mutation', userCreate: Array<{ __typename?: 'UserCreateResult', user: { __typename?: 'User', id: number } }> };

export type UserEditMutationVariables = Exact<{
  input: UserEditInput;
}>;


export type UserEditMutation = { __typename?: 'Mutation', userEdit: Array<{ __typename?: 'UserEditResult', user: { __typename?: 'User', id: number } }> };

export type UserDeleteMutationVariables = Exact<{
  input: UserDeleteInput;
}>;


export type UserDeleteMutation = { __typename?: 'Mutation', userDelete: Array<{ __typename?: 'UserDeleteResult', user: { __typename?: 'User', id: number } }> };


export const UserPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UserPageQuery, UserPageQueryVariables>;
export const UserCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserCreateMutation, UserCreateMutationVariables>;
export const UserEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userEdit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserEditMutation, UserEditMutationVariables>;
export const UserDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserDeleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserDeleteMutation, UserDeleteMutationVariables>;