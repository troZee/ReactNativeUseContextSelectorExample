import React, {useContext, useState} from 'react';

type ContextType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const Context = React.createContext<ContextType | null>(null);

export function useContextProvider() {
  return useContext(Context);
}

export function ContextProvider({children}) {
  const [value, setValue] = useState<string>('');
  return (
    <Context.Provider value={{value, setValue}}>{children}</Context.Provider>
  );
}
