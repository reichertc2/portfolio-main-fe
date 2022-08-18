import Image from "next/image"
import NavBar from "../components/NavBar"
import placeHolderImage from '../public/logo_basic.png'


export default function Header() {



    return (
        <header className="pt-2 pl-3">
            <Image
                    className='rounded-full'
                    src={placeHolderImage}
                    alt='Placeholder'
                    width={75}
                    height={75}
                />
            <NavBar />

        </header>
    )
}