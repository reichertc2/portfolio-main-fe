import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function MainPage({ profileMain }) {

    return (
        <div className='bg-sky-900 m-auto min-h-screen'>
            <Header />
            <Main profileMain={profileMain} />
            <Footer />
        </div>
    )
}