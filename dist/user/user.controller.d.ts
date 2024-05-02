import { UsersService } from 'src/user/users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    getUserProfile(req: any): Promise<any>;
}
