import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Title from "../components/Title";

export default function Home({ data }) {
  return (
    <div>
      <Title title="Home" />
      <div>
        {data.map((post, i) => {
          return (
            <div className={styles.container} key={i}>
              <h3> {post.title} </h3>
              <p> {post.body} </p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
