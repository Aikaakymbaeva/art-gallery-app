import React from 'react';
import Navigation from './Navigation';

const Layout = ({ nav }) => {                          //NEU für die Navigation erstellt
  return (
    <div>
      <Navigation />
      {nav}
    </div>
  );
}

export default Layout