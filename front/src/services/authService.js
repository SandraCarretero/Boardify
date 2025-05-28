import axios from 'axios';

const URL_API = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: URL_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const authService = {
  login: credentials => apiClient.post('/auth/login', credentials),
  register: userData => apiClient.post('/auth/register', userData),
  getCurrentUser: async () => {
    const response = await apiClient.get('/auth/me');
    return response.data.data.user;
  }
};

// INTERCEPTORS

// Callback que se ejecuta antes de lanzar la petición
apiClient.interceptors.request.use(async config => {
  // Provocamos un delay en cada petición
  await new Promise(resolve => setTimeout(resolve, 2000));

  //Tratamiento del token
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Callback que se ejecuta antes de procesar la repsuesta
apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default authService;
