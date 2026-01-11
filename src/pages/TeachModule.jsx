import { useParams } from "react-router-dom";

export default function TeachModule() {
  const { skillId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Modules for Skill: {skillId}</h1>
      <p className="text-sm mt-2 text-gray-600">
        (Here we will show modules fetched from Firebase and a "Start Assessment" button)
      </p>
    </div>
  );
}
