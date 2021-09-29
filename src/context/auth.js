import { createContext, useContext } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth'
import FirebaseContext from './firebase'

const AuthContext = createContext(null)


export function AuthContextProvider({ children }) {

    const { auth } = useContext(FirebaseContext)

    const logIn = async ({ emailAddress, password }) => {
        try {
            await signInWithEmailAndPassword(auth, emailAddress, password)
            return
        } catch (error) {
            throw new Error(error)
        }
    }

    const logOut = async() => {
        try {
            await signOut(auth)
        } catch (error) {
            throw new Error(error)
        }
    }

    const signUp = async ({ fullName, emailAddress, password }) => {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, emailAddress, password)
            await updateProfile(user, {
                displayName: fullName,
                photoURL: (Math.floor(Math.random() * 5) + 1).toString(),
            })
            return
        } catch (error) {
            throw new Error(error)
        }
    }
    const ctx = {
        logIn,
        logOut,
        signUp,
    }
    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext