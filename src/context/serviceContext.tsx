"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the interface for the context value
interface ServiceContextType {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

// Create the context with the defined interface
const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceWrapper({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  // Ensure the value provided to the context matches the ServiceContextType interface
  const contextValue: ServiceContextType = { title, setTitle, index, setIndex };

  return (
    <ServiceContext.Provider value={contextValue}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useServiceContext() {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error("useServiceContext must be used within a ServiceWrapper");
  }
  return context;
}
