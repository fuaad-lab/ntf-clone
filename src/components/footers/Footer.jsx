import React from 'react'

const Footer = ({Links}) => {
  return (
    <div className='mx-4 my-2 flex flex-col'>
      {Links.map(d => (
        <a href='#' className='my-1 text-sm text-[#6c6c6c] '>{d}</a>
      ))}
    </div>
  )
}

export default Footer;
