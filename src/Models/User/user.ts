// en src/infrastructure/user.ts
export interface UserRepository {
    findByUsername(username: string): Promise<User | undefined>;
  }
  
  export interface User {
    username: string;
    password: string;
  }
  