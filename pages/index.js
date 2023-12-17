import useSWR from "swr";
import ArtPieces from "./components/ArtPieces";

export default function index (){


  const { data, error } = useSWR("https://example-apis.vercel.app/api/art");
  const pieces = data;                                          //NEU ist nun hier
    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;
 return (
  <div>
   <ArtPieces pieces={pieces} ></ArtPieces>                  {/*NEU hier wird nun pieces an ArtPieces übergeben*/}
  </div>
 )
}
