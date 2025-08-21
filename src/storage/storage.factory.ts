import { JSONStorage } from "./json-storage";
import { IStorageStrategy } from "./storage.strategy";

export class StorageFactory {
  static create(type: "json"): IStorageStrategy {
    switch (type) {
      case "json":
      default:
        return new JSONStorage();
    }
  }
}
