import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import InputForm from '../inputForm/InputForm';
import { Button, Form, PasswordCriteria } from './authForm.styled';
import authService from '../../services/authService';

const AuthForm = ({ mode, onSuccess }) => {
  const isLogin = mode === 'login';

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [passwordCriteria, setPasswordCriteria] = useState({
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSymbol: false,
    minLength: false
  });

  const [errors, setErrors] = useState({});

  const validatePasswordCriteria = password => {
    setPasswordCriteria({
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSymbol: /[\W_]/.test(password),
      minLength: password.length >= 6
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Introduce un email válido.';
    }

    if (!form.password) {
      newErrors.password = 'Introduce una contraseña.';
    } else {
      const { hasUpperCase, hasLowerCase, hasNumber, hasSymbol, minLength } =
        passwordCriteria;
      if (
        !hasUpperCase ||
        !hasLowerCase ||
        !hasNumber ||
        !hasSymbol ||
        !minLength
      ) {
        newErrors.password = 'La contraseña no cumple los requisitos.';
      }
    }

    if (!isLogin) {
      if (!form.username) {
        newErrors.username = 'El nombre de usuario es obligatorio.';
      }
      if (!form.confirmpassword) {
        newErrors.confirmpassword = 'Confirma tu contraseña.';
      } else if (form.password !== form.confirmpassword) {
        newErrors.confirmpassword = 'Las contraseñas no coinciden.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const mutation = useMutation({
    mutationFn: async data => {
      return isLogin
        ? authService.login({ email: data.email, password: data.password })
        : authService.register({
            username: data.username,
            email: data.email,
            password: data.password
          });
    },
    onSuccess: async (res, variables) => {
      console.log('Respuesta del servidor:', res);
      console.log(`${isLogin ? 'Login' : 'Registro'} exitoso`, res.data);
      
      // Limpiar errores del servidor al tener éxito
      setErrors({});
      setForm({ username: '', email: '', password: '', confirmpassword: '' });

      if (!isLogin) {
        try {
          const loginRes = await authService.login({
            email: variables.email,
            password: variables.password
          });
          console.log('Login automático exitoso', loginRes.data);

          localStorage.setItem('token', loginRes.data.token);
          if (onSuccess) onSuccess(loginRes.data);
          setForm({
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
          });
        } catch (loginError) {
          console.error('Error al hacer login automático:', loginError);
        }
      } else {
        localStorage.setItem('token', res.data.token);
        if (onSuccess) onSuccess(res.data);
      }
    },
    onError: err => {
      console.error('Error:', err.response?.data || err.message);
      
      // Manejar errores específicos del servidor
      const errorMessage = err.response?.data?.message || err.message;
      const newErrors = {};
      
      if (errorMessage === 'El email ya está registrado') {
        newErrors.email = errorMessage;
      } else if (errorMessage === 'El nombre de usuario ya está en uso') {
        newErrors.username = errorMessage;
      } else if (errorMessage === 'Usuario no encontrado') {
        newErrors.email = errorMessage;
      } else if (errorMessage === 'Credenciales inválidas') {
        newErrors.password = errorMessage;
      } else {
        // Error genérico
        newErrors.general = errorMessage;
      }
      
      setErrors(newErrors);
    }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // Limpiar error específico cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name === 'password') {
      validatePasswordCriteria(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(form);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {!isLogin && (
        <InputForm
          label="Usuario"
          name="username"
          placeholder="Escribe tu nombre"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />
      )}

      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="Escribe tu email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputForm
        label="Contraseña"
        name="password"
        type="password"
        placeholder="Escribe tu contraseña"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />

      {!isLogin && form.password && (
        <PasswordCriteria>
          {!passwordCriteria.hasUpperCase && <p>• Al menos una mayúscula</p>}
          {!passwordCriteria.hasLowerCase && <p>• Al menos una minúscula</p>}
          {!passwordCriteria.hasNumber && <p>• Al menos un número</p>}
          {!passwordCriteria.hasSymbol && <p>• Al menos un símbolo</p>}
          {!passwordCriteria.minLength && <p>• Mínimo 6 caracteres</p>}
        </PasswordCriteria>
      )}

      {!isLogin && (
        <InputForm
          label="Confirmar contraseña"
          name="confirmpassword"
          type="password"
          placeholder="Confirma tu contraseña"
          value={form.confirmpassword}
          onChange={handleChange}
          error={errors.confirmpassword}
        />
      )}

      {/* Mostrar error general si existe */}
      {errors.general && (
        <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
          {errors.general}
        </div>
      )}

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending
          ? isLogin
            ? 'Entrando...'
            : 'Registrando...'
          : isLogin
          ? 'Entrar'
          : 'Crear cuenta'}
      </Button>
    </Form>
  );
};

export default AuthForm;