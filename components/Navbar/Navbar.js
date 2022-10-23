import Image from 'next/image';
import Link from 'next/link';
import { StyledNav, Logo } from './Navbar.styled';

export default function Navbar() {
  return (
    <StyledNav>
      <Logo>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="Pokenext"
        />
        <h1>Pokenext</h1>
      </Logo>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}
