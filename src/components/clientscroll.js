import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
SwiperCore.use([Navigation])


function activeTab(element) {
  alert("active tab called");
   let siblings = element.parentNode.querySelectorAll("li");
   for (let item of siblings) {
       item.classList.add("text-gray-600");
       item.classList.remove("text-white");
       item.classList.remove("bg-indigo-700");
       item.innerHTML = "Inactive";
   }
   element.classList.remove("text-gray-600");
   element.classList.add("bg-indigo-700");
   element.classList.add("text-white");
   element.innerHTML = "Active";
 }

export default function index() {
  
 

  return (
    <div className="bg-gray-900 overflow-hidden">
      <div className="flex justify-center items-center flex-col pt-10 py-4">
        <h1 className="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-gray-200"><span className="font-bold">Our</span> <span className="italic">Clients</span></h1>
        
        
                    <div class="justify-between py-8 w-3/4 flex-wrap hidden sm:block">
                        <div class="xl:w-full xl:mx-0 rounded bg-gray-200 dark:bg-gray-800 h-12 shadow">
                            <ul class="flex items-center h-full">
                                <li onclick={() => {activeTab(this)}} onkeypress="activeTab(this)" tabindex="0" class="focus:outline-none w-1/3 dark:text-white dark:hover:text-white focus:text-white text-sm text-white flex items-center h-full px-5 bg-indigo-700 py-4   font-normal cursor-pointer">Law Firms</li>
                                <li onclick={() => {activeTab(this)}} onkeypress="activeTab(this)" tabindex="0" class="focus:outline-none w-1/3 dark:text-white dark:hover:text-white focus:text-white text-sm text-white h-full flex items-center py-4 px-5 bg-red-700   font-normal hover:text-white cursor-pointer">Startup, Large & Midsize Corporations</li>
                                <li onclick={() => {activeTab(this)}} onkeypress="activeTab(this)" tabindex="0" class="focus:outline-none w-1/3 dark:text-white dark:hover:text-white focus:text-white text-sm text-white h-full flex items-center py-4 px-5 bg-indigo-700   font-normal hover:text-white cursor-pointer">Universities & Research Institute</li>
                                
                        </ul>
                        </div>
                    </div>
                
        
        <Swiper 
        centeredSlides={true} loop={true} loopFillGroupWithBlank={true} grabCursor={true}
        navigation ={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
            slidesPerGroup: 1,
            },
            // when window width is >= 480px
            480: {
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup: 1,
            },
            // when window width is >= 640px
            640: {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 1,
            },
            1024: {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerGroup: 1,
            },
            1336: {
            slidesPerView: 4,
            spaceBetween: 32,
            slidesPerGroup: 1,
            }
  }}
        
        className="mt-12 md:mt-10 2xl:mt-20 swiper mySwiper">
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-10 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/adm.png" alt="client1" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-10 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/kraft.png" alt="client2" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-10 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/pepsico.png" alt="client3" /></div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <div class="px-10 py-10 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl"><img src="images/clients/total.png" alt="client4" /></div>
            </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mt-20  items-center space-x-6 w-full">
          <button aria-label="back" className="rounded-full p-1.5 flex justify-center items-center bg-gray-600  swiper-button-prev w-1.5 h-2.5">
            <img className=" w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_prev.svg" alt="back" />
          </button>
          <button aria-label="next" className="rounded-full p-1.5 flex justify-center items-center bg-gray-600  swiper-button-next w-1.5 h-2.5">
            <img className=" w-6 h-6" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-6_next.svg" alt="next" />
          </button>
        </div>
      </div>

      <style>
        {`
        @media (max-width: 478px) { 
            .swiper {
                padding: 0 14px;
            }
        }
        .swiper {
            width: 100%;
            height: 100%;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
            content: "";
        }

        .swiper-button-next,
        .swiper-button-prev {
            position: relative;
            right: 0;
            height: 30px;
            width: 30px;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }

        .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        `}
      </style>
    </div>



  )
}