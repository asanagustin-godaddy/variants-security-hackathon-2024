import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-3'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-purple')
        this.setComponentsTop(
            Components.text('Karen')
        )
    }

    async onAction(player: RpgPlayer) {
        await player.showText('We\'re happy to help!', {talkWith: this})
    }
}