import React, { Component } from 'react';
import PropTypes from "prop-types";

class User extends Component {

  state = {
    isVisible : false
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
      <div>
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <h4 className='d-inline'>{name}</h4>
              <i class="fas fa-trash-alt" style={{cursor: "pointer"}}></i>
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

User.defaultProps = {
  name : "No information",
  salary : "No information",
  department : "No information"
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired
}

export default User;