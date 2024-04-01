"use server";

import {FETCH_TYPES} from "@/graphql/fetch-types";
import {getClient} from "@/lib/client";
import {ApolloQueryResult} from "@apollo/client";

interface QueryResult {
  pokemonTypes: string[];
}

export default async function fetchTypes(): Promise<ApolloQueryResult<QueryResult>> {
  return await getClient().query({
    query: FETCH_TYPES,
  });
}
