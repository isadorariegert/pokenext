import Image from 'next/image';
import Link from 'next/link';
import {
  PokemonContainer,
  PokemonTypes,
  DataContainer,
} from '../../styles/Pokemon.styled';

//another way to use the getStaticPaths function as a const and export it
export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = ' https://pokeapi.co/api/v2/pokemon';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // return params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });
  // console.log(paths);

  return {
    paths,
    fallback: false, // returns only the maxPokemons
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <PokemonContainer>
      <h1>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Number:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Type</h3>
        <PokemonTypes>
          {pokemon.types.map((item, index) => (
            <span key={index}>{item.type.name}</span>
          ))}
        </PokemonTypes>
      </div>
      <DataContainer>
        <div>
          <h4>Height:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h4>Weight:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </DataContainer>
      <Link href="/">
        <a>Home</a>
      </Link>
    </PokemonContainer>
  );
}
