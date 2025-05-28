import { createContext, useState, useEffect, useContext } from 'react';
import authService from '../services/authService'; // Asegúrate de que esta ruta sea correcta

// Crea el contexto de autenticación
export const AuthContext = createContext(null);

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// Componente proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga inicial

  // Efecto para cargar el usuario al inicio de la aplicación si hay un token
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          // Llama a tu servicio de autenticación para obtener los datos del usuario
          // En una aplicación real, esto validaría el token con tu backend
          // y devolvería los datos del usuario asociado.
          const user = await authService.getCurrentUser(token);
          setCurrentUser(user);
        } catch (error) {
          console.error('Error al cargar usuario desde el token:', error);
          // Si el token es inválido o expiró, lo eliminamos
          localStorage.removeItem('token');
          setToken(null);
          setCurrentUser(null);
        }
      }
      setLoading(false); // La carga inicial ha terminado
    };

    loadUser();
  }, [token]); // Dependencia del token para recargar si cambia

  // Función para iniciar sesión
  const login = async (newToken, user) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setCurrentUser(user);
  };

  // Función para registrar un usuario (puede ser la misma que login si el registro auto-loguea)
  const register = async (newToken, user) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setCurrentUser(user);
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setCurrentUser(null);
    // Opcional: Podrías añadir una redirección aquí o en el componente que llama a logout
  };

  // El valor que se proveerá a los componentes descendientes
  const authContextValue = {
    currentUser,
    token,
    isAuthenticated: !!currentUser, // Booleano para saber si hay un usuario logueado
    login,
    register,
    logout,
    loading
  };

  // Mientras se carga el usuario, podrías mostrar un spinner o un mensaje
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-gray-700 text-lg">Cargando aplicación...</div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
