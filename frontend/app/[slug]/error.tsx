"use client";

import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  //TODO: Include pokemon + question mark image
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => router.push("/")}>Go back</button>
    </div>
  );
}
