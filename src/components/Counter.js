import React, { Component } from 'react';

export default class Counter extends Component {

  incrementIfOdd = () => {
    if(this.props.state % 2 !== 0){
      this.props.inc();
    }
  }
  incrementAsync = () => {
    setTimeout(this.props.dec,1000);
  }

  render() {
    const {  inc, dec } = this.props;
    return (
      <p>
        Clicked: {this.props.state} times
        {' '}
        <button onClick={inc}>+</button>
        {' '}
        <button onClick={dec}>-</button>
        {' '}
        <button onClick={this.incrementIfOdd}>incrementIfOdd</button>
        {' '}
        <button onClick={this.incrementAsync}>incrementAsync</button>
      </p>
    )
  }
}
