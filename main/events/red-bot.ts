import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-3'
})
export default class CatEvent extends RpgEvent {
    playerName = 'Red Bot';
    onInit() {
        this.setGraphic('gobot-red') // sets character graphics (SEE::spritesheet)
        this.setHitbox(16, 16)
        // this.infiniteMoveRoute([ Move.tileRandom() ])
        this.setComponentsTop(
            // Components.text('{id}')
            Components.text(this.playerName)
        )
        this.speed = Speed.Slower
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Here is my badge.', {
            talkWith: this
        })
        const gui = player.gui('badge')
        await gui.open({ name: this.playerName, img: 'public/images/red.png', role: 'Project Manager', tasksCompleted: 1000, serverAccess: 'Yes' },
        {
            waitingAction: true,
            blockPlayerInput: true
        });
        const choice = await player.showChoices('Is this bot an imposter?', [
            { text: 'Yes, very sus!', value: 'yes' },
            { text: 'No, all clean to me.', value: 'no' },
       ], {talkWith: this})
       if(choice?.value === 'yes') {
            player.gold += 1; // example of incrementing the player's imposter count
            const gui = player.gui('result')
            gui.open({ title: 'Nice!', info: 'You found an imposter!' })
       }else{
           await player.showText('...')
           const gui = player.gui('result')
       }
    }
}