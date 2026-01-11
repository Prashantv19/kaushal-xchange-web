import { skillsData } from "../data/skills";
import { useNavigate } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();

  const handleLearn = (skill) => {
    console.log("Learn clicked:", skill.name);
    // We will implement add-to-wishlist in Phase 16 (Firebase)
  };

  const handleTeach = (skill) => {
    console.log("Teach clicked:", skill.name);
    navigate(`/teach/${skill.id}`);
    // This route will show modules
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Explore Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map(skill => (
          <div key={skill.id} className="border bg-white p-4 rounded shadow-sm">
            <h2 className="text-lg font-semibold">{skill.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{skill.category}</p>
            <p className="text-sm text-gray-700 mb-4">{skill.description}</p>

            <div className="flex gap-2">
              <button
                onClick={() => handleLearn(skill)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Learn
              </button>

              <button
                onClick={() => handleTeach(skill)}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Teach
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
