import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'

@EventData({
    name: 'TASK-1B'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('badbot')
        this.setComponentsTop(
            Components.text('Intern')
        )
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Hopefully my code is ok...', {talkWith: this})
    }
}