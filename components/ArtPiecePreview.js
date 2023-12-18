import Link from "next/link";
import Image from "next/image";
import ArtPieces from "./ArtPieces";

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
export default ArtPiecePreview;
