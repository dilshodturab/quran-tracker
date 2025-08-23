import inquirer from "inquirer";
import { ICommand } from "@/core/command";
import { Context } from "@/core/context";

export class EditCommand implements ICommand {
  constructor(private context: Context) { }

  async execute(): Promise<void> {
    const data = this.context.storage.load();

    if (data.length === 0) {
      console.log("No entries found!");
      return;
    }

    const { index } = await inquirer.prompt([
      {
        type: "list",
        name: "index",
        message: "Select an entry to edit:",
        choices: data.map((entry, index) => ({
          name: `${entry.surah} (${entry.fromAyah} - ${entry.toAyah}) - ${entry.date}`,
          value: index,
        })),
      },
    ]);

    const entry = data[index];

    const questions = await inquirer.prompt([
      {
        type: "input",
        name: "surah",
        message: `Enter new name for Surah ${entry.surah}`,
        default: `${entry.surah}`,
      },
      {
        type: "input",
        name: "fromAyah",
        message: "Which Ayah are you starting from?",
        default: `${entry.fromAyah}`,
      },
      {
        type: "input",
        name: "toAyah",
        message: "To which Ayah are you planning to memorize?",
        default: `${entry.toAyah}`,
      },
    ]);

    data[index] = {
      ...entry,
      surah: questions.surah,
      fromAyah: +questions.fromAyah,
      toAyah: +questions.toAyah,
    };

    this.context.storage.save(data);
    console.log("Entry updated successfully!");
  }
}
