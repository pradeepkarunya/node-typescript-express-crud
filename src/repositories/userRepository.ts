import { v4 as uuidv4 } from 'uuid';
import data from '../data/users.json';
import { User, createUserRequest, updateUserRequest } from '../models/user';

class UserRepository {
    private usersList: User[] = [...data];

    getAll: () => User[] = () => {
        return this.usersList;
    }

    getById: (id: string) => User | undefined = (id: string) => {
        return this.usersList.find(user => user.id === id);
    }

    public create(user: createUserRequest): User {
        const newUser: User = {
            id: uuidv4(),
            ...user
        };
        this.usersList.push(newUser);
        return newUser;
    }

    public update(id: string, updatedUser: updateUserRequest): User | undefined {
        const userIndex = this.usersList.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return undefined;
        }
        const userToUpdate = this.usersList[userIndex];
        const updatedUserData: User = {
            ...userToUpdate,
            ...updatedUser
        };
        this.usersList[userIndex] = updatedUserData;
        return updatedUserData;
    }

    public delete(id: string): boolean {
        const userIndex = this.usersList.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return false;
        }
        this.usersList.splice(userIndex, 1);
        return true;
    }
}

export default new UserRepository();