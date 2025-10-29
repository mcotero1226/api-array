import { useapi } from './customhooks/usetate';
import usecount from './customhooks/usetate';

export type Personaje = {
  id: number;
  name: string;
  image: string;
  gender: string;
  location: { name: string };
  created: string;
};

export type ubicaciontipo = {
  id: number;
  name: string;
  dimension: string;
};

function App() {
  const personajesapi = "https://rickandmortyapi.com/api/character";
  const ubicacionapi = "https://rickandmortyapi.com/api/location";
  const { personajes, ubicacion, login } = useapi(personajesapi, ubicacionapi);
  const { count, increment, decrement } = usecount();

  if (login) return <p className="text-center mt-10">Cargando datos...</p>;

  return (
    <>
      <h1 className="text-3xl font-black text-center mb-4">:O ,Rick and Morty</h1>

      {/* 🔹 Sección de personajes */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {personajes.map((p) => (
          <div key={p.id} className="bg-gray-800 text-white p-4 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
            <img src={p.image} alt={p.name} className="mx-auto w-32 h-32 rounded-full mb-2" />
            <p>🌍 {p.location.name}</p>
            <p>📅 {new Date(p.created).toLocaleDateString()}</p>
          </div>
        ))}
      </section>
      <h1 className='text-3xl font-bold text-center mt-10'>🌌GALAXIAS</h1>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-900 mt-6">
        {ubicacion.map((u) => (
          <div key={u.id} className="bg-gray-700 text-white p-4 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-semibold mb-2">{u.name}</h3>
            <p>🌌 Dimensión: {u.dimension}</p>
          </div>
        ))}
      </section>

      {/* 🔹 Contador */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className="w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg text-xl"
          onClick={decrement}
        >
          -
        </button>
        <h1 className="text-2xl font-bold">{count}</h1>
        <button
          className="w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg text-xl"
          onClick={increment}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
