import fs from "fs";
export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() /**
   * storage respository
   */
  {}

  execute({
    fileContent, 
    destination = "outputs",
    fileName = "table"
}: Options): boolean {
    
    try {
        fs.mkdirSync(destination, { recursive: true });

        fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
        console.log("The file has been saved!");

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
  }
}
