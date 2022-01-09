import './index.css'

const PasswordItem = props => {
  const {passwordItemDetails, isChecked, onDeleteItem} = props
  const {id, websiteUrl, username, passwordInput} = passwordItemDetails

  const initial = websiteUrl[0].toUpperCase()

  const initialClassNameList = [
    'red',
    'blue',
    'orange',
    'purple',
    'yellow',
    'green',
    'lightGreen',
  ]

  const initialBackgroundColor = `${
    initialClassNameList[
      Math.ceil(Math.random() * (initialClassNameList.length - 1))
    ]
  }`

  const passwordItem = isChecked ? (
    <p className="password-input">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-image"
    />
  )

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <div className="password-item-container">
      <li className="password-item">
        <div className={`initial-container ${initialBackgroundColor}`}>
          {initial}
        </div>
        <div className="details-container">
          <p className="website-url">{websiteUrl}</p>
          <p className="username">{username}</p>
          {passwordItem}
        </div>
        <div className="delete-button-container">
          <button
            type="button"
            className="delete-button"
            onClick={onClickDelete}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              className="delete-icon"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default PasswordItem
