import { RpgEvent, EventData, RpgPlayer, Speed, Components } from '@rpgjs/server'

@EventData({
    name: 'TASK-3'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('trivia-board')
        this.setHitbox(16, 16)
        this.setComponentsTop(
            Components.text('Trivia')
        )
        this.speed = Speed.Slower
    }

    async onAction(player: RpgPlayer) {
        await player.showText('It is time for a Bug Bounty Office Trivia!')
        await player.showText('Have you been paying attention to the tech talks?')
        await player.showText('In this task, you will have to answer a few questions from Tech Talk #2 (Top 10 OWASP Attacks).')
        await player.showText('Good luck!')
        const gui = player.gui('trivia')
        await gui.open({},
        {
            waitingAction: true,
            blockPlayerInput: true
        });
        await player.showText('Nice work! You completed a task!');
        player.exp += 1;
    }
}