import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
  margin-bottom: 2em;
  width: 23%;
  border-radius: 2px solid #e33d33;
  border: 2px solid #e33d33;
  background-color: #333;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  border-radius: 1em;
  color: #fff;

  p {
    margin: 1em 0;
    background-color: #e33d33;
    border-radius: 5px;
    padding: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size: 1.4em;
  }

  a {
    text-decoration: none;
    color: #222;
    background-color: #fff;
    padding: 0.7em 1.2em;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.4s;

    &:hover {
      background-color: #e33d33;
      color: #fff;
    }
  }
`;