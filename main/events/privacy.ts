import { RpgEvent, EventData, RpgPlayer, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-5'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-orange')
        this.setComponentsTop(
            Components.text('Carina')
        )
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Oh Laptop, and its unlocked!!', { talkWith: this })
        player.gold += 1
        const gui = player.gui('result')
        gui.open({ title: 'Boo!', info: 'Never leave you laptop unlocked and have a strong password!' })
        this.remove();
    }
}