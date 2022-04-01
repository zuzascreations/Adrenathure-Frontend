import SidebarPlaces from './SidebarPlaces'
import PlacesMap from './PlacesMap'
import ErrorBoundary from '../ErrorBoundary'
import './Places.css'


function Places() {
  return (
    <div className='placesPage'>
      <div className="experiences">
        <ErrorBoundary fallback="SidebarPlaces in Places is failing">
          <SidebarPlaces />
        </ErrorBoundary>
      </div>
      <div className='mapPlaces'>
        <ErrorBoundary fallback="PlacesMap in Places is failing">
          <PlacesMap />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default Places
