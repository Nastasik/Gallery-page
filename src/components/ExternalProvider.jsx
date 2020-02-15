import React from 'react';
import {ExternalContext} from './Context';

const ExternalProvider = (props) => {
  console.count('ExternalProvider');
  const {title: galleryTitle, images} = props.data.components[0].metadata;
  const {components} = props.data.components[1].metadata;
  const {title: formTitle, fields} = props.data.form;
  const gridComponents = components.map(item => {
    return { 
      title: item.metadata.title,
      text: item.metadata.text,
    }
  });
  
  const externalData = {
    galleryTitle: galleryTitle,
    images: images,

    gridComponents: gridComponents,

    formTitle: formTitle,
    formFields: fields,
  }
 
  return (
      <ExternalContext.Provider value={externalData}>
              {props.children}
      </ExternalContext.Provider>
  )
}

export default ExternalProvider;