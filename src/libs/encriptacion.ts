import bcrypt from "bcrypt";

export const encrypt = async (password: string) => {
    const saltRounds = 10;

    return await bcrypt.hash(password, saltRounds);
}

export const compararHash = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}