import Layout from '../../components/Layout/Layout';
import { wrapper } from '../../store/store.js';

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    // context would store the params
    let selectedId = context.params.dynamicID;
    // use selected ID to make a call to database to get that specific information
    // for now well just return the number
    let converted = { number: selectedId };

    return {
      props: converted,
    };
  }
);

export async function getStaticPaths() {
  // If you need to make separate pages for items dynamically,
  // Make api calls and get list of ids from database
  // use the ids to make the items page parameters

  // We're mocking this list for demonstration purposes. In real world you would fetch to API, and fakeIDList would actually be a result of all id's from a database
  const fakeIdList = ['1', '2', '3', '4', '5', '6'];

  let paths = fakeIdList.map((item) => {
    return {
      params: {
        dynamicID: item,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

import React from 'react';

function Details(props) {
  console.log(props);
  return (
    <>
      <Layout>
        <h2>This a Dynamic Details Page</h2>
        <h3>Page : {props.number}</h3>
      </Layout>
    </>
  );
}

export default Details;
