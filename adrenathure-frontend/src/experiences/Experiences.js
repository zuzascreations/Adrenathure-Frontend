import useFetch from 'fetch-suspense'
import { Suspense } from 'react'
import { Link } from "react-router-dom"
import Loading from '../Loading'
import './Experiences.css'

function Experiences() {
  const experiences = useFetch('http://localhost:3000/experiences')

  return experiences && (
    <div className='experiences'>
      {experiences.length ?
        experiences.map(experience =>
          <div key={experience.id} className='articleExp'>
            <div className='photoArticle'>
              <img className='photoExperience' src={`http://localhost:3000/${experience.experiencePhoto}`} alt='foto experiencia'></img>
            </div>
            <div key={experience.id} >
              <Link to={'/experiences/' + experience.id} className='title-exp'>
                {experience.experienceName}
              </Link>
              <p>{'★★★★★☆☆☆☆☆'.substring(5 - experience.avgVote, 10 - experience.avgVote)}</p>
              <p className='experience-description'>{experience.experienceDescription}</p>
              <Link to={'/experiences/' + experience.id} className='button-exp'>
                descubrir más
              </Link>
            </div>
          </div>
        ) : <p>aun no hay experiencias, disculpe las molestias</p>}
    </div>
  )
}

const ExperiencesWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <Experiences />
  </Suspense>


export default ExperiencesWrapper
