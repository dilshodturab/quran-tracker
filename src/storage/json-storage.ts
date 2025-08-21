import fs from "fs";
import path from "path";
import { IStorageStrategy } from "./storage.strategy";
import { IMemorizationProgress } from "@/types/types";

const filePath = path.join(__dirname, "../../data/progress.json");

export class JSONStorage implements IStorageStrategy {
  load(): IMemorizationProgress[] {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
  save(data: IMemorizationProgress[]): void {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}
