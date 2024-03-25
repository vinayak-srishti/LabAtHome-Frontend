import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from'./Component/forgot.js'
import Foo from'./Component/footer.js'
import Doctor from './Component/Doctor.js'
import Hom from './Component/Homepage.js'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Signup from './Component/Signup.js';
import Ds from './Component/Ds.js'
import Log from './Component/Login.js';
import Navbar from './Component/Nav.js'
import Staffreg from './Component/Staffreg.js';




function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/doctor' element={[<Navbar/>,<Doctor/>]}/>
        <Route path='/forgot' element={<Login/>}/>
        <Route path='/footer' element={<Foo/>}/>
        <Route path='/Nav' element={<Navbar/>}/>        
        <Route path='/signup' element={[<Navbar/>,<Signup/>,<Foo/>]}/>
        <Route path='/homepage' element={[< Navbar/>,<Hom/>,<Foo/>]}/>
        <Route path='/ds' element={<Ds/>}/>
        <Route path='/login' element={[<Navbar/>,<Log/>,<Foo/>]}/>
        <Route path='/staffreg' element={[<Navbar/>,<Staffreg/>,<Foo/>]}/>
       
      

      </Routes>
      

     
        

    </div>
    </BrowserRouter>
  );
}

export default App;
