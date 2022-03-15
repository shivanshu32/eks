import AboutEffectual from '../components/abouteffectual.js'
import OurClients from '../components/ourclients.js'
import Servicessection from '../components/servicessection.js'
import Whychooseus from '../components/whychooseus.js'
import Testimonials from '../components/testimonials.js'
import Contactus from '../components/contactus.js'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import Testimonailsnew from '../components/testimonialsnew.js'


function HomePage() {
  return (
    <div className="App">   
     <Navigation />

     <div className="relative bg-white overflow-hidden">
    
    <div className="relative" data-todo-x-data="Components.popover({ open: false, focus: true })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">


      
        
      

      <main className="mx-auto ml-8 max-w-7xl mt-12 mb-12 px-12 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Our business & </span>
                <span className="block text-indigo-600">Market Research Vertical</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              We deliver best in class services & tailor made solutions to best meet your needs.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              
             
              
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
              <defs>
                <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor"></rect>
              <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"></rect>
            </svg>
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <button type="button" className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Watch our video to learn more</span>
                <img className="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center" aria-hidden="true">
                  <svg className="h-20 w-20 text-indigo-500" fill="currentColor" viewBox="0 0 84 84">
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="white"></circle>
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

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
    
     <OurClients />
     <Servicessection />
     <Whychooseus />
     <Testimonailsnew />
     {/* <Testimonials /> */}
     <Contactus />

    
     <h1 class="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
            Why Choose Us
        </h1>
        <div class="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" class="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
            <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" class="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />

            <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                <p class="text-3xl font-semibold text-gray-800">20K+</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Patent Creation</p>
            </div>
            <div class="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                <p class="text-3xl font-semibold text-gray-800">8K+</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Indian Patent Services</p>
            </div>
            <div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                <p class="text-3xl font-semibold text-gray-800">15K+</p>
                <p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Sold Lands</p>
            </div>
        </div>
    

     
     <Footer />
     
    </div>
  );
}

export default HomePage;