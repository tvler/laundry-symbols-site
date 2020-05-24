import Head from "next/head";
import DoNotWring from "laundry-symbols/symbols/do-not-wring.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Laundry Symbols</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DoNotWring color="green" />
    </>
  );
}
