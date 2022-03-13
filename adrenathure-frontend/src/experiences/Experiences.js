import useFetch from 'fetch-suspense'
import { Suspense, useEffect } from 'react'
import { Link } from "react-router-dom"
import Loading from '../Loading'
import './Experiences.css'

function Experiences() {
  const experiences = useFetch('http://localhost:3000/experiences')
console.log(experiences)
  return experiences && (
    <div className='experiences'>
      <div className='art'>
        {experiences.map(experience =>
          <div key={experience.id} className='articleExp'>
            <img className='photoExperience' src={`http://localhost:3000/${experience.experiencePhoto}`} alt='foto experiencia'></img>
            <article key={experience.id} >
              <Link to={'/experiences/' + experience.id} className='title-exp'>
                {experience.experienceName}
              </Link>
              <p className='description'>{experience.experienceDescription}</p>
              <p className='vote'>puntuación: {experience.avgVote}</p>
              <Link to={'/experiences/' + experience.id} className='button-exp'>
                descubrir mas
              </Link>
            </article>
          </div>
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