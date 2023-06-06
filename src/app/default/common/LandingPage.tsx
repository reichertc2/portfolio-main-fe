import Image from 'next/image';
import { landingPageCenterLogo, landingPageGrid } from '@/app/styles/styles';
import { IProfile } from '../models/user';


interface ILandingPageProps {
    profile: IProfile;
}

export const LandingPage: React.FC<ILandingPageProps> = ({ profile }) => {

    return (
        <div className='m-auto transition delay-1000'>

            <main id="landingMain" className='m-auto w-4/5 '>
                <div className={`${landingPageGrid}`}>
                    <div className={`${landingPageCenterLogo}`}>

                        <Image
                            className='animate-pulse rounded-full w-28 h-28'
                            src={profile.logo.image}
                            alt={profile.logo.alt}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LandingPage;