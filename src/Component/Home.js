import React from 'react'
import "../Component/Home.css"
import footer from '../Component/footer.js'

function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LabNet</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#" style={{ paddingLeft: '1150px' }}>HOME</a>
                            <a class="nav-link active" href="#">ABOUT</a>
                            <a class="nav-link active" href="#">LOGIN</a> </div>
                            </div>
                       

                   
                </div>
            </nav>
        <div className='img'>
         <div className='Para'> <p style={{paddingLeft:'100px',paddingTop:'400px',fontSize:'45px'}}>Welcome To LabNet </p>
         <p style={{paddingLeft:'100px',fontSize:'20px'}}>Welcome to our platform where users can convenientely request tests, book appointments with<br></br> doctors, and view their results.  admin can oversee all details approve doctors while<br></br> labs and doctors can manage their profiles, staff and provide efficient services.</p>
         </div>
        </div>
        <div>
        {/* <div class="card" style={{width:'900px'}}>
          <img src="gallery-05.jpg" class="card-img-top" alt="image"/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            
            </div>
  </div> */}
   
  <div>
    <p style={{paddingLeft:'800px',fontSize:'30px',paddingTop:'100px'}}>Reliable and Hight-Quality <br></br>Laboratoray</p>
    <p style={{paddingLeft:'800px'}}>Our mission is to connect users with trusted labs and healthcare professionals,<br></br> providing them with seemless access to quality tests, appointments and reliable <br></br>results all in one place. We are committed to ensuring a user friendly experience, <br></br>prioritizing privacy and security of personal information. With a strong emphasis on<br></br> efficiency and accuracy, we strive to enhance the overall healthcare journey for our<br></br> users and contribute to their well-being.</p>
    <p style={{paddingLeft:'820px'}}>Convenient online access for scheduling appointments and accessing test results.</p>
    <p style={{paddingLeft:'820px'}}>Aliqu diam amet diam et eos</p>
    <p style={{paddingLeft:'820px'}}>Personalized care through skilled doctors and healthcare professionals</p>
  </div>
  <footer/>
</div><br></br><br></br><br/>

               
       
     
    
    </div>
  
  )
}

export default Home