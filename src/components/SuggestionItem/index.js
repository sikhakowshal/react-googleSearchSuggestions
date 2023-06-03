import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, getSuggestion} = props
  const {suggestion} = eachSuggestion

  const onClickArrowBtn = () => {
    getSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow-btn" type="button" onClick={onClickArrowBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
