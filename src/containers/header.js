import React from 'react'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'

function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Container>
                <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="logo"/>
                <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
            </Header.Container>
            {children}
        </Header>
    )
}

export default HeaderContainer
