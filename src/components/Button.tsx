const Button = ({ children, onClick }: { onClick: any; children: any }) => {
  return (
    <button
      className="border border-secondary p-3 px-5 bg-transparent font-medium outline-none max-w-xs hover:bg-secondary duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
