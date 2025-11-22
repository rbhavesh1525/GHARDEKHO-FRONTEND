import './App.css'
import {
  HomePage, PropertyListingPage, Notifications, MyProperties,
  PostProperty, MyProfile, ChatPage, Login, Signup, OTPVerification,PropertyDetail,PopularOwnerProperties,Projects,
  MostVisitedProperties
} from './Pages/PageIndex';

import {
  TopNavbar, AboutUs, Help, Settings, TestimonialsSection
} from './Components/CompIndex';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminSetting from './AdminDashboard/AdminSetting';
import AdminProfile from './AdminDashboard/AdminProfile';
import AdminHelp from './AdminDashboard/AdminHelp';

import { useState } from "react";

function App() {

  const location = useLocation();  

  const [signupData, setSignupData] = useState(null);


  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openOTP, setOpenOTP] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  const hideNavbarRoutes = ["/adminhome","/adminsetting","/adminprofile","/adminhelp"];

  return (
    <>
      <div id="recaptcha-container"></div>
      {!hideNavbarRoutes.includes(location.pathname.toLowerCase()) && (
        <TopNavbar
          onOpenLogin={() => setOpenLogin(true)}
          onOpenSignup={() => setOpenSignup(true)}
        />
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/allProperties" element={<PropertyListingPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/MyProperties" element={<MyProperties />} />
        <Route path="/PostProperty" element={<PostProperty />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Testimonials" element={<TestimonialsSection />} />
        <Route path="/Chat" element={<ChatPage />} />
        <Route path="/propertydetails" element={<PropertyDetail />} />
        <Route path='/Projects' element={<><Projects/> </>}/>

        {/*  admin side*/}
        <Route path="/adminhome"  element={<AdminDashboard />} />
        <Route path="/adminsetting" element={<AdminSetting />} />
        <Route path="/adminProfile" element={<AdminProfile />} />
        <Route path="/adminhelp" element={<AdminHelp />} />


      </Routes>

      {/* Modals */}
      <Login
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        onOpenSignup={() => {
          setOpenLogin(false);
          setOpenSignup(true);
        }}
      />

      <Signup
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        onOpenLogin={() => {
          setOpenSignup(false);
          setOpenLogin(true);
        }}
        onOpenOTP={(data) => {

          setMobileNumber(data.phone);
          setOpenSignup(false);
          setOpenOTP(true);
        }}
      />

    <OTPVerification
  open={openOTP}
  mobile={mobileNumber}
  signupData={signupData}
  onClose={() => setOpenOTP(false)}
  onChangeNumber={() => {
    setOpenOTP(false);
    setOpenSignup(true);
  }}
  onVerify={(otp) => console.log("Verify OTP:", otp)}
  onResend={() => console.log("Resend OTP")}
/>

    </>
  );
}

export default App;
