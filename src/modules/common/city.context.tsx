import React from 'react'

import { City } from './common.types'

type Action = { type: 'UPADTE_CITY'; payload: City }
type Dispatch = (action: Action) => void
type CityProviderProps = { children: React.ReactNode }

const CityContext =
  React.createContext<{ city: City; dispatch: Dispatch } | undefined>(undefined)

const countReducer = (city: City, action: Action) => {
  switch (action.type) {
    case 'UPADTE_CITY': {
      return action.payload
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const CityProvider = ({ children }: CityProviderProps) => {
  const [city, dispatch] = React.useReducer(countReducer, {} as City)
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { city, dispatch }
  return <CityContext.Provider value={value}>{children}</CityContext.Provider>
}

const useCity = () => {
  const context = React.useContext(CityContext)
  if (!context) {
    throw new Error('useCity must be used within a CityProvider')
  }
  return context
}

export { CityProvider, useCity }
