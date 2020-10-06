import React from "react";

export default class Display extends React.Component{
  constructor (props) {
    super(props);
  }

  render(){
    return(
      <div>
        <span> Counter value is {this.props.counter}</span>
      </div>
    )
  }
}

