import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Landing from "./components/pages/Landing";

import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { uiActions } from "./store/uiSlice";

import './App.css';
import Overview from "./components/pages/Overview";

const App = () => {
  const dispatch = useDispatch();

  const ShowSignIn = () => dispatch(uiActions.showSignIn());
  const ShowSignUp = () => dispatch(uiActions.showSignUp());

  return (
    <>
    <Navbar onShowSignIn={ShowSignIn} onShowSignUp={ShowSignUp}  />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/overview" element={<Overview />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App