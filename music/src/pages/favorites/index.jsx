import Tracklist from '../../components/tracklist/Tracklist'
import { useOutletContext } from 'react-router-dom'
export const FavoritesPage = () => {
  const [
    tracks,
    //setMyTracks,
    setCurrentTrack,
    currentTrack,
    isPlaying,
    setIsPlaying,
    setTrackIndex,
    tracksError,
    isLoading,
    myTracks,
    setMyTracks
  ] = useOutletContext()
  console.log(setMyTracks, tracksError, isLoading,tracks)
  return (
    <>
      {currentTrack && myTracks ? (
        <Tracklist
          tracks={myTracks}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setTrackIndex={setTrackIndex}
        />
      ) : (
        <div style={{ textAlign: 'start' }}>В этом плейлисте нет треков</div>
      )}
    </>
  )
}