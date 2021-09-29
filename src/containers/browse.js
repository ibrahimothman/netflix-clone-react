import { useState, useEffect, useContext } from 'react'
import SelectProfileContainer from './select-profile'
import { useAuthListener } from '../hooks'
import Loading from '../components/loading'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import AuthContext from '../context/auth'
import Card from '../components/card'
import FooterContainer from './footer'
import Player from '../components/player'
import Fuse from 'fuse.js'

function BrowseContainer({ slides }) {
    const user = useAuthListener()
    const [profile, setProfile] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [category, setCategory] = useState('films')
    const [slidesToShow, setSlidesToShow] = useState([])
    const { logOut } = useContext(AuthContext)


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [profile?.displayName])

    useEffect(() => {
        setSlidesToShow(slides[category])
    }, [slides, category])

    useEffect(() => {
        const fuse = new Fuse(slidesToShow, {
            keys: ['data.title', 'data.description', 'data.genre']
        })

        const results = fuse.search(searchTerm).map(({ item }) => item)

        if (slidesToShow.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlidesToShow(results)
        } else {
            setSlidesToShow(slides[category])
        }
    }, [searchTerm])


    const signOutHandler = async() => {
        try {
            logOut()
        } catch (error) {
            console.error(error.message)
        }
    }
    return(
        profile.displayName ? (
            <>
                {isLoading ? (
                    <Loading src={user.photoURL}/>
                ):(
                    <Loading.ReleaseBody />
                )}
                {/* header */}
                <Header src="joker1">
                    {/* header nav  */}
                    <Header.Container>
                        {/* logo and category (films & series) */}
                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="logo"/>
                            <Header.TextLink active={category === 'films'} onClick={() => setCategory('films')}>Films</Header.TextLink>
                            <Header.TextLink active={category === 'series'} onClick={() => setCategory('series')}>Series</Header.TextLink>
                        </Header.Group>
                        {/* profile & search */}
                        <Header.Group>
                            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Header.Search>
                            <Header.Profile>
                                <Header.Picture src={profile?.photoURL} />
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src={profile?.photoURL}/>
                                        <Header.TextLink>{profile?.displayName}</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={signOutHandler}>Sign Out</Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Container>
                    {/* feature on header */}
                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>

                    </Header.Feature>
                </Header>

                {/* cards */}
                <Card.Group>
                    {slidesToShow.map(slideItem => (
                        <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                            <Card.Title>{slideItem.title}</Card.Title>
                            <Card.Entities>
                                {slideItem.data.map(item => (
                                    <Card.Item key={item.docId} item={item}>
                                        <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                ))}
                            </Card.Entities>
                            {/* feature after click */}
                            <Card.Feature category={category}>
                                <Player>
                                    <Player.Button />
                                    <Player.Video src="/videos/bunny.mp4"/>
                                </Player>
                            </Card.Feature>
                        </Card>

                    ))}
                </Card.Group>

                <FooterContainer />

            </>
        ): (
            <SelectProfileContainer user={user} setProfile={setProfile}/>
        )
    )

}

export default BrowseContainer
