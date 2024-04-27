import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import Todo from './components/Todo/Todo.js';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home.js';

function App() {
  const isLoggedIn = useSelector((state) => state.login.user !== null);
  const location = useLocation()
  const isHomePage = location.pathname === "/home"
  return (
    <div className="App">

      <Routes className="approutes">
        {/* <Route path="/" element={<Navigate replace to={isLoggedIn ? "/todo" : "/home"} />} />
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate replace to="/todo" />} />
        <Route path="/todo" element={isLoggedIn ? <Todo /> : <Navigate replace to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate replace to={isLoggedIn ? "/todo" : "/home"} />} /> */}
        <Route
          path="/"
          element={<Navigate replace to={isLoggedIn ? "/todo" : "/home"} />}
        />
        <Route
          path="/login"
          element={!isLoggedIn ? <Login isHomePage={isHomePage} /> : <Navigate replace to="/todo" />}
        />
        <Route
          path="/todo"
          element={isLoggedIn ? <Todo isHomePage={isHomePage} /> : <Navigate replace to="/login" />}
        />
        <Route path="/signup" element={<Signup isHomePage={isHomePage} />} />
        <Route path="/home" element={<Home isHomePage={isHomePage} />} />
        <Route
          path="*"
          element={<Navigate replace to={isLoggedIn ? "/todo" : "/"} />}
        />
      </Routes>

    </div>
  );
}

export default App;
