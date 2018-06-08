import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  }

  updateName(value) {
    this.setState({ name: value })
  }

  updatePicture(value) {
    this.setState({ picture: value })
  }

  addFriend() {
    let newFriends = this.state.friends.slice(0);
    newFriends.push({
      name: this.state.name,
      picture: this.state.picture
    })
    this.setState({
      friends: newFriends,
      name: '',
      picture: ''
    })
  }





  render() {

    const friends = this.state.friends.map((friend, i) => {
      return (
        <div key={ i + friend.name }>
          <img src={friend.picture} />
          <span>{friend.name}</span>

        </div>
      )
    })

    return (
      <div className="App">

        <input type="text"
          placeholder='Picture URL'
          onChange={(event) => this.updatePicture(event.target.value)}
          value={this.state.picture} />


        <input type="text"
          placeholder='Name'
          onChange={(event) => this.updateName(event.target.value)}
          value={this.state.name} />

        <button onClick={() => this.addFriend()}>Add Friend</button>

        {friends}
        
      </div>
    );
  }
}

export default App;
