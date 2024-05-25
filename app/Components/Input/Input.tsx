"use client";

interface InputProps {
  type?: string;
  placeholder: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className=" relative">
      <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
        className={`
        peer p-4 pt-6 border-yellow-300 outline-none
         bg-white font-light border-2
        rounded-md transition 
        disabled:opacity-70 
        disabled:cursor-not-allowed
    `}
      />
    </div>
  );
};

export default Input;
