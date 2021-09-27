import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){ 
    super(props)
    this.state = {
      monsters : [
        {
          name: 'Frank',
          id: 'asc1'
        }, 
        {
          name: 'Flintoff',
          id: 'asc2'
        },
        {
          name: 'Mark',
          id: 'asc3'
        },
        {
          name: 'Micheal',
          id: 'asc4'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.monsters.map((monster) => {
            return <h1 key = {monster.id}>{monster.name}</h1>
          })
        }      
      </div>
    )
  }
}

export default App;
