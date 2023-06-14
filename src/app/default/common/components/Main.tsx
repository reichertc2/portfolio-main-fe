"use client"

import Head from 'next/head'
import Headline from '../../features/DevProfile/components/Headline'
import AboutMe from '../../features/DevProfile/components/AboutMe'
import Experience from '../../features/DevProfile/components/Experience'
import FeaturedWork from '../../features/DevProfile/components/FeaturedWork'
import SubWork from '../../features/DevProfile/components/SubWork'
import ContactMe from '../../features/DevProfile/components/Contact'
import { IUserData } from '../../models/user'
import { IStyles } from '../MainClientPage'

interface IMainProps {
    profileMain: IUserData;
    styles?: IStyles;
}

export const Main: React.FC<IMainProps> = ({ profileMain, styles }) => {

    return (
        <>
            <Head>
                <title>Portfolio - {profileMain["profile"]["name"]}</title>
                <meta
                    name="description"
                    content="Generated by create next app" />
            </Head>
            <main className='m-auto w-2/3 mt-24' >
                <article
                    id="mainContainer"
                    className={``}
                >
                    <Headline
                        headLine={profileMain["profile"]}
                        styles={styles}
                    />
                    <AboutMe
                        aboutMe={profileMain["aboutMe"]}
                        styles={styles}
                    />
                    <Experience
                        jobExperience={profileMain["jobs"]}
                        styles={styles}
                    />
                    {/* <FeaturedWork projectWorks={profileMain["projects"]} /> */}
                    {/* <SubWork projectWorks={profileMain["subprojects"]} /> */}
                    {/* <ContactMe contactInfo={profileMain["contactInfo"]} /> */}
                </article>
            </main>
        </>
    )
}

export default Main;