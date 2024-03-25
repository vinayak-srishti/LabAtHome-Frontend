import React from 'react'
import "../Component/signup.css"

function Signup() {
  return (
    <div>
        <div style={{backgroundColor:'whitesmoke',height:'700px'}}>
        <form>
            <div >
                <div style={{paddingTop:'200px'}} className="row position-absolute top-0 start-50 translate-middle-x g-4 ">
                <h1 >DOCTORS SIGNIN</h1> 
           
            
                <div class="col-md-6">
                    <input type="text" class="form-control" id="inputEmail4" placeholder='Name' />
                </div>
                <div class="col-md-6">
                    <input type="password" class="form-control" id="inputPassword4" placeholder='E-mail' />
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="inputEmail4" placeholder='Specification' />
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="inputPassword4" placeholder='Experience' />
                </div>
                <div class="col-md-6">
                    <label >Gender</label>
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label class="form-check-label" for="invalidCheck">Female</label>
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label class="form-check-label" for="invalidCheck">Male</label>
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="inputPassword4" placeholder='Age' />
                </div>
               
                <div class="col-md-6">
                    <input type="text" class="form-control" id="inputPassword4" placeholder='City' />
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="inputEmail4" placeholder='Contact' />
                </div>
                <div class="col-md-12">
                    <input type="text" class="form-control" id="inputEmail4" placeholder='Password' />
                </div>
                < div className='col-6'>
                <button className='btn btn-success'>SIGNIN</button>
                </div>
                
                
                
                </div>
               
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup