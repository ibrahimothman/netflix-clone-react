import { useState, useContext } from 'react'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import Form from '../components/form'
import * as ROUTES from '../constants/routes'
import AuthContext from '../context/auth'
import { useHistory } from 'react-router-dom'

function SignUp() {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' || emailAddress === '' || fullName === ''

    const { signUp } = useContext(AuthContext)
    const history = useHistory()

    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            await signUp({ fullName, emailAddress,  password});
            history.push(ROUTES.BROWSE)
        } catch (error) {
            setEmailAddress('')
            setFullName('')
            setPassword('')
            setError(error.message)
        }
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sing Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup}>

                        <Form.Input placeholder="Full name" type="tex"
                                    value={fullName}
                                    onChange={({ target }) => setFullName(target.value)}
                                />
                        <Form.Input placeholder="Email address" type="email"
                                value={emailAddress}
                                onChange={({ target }) => setEmailAddress(target.value)}
                            />
                            <Form.Input placeholder="Password" type="password"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                                autoComplete="off"
                            />
                            <Form.Submit
                                disabled={isInvalid}
                                type="submit"
                                >
                                Sign Up
                            </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user?{' '}<Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to enure you're not a bot. Learn more.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default SignUp
