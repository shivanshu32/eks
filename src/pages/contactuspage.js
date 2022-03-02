import React, { Component } from 'react';
import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'

class contactuspage extends Component {
    render() {
        return (
            <div>
            <Navigation />
            <div class="relative bg-white overflow-hidden bg-black">
            <div class=" mx-auto ">
              <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full ">                
                <main class="mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
                  <div class="sm:text-center lg:text-left">
                    <h1 class="px-20 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span class="block xl:inline">Innovation is global <br />                        
                        <span class="block text-red-600 xl:inline">So are we</span></span>                      
                    </h1>
                  </div>
                </main>
              </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-20 lg:w-1/3">
              <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/banner-contact.png" alt="" />
            </div>
          </div>


          <section class="text-gray-600 body-font overflow-hidden px-16">
              <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                  <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span class="font-extrabold text-4xl text-gray-700">Global</span>
                      
                    </div>
                    <div class="md:flex-grow">
                      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Dr. Amit Goel</h2>
                      <p class="leading-relaxed">amit.goel@effectualservices.com</p>
                      <p class="leading-relaxed">+91-981-068-8705</p>                      
                    </div>
                    <div class="md:flex-grow">
                      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Ram Tenneti</h2>
                      <p class="leading-relaxed">ram.tenneti@effectualservices.com</p>
                      <p class="leading-relaxed">+91-887-919-3964</p>                      
                    </div>
                  </div>
                  <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span class="font-extrabold text-4xl text-gray-700">USA</span>
                      <br />
                      <span class="mt-1 text-gray-500 text-sm">Suite-427,425 Broadhollow Road</span>
                      <span class="mt-1 text-gray-500 text-sm">Melville | NY-11747</span>
                    </div>
                    <div class="md:flex-grow">
                      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Nishant Singh</h2>
                      <p class="leading-relaxed">nishant.singh@effectualservices.com</p>
                      <p class="leading-relaxed">+1-469-666-1181</p>     
                      <p class="leading-relaxed">+91-772-888-0256</p>                   
                    </div>
                    <div class="md:flex-grow">
                      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Rakesh Pandey</h2>
                      <p class="leading-relaxed">rakesh.pandey@effectualservices.com</p>
                      <p class="leading-relaxed">+1-972-256-8133</p>                      
                    </div>
                  </div>
                  <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span class="font-extrabold text-4xl text-gray-700">Europe & <br />Indo Pacific</span>
                      <br />
                      <span class="text-sm text-gray-500"><b>India:</b> SDF A-05, NSEZ, Noida–Dadri Road, Noida Phase II -201305</span>
                      <br/>
                      <span class="text-sm text-gray-500"><b>Singapore:</b> 531A, Upper Cross Street, Singapore- 051531</span>
                    </div>
                    <div class="md:flex-grow">
                      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Ram Tenneti</h2>
                      <p class="leading-relaxed">ram.tenneti@effectualservices.com</p>
                      <p class="leading-relaxed">+91-887-919-3964</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section class="text-gray-600 body-font relative">
              <div class="container px-5 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Please fill out the form below and we will contact you shortly.</p>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    For careers/recruitments related queries, please visit our Careers page.</p>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                  <div class="flex flex-wrap -m-2">
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label for="name" class="leading-7 text-sm text-gray-600">Phone</label>
                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label for="email" class="leading-7 text-sm text-gray-600">Organization</label>
                        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label for="name" class="leading-7 text-sm text-gray-600">Country</label>
                        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label for="email" class="leading-7 text-sm text-gray-600">Service Category</label>
                        <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class="relative">
                        <label for="message" class="leading-7 text-sm text-gray-600">Describe Your Requirements</label>
                        <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>

            <Footer />


</div>
        );
    }
}

export default contactuspage;