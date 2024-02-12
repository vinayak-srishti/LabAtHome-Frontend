import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Reg from './Component/Doctor.js'
import Login from'./Component/forgot.js'
import Foo from'./Component/footer.js'
import Hom from './Component/Home.js'
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/Doctor' element={<Reg/>}/>
        <Route path='/forgot' element={<Login/>}/>
        <Route path='/footer' element={<Foo/>}/>
        <Route path='/Home' element={[,<Hom/>]}/>
      </Routes>
      

     
        

    </div>
    </BrowserRouter>
  );
}

export default App;
