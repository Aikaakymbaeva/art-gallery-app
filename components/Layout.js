import React from "react";
import ArtPieces from "./ArtPieces";
import Navigation from "./Navigation";
import Spotlight from "./Spotlight";
import ArtPiecePreview from "./ArtPiecePreview";

/* function Layout() {
  return <Navigation />;
}
export default Layout; */
function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
