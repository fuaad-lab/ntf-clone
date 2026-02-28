import React from 'react'
import Header from '../components/browser/Header';
import Banner from '../components/browser/Banner';
import Row from '../components/browser/Row'
import requests from '../requests'
import MovieModal from '../components/MovieModal';

const Browser = () => {
  return (
    <div className='relative h-screen lg:h-[140vh] bg-netflix-gradient'>
      <Header />
      <main className='relative pl-4 lg:pl-10 space-y-24'>
        <Banner />
        <Row title={'Tranding Now'} url={requests.fetchTrending} />
        <Row title={'Actions Movies'} url={requests.fetchActionMovies} />
        <Row title={'Top Rated'} url={requests.fetchTopRated} />
        <Row title={'Romance Movies'} url={requests.fetchRomanceMovies} />
        <Row title={'Horror Movies'} url={requests.fetchHorrorMovies} />
        <Row title={'Documentries'} url={requests.fetchDocumantaries} />
        <Row title={'Comedy Movies'} url={requests.fetchComedyMovies} />
        <Row title={'Netflix Originals'} url={requests.fetchNetflixOriginals} />
         <MovieModal />
      </main> 
    </div>
  )
}

export default Browser;
