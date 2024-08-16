"use client"

import Footer from "../_components/common/Footer";
import Header from "../_components/common/Header";
import Main from "../_components/common/Main";
import { IUserData } from "../_models/user";
import { IStyles } from "./MainClientPage";


interface IMainPageProps {
    user: IUserData;
    styles?: IStyles;
}

export const MainPage: React.FC<IMainPageProps> = ({ user, styles }) => {

    return (
        <div className='m-auto min-h-screen'>
            <Header
                profileMain={user}
            />
            <Main
                profileMain={user}
            />
            <Footer
                profileMain={user}
            />
        </div>
    )
}

export default MainPage;