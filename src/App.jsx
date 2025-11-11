
import './App.css'
import {HomePage,Login,Signup,PropertyListingPage,Notifications,MyProperties,PostProperty,MyProfile} from './Pages/PageIndex';

import { TopNavbar ,AboutUs,Help,Settings} from './Components/CompIndex';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/Home" replace />}/>
        <Route path='/Home' element={<><TopNavbar/><HomePage/></>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/properties/:type' element={<><PropertyListingPage/></>}/>
        <Route path='/AboutUs' element={<><TopNavbar/><AboutUs/></>}/>
        <Route path='/Help' element={<><TopNavbar/><Help/></>}/>
        <Route path='/Settings' element={<><TopNavbar/><Settings/></>}/>
        <Route path='/Notifications' element={<><TopNavbar/><Notifications/></>}/>
        <Route path='/MyProperties' element={<><TopNavbar/><MyProperties/></>}/>
        <Route path='/PostProperty' element={<><TopNavbar/><PostProperty/></>}/>
        <Route path='/MyProfile' element={<><TopNavbar/><MyProfile/></>}/>

        
      </Routes>
      </Router>
  )
}

export default App
