import React, { useRef } from 'react';
import { Rerousel } from 'rerousel';
import styled from "styled-components";

export default function Carouselslider() {

    
   
  
    
        const ref = useRef(null);
        
        const Item = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        
        
        
        @media(max-width: 1150px) {
            width: 100%
        }
      `;
        return (
            
           <div>
                <Rerousel itemRef={ref} interval={5000}>
      <Item ref={ref}>
      <div className="relative overflow-hidden" style={{backgroundColor:"#0056A1"}}>
    <div className="relative" data-todo-x-data="Components.popover({ open: false, focus: true })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
     <main className="mx-auto ml-8 max-w-7xl mt-12 mb-12 px-12 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <p className="mt-3 text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" >
            Enabling Fortune 500's, R&D Giants, Law firms, Universities & SME’s Around The Globe Gather Intelligence That Protects and Nurtures Innovation Through a Team of 200+ Techno Legal Professionals.
            </p>            
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
      </Item>
      <Item>
      <div className="relative overflow-hidden" style={{backgroundColor:"#c4171b"}}>
    <div className="relative" data-todo-x-data="Components.popover({ open: false, focus: true })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
     <main className="mx-auto ml-8 max-w-7xl mt-12 mb-12 px-12 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <p className="mt-3 text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" >
            Enabling Fortune 500's, R&D Giants, Law firms, Universities & SME’s Around The Globe Gather Intelligence That Protects and Nurtures Innovation Through a Team of 200+ Techno Legal Professionals.
            </p>            
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
      </Item>
      
      <Item>
      <div class="w-full bg-center bg-cover h-96" style={{backgroundImage: "url(images/banner.jpg)"}}>
            <div class="flex flex-direction:row-reverse; items-center justify-end w-full h-full bg-gray-900 bg-opacity-10">
                <div class="px-16 items-center">
                    <h2 class="text-lg font-semibold text-white lg:text-lg">Enabling Fortune 500's, R&D Giants, Law <br />firms, Universities & SME’s Around The Globe<br/> Gather Intelligence That Protects and <br />Nurtures Innovation Through a Team of <br/>200+ Techno Legal Professionals.</h2>
                    
                </div>
            </div>
        </div>
      </Item>
     
    </Rerousel>
               
           </div>
            
        );
    
}

