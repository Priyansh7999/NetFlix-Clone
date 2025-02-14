import React, { createContext, useState } from 'react';

// Create the context
export const NetFlix = createContext(null);

export default function Context_Hook({ children }) {
  const [logo, setLogo] = useState(); // State for the logo

  return (
    // Provide the context value
    <NetFlix.Provider value={{ logo, setLogo }}>
      {children}
    </NetFlix.Provider>
  );
}
