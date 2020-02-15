import { createContext, useContext } from 'react';

export const ExternalContext = createContext();
export const StateContext = createContext();
export const ActionsContext = createContext();

export const useStateContext = () => {
  return useContext(StateContext)
}
 
export const useActionsContext = () => {
  return useContext(ActionsContext)
}

export const useExternalContext = () => {
  return useContext(ExternalContext)
}

