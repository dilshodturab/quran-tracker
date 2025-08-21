import inquirer from "inquirer";
import { CommandExecutor } from "./core/command-executor";
import { Context } from "./core/context";
import { StorageSingleton } from "./storage/storage.singleton";
import { EntryCommand } from "./commands/add-entry-command";
import { ShowEntriesCommand } from "./commands/show-entries-command";
import { ExitCommand } from "./commands/exit-command";
import { DeleteCommand } from "./commands/delete-entry-command";
import { EditCommand } from "./commands/edit-entry-command";

const context = new Context(StorageSingleton.getInstance());
const executor = new CommandExecutor();

async function bootstrap() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What do you want to do?",
      choices: [
        "New memorization record",
        "Show all records",
        "Delete",
        "Edition",
        "Statistics",
        "Exit",
      ],
    },
  ]);

  switch (action) {
    case "New memorization record":
      await executor.run(new EntryCommand(context));
      break;
    case "Delete":
      await executor.run(new DeleteCommand(context));
      break;
    case "Edition":
      await executor.run(new EditCommand(context));
      break;
    case "Show all records":
      await executor.run(new ShowEntriesCommand(context));
      break;
    case "Exit":
      await executor.run(new ExitCommand());
      break;
  }
  bootstrap();
}
bootstrap();
