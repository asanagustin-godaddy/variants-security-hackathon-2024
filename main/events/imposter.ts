import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-3'
})
export default class CatEvent extends RpgEvent {
    playerName = 'Imposter';
    onInit() {
        this.setGraphic('badbot') // sets character graphics (SEE::spritesheet)
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
        gui.open({ name: this.playerName })
    }
}