export interface AuthService {
    login(username: string, password: string): Promise<string>;
  }
  
  export class AuthServiceImpl implements AuthService {
    async login(username: string, password: string): Promise<string> {
      // hacer la llamada a la API de autenticación y devolver el token si la autenticación es exitosa
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
      const { token } = await response.json();
      return token;
    }
  }
  