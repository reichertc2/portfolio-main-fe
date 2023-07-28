import Image from 'next/image';
import { IProfile } from '../../models/user';


interface ILandingPageProps {
    profile: IProfile;
}

export const LandingPage: React.FC<ILandingPageProps> = ({ profile }) => {

    const styles = {
        container: `m-auto transition delay-1000`,
        main: `flex justify-center items-center w-full h-screen text-center ease-in duration-300`,
        logo: `animate-pulse rounded-full w-28 h-28`
    }

    return (
        <div className={styles.container}>

            <main id="landingMain" className={styles.main} >

                <Image
                    className={styles.logo}
                    src={profile.logo.image}
                    alt={profile.logo.alt}
                />

            </main>
        </div>
    )
}

export default LandingPage;