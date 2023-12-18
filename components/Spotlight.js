import React from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
      <div>
        <Image src={image} alt={"Spotlight image by " + artist} width={800} height={800} />
        <p>Artist{artist}</p>
      </div>
  );
}