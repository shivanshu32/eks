import AboutEffectual from '../components/abouteffectual.js'
import OurClients from '../components/ourclients.js'
import Servicessection from '../components/servicessection.js'
import Whychooseus from '../components/whychooseus.js'
import Testimonials from '../components/testimonials.js'
import Contactus from '../components/contactus.js'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import Testimonailsnew from '../components/testimonialsnew.js'
import Clientscroll from '../components/clientscroll.js'
import MyDropdown from '../components/dropdown.js'
import Carouselslider from '../components/carouselslider.js'
import Oursolutions from '../components/oursolutions'


function HomePage() {
  return (
    <div className="App">   
     <Navigation />
     <Carouselslider />

    





     {/* <div class="w-full bg-center bg-cover h-96" style={{backgroundImage: "url(images/banner.jpg)"}}>
            <div class="flex flex-direction:row-reverse; items-center justify-end w-full h-full bg-gray-900 bg-opacity-10">
                <div class="px-16 items-center">
                    <h2 class="text-lg font-semibold text-white lg:text-lg">Enabling Fortune 500's, R&D Giants, Law <br />firms, Universities & SME’s Around The Globe<br/> Gather Intelligence That Protects and <br />Nurtures Innovation Through a Team of <br/>200+ Techno Legal Professionals.</h2>
                    
                </div>
            </div>
        </div> */}


     
    {/* <MainHero /> */}
     {/* <AboutEffectual /> */}
     
     <h2 class="mb-6 pt-12 font-sans text-3xl font-bold tracking-tight text-center text-black sm:text-4xl sm:leading-none">Who we are</h2>
     <div class="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
            <div class="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
                <div class="w-2/3 px-12">
   
                    <p class="text-lg leading-7 text-justify text-gray-600 mt-4  w-full">Effectual Services is an award-winning Intellectual Property (IP) management advisory firm offering IP intelligence to Fortune 500 companies, law firms, research institutes and universities, and venture capital firms/PE firms, across the globe.</p>
                    
                    
                </div>
                <div class="hidden lg:block w-full lg:mt-0 mt-6">
                <div class="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                        <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg" alt="clock" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">190+</h2>
                                <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Techno-Legal Professionals</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg" alt="Friendly" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">50+</h2>
                                <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Customer Countries</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg" alt="Creative" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">15000+</h2>
                                <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Projects Completed</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg" alt="Achievments" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">500+ </h2>
                                <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Clients</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    
     {/* <OurClients /> */}
     <Clientscroll />
     <Oursolutions />
     {/* <Servicessection /> */}
     <Whychooseus />
     <Testimonailsnew />
     {/* <Testimonials /> */}
     <Contactus />

    
     
    

     
     <Footer />
     
    </div>
  );
}

export default HomePage;