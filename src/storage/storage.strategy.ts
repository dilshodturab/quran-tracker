import { IMemorizationProgress } from "@/types/types";

export interface IStorageStrategy {
  load(): IMemorizationProgress[];
  save(data: IMemorizationProgress[]): void;
}
