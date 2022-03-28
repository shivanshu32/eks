
import Whychooseus from '../components/whychooseus.js'

// import Contactus from '../components/contactus.js'
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'
import Testimonailsnew from '../components/testimonialsnew.js'
import Clientscroll from '../components/clientscroll.js'
import Awardscroll from '../components/awardscroll';
import Videoslides from '../components/videoslides.js'
import Carouselslider from '../components/carouselslider.js'
import Oursolutions from '../components/oursolutions'
import Globalfootprints from '../components/globalfootprints.js'


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
     
     <div className="pt-8">
                    
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold  mx-auto"><span style={{color:"#0056A1"}}>Who </span> <span className="italic" style={{color:"#c4171b"}}>We Are</span></h1>
                </div>
     <div class="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 pb-8 py-4">
            <div class="items-center justify-center lg:space-x-12 2xl:space-x-6">
                <div class="w-full px-12">
   
                    <p class=" leading-7 text-center text-gray-600 mt-4  w-full">Effectual Services is an <b>award-winning</b> Intellectual Property (IP) management advisory & <b>consulting firm</b> offering IP intelligence to <b>Fortune 500 companies, law firms, research institutes and universities, and venture capital firms/PE firms</b>, globally. Through research & <br />intelligence we help our clients in taking <b>critical business decisions</b> backed with credible data sources, which in turn helps  them<br /> achieve  their organisational goals, <b>foster innovation</b> and achieve milestones within timelines while <b>optimising costs.</b> We are<br /> one of the <b>largest IP & business intelligence providers</b>, globally serving clients for over a decade now. Our multidisciplinary<br /> teams of <b>subject matter experts</b> have deep knowledge of <b>best practices across industries</b>, are adept with benchmarking<br /> <b>quality standards</b> and use a combination of human and machine intellect to deliver <b>quality projects.</b> Having a global <br />footprint in over <b>5 countries</b> helps us to bridge boundaries and <b>work seamlessly</b> across multiple time zones,<br /> thus living to the core of our philosophy - <b>Innovation is global</b>, so are we !!!</p>
                    
                    
                </div>
                <div class="hidden lg:block w-full lg:mt-0 mt-6">
                <div class="mt-6 md:mt-10 grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:mt-6 2xl:mt-12">
                <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg" alt="clock" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">200+</h2>
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
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">25000+</h2>
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
                        <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg" alt="clock" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">6</h2>
                                <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Offices in 5 Countries</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg" alt="Friendly" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">115+</h2>
                                <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Countries Covered in Research</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg" alt="Creative" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">15+</h2>
                                <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Language Capabilities in House</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-16 h-16 relative">
                                <div class=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg" alt="Achievments" />
                                </div>
                            </div>
                            <div class="flex items-start flex-col ml-6 pt-8">
                                <h2 class="text-lg font-semibold leading-4 text-gray-800">10+ </h2>
                                <p class="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Departments covering 55 Industry domains</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    
     {/* <OurClients /> */}
     <Clientscroll />
     <Oursolutions />
     <Awardscroll />
     {/* <Servicessection /> */}
     <Whychooseus />
     <Videoslides />
     <Testimonailsnew />
     {/* <Testimonials /> */}
     {/* <Contactus /> */}

     <Globalfootprints />
     
    

     
     <Footer />
     
    </div>
  );
}

export default HomePage;