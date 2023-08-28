import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from './firebase-config.jsx'
import { fakeMenu } from '../fakeData/fakeMenu'

export const getUser = async (userId) => {
    const docRef = doc(db, "users", "Cyril")

    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
    }
}

export const createUser = (userId) => {
    const docRef = doc(db, "users", userId)
    const newDoc = {
        username: userId,
        menu: fakeMenu.LARGE,
    }
    setDoc(docRef, newDoc)
}