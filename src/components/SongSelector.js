import React from 'react';
import SongDetail from './SongDetail';

const SongSelector = (props) => {
  const options = props.songs.map((song, index) => {
    return <option value ={index} key={index}>
    {song["im:name"]["label"]}</option>
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
