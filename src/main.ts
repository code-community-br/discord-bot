import 'dotenv/config';
import 'reflect-metadata';
import { tsyringeDependencyRegistryEngine } from '@discordx/di';
import { Client, DIService } from 'discordx';
import { clientConfig } from './client';
import { container } from 'tsyringe';
import { importx } from '@discordx/importer';

async function main() {
    // Share DI containers with TSyringe.
    DIService.engine = tsyringeDependencyRegistryEngine.setInjector(container);

    // Instance new bot client and register this instance in the TSyringe container.
    const client = new Client(clientConfig);
    container.registerInstance(Client, client);
    
    // Import all events and commands.
    await importx(__dirname + '/{events,commands}/**/*.{ts,js}');

    // Start running the bot client.
    const DISCORD_TOKEN = process.env.DISCORD_TOKEN || "";
    await client.login(DISCORD_TOKEN);
}

main();