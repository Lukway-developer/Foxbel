import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from '../services/Context'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Routes = () => {
  return (
    <UserContext>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </UserContext>
  )
}

export default Routes
