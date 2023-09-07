import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from './firebase-config.jsx'
import { fakeMenu } from '../fakeData/fakeMenu.js'
import { createUserFromApi, getUserIdFromApi } from "./users.jsx"

export const getUser = async (userId) => {
    const docRef = doc(db, "users", userId)

    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        console.log(userReceived)
        return userReceived
    }
}

export const createUser = async (userId) => {
    const docRef = doc(db, "users", userId)
    const newUser = {
        username: userId,
        menu: fakeMenu.LARGE,
    }
    await setDoc(docRef, newUser)
    return newUser
}


export const authentificateUser = async (username) => {
    const existingUser = await getUserIdFromApi(username)
    if (!existingUser) {
        return await createUserFromApi(username)
    }
    return existingUser
}