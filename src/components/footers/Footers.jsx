import React from 'react'
import footerData from '../../content/footerLinks.json';
import Footer from './Footer';


const Footers = () => {
  return (
      <div className='mt-10 mb-16 sm:mx-auto sm:max-w-screen-lg'>
      <h1 className='text-[#6c6c6c]'>Question? Contact Us</h1>
      <div className='mx-10 grid grid-cols-2 sm:grid-cols-4'>
        {footerData.columns.map(footer => (
          <Footer key={footer.id} Links={footer} />
        ))}
      </div>
      <p className='my-1 text-sm text-[#6c6c6c]'>Netflix in somaliland</p>
    </div>
  )
}
 
export default Footers;
 