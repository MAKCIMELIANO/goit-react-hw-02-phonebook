import './App.css';

import Header from './Components/Header/Header';
import Modal from './Components/Modal/Modal';

import React, { Component } from 'react';
import ToDoList from './Components/ToDoList/ToDoList';
import FormLogin from './Components/FormLogin/FormLogin';

export default class App extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div className="App">
        <Header showModal={this.showModal} />
        <ToDoList />

        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin />
          </Modal>
        )}
      </div>
    );
  }
}
