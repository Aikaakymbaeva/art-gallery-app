import React from 'react';
import Link from 'next/link';

const Navigation = () => {                              //NEU die Navigation
  return (
    <nav>
      <Link href="/">
        <a>Spotlight</a>
      </Link>
      <Link href="/art-pieces">
        <a>Pieces</a>
      </Link>
    </nav>
  );
}

export default Navigation;