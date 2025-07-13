import Tabs from '@/components/Tab';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>| Gabriel Lellouche</title>
        <meta
          name='description'
          content='Full stack developer and Graphic designer.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.gabriel-lellouche.com/' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='apple-mobile-web-app-title' content='Gabriel L' />

        {/* Open Graph */}
        <meta property='og:title' content='| Gabriel Lellouche' />
        <meta
          property='og:description'
          content='Full stack developer and Graphic designer.'
        />
        <meta
          property='og:image'
          content='https://www.gabriel-lellouche.com/og-image.png'
        />
        <meta property='og:url' content='https://www.gabriel-lellouche.com' />
        <meta property='og:type' content='website' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='| Gabriel Lellouche' />
        <meta
          name='twitter:description'
          content='Full stack developer and Graphic designer.'
        />
        <meta
          name='twitter:image'
          content='https://www.gabriel-lellouche.com/og-image.png'
        />
      </Head>
      <section className='px-6 py-12 h-[90vh] mx-auto'>
        <div className='flex flex-col items-center h-full pt-32'>
          <div className='flex flex-col items-center space-y-6'>
            <div className='relative inline-block w-full h-full'>
              <h1 className='text-4xl text-center font-black font-heading font-stretch-200% relative z-10 uppercase tracking-tight md:leading-20'>
                <span className='lg:text-8xl text-6xl leading-10'>
                  gabriel lellouche
                </span>
                <br />
                <span className='lg:text-8xl md:text-6xl text-2xl leading-10'>
                  maker of things
                </span>
              </h1>
            </div>
            <h4>
              I&apos;m a simple man, I want to make things that are memorable,
              and worth making.
            </h4>
          </div>
          <div className='flex mt-8'>
            <Link
              href='/dev'
              className='relative font-bold border border-foreground font-heading font-stretch-115% px-6 py-3 text-zinc-950 border-r-0'
            >
              Developer
            </Link>
            <Link
              href='/design'
              className='font-bold border border-foreground font-heading font-stretch-115% px-6 py-3 text-zinc-950'
            >
              Designer
            </Link>
            <Link
              href='/freelance'
              className='font-bold border border-foreground font-heading font-stretch-115% px-6 py-3 text-zinc-950 border-l-0'
            >
              Freelancer
            </Link>
          </div>
        </div>
      </section>
      <section className='h-[60vh] relative bg-neutral-900 text-white'>
        {/* <div className='clip__top bg-background w-full h-24 absolute -top-23'></div> */}
        <div className='clip__triangle-top bg-neutral-900 w-full md:h-52 h-24 absolute md:-top-51 -top-23'></div>
        {/* about */}
        <div className='flex flex-col md:flex-row w-full h-full items-center gap-10 max-w-5xl mx-auto justify-center px-12'>
          <div className='flex-shrink-0'>
            <div className='md:w-72 md:h-72 h-48 w-48 bg-white'></div>
          </div>

          <div className='text-center md:text-left'>
            <h2 className='text-4xl mb-2 font-black font-heading font-stretch-200%'>
              Hi there!
            </h2>
            <p className='text-neutral-200 text-lg max-w-xl'>
              I’m Gabriel — a developer, designer, and freelancer passionate
              about building elegant experiences that solve real problems. I’m
              constantly improving my craft across multiple disciplines.
            </p>
          </div>
        </div>
        <div className='clip__triangle-top rotate-180 bg-neutral-900 w-full md:h-52 h-24 absolute md:-bottom-51 -bottom-23'></div>
      </section>
      <section className='h-[60vh] relative text-white'></section>
    </>
  );
}
