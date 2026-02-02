import fs from "node:fs";
import path from "node:path";

export const writeJSON = (data: Object) => {
    const dataPath = path.join(process.cwd(), "data.json");
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(dataPath, jsonData, "utf-8");
    return;
};
