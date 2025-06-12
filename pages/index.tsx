import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <section className='px-6 py-12 h-[90vh] mx-auto '>
        <div className='flex flex-col items-center h-full pt-12'>
          <div className='flex flex-col items-center'>
            <p className='text-sm/6 tracking-wide font-black'>[ Pre text ]</p>
            <h1 className='text-9xl text-center'>
              GABRIEL LELLOUCHE
              <br />
              MAKER OF THINGS
            </h1>
            <h4>
              I&apos;m a simple man, I want to make things that are memorable,
              and worth making.
            </h4>
          </div>
          <div className='flex space-x-4'>
            <Link
              href='/portfolio'
              className='font-bold border border-amber-400 bg-amber-400 px-6 py-3 text-zinc-950'
            >
              Portfolio
            </Link>
            <a
              href=''
              className='font-bold border border-amber-400 px-6 py-3 text-amber-400'
            >
              Resume (include dropdown)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
