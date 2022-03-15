import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
SwiperCore.use([Navigation])

export default function index() {
  return (
    <div className="bg-gray-900 overflow-hidden">
      <div className="flex justify-center items-center flex-col py-12">
        <h1 className="text-2xl md:text-4xl 2xl:text-5xl leading-10 text-gray-200"><span className="font-bold">Loved By Industy</span> <span className="italic">Leaders</span></h1>
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
              <div className="flex jusitfy-center items-center flex-col">
                <div className="w-12 relative z-20">
                    <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-1.svg" alt="apple" />
                </div>
                <div className="-mt-6  flex border h-96 rounded text-left border-gray-600 bg-gray-800 justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6 ">
                      <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-5_quotes.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex jusitfy-start items-center space-x-2">
                      <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20113.png" alt="woman avatar" />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none text-gray-200">Casy Camilari</p>
                        <p className="text-sm leading-none text-gray-200">Digital Marketing Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="flex jusitfy-center items-center flex-col">
                <div className="w-12 relative z-20"><img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-2.svg" alt="hand" />
                </div>
                <div className="-mt-6  flex border h-96 rounded text-left border-gray-600 bg-gray-800 justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal text-gray-300">Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6 ">
                      <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-5_quotes.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex jusitfy-start items-center space-x-2">
                      <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20109.png" alt="girl avatar" />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none text-gray-200">Rayna Torff</p>
                        <p className="text-sm leading-none text-gray-200">Lead, Design Systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="flex jusitfy-center items-center flex-col">
                <div className="w-12 relative z-20"><img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-3.svg" alt="be" />
                </div>
                <div className="-mt-6  flex border h-96 rounded text-left border-gray-600 bg-gray-800 justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal text-gray-300">This website is the best I have found so far. Firstly it has huge range of components which are perfectly designed. All of the components are responsive in both tablet and mobile version. Love it!!! </p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6 ">
                      <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-5_quotes.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex jusitfy-start items-center space-x-2">
                      <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20111.png" alt="boy avatar" />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none text-gray-200">Marcus Dorwart</p>
                        <p className="text-sm leading-none text-gray-200">VP, Operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="flex jusitfy-center items-center flex-col">
                <div className="w-12 relative z-20"><img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-4.svg" alt="gear" />
                </div>
                <div className="-mt-6  flex border h-96 rounded text-left border-gray-600 bg-gray-800 justify-between items-start flex-col px-4 md:px-6">
                  <p className="mt-10 text-base leading-normal text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                  <div className="flex justify-end pb-6 space-y-11 items-end w-full flex-col h-28">
                    <div className="flex grow-0 w-6 ">
                      <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_svg-5_quotes.svg" alt="quotes" />
                    </div>
                    <div className="w-full flex jusitfy-start items-center space-x-2">
                      <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_7_Ellipse%20112.png" alt="girl avatar" />
                      </div>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg font-medium leading-none text-gray-200">Gustavo Workman</p>
                        <p className="text-sm leading-none text-gray-200">Head, Product Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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