import React from 'react'
import Faq from './Faq';
import faqData from '../../content/faq.json'
import Subscribe from '../Subscribe';


const Faqs = () => {
  return (
    <div className='my-24'>
      <h1 className='my-6 text-center text-3xl font-semibold sm:text-5xl'>Frequently Asked questions</h1>
      {faqData.map(faq => (
        <Faq key={faq.id} {...faq} />
      ))}
      <div className='mt-10'>
        <Subscribe />
      </div>
    </div>
  )
}

export default Faqs;
