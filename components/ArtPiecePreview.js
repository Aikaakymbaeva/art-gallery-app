import Link from "next/link";
import Image from "next/image";
import ArtPieces from "./ArtPieces";
import useSWR from "swr";

function ArtPiecePreview({ name, slug, imageSource, artist }) {
  const { data, error } = useSWR("https://example-apis.vercel.app/api/art");
  const pieces = data;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <ul>
          <Image src={imageSource} alt={name} width={400} height={300} />
          <li>{name}</li>
          <li>{artist}</li>
        </ul>
      </Link>
    </div>
  );
}
export default ArtPiecePreview;
