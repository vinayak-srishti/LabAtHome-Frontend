import React from 'react'
import '../Component/Navbar.css'

function Navbar() {
  return (
    <div>
        
       <nav class="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-body-tertiary rounded fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand  headhrms" >LabNet</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse navoption" id="navbarSupportedContent" >
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"  style={{color:" black" }}>
      <li class="nav-item">
          <a class="nav-link navoption " href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navoption " href="#">ABOUT</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link navoption " href="#">CAREER</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link navoption" href="#">LOGIN</a>
        </li>
        </ul>
      
    </div>
  </div>
</nav>
        </div>
  )
}

export default Navbar

