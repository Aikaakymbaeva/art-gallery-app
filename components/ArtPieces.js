import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces?.map(
        (
          piece // Fragezeichen ist wichtig, damit der Code nicht abstürzt, wenn pieces noch nicht befüllt ist (also noch nicht geladen)
        ) => (
          <ArtPiecePreview
            key={piece.slug}
            slug={piece.slug}
            imageSource={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
          />
        )
      )}
    </div>
  );
}
