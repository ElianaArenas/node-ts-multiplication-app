import fs from 'fs';
import { yarg  } from './config/plugins/argv-adapter.plugin';


let outputMessage = '';
const { b: base, l: limit, s: showTable } = yarg;
const headerMessage = `
========================
    Tabla del ${base}
========================
`;

for (let i = 1; i <= limit; i++) {
   outputMessage += `${base} x ${i} = ${i * base}\n`;
}


outputMessage = headerMessage + outputMessage;
if(showTable) console.log(outputMessage);

const outputPath = `outputs/folder1/folder2/folder3`;

fs.mkdirSync(outputPath, { recursive: true });

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('The file has been saved!');