import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/ArtPieces/">Art Pieces</a>
        </li>
        <li>
          <Link href="components/Spotlight.js">Spotlight</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
