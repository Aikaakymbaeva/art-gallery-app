import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/art-pieces/">Art Pieces</a>
        </li>
        <li>
          <a href="/">Spotlight</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
