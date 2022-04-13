import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class reportspage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div class="relative bg-blue-600 overflow-hidden ">
        <div class=" mx-auto ">
          <div class="relative z-10 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full  ">
            
            <main class="mx-auto max-w-5xl py-16 px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left ">
                <h1 class="px-20 text-2xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Reports
   </span> 
                 
                </h1>
                
               
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute py-16 lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/report-banner.png" alt="" />
        </div>
      </div>
           
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="images/slide-300x183.jpg" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Lorem ipsum dolor sit amet</h2>
       
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="images/slide-300x183.jpg" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Lorem ipsum dolor sit amet</h2>
       
      </div>
   
    </div>



  </div>


  <div class="container px-5 mx-auto">
    


    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="images/slide-300x183.jpg" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Lorem ipsum dolor sit amet</h2>
       
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="images/slide-300x183.jpg" />
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Lorem ipsum dolor sit amet</h2>
       
      </div>
   
    </div>

  </div>

  

  

  

</section>



            



                <Footer />
            </div>
        );
    }
}

export default reportspage;