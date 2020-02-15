import React from 'react';
import {useActionsContext} from '../Context';

const GalleryComponent__BtnsPanel = ( {children} ) => {
  console.count('GalleryComponent__BtnsPanel')
  const {changeToPrevImgs, changeToNextImgs} = useActionsContext();

    return (
          <div className="gallery-component__btns">
            <button onClick={changeToPrevImgs} className="" >
              <span className="gallery-component__prev-btn" aria-hidden="true"></span>
              {/* <span className="sr-only">Previous</span> */}
            </button>
            { children }
            <button onClick={changeToNextImgs} className="">
              <span className="gallery-component__next-btn " aria-hidden="true"></span>
              {/* <span className="sr-only">Next</span> */}
            </button>
          </div>
    );
}

export default GalleryComponent__BtnsPanel;
