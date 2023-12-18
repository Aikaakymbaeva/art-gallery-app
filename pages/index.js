import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({pieces, error}) {
  if (error) return <div>Error loading data</div>;
  if (!pieces) return <div>Loading...</div>;

  const getRandomPiece = () => {
    const random = Math.floor(Math.random() * pieces.length);
    return pieces[random];
  };

  const randomArtPiece = getRandomPiece();

  return (
    <div>
        <Spotlight image={randomArtPiece.imageSource} artist={randomArtPiece.artist} />  {/* Nur Spotlight soll auf index gerendert werden  */}
    </div>
  );
}
