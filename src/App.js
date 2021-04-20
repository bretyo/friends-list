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
    const friends = this.state.friends.map((friend, index)=>{
      return(
        <div key={ `friend-${ index }-${ friend.name }` }>
          <img id='cat' width='200px' height='120px'  src={friend.picture}  alt='friend' ></img>
          <span>{friend.name}</span>
        </div>
      )
    })
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
        {friends}
      </div>
    );
  }
}



export default App;
