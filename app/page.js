"use client";
import Head from 'next/head';
import FlipCard from './components/card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portafolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FlipCard />
      </main>
    </div>
  );
}