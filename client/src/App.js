import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Landing from "./components/pages/Landing";
import Overview from "./components/pages/Overview";

import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/userSlice";
import { useEffect } from "react";

const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userActions.getUserFromSession());
  }, [dispatch]);
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={!isLoggedIn ? <Landing /> : <Navigate to='/overview' />} />
      {isLoggedIn && <Route path="/overview" element={<Overview />} />}
      {!isLoggedIn && <Route path="/overview" element={<Navigate to='/' />} />}
    </Routes>
    <Footer />
    </>
  )
}

export default App