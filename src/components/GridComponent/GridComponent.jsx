import React from 'react';
import RichTextComponent from './RichTextComponent';
import {useExternalContext} from '../Context'

const GridComponent =  ({ children }) => {
    console.count('GridComponent');
    const {gridComponents} = useExternalContext();
    
    return (
      <div className="grid-component">
        {gridComponents.map((item, i) => <RichTextComponent item={item} key={i}></RichTextComponent>) }
      </div>
    );
}

export default GridComponent;
