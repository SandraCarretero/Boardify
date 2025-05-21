import { StyledWrapper } from './inputForm.styled';

const InputForm = ({
  label,
  id,
  name,
  placeholder,
  type = 'text',
  value,
  onChange,
  error
}) => {
  return (
    <StyledWrapper>
      <div className="coolinput">
        <label className="text" htmlFor={id || name}>
          {label}
        </label>
        <input
          className="input"
          id={id || name}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    </StyledWrapper>
  );
};

export default InputForm;
