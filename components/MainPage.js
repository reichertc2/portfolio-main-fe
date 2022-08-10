import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function MainPage() {
    return (
        <div className='bg-sky-900 m-auto min-h-screen'>
            <Header />
            
            <Main />
            <Footer />
        </div>
    )
}