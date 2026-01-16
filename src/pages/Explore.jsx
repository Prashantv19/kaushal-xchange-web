import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function Explore() {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  const fetchSkills = async () => {
    console.log("Fetching skills...");
    const snap = await getDocs(collection(db, "skills"));
    console.log("Snapshot size:", snap.size);

    const list = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("Skills:", list);
    setSkills(list);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  async function handleLearn(skillId) {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first");
      return;
    }

    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      wishlist: arrayUnion(skillId),
    });

    alert("Added to wishlist");
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Explore Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="border bg-white p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold">{skill.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{skill.category}</p>
            <p className="text-sm text-gray-700 mb-4">{skill.description}</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleLearn(skill.id)}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Learn
              </button>

              <button className="px-3 py-1 bg-green-600 text-white rounded">
                Teach
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
