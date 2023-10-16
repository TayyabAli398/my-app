import Image from 'next/image'
import Homepage from './components/Homepage'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function Home() {
  return (
    <div>
      <Homepage/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}
