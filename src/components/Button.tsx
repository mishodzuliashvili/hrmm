const Button = ({
  children,
  onClick,
  px,
  disabled,
}: {
  onClick: any;
  children: any;
  px?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={
        "border text-left border-light-secondary rounded-lg dark:border-secondary p-3 bg-transparent font-medium outline-none hover:bg-light-secondary dark:hover:bg-secondary duration-300 " +
        (px ? "px-5" : "")
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
