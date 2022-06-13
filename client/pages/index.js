import Head from "next/head";
import Editor from "../component/Editor";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
          rel="stylesheet"
        ></link>
        <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
      </Head>
      <Editor />
    </div>
  );
}
