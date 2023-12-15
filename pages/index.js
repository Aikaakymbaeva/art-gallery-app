import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ArtPieces() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
}

return {};

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
