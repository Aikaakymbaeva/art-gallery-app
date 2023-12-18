import React from 'react';
import ArtPieces from '../../components/ArtPieces';

const ArtPiecesPage = () => {
  const { data, error } = useSWR("https://example-apis.vercel.app/api/art");                //NEU So könnte man es outsourcen evtl. ?!
  const pieces = data;

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}

export default ArtPiecesPage;