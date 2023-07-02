const Button = ({ children, onClick }: { onClick: any; children: any }) => {
  return (
    <button
      className="border border-light-secondary dark:border-secondary py-3 px-5 bg-transparent font-medium outline-none hover:bg-light-secondary dark:hover:bg-secondary duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
