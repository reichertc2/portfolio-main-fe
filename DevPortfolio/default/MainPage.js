import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function MainPage({ profileMain }) {

    return (
        <div className='m-auto min-h-screen'>
            <Header profileMain={profileMain}/>
            <Main profileMain={profileMain} />
            <Footer profileMain={profileMain} />
        </div>
    )
}