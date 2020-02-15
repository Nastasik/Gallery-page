import React from 'react';
import {useStateContext} from '../Context';

const GalleryComponent__Indicators = () => {
  console.count('GalleryComponent__Indicators')
  const {pointState} = useStateContext();

    return (
            <ol className="gallery-component__indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className={pointState[0]}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" className={pointState[1]}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" className={pointState[2]}></li>
            </ol>
    );
}

export default GalleryComponent__Indicators;
