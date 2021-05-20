import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from '../services/Context'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Routes = () => {
  //  Fix assets uri problems
  const path = window.location.origin
  let basename
  path === 'http://localhost:3000' ? basename = '' : basename = '/Foxbel'

  return (
    <UserContext>
      <Router basename={basename}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </UserContext>
  )
}

export default Routes
