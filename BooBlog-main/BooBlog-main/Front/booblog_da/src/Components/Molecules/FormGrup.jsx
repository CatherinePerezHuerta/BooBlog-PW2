// src/Components/Molecules/FormGroup.jsx
import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import './FormGroup.css'

const FormGroup = ({ label, type, id, name, placeholder }) => {
  return (
    <div className="form-group">
      <Label htmlFor={id}>{label}</Label>
      <Input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default FormGroup;

