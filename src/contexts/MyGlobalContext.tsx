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
