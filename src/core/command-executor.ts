import { ICommand } from "./command";

export class CommandExecutor {
  async run(command: ICommand) {
    await command.execute();
  }
}
