import { DarkModeToggle } from "./DarkModeToggle";
import LinkButton from "./LinkButton";

export const Navbar = () => {
  return (
    <nav className="flex items-center gap-3 flex-wrap">
      <LinkButton href="/">Chapters</LinkButton>
      <LinkButton href="/random30">Random 30 From All</LinkButton>
      <DarkModeToggle />
    </nav>
  );
};
