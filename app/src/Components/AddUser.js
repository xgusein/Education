import React, { Component } from 'react'
import UserConsumer from "../context";
import posed from 'react-pose';
var uniqid = require('uniqid');
const Animation = posed.div({
    visible : {
        opacity: 1,
        applyAtStart : {
          display : "block" 
        }
    },
    hidden : {
      opacity : 0,
      applyAtEnd : {
        display : "none" 
      }
    }
});

 class AddUser extends Component {
  state = {
    visible : true,
    name : "",
    department : "",
    salary : "" 
  }
  changeVisibiliclass = (e) => {
    this.setState({
      visible : !this.state.visible
    })
  }

  changeInput = (e) => {
    this.setState({
      // name = "name"
      [e.target.name] : e.target.value
    })
  }
  addUser = (dispatch,e) => {
  e.preventDefault();
  const { name,department,salary } = this.state;

  const newUser = {
    id : uniqid(),
    name:name,
    salary:salary,
    department:department
  }
  dispatch({type : "ADD_USER",payload: newUser});
}
  // changeName = (e) => {
  //   this.setState({
  //     name : e.target.value
  //   })
  // }

  // changeDepartment = (e) => {
  //   this.setState({
  //     department : e.target.value
  //   })
  // }

  // changeSalary = (e) => {
  //   this.setState({
  //     salary : e.target.value
  //   })
  // }

  render() {
    const {visible,name,department,salary} = this.state;


    return <UserConsumer>
      {
        value => {
          const {dispatch} = value;
          return (
            <div className='col-md-8 mb-4'>
      
              <button className='btn btn-dark btn-block mb-2' onClick={this.changeVisibiliclass}>{visible ? "Hide Form" : "Show Form"}</button>
              <Animation pose = {visible ? "visible" : "hidden"}>
              <div className="card">
                  <div className="card-header">
                      <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
      
                      <form onSubmit={this.AddUser.bind(this.dispatch)}>
                      <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input type="text" 
                              name = "name"
                              id = "id"
                              placeholder='Enter Name'
                              class = "form-conrtol"
                              value={name}
                              onChange = {this.changeName}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="department">Department</label>
                              <input type="text" 
                              department = "department"
                              id = "department"
                              placeholder='Enter Department'
                              class = "form-conrtol"
                              value={department}
                              onChange = {this.changeDepartment}
                              />
                          </div>
                          <div className="form-group">
                              <label htmlFor="salary">Salary</label>
                              <input type="text" 
                              department = "salary"
                              id = "salary"
                              placeholder='Enter Salary'
                              class = "form-conrtol"
                              value={salary}
                              onChange = {this.changeSalary}
                              />
                          </div>
                          <button type='submiit' class = "btn btn-danger btn-block">Add User</button>
                      </form>
      
                  </div>
              </div>
              </Animation>
            </div>
          )
        }
      }
    </UserConsumer>

   
  }
}
export default AddUser;