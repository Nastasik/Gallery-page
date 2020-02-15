import React from 'react';
import {useStateContext, useActionsContext} from '../Context';
import ReactHtmlParser from 'react-html-parser';

const Form__Field = (props) => {
    console.count('Form__Field');
    const {item} = props;
    const {currentFormData} = useStateContext();
    const {changeFormTexts} = useActionsContext();
    
    const fieldsProperties = {
        name: item.name, 
        type: item.type,
        required: item.required,
        value: currentFormData[item.name],
        className: "form__title", 
        placeholder: "",
    }

    const changeText = (event) => {
        const text = event.target.value;
        const formName = event.target.name;
        changeFormTexts(text, formName);
    }

    return ( 
              <div className={(item.group === 'main') ? 'form__input' : (item.group === 'additional' ? 'form__textarea' : 'form__checkbox')}>
                <label htmlFor={item.name}>{ReactHtmlParser(item.label)}</label>
                    {(item.group === 'additional' && 
                        <textarea {...fieldsProperties} onChange={changeText}/>) || 
                        <input {...fieldsProperties} onChange={changeText}/>}
              </div>
    )
}

export default Form__Field;
