import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
    getUsers(req: Request, res: Response) {
        const users = userService.getAllUsers();
        res.status(200).json(users);
    }

    public getUserById(req: Request, res: Response) {
        // ensure id is a string (req.params.id can be string | string[])
        const rawId = (req.params as { id?: string | string[] }).id;
        const id: string | undefined = Array.isArray(rawId) ? rawId[0] : rawId;
        if (!id) {
            res.status(400).json({ message: 'Invalid or missing id parameter' });
            return;
        }
        const user = userService.getUserById(id);
        if(!user){
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    }

    
    public createUser(req: Request, res: Response): void {
        const response = userService.createUser(req.body);
        res.status(201).json(response);
    }

    public updateUser(req: Request, res: Response): void {
        const rawId = (req.params as { id?: string | string[] }).id;
        const id: string | undefined = Array.isArray(rawId) ? rawId[0] : rawId;
        if (!id) {
            res.status(400).json({ message: 'Invalid or missing id parameter' });
            return;
        }
        const user = userService.updateUser(id, req.body);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    }

    public deleteUser(req: Request, res: Response): void {
        const rawId = (req.params as { id?: string | string[] }).id;
        const id: string | undefined = Array.isArray(rawId) ? rawId[0] : rawId;
        if (!id) {
            res.status(400).json({ message: 'Invalid or missing id parameter' });
            return;
        }
        const isDeleted = userService.deleteUser(id);
        if (!isDeleted) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    }

}

export default new UserController();