import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

export const MainContainer = styled.main`
  min-height: 80vh;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Pokenext</title>
      </Head>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
}
