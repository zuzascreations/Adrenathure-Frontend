import SidebarPlaces from "./SidebarPlaces"
import SidebarExperiencesPlaceId from './SidebarExperiencesPlaceId'
import PlaceId from "./PlaceId"
import ErrorBoundary from "../ErrorBoundary"


function Place() {
  return (
    <div className="place">
      <ErrorBoundary fallback="SidebarPlaces in Place is failing">
        <SidebarPlaces />
      </ErrorBoundary>
      <ErrorBoundary fallback="PlaceId in Place is failing">
        <PlaceId />
      </ErrorBoundary>
      <ErrorBoundary fallback="SidebarExperiencesPlace in Place is failing">
        <SidebarExperiencesPlaceId />
      </ErrorBoundary>
    </div>
  )
}

export default Place