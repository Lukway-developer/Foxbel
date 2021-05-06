import Logo from '../components/Logo'
import { loginUrl } from '../services/GetTokenFromURL'

const Login = () => {
  return (
    <main className='login'>
      <div className='login_card'>
        <Logo className='login_logo' theme='white' />
        <h2 className='login_text'>Por favor, Inicie Sesión</h2>
        <a className='login_button' href={loginUrl}>Con Spotify <i className='fab fa-spotify' /></a>
      </div>
    </main>
  )
}

export default Login
