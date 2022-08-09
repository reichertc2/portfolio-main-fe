import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function MainPage() {
    return (
        <div className='bg-cyan-900 m-auto w-4/5 min-h-screen'>
            <Header />
            
            <Main />
            <Footer />
        </div>
    )
}