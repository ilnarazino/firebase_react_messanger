import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from "./components/Navbar";
import './App.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { Countext } from "./index";


function App() {
  const { auth } = useContext(Countext);
  const [user] = useAuthState(auth);
  //console.log(loading)
  //if (loading) {
  //return <Loader />
  //}
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
