import React, { Component } from 'react';
import PropTypes from "prop-types";
import UserConsumer from '../context';
import axios from 'axios';
class User extends Component {

  state = {
    isVisible : false
  }
  static defaultProps = {
    name : "No information",
    salary : "No information",
    department : "No information" 
  }
  
  onClickEvent = (e) =>{
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  onDeleteUser = async (dispatch,e) => {
    const {id} = this.props;
    await axios.delete(`http://localhost:3004/users/${id}`);
    // Consumer Dispatch
    dispatch({type : "DELETE_USER",payload : id});
  }

  componentWillUnmount() {
    console.log("Component Will Unmount")
  }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isVisible : false
  //   }
  // }

  render() {
    const {name,department,salary} = this.props;
    const {isVisible} = this.state;
    return (
      <UserConsumer>
        {
          value => {
            const {dispatch} = value;
            return (
              <div>
                <div className="col-md-8 mb-4">
                  <div className="card" style={isVisible ? {backgroundColor : "#014B58", color : "white"} : null}>
                    <div className="card-header d-flex justify-content-between">
                      <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4>
                      <i class="fas fa-trash-alt" onClick={this.onDeleteUser.bind(this,dispatch)} style={{cursor: "pointer"}}></i>
                    </div>
        
                    {
                      isVisible ?  <div className="card-body">
        
                      <p className="card-text">Salary : {salary}</p>
                      <p className="card-text">Department : {department}</p>
          
                      </div> : null
                    }
        
                    
                  </div>
                </div>
              </div>
            )

            
          }
        }
      </UserConsumer>)
    
  }
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}

export default User;