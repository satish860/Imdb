import Card from "@/app/components/Card";
import Link from "next/link";
import React from "react";

const APIKEY = process.env.API_KEY;
async function page({ params }: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto space-x-4 space-y-2 py-2">
          {results.map((result: any) => {
            return (
              <Link key={result.id} href={`/movie/${result.id}`}>
                <Card  result={result} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default page;
