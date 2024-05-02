export type User = any;
export declare class UsersService {
    private readonly users;
    constructor();
    findOne(username: string): Promise<User | undefined>;
    findByUsername(username: string): Promise<void>;
}
