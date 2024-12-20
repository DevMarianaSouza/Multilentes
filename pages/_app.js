import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Script from 'next/script'
//import BootstrapLoader from '../components/BootstrapLoader'
import 'bootstrap/dist/css/bootstrap.css'
import FloatingWhats from '../components/FloatingWhats'
import Trackers from '../lib/trackers'

function MyApp({ Component, pageProps }) {

    return <>
        <Trackers/>
        <Script src="https://kit.fontawesome.com/b73a956a41.js"/>
        <Navbar />
        <Component {...pageProps} />
        <FloatingWhats/>
        <Footer/>
    </>

}

export default MyApp
