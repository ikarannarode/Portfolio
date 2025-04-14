import Hero from "./sections/Hero"
import AppShowcase from "./sections/ShowcaseSection"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import Experience from "./sections/Experience"
import TechStack from './sections/TechStack'
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
     <Footer/>
    </>
  )
}

export default App;