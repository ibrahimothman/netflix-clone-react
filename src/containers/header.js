import React from 'react'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import { useAuthListener } from '../hooks'

function HeaderContainer({ children }) {
    const user = useAuthListener()
    return (
        <Header>
            <Header.Container>
                <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="logo"/>
                {user ? (
                    <Header.Button to={ROUTES.BROWSE}>Browse</Header.Button>
                ):(
                    <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
                )}
            </Header.Container>
            {children}
        </Header>
    )
}

export default HeaderContainer
