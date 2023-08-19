import './SidebarSkeleton.css'

function SidebarSkeleton() {
  return (
    <div className="main__sidebar sidebar">
      
      <div className="sidebar__skeleton">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <div className="sidebar__img-skeleton" />
          </div>
          <div className="sidebar__item">
            <div className="sidebar__img-skeleton" />
          </div>
          <div className="sidebar__item">
            <div className="sidebar__img-skeleton" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarSkeleton
