import { useState, useEffect } from "react";
import type { Personaje } from "../App";
import type { ubicaciontipo } from "../App";

function useCount() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
}

function useapi(personajesapi: string, ubicacionapi: string) {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [ubicacion, setUbicacion] = useState<ubicaciontipo[]>([]);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const apis = async () => {
      try {
        const respuesta = await fetch(personajesapi);
        const data = await respuesta.json();
        setPersonajes(data.results);

        const repuestaapi = await fetch(ubicacionapi);
        const dataubi = await repuestaapi.json();
        setUbicacion(dataubi.results);
        console.log(dataubi)

      } catch (error) {
        console.error(error);
      } finally {
        setLogin(false);
      }
    };

    apis();
  }, [personajesapi, ubicacionapi]);

  return { personajes, ubicacion, login };
}

export { useapi };
export default useCount;
