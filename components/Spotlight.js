import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";

const Spotlight = ({ image, artist, name }) => (
  <div>
    <Image src={image} alt={name} width={800} height={800} />
    <p>Artist{artist}</p>
  </div>
);
export default Spotlight;
