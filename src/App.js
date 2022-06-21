import React,  { Component } from 'react';

import Clarifai from 'clarifai';
import Navigation  from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Sunil from './components/Particles/Sunil';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';




const app = new Clarifai.App({
 apiKey: 'f508ef0468f84c0799ae23db15c2fa39'
});



class App extends Component {

     constructor() {
      super();
      this.state = {
        input : '',
        imageUrl : ''
      }
     }

     onInputChange = (event) => {
           this.setState({input: event.target.value});
     }

     onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input})
      app.models.predict(
          Clarifai.FACE_DETECT_MODEL, 
          this.state.input)
        .then(
        function(response) {
          console.log(response.output[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
          // there was an error
        }
           );
          
     }                                                              
                                                                
  render() {
  return (
    <div className="App">
      <Sunil />     
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm  
         onInputChange={this.onInputChange}  
         onButtonSubmit={this.onButtonSubmit}
      />    
      <FaceRecognition  imageUrl={this.state.imageUrl}/>
      
    </div>
  );
  }
}

export default App;
