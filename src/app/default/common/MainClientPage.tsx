"use client";

import { useEffect, useState } from 'react'
import LandingPage from './LandingPage';
import MainPage from './MainPage';
import { user } from '../../../../data/user'
import { IUserData } from '../models/user';

export default function MainClientPage() {

    const [entered, setEntered] = useState<boolean>(false)
    const [profileMain, setProfileMain] = useState<IUserData>(user)


    useEffect(() => {
        setTimeout(() => setEntered(true), 3000)
    }, []
    )


    return (
        <>
            {entered ? <MainPage user={profileMain} /> : <LandingPage />}
        </>
    )
}