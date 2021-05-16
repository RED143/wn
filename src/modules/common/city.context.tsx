import React from 'react'

import { City } from './common.types'

type CityProviderProps = { children: React.ReactNode }

const CityContext =
  React.createContext<
    { city: City; setCity: (city: City) => void } | undefined
  >(undefined)

const CityProvider = ({ children }: CityProviderProps) => {
  const [city, setCity] = React.useState<City>()
  const value = { city, setCity }
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
