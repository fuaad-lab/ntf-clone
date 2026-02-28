import React from 'react'
import HomeHero from '../components/HomeHero';
import Features from '../components/featurs/Features';
import Faqs from '../components/faqs/Faqs';
import Footers from '../components/footers/Footers';

const Home = () => {
  return (
    <div className='relative'>
      <HomeHero />
      <Features />
      <Faqs />
      <Footers />

    </div>
  )
}

export default Home;
