import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-2'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-blue')
        this.setComponentsTop(
            Components.text('Jason')
        )
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Here is my badge', {talkWith: this})
            const gui = player.gui('badge')
            gui.open({ name: 'WindOps' })
    }
}