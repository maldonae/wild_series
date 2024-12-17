import { useEffect, useState } from "react";

// Définir un type pour les programmes (si tu veux utiliser TypeScript)
type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const [program, setProgram] = useState<Program[] | []>([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/programs/")
      .then((res) => res.json())
      .then((program) => setProgram(program));
  });
  return (
    <div>
      <h1>Liste des series</h1>
      {program.length > 0 ? (
        <ul>
          {program.map((program) => (
            <li key={program.id}>
              <h2>{program.title}</h2>
              <p>{program.synopsis}</p>
              <img src={program.poster} alt={program.title} />
              <p>
                {program.year} - {program.country}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun programme disponible.</p>
      )}
    </div>
  );
}

export default Programs;
