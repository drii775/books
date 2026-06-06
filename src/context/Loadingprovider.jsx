import { useState } from "react";
import { LoadingContext } from "./LoadingContext";

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState({});
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
