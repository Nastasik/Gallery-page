import React from 'react';
import Form__Field from './Form__Field';
import {useExternalContext, useActionsContext} from '../Context';

const Form = () => {
    console.count('Form');
    const {formTitle, formFields} = useExternalContext();
    const {sendFormData} = useActionsContext()
    
    const onSend = () => {
      event.preventDefault();
      sendFormData();
    }

    return (
      <form className="form" onSubmit={onSend}>
        <h5 className="form__title">{formTitle}</h5>
        <div className="form__container">
            {formFields.map((item, i) => <Form__Field item={item} key={i}></Form__Field>)} 
        </div>
        <button type="submit" className="form__btn">Отправить заявку</button>
      </form>
    ); 
}

export default Form;
