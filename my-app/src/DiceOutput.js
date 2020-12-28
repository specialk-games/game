import React from "react";
import socket from './socketConfig'

class DiceOutput extends React.Component {
  constructor(props){
    super(props)
    this.state = {roll: ''}
  }

  componentDidMount(){
    socket.on("FromAPI", data => {
      this.setState({roll:data})
    });
  };

  componentDidUpdate(){
  };

  render(){
    return (
    <p>
      Dice roll: {this.state.roll}.
    </p>
    );
  }
}

export default DiceOutput;