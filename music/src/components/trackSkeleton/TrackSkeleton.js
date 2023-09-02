import * as S from './TrackSkeleton.styles'

function TrackSkeleton() {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImageSkeleton />
          <S.TrackTitleTextSkeleton />
        </S.TrackTitle>
        <S.TrackAuthorSkeleton />
        <S.TrackAlbumSkeleton />
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default TrackSkeleton