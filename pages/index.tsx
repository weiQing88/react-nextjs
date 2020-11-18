import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect } from "react";

import Head from "next/head";
import server from "../api/index";

type pItem = {
  key: string;
  value: string;
};
type Props = {
  data: Array<pItem>;
};

const Index = function (props: Props) {
  let { data } = props;
  return (
    <div id="test">
      <Head>
        <title> SSR APP </title>
      </Head>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
      <p>this is my SSR App </p>
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  let data = { props: { data: [] } };
  let res = await server.testApi();
  if (res.code == 200) {
    data.props.data = res.data;
    return data;
  } else {
    return data;
  }
};
