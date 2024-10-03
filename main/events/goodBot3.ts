import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-4'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-red')
        this.setComponentsTop(
            Components.text('Norton')
        )
    }

    async onAction(player: RpgPlayer) {
        await player.showText('This Sandwich could really use some....', { talkWith: this })
        await player.showText('KETCHUPPPP!!')
        await player.showText('You bet! Everything tastes good with ketchup - even cupcakes', { talkWith: this })
    }
}