
import AudioPlayer from './components/audioPlayer/AudioPlayer';
import NavMenu from './components/navMenu/NavMenu';
import Tracklist from './components/tracklist/Tracklist';
import Sidebar from './components/sidebar/Sidebar';
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
        <footer className="footer" />
      </div>
    </div>
    </div>
  );
}

export default App;
