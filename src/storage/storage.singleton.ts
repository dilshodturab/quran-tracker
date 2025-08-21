import { StorageFactory } from "./storage.factory";
import { IStorageStrategy } from "./storage.strategy";

export class StorageSingleton {
  private static instance: IStorageStrategy;

  static getInstance(): IStorageStrategy {
    if (!StorageSingleton.instance) {
      StorageSingleton.instance = StorageFactory.create("json");
    }
    return StorageSingleton.instance;
  }
}
