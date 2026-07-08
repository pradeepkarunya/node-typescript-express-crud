import UserRepository from '../repositories/userRepository';
import { User, updateUserRequest } from '../models/user';

class UserService {
    getAllUsers: () => User[] = () => {
        return UserRepository.getAll();
    }

    getUserById: (id: string) => User | undefined = (id: string) => {
        return UserRepository.getById(id);
    }

    createUser: (user: { name: string; email: string; age: number }) => User = (user) => {
        return UserRepository.create(user);
    }

    updateUser: (id: string, updatedUser: updateUserRequest) => User | undefined = (id, updatedUser) => {
        return UserRepository.update(id, updatedUser);
    }

    deleteUser: (id: string) => boolean = (id) => {
        return UserRepository.delete(id);
    }
}

export default new UserService();