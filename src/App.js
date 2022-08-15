import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Left_Menu/Navbar/Navbar';
import Profile from './components/Left_Menu/Profile/Profile';
import Dialogs from './components/Left_Menu/Message/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Left_Menu/Music/Music';
import Settings from './components/Left_Menu/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>

      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
