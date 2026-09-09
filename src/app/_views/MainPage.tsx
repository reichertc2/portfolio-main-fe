"use client";

import Footer from "../_components/ui/Footer";
import Header from "../_components/ui/Header";
import {IUserData} from "../_models/user";
import MainPage from "../_components/common/MainPage";
import React from "react";

interface IMainPageProps {
    user: IUserData;
}

export const MainPage: React.FC<IMainPageProps> = ({user}) => {
    return (
        <div className="m-auto min-h-screen">
            <Header profileMain={user}/>
            <MainPage profileMain={user}/>
            <Footer profileMain={user}/>
        </div>
    );
};

export default MainPage;
