import JumbotronContainer from "../containers/jumbotron"
import FooterContainer from "../containers/footer"
import FAQContainer from "../containers/faq"
import HeaderContainer from "../containers/header"
import OptForm from "../components/opt-form"
import Feature from "../components/feature"

function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch any where. Cancel any time</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address"></OptForm.Input>
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FAQContainer />
            <FooterContainer />
        </>
    )
}

export default Home
