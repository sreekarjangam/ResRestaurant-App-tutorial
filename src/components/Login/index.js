import {useState} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import './index.css'

const Login = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const getToken = () => {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('jwt_token='))

    return cookie ? cookie.split('=')[1] : undefined
  }

  const token = getToken()

  if (token !== undefined) {
    return <Redirect to="/" />
  }

  const onSubmitLogin = async event => {
    event.preventDefault()

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',

      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch('https://apis.ccbp.in/login', options)
      const data = await response.json()

      if (response.ok) {
        document.cookie = `jwt_token=${data.jwt_token}; path=/`
        history.replace('/')
      } else {
        setErrorMsg(data.error_msg)
      }
    } catch (error) {
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitLogin}>
        <h1>Login</h1>

        <label htmlFor="username">USERNAME</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>

        {errorMsg !== '' && <p className="error-message">{errorMsg}</p>}
      </form>
    </div>
  )
}

export default Login
