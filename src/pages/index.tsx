import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SwiperBestRestaurants } from '../components/SwiperBestRestaurants';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snackinho</title>
        <meta name="description" content="snackinho homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Banner />
        <SwiperBestRestaurants title={''} />
      </main>
      <Footer />
    </div>
  )
}
