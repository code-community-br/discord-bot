import { Discord, Slash } from 'discordx';
import { Category } from '@discordx/utilities';
import { CommandInteraction } from 'discord.js';

@Discord()
@Category('Test')
export default class TestCommand {
    @Slash({
        name: 'test',
        description: 'Just a test command'
    })
    async test(interaction: CommandInteraction) {
        await interaction.followUp({
            content: `${interaction.member}, test!`
        });
    }
}