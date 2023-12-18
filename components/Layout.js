import React from "react";
import ArtPieces from "./ArtPieces";
import Navigation from "./Navigation";
import Spotlight from "./Spotlight";
import ArtPiecePreview from "./ArtPiecePreview";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}