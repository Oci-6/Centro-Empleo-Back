import fs from "fs";

export const limpiarArchivos = (path: string): boolean => {

    try {
        fs.unlinkSync(path)
        return true;
    } catch (err) {
        console.error(err)
        return false;
    }
}