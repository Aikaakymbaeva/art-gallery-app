import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPiecesDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log("pieces", pieces);

  const piecesIndex = pieces?.find((piece) => piece.slug === slug);

  if (!piecesIndex) {
    return (
      <div>
        <p>Error: could not load art</p>
      </div>
    );
  }
  return <ArtPieceDetails {...piecesIndex} />;
}
