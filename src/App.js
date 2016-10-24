import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AudioList from './containers/Audio_List';
import ShowAudio from './components/show_audio';


var catalog = [
  {category: "Animal", title: "Bison", url: "http://www.noiseaddicts.com/samples_1w72b820/280.mp3"},
  {category: "Animal", title: "Chimpanzee", url: "http://www.noiseaddicts.com/samples_1w72b820/287.mp3"},
  {category: "Animal", title: "Raven", url: "http://www.noiseaddicts.com/samples_1w72b820/329.mp3"},
  {category: "Movie Quote", title: "An Offer He Can't Refuse", url: "http://www.noiseaddicts.com/samples_1w72b820/47.mp3"},
  {category: "Movie Quote", title: "Hal 9000: I'm Sorry Dave", url: "http://www.noiseaddicts.com/samples_1w72b820/55.mp3"},
  {category: "Sound Effect", title: "Darth Vader Breathing", url: "http://www.noiseaddicts.com/samples_1w72b820/3726.mp3"},
  {category: "Sound Effect", title: "Doorbell", url: "http://www.noiseaddicts.com/samples_1w72b820/3721.mp3"},
  {category: "Sound Effect", title: "Siren", url: "http://www.noiseaddicts.com/samples_1w72b820/3712.mp3"}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTitle: '',
      selectedCategory: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(el) {
    this.setState({
        selectedTitle: el.title,
        selectedCategory: el.category
    })
    var player = document.getElementById('player');
    player.src = el.url;
    player.play();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AudioList clickEvt={this.handleClick} catalog={catalog}/>
        <ShowAudio selectTitle={this.state.selectedTitle} selectCategory={this.state.selectedCategory}/>
      </div>
    );
  }
}

export default App;

