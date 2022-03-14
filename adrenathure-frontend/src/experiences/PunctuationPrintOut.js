import useFetch from "../useFetch"


function PunctuationPrintOut() {
  const experienceId = useFetch('http://localhost:3000/experiences/')

  return experienceId && (
    <div className='punctuationPrintOut'>
      {experienceId.map(experience =>
        <span className="puntuacion">
        {'★★★★★☆☆☆☆☆'.substring(5 - experience.avgVote, 10 - experience.avgVote)}
        </span>
      )}
    </div>
  )
}

export default PunctuationPrintOut