import { useState, useContext } from 'react'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import Form from '../components/form'
import * as ROUTES from '../constants/routes'
import FirebaseContext from '../context/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom'

function Login() {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' || emailAddress === ''

    const { auth } = useContext(FirebaseContext)
    const history = useHistory()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const { user } = await signInWithEmailAndPassword(auth, emailAddress, password)
            history.push(ROUTES.HOME)
        } catch (error) {
            setEmailAddress('')
            setPassword('')
            setError(error.message)
        }
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sing In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleLogin}>
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
                                Sign In
                            </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to Netflix?{' '}<Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to enure you're not a bot. Learn more.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default Login
