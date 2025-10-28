import { useEffect, useState } from "react"

type Personaje = {
  id: number;
  name: string;
  image: string;
  episode: string[];
  gender: string;
  location:{
    name:string
  }
  created:string;
  
}

type Ubicaciones = {
  id: number;
  name: string;
  dimension: string;
}

function App() {
  const personajesapi = "https://rickandmortyapi.com/api/character";
  const ubi = "https://rickandmortyapi.com/api/location";

  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [ubicacion, setUbicacion] = useState<Ubicaciones[]>([]);

  useEffect(() => {
    const apis = async () => {
      try {
        
        const respuesta = await fetch(personajesapi);
        const data = await respuesta.json();
        setPersonajes(data.results);

        
        const respUbi = await fetch(ubi);
        const ubidata = await respUbi.json();
        setUbicacion(ubidata.results);

      } catch (error) {
        console.error(error);
      }
    };

    apis();
  }, []);

  return (
       <>
      <h1>Personajes de Rick and Morty</h1>
      {personajes.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{p.name}</h3>
          <img src={p.image} alt={p.name} width={120} />
          <p>🧬 Género: {p.gender}</p>
          <p>🌍 Ubicación: {p.location.name}</p>
          <p>📅 Creado: {new Date(p.created).toLocaleDateString()}</p>

        </div>
      ))}
    </>


  );
}



export default App;
