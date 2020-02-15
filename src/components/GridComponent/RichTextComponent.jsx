import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const RichTextComponent = (props) => {
    console.count('RichTextComponent');
    const textToTags = props.item.text;
 
    return (
      <div className="rich-text-component">
        <h5 className="card-title">{props.item.title}</h5>
        <span className="card-text">{ReactHtmlParser(textToTags)}</span>
      </div>
    );
}

export default RichTextComponent;
