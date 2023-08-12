import React from 'react';
import AudioPlayer from './components/audioPlayer/AudioPlayer.js';
import NavMenu from './components/navMenu/NavMenu.js';
import Tracklist from './components/tracklist/Tracklist.js';
import Sidebar from './components/sidebar/Sidebar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <div className="container">
        <main className="main">
        <NavMenu />
        <Tracklist />
        <Sidebar />
        </main>
        <AudioPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
    </div>
  );
}

export default App;
