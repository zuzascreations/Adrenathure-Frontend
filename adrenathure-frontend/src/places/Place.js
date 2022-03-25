import SidebarPlaces from "./SidebarPlaces"
import PlaceId from "./PlaceId"
import ErrorBoundary from "../ErrorBoundary"
import './Place.css'


function Place() {
  return (
    <div className="place">
      <ErrorBoundary fallback="SidebarPlaces in Place is failing">
        <SidebarPlaces className="sidebar"/>
      </ErrorBoundary>
      <div >
        <ErrorBoundary className="space-place" fallback="PlaceId in Place is failing">
          <PlaceId />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default Place