import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'

import toys from './data.js'


class App extends React.Component{

  state = {
    display: false,
    toys: toys
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  createToy = (newToy) =>{
    console.log(newToy)
    

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm create={this.createToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
