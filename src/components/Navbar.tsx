"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { DarkModeToggle } from "./DarkModeToggle";
import LinkButton from "./LinkButton";
import Button from "./Button";
import { useGlobalContext } from "@/contexts/MyGlobalContext";

export const Navbar = () => {
  const { godMode, setGodMode } = useGlobalContext();
  return (
    <nav className="flex items-center gap-3 flex-wrap">
      <LinkButton href="/">Chapters</LinkButton>
      <LinkButton href="/random30">Random 30 From All</LinkButton>
      <DarkModeToggle />
      <Button onClick={() => setGodMode((prev: any) => !prev)}>
        {godMode ? "God Mode" : "Normal Mode"}
      </Button>
    </nav>
  );
};
