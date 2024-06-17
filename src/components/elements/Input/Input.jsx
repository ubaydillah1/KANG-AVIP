const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      id={name}
      name={name}
      className="border rounded w-full text-sm py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
    />
  );
};

export default Input;
