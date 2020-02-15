import React from 'react';
import {useExternalContext} from '../Context';

const GalleryComponent = ( {children} ) => {
  console.count('GalleryComponent')
  const {galleryTitle} = useExternalContext();

    return (
      <div className="gallery-component">
        <h5 className="gallery-component__title">{galleryTitle}</h5>
        {children}
      </div>
    );
}

export default GalleryComponent;
