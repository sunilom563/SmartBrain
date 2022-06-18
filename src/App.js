import React,  { Component } from 'react';


import Navigation  from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Sunil from './components/Particles/Sunil';





class App extends Component {
  render() {
  return (
    <div className="App">
      <Sunil />     
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm />    
      
    </div>
  );
  }
}

export default App;
