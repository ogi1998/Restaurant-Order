import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Landing from "./components/pages/Landing";
import Overview from "./components/pages/Overview";

import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector(state => state.user.token);


  // Navigating doesnt work
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/overview" element={token === '' ? <Navigate to='/' /> : <Overview />} />
      <Route path="/" element={<Landing />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App