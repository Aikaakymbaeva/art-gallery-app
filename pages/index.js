import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function ArtPieces() {
  const { data, error } = useSWR("https://example-apis.vercel.app/api/art");

  function ArtPiecePreview({ name, slug, imageSource, artist }) {
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

  const pieces = data;
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          slug={piece.slug}
          imageSource={piece.imageSource}
          name={piece.name}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}
