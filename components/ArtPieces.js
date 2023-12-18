import Image from "next/image";
import Link from "next/link";
import React, { Children } from "react";
import Spotlight from "./Spotlight";
import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";
import Navigation from "./Navigation";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces?.map((piece) => ( // Fragezeichen ist wichtig, damit der Code nicht abstürzt, wenn pieces noch nicht befüllt ist (also noch nicht geladen)
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
