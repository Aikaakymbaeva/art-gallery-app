import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import Layout from "./Layout";
import ArtPiecePreview from "./ArtPiecePreview";

function Spotlight({ image, artist, name }) {
  const getRandomPiece = () => {
    const random = Math.floor(Math.random() * pieces.length);
    return pieces[random];
  };

  const randomArtPiece = getRandomPiece();

  <div>
    <Image src={image} alt={name} width={800} height={800} />
    <p>Artist{artist}</p>
  </div>;

  return (
    <Layout>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
    </Layout>
  );
}

export default Spotlight;
