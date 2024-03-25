import React from 'react'
import "../Component/homepage.css"
import Img from '../image/lab.jpg'

function Homepage() {
    return (
        <div>
            <div class="container-fluid p-0">
                <div class="owl-carousel header-carousel position-relative">
                    <div class="owl-carousel-item position-relative">
                        <img class="img-fluid" src={Img} alt="" />
                        <div
                            class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style={{ background: "rgba(43, 57, 64, .5);" }}
                        >
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-10 col-lg-8">
                                        <h1 class="display-3 text-black animated slideInDown mb-4">
                                            Welcome To{" "}
                                            <span class="text-success">
                                                <b>LabNet</b>
                                            </span>
                                        </h1>
                                        <p class="fs-5 fw-medium text-black mb-4 pb-2">
                                            Welcome to our platform where users can conveniently
                                            request tests, book appointments with doctors, and view
                                            their results. Admins can oversee all details, approve
                                            labs and doctors, while labs and doctors can manage their
                                            profiles, staff, and provide efficient services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div > <p style={{ paddingLeft: '100px', paddingTop: '400px', fontSize: '45px' }}>Welcome To LabNet </p>
                    <p style={{ paddingLeft: '100px', fontSize: '20px' }}>Welcome to our platform where users can convenientely request tests, book appointments with<br></br> doctors, and view their results.  admin can oversee all details approve doctors while<br></br> labs and doctors can manage their profiles, staff and provide efficient services.</p>
                </div> */}
        </div>

    )
}

export default Homepage