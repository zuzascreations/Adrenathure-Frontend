import SidebarPlaces from './SidebarPlaces'
import PlacesMap from './PlacesMap'
import ErrorBoundary from '../ErrorBoundary'


function Places() {
  return (
    <div>
      <section className="places">
        <ErrorBoundary fallback="SidebarPlaces in Places is failing">
          <SidebarPlaces />
        </ErrorBoundary>
      </section>
      <div>
        <ErrorBoundary fallback="PlacesMap in Places is failing">
          <PlacesMap />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default Places