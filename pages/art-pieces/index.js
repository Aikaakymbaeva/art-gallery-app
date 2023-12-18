import ArtPieces from "@/components/ArtPieces";


export default function artPiecesIndex({pieces}) {
    console.log(pieces)
    return (
        <ArtPieces pieces={pieces} />
    )
}