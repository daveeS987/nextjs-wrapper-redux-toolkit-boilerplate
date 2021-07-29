import React from 'react';
import Head from 'next/head';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>A NextJS BoilerPlate</title>
        <meta
          name="Name of Project Goes Here"
          content="Description of Website content goes here"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
