import bcrypt from 'bcrypt';

export async function saltAndHash(plainText: string): Promise<string> {
    const saltRounds = 10;
    const hashed = await bcrypt.hash(plainText, saltRounds);
    return hashed;
}

export async function compareHash(plainText: string, hashed: string): Promise<boolean> {
    const match = await bcrypt.compare(plainText, hashed);
    return match;
}