import { RpgEvent, EventData, RpgPlayer, Speed, Components } from '@rpgjs/server'

@EventData({
    name: 'TASK-1'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('code-screen')
        this.setHitbox(16, 16)
        this.setComponentsTop(
            Components.text('Code')
        )
        this.speed = Speed.Slower
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Hi, I am an intern that just started in Cart team this summer.')
        await player.showText('Could you review my code for any vulnerabilities?')
        const gui = player.gui('code')
        gui.open()
    }
}