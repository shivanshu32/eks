import React, { Component } from 'react';
// import Contactmodel from './contactmodel'
import Swal from 'sweetalert2'

class footer extends Component {

    render() {
      <style>
        {
          `
                .formbackground{
                  background-color: #0056A1;
                  justify-content: flex-start;
                }
          `
        }
      
    </style>

      function opencontactmodal(){
        Swal.fire({
          
          html:
            ' <section class="text-gray-600 body-font transition duration-150 ease-in-out z-500" >' +
            '<div class="container">' +
         '<div class="bg-gray-100">' +
        '<div class="max-w-7xl mx-auto ">' +
          '<div class="relative bg-white shadow-xl">' +
            '<div class="grid grid-cols-1 lg:grid-cols-3">' +              
              '<div class="relative overflow-hidden  bg-red-700 xl:p-12">' +
                '<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">' +
                  '<svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">'+
                    '<path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1"></path>' +
                    '<defs>' +
                     ' <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">' +
                       ' <stop stop-color="#fff"></stop> ' +
                        '<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>' +
                      '</linearGradient>' +
                    '</defs>' +
                 ' </svg>' +
               ' </div>' +
                '<div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">' +
                  '<svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1"></path>' +
                    '<defs>' +
                      '<linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">' +
                       '<stop stop-color="#fff"></stop>' +
                        '<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>' +
                      '</linearGradient>' +
                    '</defs>' +
                  '</svg>' +
                '</div>' +
                '<div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">' +
'<svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1"></path>' +
                    '<defs>' +
                      '<linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">' +
                        '<stop stop-color="#fff"></stop>' +
                        '<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>' +
                      '</linearGradient>' +
                    '</defs>' +
                  '</svg>' +
                '</div>' +
                '<h1 class="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-gray-200"><span class="font-bold">Contact</span> <span class="italic">Us</span></h1>' +
                '<p class="mt-6 text-base text-red-50 max-w-3xl">USA: Suite-427,425 Broadhollow Road Melville | NY-11747</p> ' +
     '<p class="mt-6 text-base text-red-50 max-w-3xl">    India: SDF A-05, NSEZ, Noida–Dadri Road, Noida Phase II -201305 ' +
    '</p><p class="mt-6 text-base text-red-50 max-w-3xl"> Singapore: 531A, Upper Cross Street, Singapore- 051531</p>' +
    '<dl class="mt-8 space-y-6">' +
    '<dt><span class="sr-only">Phone number</span></dt>' +
    '<dd class="flex text-base text-red-50">' +
      '<svg class="flex-shrink-0 w-6 h-6 text-red-200" x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">' +
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>' +
                    '<span class="ml-3">  +1-469-666-1181, +1-972-256-8133 </span>' +
                  '</dd><dt><span class="sr-only">Phone number</span></dt> <dd class="flex text-base text-red-50"><svg class="flex-shrink-0 w-6 h-6 text-red-200" x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">' +
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>' +
    '</svg>' +
                    '<span class="ml-3">' +
            '+91-981-068-8705 <br /> +91-887-919-3964 <br /> +91-772-888-0256' +
            '</span>                 </dd>    <dt><span class="sr-only">Email</span></dt>' +
                  '<dd class="flex text-base text-red-50">      <svg class="flex-shrink-0 w-6 h-6 text-red-200" x-description="Heroicon name: outline/mail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">' +
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>' +
    '</svg>                    <span class="ml-3">info@effectualservices.com</span>                  </dd>                </dl>                <ul class="mt-8 flex space-x-12">' +
                  '<li><button class="text-red-200 hover:text-red-100" href="#">' +
                      '<span class="sr-only">Facebook</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">' +
                        '<path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor"></path>' +
                      '</svg>  </button>  </li>          <li>' +
                    '<button class="text-red-200 hover:text-red-100" href="#">' +
                      '<span class="sr-only">GitHub</span> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">' +
                        '<path d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12" fill="currentColor"></path>' +
                      '</svg></button></li><li><button class="text-red-200 hover:text-red-100" href="#">' +
                      '<span class="sr-only">Twitter</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">' +
                        '<path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor"></path>' +
                      '</svg></button> </li>  </ul> </div>' +              
              '<div class=" px-6 py-6 sm:px-10 lg:col-span-2 formbackground" style="background-color:#0056A1"}}>' +               
                '<form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">' +
                  '<div>  <label for="first_name" class="block text-sm font-medium text-white">First name</label><div class="mt-1"><input type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" />' +
                  '</div>' +
                  '</div>' +
                  '<div>' +
                    '<label for="last_name" class="block text-sm font-medium text-white">Last name</label>' +
                    '<div class="mt-1">' +
                      '<input type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" />' +
                    '</div>' +
                  '</div>' +
                  '<div>' +
                    '<label for="email" class="block text-sm font-medium text-white">Email</label>' +
                    '<div class="mt-1">' +
                      '<input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" />' +
                    '</div>' +
                 '</div>' +
                  '<div>' +
                    '<div class="flex justify-between">' +
                      '<label for="phone" class="block text-sm font-medium text-white">Phone</label>' +
                      '<span id="phone-optional" class="text-sm text-gray-500">Optional</span>' +
                    '</div>' +
                    '<div class="mt-1">' +
                      '<input type="text" name="phone" id="phone" autocomplete="tel" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" aria-describedby="phone-optional" />' +
                    '</div>' +
                  '</div>' +
                  '<div class="sm:col-span-2">' +
                    '<label for="subject" class="block text-sm font-medium text-white">Service for Enquiry</label>' +
                    '<div class="mt-1">' +
                      '<input type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" />' +
                    '</div>' +
                  '</div>' +
                  '<div class="sm:col-span-2">' +
                    '<div class="flex justify-between">' +
                      '<label for="message" class="block text-sm font-medium text-white">Message</label>' +
                      '<span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>' +
                    '</div>' +
                    '<div class="mt-1">' +
                      '<textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" aria-describedby="message-max"></textarea>' +
                    '</div>' +
                  '</div>' +
                  '<div class="sm:col-span-2 sm:flex sm:justify-end">' +
                    '<button type="submit" class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto">' +
                      'Submit' +
                    '</button>'+
                  '</div>' +
                '</form>' + 
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +    
            '</div>' +
          '</section> ',
          showCloseButton: true,
          showCancelButton: false,
          showConfirmButton:false,
          focusConfirm: false,
          width: '100%',
        })

      }
        return (
            <footer class="bg-gray-800" aria-labelledby="footerHeading">
            <h2 id="footerHeading" class="sr-only">Footer</h2>
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                  <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Quick Links
                      </h3>
                      <ul class="mt-4 space-y-4">
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Home
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Career
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Life at Effectual
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Contact
                            </a>
                          </li>
                        
                      </ul>
                    </div>
                    <div class="mt-12 md:mt-0">
                      <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        About
                      </h3>
                      <ul class="mt-4 space-y-4">
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Who We Are
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Founders & Leadership
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              About CSR
                            </a>
                          </li>
                        
                          
                        
                      </ul>
                    </div>
                  </div>
                  <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Solutions
                      </h3>
                      <ul class="mt-4 space-y-4">
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Patent
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Trademark Management
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Research & Development
                            </a>
                          </li>
                        
                          
                        
                      </ul>
                    </div>
                    <div class="mt-12 md:mt-0">
                      <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                        Expertise Domains
                      </h3>
                      <ul class="mt-4 space-y-4">
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Information Communication Technology
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Life-Sciences & Chemistry
                            </a>
                          </li>
                        
                          <li>
                            <a href="/" class="text-base text-gray-300 hover:text-white">
                              Engineering
                            </a>
                          </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="mt-8 xl:mt-0 px-8">
                  <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Get in Touch with Us
                  </h3>

                  <div class="flex py-4 w-full space-x-10 md:order-2">                  
                    <a href="/" class="text-gray-400 hover:text-gray-300">
                      <span class="sr-only">Facebook</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
        </svg>
                    </a>
                  
                    <a href="/" class="text-gray-400 hover:text-gray-300">
                      <span class="sr-only">Instagram</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
        </svg>
                    </a>
                  
                    <a href="/" class="text-gray-400 hover:text-gray-300">
                      <span class="sr-only">Twitter</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
                    </a>
                  
                    
                  
                    
                  
                </div>
                 
                 
                    
                    
                    <div class="mt-3 py-4 rounded-md sm:mt-0 sm:flex-shrink-0">
                      <button  class="w-1/2 bg-red-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-600" onClick={opencontactmodal}>
                        Contact Us
                      </button>
                    </div>
                  
                </div>
              </div>
              <div class="mt-8 border-t border-gray-700 pt-8 grid grid-cols-1 gap-4 justify-self-center content-center">
                
                <p class="mt-8 justify-center  items-center text-base justify-self-center text-gray-400 md:mt-0 md:order-1">
                  © 2022 Effectual Knowledge Services. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        );
    }
}

export default footer;