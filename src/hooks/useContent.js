import { useState, useContext, useEffect } from 'react'
import FirebaseContext from '../context/firebase'
import { collection, getDocs, limit, query } from 'firebase/firestore'

function useContent(target) {

    const [content, setContent] = useState([])

    const { db } = useContext(FirebaseContext)

    useEffect(() => {

        async function getContentByTarget() {
            const allContent = []
            try {
                const q = query(collection(db, target), limit(3));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    allContent.push({
                        docId: doc.id,
                        ...doc.data()
                    })
                })

                setContent(allContent)

            } catch (error) {
                console.error('error while getting the content '+error.message)
            }
        }

        if(target) {
            getContentByTarget()
        }
    }, [target])

    return { [target]: content }
}

export default useContent
