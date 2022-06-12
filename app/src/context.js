import React, { Component } from 'react'

const UserContext = React.createContext();
// Provider, Consumer


export class UserProvider extends Component {
    state = {
        users: [
            {
                name : "Huseyn Ibadzade",
                salary : "5000",
                department : "Computer"
            },
            {
                name : "Zamin Ibadzade",
                salary : "9000",
                department : "Chemistrh"
            }
        ]
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