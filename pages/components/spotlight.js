import React from 'react';
import Image from "next/image";


const Spotlight = ({ image, artist }) => (                         //NEU Spotlight erstellt mit den zwei Probs rendert Image und artist
    <div>
        <Image src={image} width={700} height={700} />          {/* Hier wird das SpotlightBild übergeben und mit einer größe definiert*/}
        <p>Artist {artist}</p>                                 {/*NEU interpolation damit der Artist wechseln kann*/}
    </div>
);





export default Spotlight;