import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesOverview({ pieces }) {
  console.log(pieces);
  return <ArtPieces pieces={pieces} />;
}
