import Tracklist from '../../components/tracklist/Tracklist'
import { useOutletContext } from 'react-router-dom'
export const FavoritesPage = () => {
  const [
    tracks,
    setTracks,
    location,
    likeInd,
    setLikeInd,
    setCurrentTrack,
    currentTrack,
    isPlaying,
    setIsPlaying,
    setTrackIndex,
    trackIndex,
    tracksError,
    isLoading,
    mySongs,
    setMySongs
  ] = useOutletContext()
  console.log(setMySongs, tracksError, isLoading,tracks)
  return (
    <>
      {currentTrack && mySongs ? (
        <Tracklist
          tracks={mySongs}
          setTracks={setTracks}
          mySongs={mySongs}
          setMySongs={setMySongs}
          location={location}
          setCurrentTrack={setCurrentTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setTrackIndex={setTrackIndex}
          trackIndex={trackIndex}
          likeInd={likeInd}
          setLikeInd={setLikeInd}
        />
      ) : (
        <div style={{ textAlign: 'start' }}>В этом плейлисте нет треков</div>
      )}
    </>
  )
}