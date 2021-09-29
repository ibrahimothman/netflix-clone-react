import { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
    Background,
    Container,
    Logo,
    ButtonLink,
    Feature,
    Text,
    PlayButton,
    FeatureCallOut,
    Link,
    Group,
    Picture,
    Profile,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput,

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

Header.TextLink = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>
}


Header.PlayButton = ({ children, ...restProps }) => {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Container = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = ({ children, ...restProps }) => {
    return <Group {...restProps}>{children}</Group>
}

Header.Picture = ({ ...restProps }) => {
    return <Picture {...restProps} />
}



Header.Profile = ({ children, ...restProps }) => {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown = ({ children, ...restProps }) => {
    return <Dropdown {...restProps}>{children}</Dropdown>
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


Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [isSearchActive, setIsSearchActive] = useState(false)
    return (
        <Search {...restProps}>
            <SearchIcon  onClick={() => setIsSearchActive(prev => !prev)}>
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>
            <SearchInput value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={isSearchActive}
            />
        </Search>
    )
}