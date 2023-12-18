import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  name,
  slug,
  imageSource,
  artist,
  genre,
  year,
}) {
  return (
    <div>
      <Image src={imageSource} alt={name} width={800} height={800} />
      <ul>
        <h2>{name}</h2>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
      <Link href="/art-pieces">
        <>
          <button>&lt; Back to Art Pieces</button>
        </>
      </Link>
    </div>
  );
}
