import React from "react";
import socket from './socketConfig'

class FormInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {value:'',ack:''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    socket.on("Ack", data => {
      this.setState({ack:data})
    });
  };

  componentDidUpdate(){
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Submitted: ' + this.state.value);
    socket.emit('FromClient',this.state.value)
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <p>Ack: {this.state.ack}</p>
      </form>
    );
  }
}

export default FormInput;