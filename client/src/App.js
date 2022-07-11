import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Landing from "./components/pages/Landing";
import Overview from "./components/pages/Overview";
import Meals from './components/functionality/Meals';
import ReactPortal from "./components/utils/ReactPortal";
import Modal from "./components/utils/Modal";
import Cart from './components/functionality/Cart';

import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "./store/userSlice";
import { useEffect } from "react";

const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const showCart = useSelector(state => state.ui.showCart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(userActions.getUserFromSession());
  }, [dispatch]);
  return (
<>  
    <Navbar/>
    {showCart &&
    <ReactPortal wrapperId='modal'>
      <Modal>
        <Cart  />
      </Modal>
    </ReactPortal>
    } 
    <Routes>
      <Route path="/" element={!isLoggedIn ? <Landing /> : <Navigate to='/restaurants' />} />
      {<Route path="/restaurants" element={isLoggedIn ? <Overview /> : <Navigate to='/' />} />}
      {<Route path="/restaurants/:id" element={isLoggedIn ? <Meals /> : <Navigate to='/' />} />}
    </Routes>
    <Footer />
    </>
  )
}

export default App