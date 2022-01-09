import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordInputs extends Component {
  state = {
    passwordsList: [],
    websiteUrl: '',
    username: '',
    passwordInput: '',
    isChecked: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({websiteUrl: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswordItem = event => {
    event.preventDefault()
    const {websiteUrl, username, passwordInput} = this.state

    const newPasswordItem = {
      id: v4(),
      websiteUrl,
      username,
      passwordInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordItem],
      websiteUrl: '',
      username: '',
      passwordInput: '',
    }))
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onDeleteItem = id => {
    const {passwordsList} = this.state
    const updatedPasswordsList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordsList: updatedPasswordsList})
  }

  renderNoPasswordsPage = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-password-image"
      />
      <p className="no-passwords">No Passwords</p>
    </div>
  )

  render() {
    const {
      websiteUrl,
      username,
      passwordInput,
      passwordsList,
      searchInput,
      isChecked,
    } = this.state

    const updatedSearchPasswordsList = passwordsList.filter(eachPassword =>
      eachPassword.websiteUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = updatedSearchPasswordsList.length

    return (
      <div>
        <div className="password-inputs-container">
          <div className="add-inputs-container">
            <h1 className="heading">Add New Password</h1>
            <form className="input-form" onSubmit={this.onAddPasswordItem}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
                <input
                  className="input-item"
                  type="text"
                  value={websiteUrl}
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
                <input
                  className="input-item"
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-logo"
                />
                <input
                  className="input-item"
                  type="password"
                  value={passwordInput}
                  placeholder="Enter Password"
                  onChange={this.onChangePasswordInput}
                />
              </div>
              <div className="add-button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="your-passwords-box-container">
          <div className="your-password-search-container">
            <h1 className="your-password-heading">
              Your Passwords <span className="count">{count}</span>
            </h1>
            <div className="search-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search"
                className="input-item"
                onChange={this.onSearchInput}
              />
            </div>
          </div>
          <hr className="line-break" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="showPassword"
              onChange={this.onChecked}
              checked={isChecked}
            />
            <label htmlFor="showPassword">Show passwords</label>
          </div>
          {count === 0 ? (
            this.renderNoPasswordsPage()
          ) : (
            <ul className="password-ul-list">
              {updatedSearchPasswordsList.map(eachPassword => (
                <PasswordItem
                  key={eachPassword.id}
                  passwordItemDetails={eachPassword}
                  isChecked={isChecked}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordInputs
