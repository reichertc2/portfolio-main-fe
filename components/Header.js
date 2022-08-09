import Image from "next/image"
import NavBar from "./NavBar"


export default function Header() {
    return (
        <header>
            <Image
                src="https://via.placeholder.com/150x75" 
                alt="placeholder"
                width={150}
                height={75} 
                />
            <NavBar />

        </header>
    )
}