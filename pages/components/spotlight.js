import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import React from 'react';


const spotlight =({image, artist}) => (                         //Spotlight erstellt mit den zwei Probs rendert Image und artist
    <div>                 
    <img src={image} alt="spotlight" />
        <p>Artist {artist}</p>                                 {/*interpolation damit der Artist wechseln kann*/}
    </div>
);




export default spotlight;