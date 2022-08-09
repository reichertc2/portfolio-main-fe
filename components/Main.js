import Head from 'next/head'
import NavBar from './NavBar'
import Headline from './Bio/Headline'
import AboutMe from './Bio/AboutMe'
import Experience from './Bio/Experience'
import Work from './Bio/Work'
import ContactMe from './Bio/Contact'


export default function Main() {
    return (
        <>
            <Head>
                <title>Portfolio - Main</title>
                <meta
                    name="description"
                    content="Generated by create next app" />
            </Head>
            <main >
                <article
                    id="mainContainer">
                    <Headline />
                    <AboutMe />
                    <Experience />
                    <Work />
                    <ContactMe />
                </article>
            </main>
        </>
    )
}