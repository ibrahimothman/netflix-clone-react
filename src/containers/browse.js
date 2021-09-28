import { useState, useEffect } from 'react'
import SelectProfileContainer from './select-profile'
import { useAuthListener } from '../hooks'
import Loading from '../components/loading'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'

function BrowseContainer({ slides }) {
    const user = useAuthListener()
    const [profile, setProfile] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [profile?.displayName])
    return(
        profile.displayName ? (
            <>
                {isLoading ? (
                    <Loading src={user.photoURL}/>
                ):(
                    <Loading.ReleaseBody />
                )}
                <Header src="joker1">
                    <Header.Container>
                        <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="logo"/>
                    </Header.Container>
                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    {/* <Header.PlayButton>Play</Header.PlayButton> */}

                    </Header.Feature>
                </Header>
            </>
        ): (
            <SelectProfileContainer user={user} setProfile={setProfile}/>
        )
    )

}

export default BrowseContainer
