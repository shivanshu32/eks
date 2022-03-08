import MainHero from '../components/mainhero.js'
import AboutEffectual from '../components/abouteffectual.js'
import OurClients from '../components/ourclients.js'
import Servicessection from '../components/servicessection.js'
import Whychooseus from '../components/whychooseus.js'
import Testimonials from '../components/testimonials.js'
import Contactus from '../components/contactus.js'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'


function HomePage() {
  return (
    <div className="App">   
     <Navigation />
     /*
     <MainHero />
     <AboutEffectual />
     <OurClients />
     <Servicessection />
     <Whychooseus />
     <Testimonials />
     <Contactus />
     */
     <Footer />
     
    </div>
  );
}

export default HomePage;