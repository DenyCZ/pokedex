"use server";

import { FETCH_TYPES } from "@/graphql/fetch-types";
import { getClient } from "@/lib/client";

export default async function fetchTypes() {
  const data = await getClient().query({
    query: FETCH_TYPES,
  });

  return data;
}
