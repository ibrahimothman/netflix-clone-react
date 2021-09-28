import { Route, Redirect } from 'react-router-dom'

export function IsUserRedirect({ user, redirectPath, children, ...restProps }) {
    return (
        <Route {...restProps}
            render={() => {
                if (user) {
                    return (
                        <Redirect to={{
                            pathname: redirectPath
                        }}/>
                    )
                }

                if (!user) {
                    return children
                }

                return null
            }}
        >

        </Route>
    )

}

export function ProtectedRoute({ user, redirectPath, children, ...restProps }) {

    return (
        <Route {...restProps}
            render={({ location }) => {
                if (!user) {
                    return (
                        <Redirect to={{
                            pathname: redirectPath,
                            state: { from: location }
                        }}/>
                    )
                }

                if (user) {
                    return children
                }

                return null
            }}
        >

        </Route>
    )

}