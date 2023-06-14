"use client"

import { IUserData } from "../models/user";
import { IStyles } from "./MainClientPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

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