import React from 'react'
import Feature from './Feature';
import featuresData from '../../content/features.json';


const Features = () => {
  return (
    <div>
      {featuresData.map(feature => (
        <Feature key={feature.id} {...feature} />
       )
      )}
    </div>
  )
}

export default Features;
