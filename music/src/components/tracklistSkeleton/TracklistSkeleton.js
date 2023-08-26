import * as S from './TracklistSkeleton.styles'
import TrackSkeleton from '../trackSkeleton/TrackSkeleton'

function TracklistSkeleton() {
  return (
    <S.ContentTracklist>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <TrackSkeleton key={n} />
      ))}
    </S.ContentTracklist>
  )
}

export default TracklistSkeleton