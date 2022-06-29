import Header from "./components/UI/Header";

import './App.css';
import Offers from "./components/UI/Offers";
import BestRestaurants from "./components/UI/BestRestaurants";
import Footer from "./components/UI/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar";

const App = () => {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
        <Header />
        <Offers />
        <BestRestaurants />
        </>
      } />
    </Routes>
    <Footer />
    </>
  )
}

export default App