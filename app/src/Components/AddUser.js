import React, { Component } from 'react'
import posed from 'react-pose';

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
    visible : true
  }
  changeVisibiliclass = (e) => {
    this.setState({
      visible : !this.state.visible
    })
  }
  render() {
    const {visible} = this.state;
    return (
      <div className='col-md-8 mb-4'>

        <button className='btn btn-dark btn-block mb-2' onClick={this.changeVisibiliclass}>{visible ? "Hide Form" : "Show Form"}</button>
        <Animation pose = {visible ? "visible" : "hidden"}>
        <div className="card">
            <div className="card-header">
                <h4>Add User Form</h4>
            </div>
            <div className="card-body">

                <form>
                <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        name = "name"
                        id = "id"
                        placeholder='Enter Name'
                        class = "form-conrtol"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Pepartment</label>
                        <input type="text" 
                        department = "department"
                        id = "department"
                        placeholder='Enter Department'
                        class = "form-conrtol"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary</label>
                        <input type="text" 
                        department = "salary"
                        id = "salary"
                        placeholder='Enter Salary'
                        class = "form-conrtol"
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
export default AddUser;