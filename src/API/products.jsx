import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothProducts = (userId, updatedProducts) => {
    const refDoc = doc(db, "users", userId)
    const newDoc = {
        username: userId,
        menu: updatedProducts
    }
    setDoc(refDoc, newDoc)
}