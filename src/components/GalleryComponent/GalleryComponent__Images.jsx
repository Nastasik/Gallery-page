import React from 'react';
import {useStateContext} from '../Context';

const GalleryComponent__Images = () => {
  console.count('GalleryComponent__Images')
  const {displayImgs} = useStateContext();

    return (
        displayImgs.map((item, i) => 
          <div key={i}>
            <img src={item} className="gallery-component__image"  alt="..."/>
          </div>) 
    );
}

export default GalleryComponent__Images;
