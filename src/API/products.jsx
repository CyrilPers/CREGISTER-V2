import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothProducts = (userId, updatedProducts) => {
    const refDoc = doc(db, "users", userId)
    const newDoc = {
        username: userId,
        menu: updatedProducts,
    }
    setDoc(refDoc, newDoc)
}

export const getProducts = async (userId) => {
    const docRef = doc(db, "users", userId)

    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const { menu } = docSnapshot.data()
        return menu
    }
}