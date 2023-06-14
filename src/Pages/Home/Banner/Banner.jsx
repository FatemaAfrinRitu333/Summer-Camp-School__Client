import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./Banner.css";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import piano from '../../../assets/Slider/piano.jpg';
import violin from '../../../assets/Slider/violin.jpg';
import guitar from '../../../assets/Slider/guitar.jpg';
import cello from '../../../assets/Slider/cello.jpg';
import harp from '../../../assets/Slider/harp.jfif';
import drum from '../../../assets/Slider/drum.avif';
import {GiDrum, GiGrandPiano, GiGuitar, GiHarp, GiMusicalScore, GiViolin} from 'react-icons/gi';

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={2}
        freeMode={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper -z-10"
      >
        <SwiperSlide
          style={{
            backgroundImage:
              `url("${piano}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          className="z-0"
        >
          <div className="card-body bg-white/40 shadow-2xl items-center justify-center py-20">
            <h2 className="card-title text-slate-800 text-3xl flex-none py-2 px-4 border-y-2">Piano Class</h2>
            <p className="flex-none text-slate-700  md:w-10/12">Ignite your passion for music with our piano class, where you'll unlock the magical world of melodies and harmonies. Discover the joy of playing this timeless instrument, as our dedicated instructors nurture your skills and help you master the keys, from gentle sonatas to captivating concertos.</p>
            <button className="btn btn-outline flex-none border-0 border-b-2"><GiGrandPiano/> Enroll Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
        style={{
          backgroundImage:
            `url("${violin}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <div className="card-body bg-white/40 shadow-2xl items-center justify-center py-20">
            <h2 className="card-title text-slate-800 text-3xl flex-none py-2 px-4 border-y-2">Violin Class</h2>
            <p className="flex-none text-slate-700 md:w-10/12">Unleash your inner virtuoso and join our captivating violin class! Learn to draw out mesmerizing melodies from the strings of this elegant instrument, as our experienced instructors guide you through the art of playing the violin with precision, passion, and poise.</p>
            <button className="btn btn-outline flex-none border-0 border-b-2"><GiViolin/> Enroll Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
        style={{
          backgroundImage:
            `url("${guitar}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <div className="card-body bg-white/40 shadow-2xl items-center justify-center py-20">
            <h2 className="card-title text-slate-800 text-3xl flex-none py-2 px-4 border-y-2">Guitar Class</h2>
            <p className="flex-none text-slate-700  md:w-10/12"> Strum your way to musical bliss in our dynamic guitar class! Whether you're a beginner or have some experience, our talented instructors will guide you through the fundamentals and beyond. Explore various playing styles, from classical to rock, and discover the joy of creating your own captivating tunes.</p>
            <button className="btn btn-outline flex-none border-0 border-b-2"><GiGuitar/> Enroll Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
        style={{
          backgroundImage:
            `url("${cello}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <div className="card-body bg-white/40 shadow-2xl items-center justify-center py-20">
            <h2 className="card-title text-slate-800 text-3xl flex-none py-2 px-4 border-y-2">Cello Class</h2>
            <p className="flex-none text-slate-700  md:w-10/12">Dive into the rich and soulful world of the cello, a true instrument of emotional expression. In our cello class, you'll learn to harness its deep and resonant tones, under the guidance of our expert teachers. Discover the art of bowing, plucking, and creating captivating melodies that will tug at heartstrings.</p>
            <button className="btn btn-outline flex-none border-0 border-b-2"><GiMusicalScore/> Enroll Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
        style={{
          backgroundImage:
            `url("${harp}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <div className="card-body bg-white/40 shadow-2xl items-center justify-center py-20">
            <h2 className="card-title text-slate-800 text-3xl flex-none py-2 px-4 border-y-2">Harp Class</h2>
            <p className="flex-none text-slate-700  md:w-10/12">Transport yourself to a world of ethereal beauty with our enchanting harp class. Learn to pluck the strings of this majestic instrument and create melodies that resonate through your soul. Our experienced instructors will nurture your talent, unveiling the secrets of this timeless and mesmerizing instrument.</p>
            <button className="btn btn-outline flex-none border-0 border-b-2"><GiHarp/> Enroll Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
        style={{
          backgroundImage:
            `url("${drum}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <div className="card-body bg-white/40 shadow-2xl items-center justify-center py-20">
            <h2 className="card-title text-slate-800 text-3xl flex-none py-2 px-4 border-y-2">Drum Class</h2>
            <p className="flex-none text-slate-700  md:w-10/12">Get ready to rock and groove in our energetic drum class! Discover the rhythm that moves you as you master the beats and fills on this powerful instrument. Our passionate instructors will guide you through various styles, from jazz to rock, helping you become a dynamic drummer who can drive any band forward.</p>
            <button className="btn btn-outline flex-none border-0 border-b-2"><GiDrum/> Enroll Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
