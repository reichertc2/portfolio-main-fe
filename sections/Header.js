import Image from "next/image"
import NavBar from "../DevPortfolio/default/NavBar"


export default function Header({profileMain}) {



    return (
        <header className="pt-2 pl-3">
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