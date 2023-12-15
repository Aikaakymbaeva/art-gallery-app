import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function ArtPieces() {
  const { data, error } = useSWR("https://example-apis.vercel.app/api/art");

  function ArtPiecePreview({ slug, image, title, artist }) {
    return (
      <div>
        <Link href={`/art-pieces/${slug}`}>
          <ul>
            <Image src={image} alt={title} />
            <li>{title}</li>
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
          image={piece.image}
          title={piece.title}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}
