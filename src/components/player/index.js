import { useState, useContext, createContext } from 'react'
import ReactDom from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './styles/player'

const PlayerContext = createContext(null)

function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false)
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

export default Player


Player.Video = function PlayerVideo({ src, ...restProps}) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return showPlayer ? (
        ReactDom.createPortal(
            <Overlay>
                <Inner>
                    <video controls>
                        <source src={src} type="video/mp4"/>
                    </video>
                    <Close onClick={() => setShowPlayer(false)}/>
                </Inner>
            </Overlay>,
            document.body
            )
        ) : null

}

Player.Button = function PlayerButton({ ...restProps }) {
    const { setShowPlayer } = useContext(PlayerContext)
    return (
        <Button {...restProps} onClick={() => setShowPlayer(true)}>Play</Button>
    )
}
