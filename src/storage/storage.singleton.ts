export class StorageSingleton {
  private static instance: StorageSingleton;

  static getInstance(): StorageSingleton {
    if (!StorageSingleton.instance) {
      StorageSingleton.instance = new StorageSingleton();
    }
    return StorageSingleton.instance;
  }
}
