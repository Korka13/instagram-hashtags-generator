import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import Resizer from 'react-image-file-resizer';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import Switcher from './components/Switcher/Switcher';
import ImageSelector from './components/ImageSelector/ImageSelector';
import ButtonCopy from './components/ButtonCopy/ButtonCopy';
import Hashtags from './components/Hashtags/Hashtags';
import Footer from './components/Footer/Footer';
import './App.css';

const Element = Scroll.Element;
const scroller = Scroll.scroller;
const defaultImage = 'https://ui-ex.com/images/freeswimming-clipart-swimming-animal-1.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "upload",
      input: '',
      imageUrl: defaultImage,
      hashtags: [],
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    this.setState({hashtags: []});
    (event.target.value.match(/\.(jpg|jpeg|png|gif)$/i))
    ? this.setState({imageUrl: event.target.value})
    : this.setState({imageUrl: defaultImage})
  }

  onButtonSubmit = () => {
    fetch(process.env.REACT_APP_FETCH_LINK, {
      method: 'POST',
      headers: {Accept: 'application/json',
                'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    }).then(response => response.json())
      .then(response => {
        this.setState({hashtags: response['outputs'][0]['data']['concepts'].map(concept => `#${concept.name.toLowerCase().replace(" ", "").replace("(", "").replace(")", "")}`)})
      }).then(end => this.scrollTo())
      .catch(err => console.log(err));
  }

  scrollTo = () => {
    scroller.scrollTo('scroll-to-button', {
      duration: 800,
      delay: 1000,
      smooth: 'easeInOutQuart',
      offset: -5
    })
  }

  switchMode = (mode) => {
    mode === "link" ? this.setState({mode: "link"}) : this.setState({mode: "upload"});
    this.setState({input: ''});
    this.setState({hashtags: []});
    this.setState({imageUrl: defaultImage});
  }

fileChangedHandler = (event) => {
  var fileInput = false
  if(event.target.files[0]) {
      fileInput = true
  }
  if(fileInput) {
      Resizer.imageFileResizer(
          event.target.files[0],
          300,
          300,
          'JPEG',
          100,
          0,
          uri => {
              console.log(uri)
              this.setState({imageUrl: uri});
              const filteredResult = uri.split(',')[1];
              this.setState({input: filteredResult});
          },
          'base64'
      );
  }
}

  render() {
    const { imageUrl, hashtags } = this.state;
    const allHashtags = hashtags.join(' ');
    return (
      <div className="App">
        <div className="page-container">
          <div className="content-wrap">          
            <h1>Instagram Hashtags Generator</h1>
            <h2>Load your image and click the button to generate the hashtags!</h2>
            <Switcher switchMode={this.switchMode} />
            <ImageSelector onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} fileChangedHandler={this.fileChangedHandler} mode={this.state.mode} />            
            <ImageDisplay imageUrl={imageUrl} />
            {allHashtags.length ? <Element name="scroll-to-button"><ButtonCopy cssClass="AllHashtagsCopy" copyText={allHashtags} displayText="Click an hashtag to copy it, or click here to copy them all!" /></Element> : null}
            <Hashtags hashtags={hashtags} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
