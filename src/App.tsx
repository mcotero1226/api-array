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
      <div className="mx-10 grid lg:grid-cols-3 gap-11 items-center">
        {personajes.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800 text-white rounded-2xl shadow-lg w-[450px] h-[200px] flex flex-col items-center justify-center"
          >
            <img src={p.image} alt={p.name} className="w-24 h-24 rounded-full object-cover" />
            <h3 className="text-lg font-semibold mt-2">{p.name}</h3>
            <p className="text-sm text-gray-400">{p.location.name}</p>
            <p >{p.gender}</p>
            <p >{p.created}</p>

          </div>
        ))}
      </div>
      ))
    </>


  );
}



export default App;
