import './TracklistSkeleton.css'
import TrackSkeleton from '../trackSkeleton/TrackSkeleton'

function TracklistSkeleton() {
  return (
    <div className="content__tracklist tracklist">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
        <TrackSkeleton key={n} />
      ))}
    </div>
  )
}

export default TracklistSkeleton