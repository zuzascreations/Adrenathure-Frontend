import useFetch from 'fetch-suspense'
import { Suspense } from 'react'
import { Link } from "react-router-dom"
import Loading from './Loading'
import './Experiences.css'

function Experiences() {
  const experiences = useFetch('http://localhost:3000/experiences')
  return experiences && (
    <div className='experiences'>
      <div className='articles'>
        {experiences.map(experience =>
          <article key={experience.id} className='articleExperience'>
            <img className='photoExperience' src={`http://localhost:3000/${experience.photo}`} alt='foto experiencia'></img>
            <Link to={'/experiences/' + experience.id} className='title-experience'>
              {experience.experienceName}
            </Link>
            <p>...</p>
            <p>{experience.experienceDescription}</p>
          </article>
        )}
      </div>
    </div>
  )
}

const ExperiencesWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <Experiences />
  </Suspense>


export default ExperiencesWrapper