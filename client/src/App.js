import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Landing from "./components/pages/Landing";
import Overview from "./components/pages/Overview";

import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  console.log(isLoggedIn);
  // Navigating doesnt work
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/overview" element={isLoggedIn ? <Overview /> : <Navigate to='/' /> } />
    </Routes>
    <Footer />
    </>
  )
}

export default App