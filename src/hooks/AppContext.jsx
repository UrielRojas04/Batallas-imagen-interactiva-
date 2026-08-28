import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Estado global para controlar qué escenario está activo o si hay alguna otra lógica global
  const [activeScenario, setActiveScenario] = useState('normal');

  return (
    <AppContext.Provider value={{ activeScenario, setActiveScenario }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
