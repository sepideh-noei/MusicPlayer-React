
import {useState} from 'react';
import player from './components/player';

function App() {
  const [songs , setSongs] = useState([
    {
      title:"Ahange shad",
      artist:"Ashavan",
      img_src:"./images/ashvan.jpg",
      src:"./music/Ashvan.mp3"
    },
    {
      title:"Zibay man",
      artist:"Hojatashrafzade",
      img_src:"./images/hojat-ashrafzade.jpg",
      src:"./music/Hojat Ashrafzade.mp3"
    },
    {
      title:"Asheghetam",
      artist:"Mohsenebrahimzade",
      img_src:"./images/mohsen-ebrahimzade.jpg",
      src:"./music/Mohsen Ebrahimzade.mp3"
    }
  ]);

  const [currentSongIndex, setcurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <player
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]} 
      />
    </div>
  );
}

export default App;
