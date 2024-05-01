// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdata = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdata),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state
    return (
      <form className="form-control" onSubmit={this.submitForm}>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <input type="text" id="name" onChange={this.onChangeUsername} />
        <div>
          <label htmlFor="pass">password</label>
        </div>
        <input type="password" id="pass" onChange={this.onChangeUsername} />
        <button>Login</button>
      </form>
    )
  }
}
export default LoginForm
