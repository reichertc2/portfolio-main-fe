import Image from "next/image"
import NavBar from "./NavBar"
import { headerSectionLayout } from "../styles/styles"


export default function Header({ profileMain }) {



    return (
        <header className={`${headerSectionLayout}`}>
            <Image
                className='rounded-full'
                src={profileMain.profile.logo.image}
                alt={profileMain.profile.logo.alt}
                width={75}
                height={75}
            />
            <NavBar />

        </header>
    )
}