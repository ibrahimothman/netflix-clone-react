import React from 'react'
import {Container, Title, SubTitle} from './styles/feature'

export default function Feature({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Feature.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = ({ children, ...restProps }) => {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

