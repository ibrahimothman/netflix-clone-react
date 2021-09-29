import { useState, createContext, useContext } from 'react'
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Meta,
    Item,
    Image,
    Entities,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,

} from './styles/card'

const FeatureContext = createContext({})

function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>
                {children}
            </Container>
        </FeatureContext.Provider>
    )
}

export default Card

Card.Group = ({ children, ...restProps }) => {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = ({ children, ...restProps }) => {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}

Card.Entities = ({ children, ...restProps }) => {
    return <Entities {...restProps}>{children}</Entities>
}

Card.Meta = ({ children, ...restProps }) => {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)

    return (
        <Item {...restProps}
            onClick={() => {
                setShowFeature(true)
                setItemFeature(item)
            }}
        >
            {children}
        </Item>
    )
}

Card.Image = ({ ...restProps }) => {
    return <Image {...restProps} />
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)
    return (
        showFeature ? (
            <Feature {...restProps}
                src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/small.jpg`}
                >
                <Content>
                    <FeatureTitle>{itemFeature.title}</FeatureTitle>
                    <FeatureText>{itemFeature.description}</FeatureText>
                    <FeatureClose
                        onClick={() => setShowFeature(false)}
                        >
                        <img src="/images/icons/close.png" alt="Close" />
                    </FeatureClose>
                    <Group margin="30px 0" flexDirection="row" alignItems="center">
                        <Maturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                        </Maturity>
                        <FeatureText fontWeight="bold">
                            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                        </FeatureText>
                    </Group>
                    {children}
                </Content>

            </Feature>
        ): null
    )
}

