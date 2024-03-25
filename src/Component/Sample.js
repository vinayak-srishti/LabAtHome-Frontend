// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';



// function Sample() {

    
//     const[ data,setdata]=useState({Email:"",Password:""})
//     const example=(a)=>{
//       console.log(a)
//     setdata({...data,[a.target.name]: a.target.value})
//     }
//     const onsubmit=(Event)=>{
//       Event.preventDefault()
//       if(data.Email=="abi@gmail.com"&data.Password=="12345"){
//     console.log("sucess");
//     alert("login sucess")}
//     else{
//         console.log("Failed");
//         alert("Not sucess")
//     }
//        console.log("save")
//     }
//     console.log(data)
//   return (
//     <div>
        
//         <section class="vh-100" className="exam">
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-12 col-md-8 col-lg-6 col-xl-5">
//         <div class="card shadow-2-strong"  className="exa">
//           <div class="card-body p-5 text-center">

//             <h3 class="mb-5">Sign in</h3>
// <form onSubmit={onsubmit}>
//             <div class="form-outline mb-4">
//               <input type="email" id="typeEmailX-2" class="form-control form-control-lg"  placeholder='Email or Phone number' onChange={example} name='Email'value={data.Email}/>
             
//             </div>

//             <div class="form-outline mb-4">
//               <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder='Password'onChange={example} name='Password'value={data.Password} />
             
//             </div>

            
//             <div class="form-check d-flex justify-content-start mb-4">
//               <input class="form-check-input" type="checkbox" value="" id="form1Example3"  />
//               <label class="form-check-label" for="form1Example3"> Remember password </label>
//               <a href="#!">Need Help?</a>
//             </div>
            
//             <button class="btn btn-primary btn-lg btn-block" type="submit" className='butt'>Login</button>

//             <hr class="my-4"/>

//             <button class="btn btn-lg btn-block btn-primary"  className="examm"
//               type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
//             <button class="btn btn-lg btn-block btn-primary mb-2"  className="exx"
//               type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
// </form>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }



// export default Sample