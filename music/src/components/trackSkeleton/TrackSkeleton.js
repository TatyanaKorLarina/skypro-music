import './TrackSkeleton.css'

function TrackSkeleton() {
  return (
    <div className="tracklist__item">
      <div className="tracklist__track track">
        <div className="track__title">
          <div className="track__title-image-skeleton" />
          <div className="track__title-text-skeleton" />
        </div>
        <div className="track__author-skeleton" />
        <div className="track__album-skleleton" />
      </div>
    </div>
  )
}

export default TrackSkeleton