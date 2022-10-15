import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UserLogin from './Components/Login/UserLogin'
import ChatSpace from './Components/ChatSpace/ChatSpace';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path="/"/>
            <Route path="streak_app/login" element={<UserLogin/>}/>
            <Route path="streak_app/chatspace" element={<ChatSpace/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
