import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UserSignin from './Components/Register/UserSignin'
import ChatSpace from './Components/ChatSpace/ChatSpace';
import LandingPage from './Components/LandingPage/LandingPage';
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
      <>
        <Router>
          <AnimatePresence mode="wait"> 
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<UserSignin/>}/>
            <Route path="/chatspace" element={<ChatSpace/>}/>
          </Routes>
          </AnimatePresence>
        </Router>
      </>
  );
}

export default App;
