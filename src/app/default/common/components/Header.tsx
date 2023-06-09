import Image from "next/image"
import NavBar from "./NavBar"
import { IUserData } from "../../models/user";
import { INavigation } from "../../models/navigation";

interface IHeaderProps {
    profileMain: IUserData;
}



export const Header: React.FC<IHeaderProps> = ({ profileMain }) => {

    const navigations: INavigation[] = [
        { label: 'Profile', path: '#AboutMeSection' },
    ]


    return (
        <header className="flex flex-row w-full">
            <Image
                className='basis-1/8 rounded-full w-20 h-20 inline'
                src={profileMain.profile.logo.image}
                alt={profileMain.profile.logo.alt}
            />
            <NavBar
                navigations={navigations}
                showThemeChange={true}

            />

        </header>
    )
}

export default Header;