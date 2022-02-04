import SidebarPlaces from './SidebarPlaces'
import ErrorBoundary from '../ErrorBoundary'


function Places() {
  return (
    <section className="places">
      <ErrorBoundary fallback="SidebarPlaces in Places is failing">
        <SidebarPlaces />
      </ErrorBoundary>
    </section>
  )
}

export default Places