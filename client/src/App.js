import Footer from "./components/UI/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import { useState } from "react";


import './App.css';
import Landing from "./components/pages/Landing";

const App = () => {

  const [formType, setFormType] = useState('');

  const showSignIn = () => {
    document.body.style.overflow = "hidden"
    setFormType('signin');
  }
  const showSignUp = () => {
    document.body.style.overflow = "hidden"
    setFormType('signup');
  }
  const hideModal = () => {
    document.body.style.overflow = "auto";
    setFormType('');
  }

  return (
    <>
    <Navbar onShowSignUp={showSignUp} onShowSignIn={showSignIn} />
    <Routes>
      <Route path="/" element={<Landing formType={formType} hideModal={hideModal} />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App