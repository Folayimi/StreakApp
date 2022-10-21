import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UserLogin from './Components/Login/UserLogin'
import ChatSpace from './Components/ChatSpace/ChatSpace';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route path="streak_app/login" element={<UserLogin/>}/>
            <Route path="streak_app/chatspace" element={<ChatSpace/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
