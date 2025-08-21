import { IStorageStrategy } from "@/storage/storage.strategy";

export class Context {
  constructor(public storage: IStorageStrategy) { }
}
