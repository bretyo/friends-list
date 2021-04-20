import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value){
    this.setState({ picture: value })
  }
  updateName(value){
    this.setState({ name: value })
  }

  addFriend(){
    const {friends, picture, name } = this.state;

    const newFriends = [...friends];
    newFriends.push({picture, name})

    this.setState({ friends : newFriends, picture: '', name: '' })

  }

  render(){
    return (
      <div>
        <label>
          <span>Picture:</span>
          <input value={this.state.picture} onChange={ (e) => this.updatePicture(e.target.value)}/>
        </label>
        <label>
          <span>Name:</span> 
          <input value={this.state.name} onChange={ (e) => this.updateName(e.target.value)}/>
        </label>
        <button onClick={()=> this.addFriend()}>Add Friend</button>
      </div>
    );
  }
}



export default App;
