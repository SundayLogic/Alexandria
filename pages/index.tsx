import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Alexandria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <h1 className='text-8xl'>Alexandria</h1>
        <p className='max-w-[50vw] text-2xl pt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptatibus sapiente iste facilis provident temporibus fuga consequatur corrupti dolore rerum?</p>
      </main>
    </div>
  )
}

export default Home
