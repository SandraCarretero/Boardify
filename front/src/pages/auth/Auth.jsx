import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate(); 

  return (
    <Container>
      <Title>{mode === 'login' ? 'Inicia sesión ' : 'Regístrate'}</Title>
      <FormWrapper>
        <AuthForm mode={mode} onSuccess={() => navigate('/')} />
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
