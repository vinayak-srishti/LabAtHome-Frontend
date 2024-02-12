import React from 'react'
import "../Component/user.css"

function Doctor() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LabNet</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#" style={{ paddingLeft: '1150px' }}>HOME</a>
                            <a class="nav-link active" href="#">ABOUT</a>
                            <a class="nav-link active" href="#">LOGIN</a>

                        </div>

                    </div>
                </div>
            </nav>
            <div className='doctors'>
                <h1 style={{ marginRight: '120px' }}>DOCTORS LOGIN</h1><br></br>
            </div>
            <div class="container text-center">
                <div class="row-5 col-1">
                    <div class="col">
                        <div className='do'>
                            <div style={{ marginLeft: '435px', }}>USEREMAIL </div>
                            <div className='docinput'>
                            < input type='text' placeholder='' style={{ marginLeft: '435px' }}></input> </div></div>
                        <div>
                            <div style={{ marginLeft: '435px', }}>PASSWORD </div>


                            <input type='text' placeholder='' style={{ marginLeft: '435px', marginBottom: '9px' }}></input>  </div>
                        <button type="button" class="btn btn-success" style={{ marginLeft: '435px' }}>LOGIN</button>

                    </div>
                    <div class="col"></div>

                </div>
            </div>
            <div style={{ marginLeft: '550px' }}>Don't have an Account?
                <a href='localhost:3000/Register'>Register</a>
                <a href='localhost:3000/Register' style={{ marginLeft: '100px' }} >Forgot Password</a>
            </div><br></br>
            <div>

                <footer class="pt-lg-10 pt-5 footer bg-white" >
                    <div class="container">
                        <div class="row d-flex justify-content-between">
                           
                            <div class=" col-lg-4 col-md-4" >
                                <div class="mb-4">

                                    <h3 class="fw-bold mb-3">Company</h3>
                                    <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
                                        <li><a href="#" class="nav-link">About Us</a></li>
                                        <li><a href="#" class="nav-link">Contact Us</a></li>
                                        <li><a href="#" class="nav-link">Our Services</a></li>
                                        <li><a href="#" class="nav-link">Privacy Policy</a></li>
                                        <li><a href="#" class="nav-link">Terms & Condition</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 ">
                                <div class="mb-4">

                                    <h3 class="fw-bold mb-3">Quick Link</h3>
                                    <ul class="list-unstyled nav nav-footer flex-column nav-x-0">
                                        <li><a href="#" class="nav-link">About Us</a></li>
                                        <li><a href="#" class="nav-link">Contact Us</a></li>
                                        <li><a href="#" class="nav-link">Our Services</a></li>
                                        <li><a href="#" class="nav-link">Privacy Policy</a></li>
                                        <li><a href="#" class="nav-link">Terms & Condition</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">

                                <div class="mb-4">
                                    <h3 class="fw-bold mb-3">Contact</h3>
                                    <p>123 Street,New York, USA</p>
                                    <p> <span class="text-dark fw-semibold">+012 345 67890</span></p>
                                    <p class="mb-1"> <a href="#">info@example.com</a></p>


                                </div>
                            </div>
                        </div>

                    </div>
                </footer>


            </div>

        </div>





    )

}


export default Doctor