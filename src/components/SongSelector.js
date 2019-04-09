import React from 'react';

const SongSelector = (props) => {
  const options = props.songs.map((song, index) => {
    return <option value ={index+1} key={index}>
    {song["feed"]["entry"]["im:name"]["label"]}</option>
  })

  function handleChange(event){
    props.handleSelected(event.target.value);
  }

  return (
    <select id="song-selector" defaultValue="default"
    onChange={handleChange}>
    <option disabled value="default">Choose a song...</option>
    {options}
    </select>
  )
}

export default SongSelector;
