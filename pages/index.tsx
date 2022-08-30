import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-white'>
        <h1>Alexandria</h1>
        <p className='max-w-[50vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptatibus sapiente iste facilis provident temporibus fuga consequatur corrupti dolore rerum?</p>
      </main>
    </div>
  )
}

export default Home
