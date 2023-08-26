import * as S from './Traclist.styles'
import Track from '../track/Track';



function Tracklist() {
  return (

      <S.ContentPlaylist>
      <Track
        trackTitle="Guilt"
        trackAuthor="Nero"
        trackAlbum="Welcome Reality"
        trackTime="4:44"
      />
      <Track
        trackTitle="Elektro"
        trackAuthor="Dynoro, Outwork, Mr. Gee"
        trackAlbum="Elektro"
        trackTime="2:22"
      />
      <Track
        trackTitle="Im Fire"
        trackAuthor="Ali Bakgor"
        trackAlbum="Im Fire"
        trackTime="2:22"
      />
      <Track
        trackTitle="Non Stop (Remix)"
        trackAuthor="Стоункат, Psychopath"
        trackAlbum="Non Stop"
        trackTime="4:12"
      />
      <Track
        trackTitle="Run Run (feat. AR/CO)"
        trackAuthor="Jaded, Will Clarke, AR/CO"
        trackAlbum="Run Run"
        trackTime="2:54"
      />
      <Track
        trackTitle="Eyes on Fire (Zeds Dead Remix)"
        trackAuthor="Blue Foundation, Zeds Dead"
        trackAlbum="Eyes on Fire"
        trackTime="5:20"
      />
      <Track
        trackTitle="Mucho Bien (Hi Profile Remix)"
        trackAuthor="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        trackAlbum="Mucho Bien"
        trackTime="3:41"
      />
      <Track
        trackTitle="Knives n Cherries"
        trackAuthor="minthaze"
        trackAlbum="Captivating"
        trackTime="1:48"
      />
      <Track
        trackTitle="Knives n Cherries"
        trackAuthor="minthaze"
        trackAlbum="Captivating"
        trackTime="1:48"
      />
      <Track
        trackTitle="How Deep Is Your Love"
        trackAuthor="Calvin Harris, Disciples"
        trackAlbum="How Deep Is Your Love"
        trackTime="3:32"
      />
      <Track
        trackTitle="Morena"
        trackAuthor="Tom Boxer"
        trackAlbum="Soundz Made in Romania"
        trackTime="3:36"
      />
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg>
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  <S.TrackTitleSpan /></S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
            <S.TrackAuthorLink href="http://" >
                  <S.TrackAuthorSpan /></S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
            <S.TrackAlbumLink href="http://" >
                  <S.TrackAlbumSpan /></S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText />
            </S.TrackTime>
          </S.PlaylistTrack>
        
      </S.ContentPlaylist>
    
  
  );
}

export default Tracklist;