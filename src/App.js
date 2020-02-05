import React from 'react';

import './App.css';

class App extends React.Component {
  state={
    counter: 0,
    colour: "Burgundi",
  }
  greeting = ()=>{
    alert('hello')
  }
  increment =() =>{
    this.setState({
      counter: this.state.counter +1
    });
  }
  decrement =() =>{
    this.setState({
      counter: this.state.counter -1
    })
  }
  // changeColour = ()=>{
  //   this.setState({
  //   colour: this.state.colour = "Crimson"
        
  //   })
  // }
  changeColour = ()=>{
    let colour = this.state.colour; //Crimson
    if(colour == "Burgundi"){
      this.setState({
        colour: "Crimson"
      })
    }else {
      this.setState({
        colour: "Burgundi"
      })
    }
  }
  render(){
    return(
      <div>
      <h1>My first Web page with react classes</h1>
      <h1>My current counter is {this.state.counter}</h1>
      <h1>My favourite colour is {this.state.colour}</h1>
      <button onClick= {this.greeting}>Submit</button>
      <button onClick= {this.increment}>Increment the counter</button>
      <button onClick= {this.decrement}>Decrement the counter</button>
      <button onClick= {this.changeColour}>Change colour</button>
      </div>
    )
  }
}

export default App;
