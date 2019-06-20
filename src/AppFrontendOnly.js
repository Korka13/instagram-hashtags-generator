import React, { Component } from 'react';
import Clarifai from 'clarifai';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Hashtag from './components/Hashtag/Hashtag';
import './App.css';

const app = new Clarifai.App({
 apiKey: '7c5c25cee46c4f5594897ef56fc204c4'
});

const defaultImage = 'https://st.ilfattoquotidiano.it/wp-content/uploads/2018/03/03/instagram275.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(this.state.input);
      })
      .then(response => {
        this.setState({hashtags: response['outputs'][0]['data']['concepts'].map(concept => `#${concept.name.toLowerCase().replace(" ", "").replace("(", "").replace(")", "")}`)})
      })
      .catch(err => console.log(err));
  }

  render() {
    const { imageUrl, hashtags } = this.state;
    return (
      <div className="App">
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <ImageDisplay imageUrl={imageUrl} />
        <Hashtag hashtags={hashtags} />        
      </div>
    );
  }
}

export default App;
