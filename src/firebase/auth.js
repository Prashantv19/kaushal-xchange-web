import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// REGISTER
export async function registerUser(name, email, password) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      wishlist: [],
      teachSkills: [],
      skillAcquired: [],
      activeCourses: [],
      createdAt: new Date()
    });

    return { success: true, user };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// LOGIN
export async function loginUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// GET USER DATA
export async function getUserData(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  
  if (!snap.exists()) return null;
  return snap.data();
}
