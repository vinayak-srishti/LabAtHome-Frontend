import React from 'react'

function Login() {
  return (
    <div>
      <div className='container'>
      <form>
      <h1 style={{marginTop:'200px',marginLeft:'200px'}}>DOCTORS LOGIN</h1>
        <div className='row'>
          <div className='col-6'>
          <div className='row position-absolute top-0 start-50 translate-middle g-3' style={{ marginBottom: "100px" }}></div>
          <label style={{marginLeft:'200px',marginTop:'30px'}}>USER EMAIL</label>
          <div class="col-md-12" style={{marginLeft:'200px',marginTop:'9px'}}>
                    <input type="text" class="form-control" id="inputemail" placeholder='' />
                </div>
                <label style={{marginLeft:'200px',marginTop:'9px'}}>PASSWORD</label>
                <div class="col-md-12" style={{marginLeft:'200px',marginTop:'9px'}}>
                    <input type="text" class="form-control" id="inputpassword" placeholder='' />
                </div>
                <button type='button' className='btn btn-success' style={{marginLeft:'200px',marginTop:'9px'}}>LOGIN</button><br></br>
                
            
          </div>
        </div>
        <div>
          <label style={{marginLeft:'200px'}}>Don't have an Account?</label>
          <a href='localhost:3000/Register'> Register</a>
          <a href='localhost:3000/forgot' style={{marginLeft:'300px'}}>Forgot Password</a>
        </div>
       
       
      </form>
      </div>
        
    </div>
  )
}

export default Login