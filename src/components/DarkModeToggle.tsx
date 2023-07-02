"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useLocalStorage } from "usehooks-ts";

export const DarkModeToggle = () => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage("darkTheme", true);
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);
  const handleThemeChange = () => {
    setDarkTheme((prevValue: boolean) => !prevValue);
  };
  return <Button onClick={handleThemeChange}>Dark Mode</Button>;
};
