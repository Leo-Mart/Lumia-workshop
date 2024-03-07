import { createContext, useState, useEffect } from 'react';

const LampsContext = createContext();

export const LampsProvider = ({ children }) => {
  const [lamp, setLamps] = useState([]);

  useEffect(() => {
    fetchLamps();
  }, []);

  const fetchLamps = async () => {
    const response = await fetch('../../lamps.json');
    const data = await response.json();

    setLamps(data);
  };

  return (
    <LampsContext.Provider
      value={{
        lamp,
        setLamps,
      }}
    >
      {children}
    </LampsContext.Provider>
  );
};

export { LampsContext };
