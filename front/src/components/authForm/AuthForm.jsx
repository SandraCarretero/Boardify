import { useState, useEffect } from 'react';
import InputForm from '../inputForm/InputForm';
import { Button, Form, PasswordCriteria } from './authForm.styled';

const AuthForm = ({ mode }) => {
  const isLogin = mode === 'login';
  const [errors, setErrors] = useState({});
  const [passwordCriteria, setPasswordCriteria] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSymbol: false,
    minLength: false
  });

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmpassword: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      validatePasswordCriteria(value);
    }
    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };

      if (name === 'email') {
        if (/\S+@\S+\.\S+/.test(value)) delete newErrors.email;
      }

      if (name === 'name') {
        if (value.trim() !== '') delete newErrors.name;
      }

      if (name === 'confirmpassword') {
        if (value === formData.password) delete newErrors.confirmpassword;
      }

      if (name === 'password') {
        const valid =
          /[A-Z]/.test(value) &&
          /[a-z]/.test(value) &&
          /\d/.test(value) &&
          /[\W_]/.test(value) &&
          value.length >= 6;

        if (valid) delete newErrors.password;

        if (formData.confirmpassword && formData.confirmpassword === value) {
          delete newErrors.confirmpassword;
        }
      }

      return newErrors;
    });
  };

  const validatePasswordCriteria = password => {
    setPasswordCriteria({
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSymbol: /[\W_]/.test(password),
      minLength: password.length >= 6
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido.';
    }

    const { hasUpperCase, hasLowerCase, hasNumber, hasSymbol, minLength } =
      passwordCriteria;

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumber ||
      !hasSymbol ||
      !minLength
    ) {
      newErrors.password = 'La contraseña no cumple los requisitos.';
    }

    if (mode === 'register') {
      if (!formData.name) {
        newErrors.name = 'El nombre es obligatorio.';
      }

      if (!formData.confirmpassword) {
        newErrors.confirmpassword = 'Confirma tu contraseña.';
      } else if (formData.password !== formData.confirmpassword) {
        newErrors.confirmpassword = 'Las contraseñas no coinciden.';
      }
    }

    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario válido', formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {mode === 'register' && (
        <InputForm
          label="Nombre"
          name="name"
          placeholder="Escribe tu nombre"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
      )}

      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Escribe tu email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputForm
        label="Contraseña"
        name="password"
        type="password"
        placeholder="Escribe tu contraseña"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      {/* ✅ Mostrar requisitos dinámicos */}
      {!isLogin && formData.password && (
        <PasswordCriteria>
          <p style={{ color: passwordCriteria.hasUpperCase ? 'green' : 'red' }}>
            • Al menos una mayúscula
          </p>
          <p style={{ color: passwordCriteria.hasLowerCase ? 'green' : 'red' }}>
            • Al menos una minúscula
          </p>
          <p style={{ color: passwordCriteria.hasNumber ? 'green' : 'red' }}>
            • Al menos un número
          </p>
          <p style={{ color: passwordCriteria.hasSymbol ? 'green' : 'red' }}>
            • Al menos un símbolo
          </p>
          <p style={{ color: passwordCriteria.minLength ? 'green' : 'red' }}>
            • Mínimo 6 caracteres
          </p>
        </PasswordCriteria>
      )}

      {mode === 'register' && (
        <InputForm
          label="Confirmar contraseña"
          name="confirmpassword"
          type="password"
          placeholder="Confirma tu contraseña"
          value={formData.confirmpassword}
          onChange={handleChange}
          error={errors.confirmpassword}
        />
      )}

      <Button type="submit">{isLogin ? 'Entrar' : 'Crear cuenta'}</Button>
    </Form>
  );
};

export default AuthForm;
