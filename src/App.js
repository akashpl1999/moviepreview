import logo from './logo.svg';
import './App.css';
//import Calucater from './Components/Calucater';

import Cal from './Components/Cal'
//import Display from './Components/Display';
import Vote from './Components/Vote';
//import { Movie } from '@material-ui/icons';
import Movie from './Components/Movie';
import Navbar from './Components/Navbar'
import Movieover from './Components/Movieover';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Fav from './Components/Fav';
import Login from './Components/Login'
import Register from './Components/Register'
import  Profile from './Components/Profile';
import Warn from './Components/Warn';
import Weather from './Components/Weather';

function App() {


  const toggle = useSelector(state => state.data.toggle)
  //const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;


  return (

    <div className={`App ${toggle ? 'dark' : 'light'}`}>


      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/home"  element={<Movie/>}></Route>
          <Route path="/movie/:movieid" element={<Movieover />}></Route>
          <Route path="/fav" element={<Fav />}></Route>
          <Route path="/cal" element={<Cal />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Reg" element={<Register />}></Route>

          <Route path="/profile" element={<Profile/>} ></Route> 

          <Route path="/weather" element={<Weather/>} ></Route> 


        </Routes>


      </BrowserRouter>




    </div>
  );
}

export default App;
