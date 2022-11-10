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
        <div className='app-wrapper-content'>
          <Routes>
            <Route className="menu" path="/dialogs/*" element={<Dialogs />} />
            <Route className="menu" path="/profile" element={<Profile />} />
            <Route className="menu" path="/music" element={<Music />} />
            <Route className="menu" path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
