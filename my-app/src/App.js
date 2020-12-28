import React from "react";
import DiceOutput from './DiceOutput';
import FormInput from './FormInput';
import openSocket from 'socket.io-client';

// const ENDPOINT = "http://localhost:4001";
// const socket = openSocket(ENDPOINT);

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
  };

  render(){
    return (
    <div>
        <DiceOutput />
        <FormInput />
    </div>
    );
  }
}

export default App;