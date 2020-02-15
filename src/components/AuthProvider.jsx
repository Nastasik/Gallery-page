import React, { useMemo, useReducer } from 'react';
import {ActionsContext, StateContext} from './Context';
import {useExternalContext} from './Context';

const AuthProvider = (props) => {
  console.count('AuthProvider')
  const {images} = useExternalContext();

  const reducer = (state, action) => {
    switch (action.type) {
    
      case 'CHANGE_OFFSET':
        return {
          ...state,
          offset: action.payload,
      }
      case 'CHANGE_INDICATORS_COLOR':
        return {
          ...state,
          pointState: action.payload,
      }
      case 'CHANGE_IMAGES':
        return {
          ...state,
          displayImgs: action.payload,
      }
      case 'CHANGE_FORM_TEXTS':
        const { text, formName } = action.payload;
        const { currentFormData } = state;
        return {
          ...state,
          currentFormData: {
            ...currentFormData, 
            [formName]: text,
          },
      }
      case 'SEND_FORM_DATA':
        return {
          ...state,
          sentFormData: state.currentFormData,
        }
        
      default:
        return new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, { offset: 0,
                                                  pointState: ["gallery-component__indicators_active", "", ""],
                                                  displayImgs: images.slice(0, 3),
                                                  currentFormData: {
                                                                            name: "",
                                                                            phone: "",
                                                                            email: "",
                                                                            appointment_date: "",
                                                                            agreement: false,
                                                                            comment:"",
                                                                    },
                                                  sentFormData: null,
                                                })

  // const [offset, setOffset] = useState(0);
  // const [pointState, setPointState] = useState(["gallery-component__indicators_active", "", ""]);
  // const [displayImgs, setDisplayImgs] = useState(images.slice(0, 3));
  // const [currentFormData, setCurrentFormData] = useState({
  //                                                             name: "",
  //                                                             phone: null,
  //                                                             email: "",
  //                                                             appointment_date: null,
  //                                                             agreement: false,
  //                                                             comment:"",

  //                                                        })

  const sendFormData = () => {
    dispatch({type: 'SEND_FORM_DATA'});
  }

  const changeFormTexts = (text, formName) => {
    // setCurrentFormData(formName= text);
    dispatch({type: 'CHANGE_FORM_TEXTS', payload: {text, formName}});
  }

  const changeIndicatorsColor = () => {
    const point1 = (state.offset <= (images.length/3)) ? "gallery-component__indicators_active" : "";
    const point2 = (state.offset > (images.length/3) && state.offset <= (images.length*2/3)) ? "gallery-component__indicators_active" : "";
    const point3 = (state.offset > (images.length*2/3)) ? "gallery-component__indicators_active" : "";
    // setPointState([point1, point2, point3]);
    dispatch({type: 'CHANGE_INDICATORS_COLOR', payload: [point1, point2, point3]});
  }

  const changeImages = () => {
    const newDisplayImgs = images.slice(state.offset, state.offset + 3);
    // setDisplayImgs(newDisplayImgs);
    dispatch({type: 'CHANGE_IMAGES', payload: newDisplayImgs})
  }

  const changeToNextImgs = () => {
    const newOffset = state.offset + 3;
    if(newOffset <= images.length) {
      // setOffset(newOffset);
     dispatch({type: 'CHANGE_OFFSET', payload: newOffset});
    }
  }
  
  const changeToPrevImgs = () => {
    const newOffset = state.offset - 3;
    if(newOffset >= 0) {
      // setOffset(newOffset);
      dispatch({type: 'CHANGE_OFFSET', payload: newOffset})
    }
  }

  //Оптимизация для функция которые не зависят от чего-либо, что изменяется со временем, 
  //и не зависят ни от каких других эмиттеров действий, поэтому объект actions нужно создавать 
  //только один раз, при первом рендеринге (fetch и тд)

  useMemo(() => {
    changeIndicatorsColor();
    changeImages();
  }, [state.offset]);

  useMemo(() => {
    (state.sentFormData !== null) ? alert(
                                           "Имя:  " + state.sentFormData.name + 
                                           "\nТел.  " + state.sentFormData.phone +
                                           "\nEmail:  " + state.sentFormData.email +
                                           "\nДата:  " + state.sentFormData.appointment_date +
                                           "\nКомментарий:  " + state.sentFormData.comment
                                          ) : null;
  }, [state.sentFormData]);

  const actions = useMemo(() => ({
    changeFormTexts,
    changeToPrevImgs, 
    changeToNextImgs, 
    sendFormData,
 
  }), [state.offset])

  

  return (
    // Быстрее срабатывают действия при клике и тд(на 3-7ms), но медленее загружается страница(на 20ms)
      <StateContext.Provider value={state}>    
          <ActionsContext.Provider value={actions}>
              {props.children}
          </ActionsContext.Provider>
      </StateContext.Provider>
  )
}

export default AuthProvider;