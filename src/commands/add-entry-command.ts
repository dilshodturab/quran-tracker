import { Context } from "@/core/context";
import { IMemorizationProgress } from "@/types/types";
import inquirer from "inquirer";

export class EntryCommand {
  constructor(private context: Context) { }

  async execute() {
    const questions = await inquirer.prompt([
      { type: "input", name: "surah", message: "Enter Surah name" },
      { type: "input", name: "fromAyah", message: "From Ayah" },
      { type: "input", name: "toAyah", message: "To which Ayah?" },
    ]);

    const newEntry: IMemorizationProgress = {
      surah: questions.surah,
      fromAyah: +questions.fromAyah,
      toAyah: +questions.toAyah,
      date: new Date().toLocaleDateString(),
    };

    const data = this.context.storage.load();
    data.push(newEntry);
    this.context.storage.save(data);
    console.log("Data saved successfully!");
  }
}
