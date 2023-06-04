import Header from '../../sections/Header'
import Main from '../../sections/Main'
import Footer from '../../sections/Footer'

export default function MainPage({ profileMain }) {

    return (
        <div className='m-auto min-h-screen'>
            <Header profileMain={profileMain}/>
            <Main profileMain={profileMain} />
            <Footer profileMain={profileMain} />
        </div>
    )
}