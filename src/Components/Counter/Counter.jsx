import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';
import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    value: 0,
  };

  handleCounter = type => {
    this.setState(prevState => {
      if (type === 'plus') {
        return { value: prevState.value + 1 };
      } else if (type === 'minus') {
        return { value: prevState.value - 1 };
      }
    });
  };

  render() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white" style={{ width: '600px' }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1 ">Counter</h5>
            <p className="card-text text-center" style={{ fontSize: '80px' }}>
              {this.state.value}
            </p>
            <div className="d-flex justify-content-center px-5">
              <button
                className="btn btn-outline-success me-5"
                onClick={() => this.handleCounter('plus')}
              >
                <BsPlusCircle size={24} />
              </button>
              <button
                className="btn btn-outline-danger ms-5"
                onClick={() => this.handleCounter('minus')}
              >
                <BsDashCircle size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
