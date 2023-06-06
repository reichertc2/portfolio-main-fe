import Image from 'next/image'
import placeHolderImage from '../../../../public/logo_basic.png'


export default function LandingPage() {

    return (
        <div className='m-auto transition delay-1000'>
     
            <main id="landingMain" className='m-auto w-4/5 '>
                <div className='m-auto w-4/5 min-h-screen grid grid-cols-7 gap-6 grid-rows-5'>
                    {/* <h1 id="landingH1">Welcome</h1> */}
                    <div className='col-start-4 col-end-5 row-start-3 row-end-4'>

                        <Image
                            className='animate-pulse rounded-full'
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