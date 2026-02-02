import fs from "node:fs";
import path from "node:path";

export function readJSON() {
    const dataPath = path.join(process.cwd(), "data.json");
    try {
        const data = fs.readFileSync(dataPath, "utf-8");
        if (!data.trim()) {
            fs.writeFileSync(dataPath, "[]", "utf-8");
            return [];
        }
        return JSON.parse(data);
    } catch {
        fs.writeFileSync(dataPath, "[]", "utf-8");
        return [];
    }
}
