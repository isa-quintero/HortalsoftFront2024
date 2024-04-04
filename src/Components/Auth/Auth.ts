// en src/application/auth.ts
import { AuthService } from '../../Services/Auth/Auth';
import { UserRepository } from '../../Models/User/user';

export class AuthServiceImpl implements AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async login(username: string, password: string): Promise<string> {
    const user = await this.userRepository.findByUsername(username);
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }

    // generación de token de sesión...
    return 'mi-token';
  }
}
