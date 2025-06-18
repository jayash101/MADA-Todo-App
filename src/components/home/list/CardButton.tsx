"use client";

const CardButton = ({
  color,
  text,
  onClick,
  disabled = false,
}: {
  color: "edit" | "delete";
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`dark:bg-gray-600 bg-gray-200 py-1 px-3 rounded dark:text-gray-300 text-gray-600 font-medium disabled:brightness-50 disabled:bg-black  disabled:hover:bg-black disabled:cursor-not-allowed
        ${color === "edit" && "dark:hover:bg-blue-600 hover:bg-blue-600"}
        ${color === "delete" && "dark:hover:bg-red-600 hover:bg-red-600"}
         hover:text-white hover:border-none cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CardButton;
