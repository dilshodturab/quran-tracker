import { ICommand } from "@/core/command";

export class ExitCommand implements ICommand {
  async execute() {
    console.log("Exiting the application. Goodbye!");
    process.exit(0);
  }
}
