import Link from "next/link";

const LinkButton = ({
  children,
  href,
  px,
}: {
  href: any;
  children: any;
  px?: boolean;
}) => {
  return (
    <Link
      className={
        "border border-light-secondary rounded-lg dark:border-secondary p-3 bg-transparent font-medium outline-none hover:bg-light-secondary dark:hover:bg-secondary duration-300 " +
        (px ? "px-5" : "")
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
