import Image from "next/image";
import Link from "next/link";
import React, { Children } from "react";
import Spotlight from "./Spotlight";
import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";
import Navigation from "./Navigation";

export default function ArtPieces({ pieces }) {
  const getRandomPiece = () => {
    const random = Math.floor(Math.random() * pieces.length);
    return pieces[random];
  };

  const randomArtPiece = getRandomPiece();

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
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
