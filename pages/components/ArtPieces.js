import React from 'react';
import Spotlight from './Spotlight';
import Link from 'next/link';
import Image from "next/image";

export default function ArtPieces({ pieces }) {                    //NEU data und Error sind umgezogen und nun wird pieces hier eingesetzt
    //const { data, error } = useSWR("https://example-apis.vercel.app/api/art"); NEU: Wurde umgezogen zur Index

    function ArtPiecePreview({ name, slug, imageSource, artist }) {
        return (
            <div>
                <Link href={`/art-pieces/${slug}`}>
                    <ul>
                        <Image src={imageSource} alt={name} width={400} height={300} />
                        <li>{name}</li>
                        <li>{artist}</li>
                    </ul>
                </Link>
            </div>
        );
    }

    /*const pieces = data;                                                    // NEU ist umgezogen Index wie in der Aufgabe beschrieben
    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>; */

    //NEU zufälliges Spotlight Piece als function
    const getRandomPiece = () => {
        /**
         * Math.floor rundet ab, damit eine Zufallszahl innerhalb der länge des Arrays,
         * um ein randomBild wiedergeben zulassen
         */
        const random = Math.floor(Math.random() * pieces.length)
        return pieces[random]  // Nimmt ein Bild aus dem pieces-Array mit der ermittelten Zufallszahl als Index
    }

    const randomArtPiece = getRandomPiece(); // Speichere zufälliges Bild in eine Variable (randomArtPiece)
    
    return (

        <div>
            <Spotlight image={randomArtPiece.imageSource} // NEU hier übergebe ich das zufällige Bild
                artist={randomArtPiece.artist} />
            {pieces.map((piece) => (
                <ArtPiecePreview
                    key={piece.slug}
                    slug={piece.slug}
                    imageSource={piece.imageSource}
                    name={piece.name}
                    artist={piece.artist}
                />
            ))}
        </div>
    );
}