import React from "react";

export default class Display extends React.Component{
  constructor (props) {
    super(props);
  }

  render(){
    return(
      <div>
        <span> Time Left: {this.props.timer} sec</span>
      </div>
    )
  }
}

