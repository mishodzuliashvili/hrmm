import Link from "next/link";

const LinkButton = ({ children, href }: { href: any; children: any }) => {
  return (
    <Link
      className="border border-light-secondary dark:border-secondary py-3 px-5 bg-transparent font-medium outline-none hover:bg-light-secondary dark:hover:bg-secondary duration-300"
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
