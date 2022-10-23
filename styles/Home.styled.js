import styled from 'styled-components';

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  h1 {
    color: #e33d33;
    font-size: 3em;
    text-align: center;
    margin-right: 0.4em;

    span {
      color: #333;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
