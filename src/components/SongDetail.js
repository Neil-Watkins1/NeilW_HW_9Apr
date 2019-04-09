import React from 'react';

const SongDetail = (props) => {
  if(!props.song) return null;

  return (
    <div>
    <h2>Title:{props["song"]["feed"]["entry"]["im:name"]["label"]}</h2>
    <h3>Artist:</h3>
    <h3>Chart Position:</h3>


    </div>

  )
}
export default SongDetail;
