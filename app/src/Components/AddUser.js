import React, { Component } from 'react'

 class AddUser extends Component {
  render() {
    return (
      <div className='col-md-8 mb-4'>
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
      </div>
    )
  }
}
export default AddUser;