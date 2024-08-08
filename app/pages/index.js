import Head from 'next/head';
import FlipCard from '../components/FlipCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flip Card Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FlipCard />
      </main>
    </div>
  );
}
