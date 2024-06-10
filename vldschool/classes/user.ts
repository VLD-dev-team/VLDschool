class User {
    private email: string;
    private username: string;
    private hashedPassword: string;

    constructor(email: string, username: string, hashedPassword: string) {
        this.email = email;
        this.username = username;
        this.hashedPassword = hashedPassword;
    }

    getUserInfos(): Object {
        return {
            email: this.email,
            username: this.username
        };
    }

    getUserHashedPassword(): string {
        return this.hashedPassword;
    }
}