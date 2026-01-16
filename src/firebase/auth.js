import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function createUser(name, email, password) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      wishlist: [],
      teachSkills: [],
      createdAt: new Date()
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export async function loginUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
