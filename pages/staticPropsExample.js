import React from 'react';

import { wrapper } from '../store/store';
import Layout from '../components/Layout/Layout';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  // Do your async calls to grab props. This will generate on build time.
  // let result1 = await axios  go grab data or something
  let result1 = 'this is just mock data result1';
  // let result2 = await axios  go grab data or something
  let result2 = 'this is just mock data result2';

  return {
    props: { result1, result2 },
  };
});

function StaticPropsExamplePage({ result1, result2 }) {
  console.log(result1);
  return (
    <>
      <Layout>
        <h1>Static Props Example Page</h1>
      </Layout>
    </>
  );
}

export default StaticPropsExamplePage;
