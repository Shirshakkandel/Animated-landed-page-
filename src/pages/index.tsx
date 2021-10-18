// import Delete from '@components/Delete'
import BottleContainer from '@components/BottleContainer'
import Head from 'next/head'
import Header from '@components/Header'
import LeaveContainer from '@components/LeaveContainer'
import TextContainer from '@components/TextContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clean Juice</title>
      </Head>
      <Header />
      <main>
        <TextContainer />
        <BottleContainer />
        <LeaveContainer />
      </main>
    </>
  )
}
