import { Console } from "console";
import Card from "./components/Card";

export const dynamic = "force-dynamic";

const APIKEY = process.env.API_KEY;

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";
  var url  = genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  var res = await fetch(
    `https://api.themoviedb.org/3/${url}?api_key=${APIKEY}&language=en-US&page=1`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }
  const data = await res.json();
  const results: any[] = data.results;
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto space-x-4 space-y-2 py-2">
      {results.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
}
