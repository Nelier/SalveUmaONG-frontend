import { createContext, useState } from 'react';

const logged = createContext({ signed: false });

export function logProvider({ children }) {
  return (
    <logged.Provider value={{ signed: false }}>{children}</logged.Provider>
  );
}

export default logged;
