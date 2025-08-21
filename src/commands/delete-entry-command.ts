import { ICommand } from "@/core/command";
import { Context } from "@/core/context";
import inquirer from "inquirer";

export class DeleteCommand implements ICommand {
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
        message: "Select an entry to delete:",
        choices: data.map((entry, index) => ({
          name: `${entry.surah} (${entry.fromAyah} - ${entry.toAyah}) - ${entry.date}`,
          value: index,
        })),
      },
    ]);

    data.splice(index, 1);
    this.context.storage.save(data);
    console.log("Entry deleted successfully!");
  }
}
