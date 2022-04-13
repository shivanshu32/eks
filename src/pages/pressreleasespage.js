import React, { Component } from 'react';
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class pressreleasespage extends Component {
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
                  <span class="block xl:inline"> Press Release
   </span> 
                  
                </h1>
                
               
              </div>
            </main>
          </div>
        </div>
        <div class="lg:absolute py-16 lg:inset-y-0 lg:right-20 lg:w-1/3">
          <img class="h-56 w-full  sm:h-64 md:h-96 lg:w-full lg:h-full object-contain" src="images/banner-press-release.png" alt="" />
        </div>
      </div>

                  

      <div class="container py-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6918349051281235969"  frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6916717588655857664" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
      </div>

      <div class="container py-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6914450207103488000" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6911930709259546624" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
      </div>

      <div class="container py-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:share:6915236491577233408" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:share:6916999735723593728"  frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
      </div>

      <div class="container py-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:share:6905548608289271808" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6906536769676824576" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
      </div>

      <div class="container py-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6906862411043733504"  frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>                   
                    <div class="rounded  h-96">
                    <iframe class="w-full h-full" src="https://www.linkedin.com/embed/feed/update/urn:li:share:6910180723119316993" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
      </div>

            



                <Footer />
            </div>
        );
    }
}

export default pressreleasespage;