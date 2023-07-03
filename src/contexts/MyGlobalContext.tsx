"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext } from "react";
export type GlobalContent = {
  godMode: boolean;
  setGodMode: any;
};
export const MyGlobalContext = createContext<GlobalContent>({
  godMode: false, // set a default value
  setGodMode: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);

export const MyGlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [godMode, setGodMode] = useLocalStorage("godMode", false);
  return (
    <MyGlobalContext.Provider value={{ godMode, setGodMode }}>
      {children}
    </MyGlobalContext.Provider>
  );
};
