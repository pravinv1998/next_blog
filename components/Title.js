import Head from "next/head";

const Title = ({ title }) => {
  return (
    <div>
      <Head>
        <title> Blog | {title}</title>
      </Head>
    </div>
  );
};

export default Title;
