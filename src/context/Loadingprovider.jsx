import { useState } from "react";
import { LoadingContext } from "../context/LoadingContext";

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState({
    table: false,
    detail: false,
    insight: false,
    condition: false,
  });

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
