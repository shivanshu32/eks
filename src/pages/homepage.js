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

     <div class="w-full bg-center bg-cover h-96" style={{backgroundImage: "url(images/banner.jpg)"}}>
            <div class="flex flex-direction:row-reverse; items-center justify-end w-full h-full bg-gray-900 bg-opacity-10">
                <div class="px-16 items-center">
                    <h2 class="text-lg font-semibold text-white lg:text-lg">Enabling Fortune 500's, R&D Giants, Law <br />firms, Universities & SME’s Around The Globe<br/> Gather Intelligence That Protects and <br />Nurtures Innovation Through a Team of <br/>200+ Techno Legal Professionals.</h2>
                    
                </div>
            </div>
        </div>


     
    {/* <MainHero /> */}
     <AboutEffectual />
     <OurClients />
     <Servicessection />
     <Whychooseus />
     <Testimonials />
     <Contactus />
     
     <Footer />
     
    </div>
  );
}

export default HomePage;