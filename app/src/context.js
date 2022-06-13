import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer
const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !==user.id)
            }
        case "ADD_USER":
            return {
                ...state,
                users : [...state.users,action.payload]
            }
        default:
            return state
    }
}

export class UserProvider extends Component {
    state = {
        users: [
            {
                id: 1,
                name : "Huseyn Ibadzade",
                salary : "5000",
                department : "Computer"
            },
            {   id: 2,
                name : "Zamin Ibadzade",
                salary : "9000",
                department : "Chemistrh"
            }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
    }
  render() {
    return (
      <UserContext.Provider value = {this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;