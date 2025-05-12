import "./Input.css";

const Input = ({ type, id, name, placeholder, onChange, value, accept }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={type !== 'file' ? value : undefined}
      accept={accept}
      className="form-control"
    />
  );
};

export default Input;
