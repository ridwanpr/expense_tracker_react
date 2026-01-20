type InputGroupProps = {
  id: string;
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputGroup({
  id,
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
}: InputGroupProps) {
  return (
    <>
      <label htmlFor={id} className="tracking-wide">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full border border-gray-400 p-2 rounded placeholder:text-sm placeholder:font-semibold placeholder:tracking-wide"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
