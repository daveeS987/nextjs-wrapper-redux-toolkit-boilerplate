import React from 'react';
import Link from 'next/link';

import { wrapper } from '../store/store';
import Layout from '../components/Layout/Layout';
import Counter from '../components/Counter';
import link from 'next/link';

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  // make async calls to get data or props
  // were going to simulate that we got items
  let fakeAPIData = ['1', '2', '3', '4', '5', '6'];

  return {
    props: { fakeAPIData },
  };
});

function Home(props) {
  console.log('props from home: ', props);

  let pages = props.fakeAPIData.map((item) => (
    <Link href={`/details/${item}`} key={item}>
      <li>Page {item}</li>
    </Link>
  ));

  return (
    <>
      <Layout stuff={props}>
        <h1>Home Page</h1>
        <h3>List of Dynamic Routes</h3>
        <ul>{pages}</ul>
        <br />
        <Counter />
      </Layout>
    </>
  );
}

export default Home;
