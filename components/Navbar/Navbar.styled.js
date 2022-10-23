import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
  background: #333;
  color: #fff;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 1.3em;

      a {
        text-decoration: none;
        color: #fff;
        padding: 5px;
        transition: 0.4s;
        border-bottom: 2px solid transparent;

        &:hover {
          border-color: #fff;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-left: 0.5em;
  }
`;
