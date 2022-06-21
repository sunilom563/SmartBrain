import React,  { Component } from 'react';

import Clarifai from 'clarifai';
import Navigation  from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Sunil from './components/Particles/Sunil';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';




const app = new Clarifai.App({
 apiKey: 'b32c4d2b297f49fca43735e3cc4cc16a'
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
          this.setState({imageUrl:this.state.input});
          app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            this.state.input
          )
          .then(
            function(response) {
              console.log(response);
            },
            function(err) {
              console.log(err);
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
