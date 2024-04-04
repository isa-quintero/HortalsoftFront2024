import { UserRepository, User } from './user';

const users: User[] = [
  { username: 'alice', password: 'secreto' },
  { username: 'bob', password: '123456' },
];

export class UserRepositoryMock implements UserRepository {
  async findByUsername(username: string): Promise<User | undefined> {
    return users.find((u) => u.username === username);
  }
}
