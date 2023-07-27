import Image from 'next/image';
import { IProfile } from '../../models/user';


interface ILandingPageProps {
    profile: IProfile;
}

export const LandingPage: React.FC<ILandingPageProps> = ({ profile }) => {

    return (
        <div className='m-auto transition delay-1000'>

            <main id="landingMain" className={`flex justify-center items-center w-full h-screen text-center ease-in duration-300`} >

                <Image
                    className='animate-pulse rounded-full w-28 h-28'
                    src={profile.logo.image}
                    alt={profile.logo.alt}
                />

            </main>
        </div>
    )
}

export default LandingPage;