import React  from 'react'


function LoginForm() {

  return (
    <div className='App'>
        <form>
            <label>First Name</label>
            <input type='text' placeholder='Enter First Name'/> <br></br>

            <label>Last Name</label>
            <input type='text'placeholder='Enter Last Name'/><br></br>

            <label>Age:</label>
            <input type='number' placeholder='Enter age'/><br></br>
            </form> 

    </div>
  )
}

export default LoginForm