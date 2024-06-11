import { yarg as argv } from './config/plugins/argv-adapter.plugin';
import { RunOptions, ServerApp } from './presentation/server-app';


(async () => {
    await main();
})();


async function main() {
    const { base, limit,  showTable, name, destination  } = argv as unknown as RunOptions;
    console.log({ base, limit, showTable });
    ServerApp.run({ base, limit, showTable, name, destination });
} 