import Head from 'next/head'
import Image from 'next/image'
import placeHolderImage from '../public/placeholder-image.png'


export default function Landing() {

    return (
        <div className='bg-sky-900 m-auto transition delay-1000'>
            <Head>
                <title>Portfolio - Landing</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main id="landingMain" className='m-auto bg-sky-900 w-4/5 '>
                <div className='m-auto w-4/5 min-h-screen grid grid-cols-7 gap-6 grid-rows-5'>
                    {/* <h1 id="landingH1">Welcome</h1> */}
                    <div className='col-start-4 col-end-5 row-start-3 row-end-4'>

                        <Image
                            className='rounded-full'
                            src={placeHolderImage}
                            alt='Placeholder'
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}