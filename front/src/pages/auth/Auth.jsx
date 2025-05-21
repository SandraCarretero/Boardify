import { useState } from 'react';
import {
  Container,
  Title,
  SwitchText,
  SwitchLink,
  FormWrapper
} from './auth.styled';
import AuthForm from '../../components/authForm/AuthForm';

const Auth = () => {
  const [mode, setMode] = useState('login');

  return (
    <Container>
      <Title>{mode === 'login' ? 'Inicia sesión ' : 'Regístrate'}</Title>
      <FormWrapper>
        <AuthForm mode={mode} />
      </FormWrapper>

      <SwitchText>
        {mode === 'login' ? (
          <>
            ¿Aún no tienes cuenta?{' '}
            <SwitchLink onClick={() => setMode('register')}>
              Regístrate
            </SwitchLink>
          </>
        ) : (
          <>
            ¿Ya tienes cuenta?{' '}
            <SwitchLink onClick={() => setMode('login')}>
              Inicia sesión
            </SwitchLink>
          </>
        )}
      </SwitchText>
    </Container>
  );
};

export default Auth;
