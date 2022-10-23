import styled from 'styled-components';

export const PokemonContainer = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5em;
    text-transform: capitalize;
    background-color: #333;
    color: #fff;
    padding: 0.3em;
    margin: 0.8em auto;
    width: 300px;
  }

  h3 {
    margin: 0.6 auto;
    font-size: 1.2em;
  }

  p {
    padding: 10px;
  }

  a {
    color: #fff;
    background-color: #333;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 10px auto;
  justify-content: space-around;
  /* border: 1px solid red; */

  span {
    background-color: #e33d33;
    text-transform: uppercase;
    color: #fff;
    padding: 0.6em 1em;
    border-radius: 5px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 10px;

  div:first-child {
    border-right: 1px solid #ccc;
  }

  div {
    padding: 0 20px;
  }
`;
