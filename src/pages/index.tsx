import Head from 'next/head'
import ContentContainer from '../components/ContentContainer'
import NavigationBar from '../components/NavigationBar'
import styles from '../styles/pages/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>To do List</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <div className={styles.contentContainer}>
        <NavigationBar />

        <ContentContainer />
      </div>
    </div>
  )
}