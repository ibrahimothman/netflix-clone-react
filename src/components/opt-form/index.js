import {
    Container,
    Input,
    Button,
    Text,
    Break,
} from './styles/opt-form'


function OptForm({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

OptForm.Input = ({ ...resProps }) => {
    return <Input {...resProps}/>
}

OptForm.Button = ({ children, ...resProps }) => {
    return (
        <Button {...resProps}>
            {children}
            <img src="/images/icons/chevron-right.png" alt="" />
        </Button>
    )
}

OptForm.Text = ({ children, ...resProps }) => {
    return <Text {...resProps}>{children}</Text>
}

OptForm.Break = ({ ...resProps }) => {
    return <Break {...resProps}/>
}

export default OptForm

