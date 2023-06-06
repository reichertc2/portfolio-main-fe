import Image from "next/image"
import NavBar from "./NavBar"
import { IUserData } from "../../models/user";

interface IHeaderProps {
    profileMain: IUserData;
}



export const Header: React.FC<IHeaderProps> = ({ profileMain }) => {



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

export default Header;