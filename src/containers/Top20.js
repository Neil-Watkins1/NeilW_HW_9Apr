import React, {Component} from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';


class Top20 extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs:[],
      selectedSong: null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this)
  }

componentDidMount(){
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  fetch(url)
  .then(res => res.json())
  .then(data => this.setState({songs: data.feed.entry}))
}



handleSongSelected(index){
  const selectedSong = this.state.songs[index];
  this.setState({selectedSong: selectedSong})
}

render(){

  return(
<div>
<h1>I-Tunes Top 20!</h1>
<h2>Song Selector</h2>
<SongSelector songs={this.state.songs}
handleSelected={this.handleSongSelected}/>

<SongDetail song={this.state.selectedSong}/>

</div>

);
}

}
export default Top20;
