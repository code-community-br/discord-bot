import { Client, Discord, Once } from 'discordx';

@Discord()
export default class ReadyEvent {
    @Once({ event: 'ready' })
    async onReady([client]: Client) {
        // Initiate Application Commands.
        await client.initApplicationCommands();
        console.log(`${client.user?.tag} connected!`);
    }
}