import React from 'react';

import Layout from '../components/Layout/Layout';
import Counter from '../components/Counter';

function Home() {
  return (
    <>
      <Layout>
        <h1>This is the Home Page</h1>
        <Counter />
      </Layout>
    </>
  );
}

export default Home;
