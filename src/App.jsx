
import './App.css'
import {HomePage,Login,Signup} from './Pages/PageIndex';
import { TopNavbar } from './Components/CompIndex';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/Home' element={<><TopNavbar/><HomePage/></>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </Router>
  )
}

export default App
