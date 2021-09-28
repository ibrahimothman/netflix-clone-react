import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Feature,
    Text,
    PlayButton,
    FeatureCallOut

} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    return (
        bg ? <Background {...restProps}>{children}</Background> : children
    )
}

Header.Feature = ({ children, ...restProps }) => {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = ({ children, ...restProps }) => {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}


Header.PlayButton = ({ children, ...restProps }) => {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Container = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = ({ to, ...restProps }) => {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}

Header.Button = ({ to, children, ...restProps }) => {
    return (
        <ButtonLink to={to}>
            {children}
        </ButtonLink>
    )
}
