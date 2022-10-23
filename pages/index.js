import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Heading } from '../styles/Home.styled';
import Card from '../components/Card/Card';

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = ' https://pokeapi.co/api/v2/pokemon';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <Heading>
        <h1>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="Pokenext"
        />
      </Heading>
      <Container>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </Container>
    </>
  );
}
