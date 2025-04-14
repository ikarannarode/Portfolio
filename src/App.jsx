import Hero from "./sections/Hero"
import AppShowcase from "./sections/ShowcaseSection"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import Experience from "./sections/Experience"
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from "./sections/Contact"
const App = () => {
  return (
    <>
    <Navbar/>
     <Hero/>
     <AppShowcase/>
     <LogoSection/>
     <FeatureCards/>
     <Experience/>
     <TechStack/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;