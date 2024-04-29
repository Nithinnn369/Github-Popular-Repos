// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props

  const {name} = repositoryDetails
  const {imageUrl} = repositoryDetails
  const {starsCount} = repositoryDetails
  const {forksCount} = repositoryDetails
  const {issuesCount} = repositoryDetails

  return (
    <li className="repository-item">
      <img className="repository-image" src={imageUrl} alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="stats-icon"
          alt="stars"
        />
        <p className="stats-text">{starsCount} stars count</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          className="stats-icon"
          alt="forks"
        />
        <p className="stats-text">{forksCount} forks</p>
      </div>
      <div className="stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="stats-icon"
          alt="open issues"
        />
        <p className="stats-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
