import { doc, getDoc } from "firebase/firestore"
import { db } from './firebase-config.jsx'

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", "Cyril")

    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
    }
} 