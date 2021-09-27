import React from 'react'
import { Item, Inner, Container, Pane, Title, SubTitle, Image } from './styles/jumbotron'

function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function({ children, ...restProps }) {
    return (<Container {...restProps}>{children}</Container>)
}

Jumbotron.Pane = function({ children, ...restProps }) {
    return (<Pane {...restProps}>{children}</Pane>)
}

Jumbotron.Title = function({ children, ...restProps }) {
    return (<Title {...restProps}>{children}</Title>)
}

Jumbotron.SubTitle = function({ children, ...restProps }) {
    return (<SubTitle {...restProps}>{children}</SubTitle>)
}

Jumbotron.Image = function({ ...restProps }) {
    return (<Image {...restProps}/>)
}
export default Jumbotron
