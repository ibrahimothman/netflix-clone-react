import { createContext } from "react";
import { db, auth } from '../lib/firebase.prod'


const FirebaseContext = createContext(null)

export function FirebaseContextProvider({children}) {
    return (
        <FirebaseContext.Provider value={{db, auth}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseContext