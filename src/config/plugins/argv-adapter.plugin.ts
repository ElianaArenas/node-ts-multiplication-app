import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(process.argv)
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'multiplication table base',
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'multiplication table limit',
    })
    .option('s', {
        alias: 'showTable',
        type: 'boolean',
        default: false, 
        describe: 'show multiplication table',
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table', 
        describe: 'File name',
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: './outputs', 
        demandOption: true,
        describe: 'File destination',
    })
    .check((argv, options)=>{
        if(argv.b < 1) throw 'Error: base must be greater than 0';
        return true;
    })
    .parseSync()