import '../styles/globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BottomBar } from '../components/BottomBar';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <div className='pb-5 pb-md-0 h-100'>
      <AuthProvider>
        <Component {...pageProps} />
        <BottomBar />
      </AuthProvider>
    </div>
  )
}

export default MyApp
