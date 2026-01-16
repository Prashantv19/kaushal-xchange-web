import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/firebase";

export default function Dashboard() {
  const [wishlist, setWishlist] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const unsub = onSnapshot(doc(db, "users", user.uid), (snap) => {
      const data = snap.data();
      setWishlist(data?.wishlist || []);
    });

    return () => unsub();
  }, [user]);

  if (!user) return <p className="p-6">Please Login first</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-3">Dashboard</h1>

      <h2 className="text-lg font-semibold mt-6">Wishlist (Want to Learn)</h2>
      {wishlist.length === 0 ? (
        <p>No wishlist items yet</p>
      ) : (
        <ul className="list-disc ml-5 mt-2">
          {wishlist.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
