import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import App from '../App'

export const StateContext=createContext("");

export default function StateContextProvider({children}) {
  const [stateData, setStateData]=useState({});
  
  return (
    <StateContext.Provider value={{stateData, setStateData}}>
        {children}
    </StateContext.Provider>
      
  )
}
