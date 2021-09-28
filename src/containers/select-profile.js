import React from 'react'
import * as ROUTES from '../constants/routes'
import Header from '../components/header'
import Profiles from '../components/profiles'

function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Container>
                    <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="logo"/>
                </Header.Container>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    })}>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}

export default SelectProfileContainer
