import { Suspense, lazy } from "react";
import * as ROUTES from './constants/routes'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from "./hooks";

const Home = lazy(() => import('./pages/home'))
const Browse = lazy(() => import('./pages/browse'))
const Login = lazy(() => import('./pages/login'))
const SignUp = lazy(() => import('./pages/signup'))

function App() {
  const user = useAuthListener()
  return (
    <Router>

      <Suspense fallback={<p>Loading...</p>}>

        <Switch>

          <IsUserRedirect user={user} redirectPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
            <Login />
          </IsUserRedirect>

          <IsUserRedirect user={user} redirectPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
            <SignUp />
          </IsUserRedirect>


          <Route path={ROUTES.HOME} component={Home} exact/>

          <ProtectedRoute user={user} redirectPath={ROUTES.SIGN_IN} path={ROUTES.BROWSE} exact>
            <Browse />
          </ProtectedRoute>

          <Route path={ROUTES.BROWSE} component={Browse} exact/>

        </Switch>

      </Suspense>
    </Router>
  );
}

export default App;
