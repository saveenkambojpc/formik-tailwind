interface ButtonProps {
  type?: "button" | "reset" | "submit";
  children: React.ReactNode; // Can be any kind of content
  // Other optional props for the button
  [prop: string]: any;
}

export default function Button({
  type = "button",
  children,
  ...other
}: ButtonProps) {
  return (
    <button
      {...other}
      type={type}
      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}
