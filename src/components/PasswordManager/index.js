import {Component} from 'react'

import PasswordInputs from '../PasswordInputs'

import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password-manager-logo"
        />
        <PasswordInputs />
      </div>
    )
  }
}

export default PasswordManager
