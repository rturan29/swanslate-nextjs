import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Styles from "../styles/Home.module.scss";

export default function Home() {
  const [userAuth, setUserAuth] = useState(false);
  const [userName, setUserName] = useState("")

  return (
    <div>
      <Head>
        <title>Swanslate</title>
        <meta name="description" content="Swanslate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout
        setUserAuth={setUserAuth}
        setUserName={setUserName}
      >
        <>
          {userAuth ? <h1>Welcome {userName}</h1> : null}

          <h1 className={Styles.motto}>
            Beatiful Translations
            <br />
            Instantly Delivered
          </h1>
          <h3 className={Styles.subContent}>
            Translation and localization tasks <br />
            Powered by millions of Pioneers around the World <br />
            Start earning Pi now!
          </h3>
        </>
      </Layout>
    </div>
  );
}
