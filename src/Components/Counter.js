import React from "react";
import Display from './Display/Display'
import Button from './Button/Button'

export default class Counter extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      counter:0
    };
  }

  render() {
    const countInc = () => {
      this.setState({counter: this.state.counter+1});
    }
    const countDec = () => {
      this.setState({counter: this.state.counter-1});
    }
    return (
      <div>
        <Display counter={this.state.counter}/>
        <Button handleClick={countInc} countType={"Increment"}/>
        <Button handleClick={countDec} countType={"Decrement"}/>
      </div>
    );
  }

}
