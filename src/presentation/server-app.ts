import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

export interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp {
    static run({ base, limit, showTable, name, destination }: RunOptions) {
        console.log('Running server app...');

        const table =  new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({ 
            fileContent: table,
            destination: `${destination}/table-${base}`,
            fileName: name
        });
        if(showTable) console.log(table);

       (wasCreated) ? console.log('The file has been saved!') : console.error('The file has not been saved!');
    }
}