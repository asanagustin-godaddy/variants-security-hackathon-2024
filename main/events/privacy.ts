import { RpgEvent, EventData, RpgPlayer, Components, Move, Speed } from '@rpgjs/server'

@EventData({
    name: 'EV-5'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-orange')
        this.infiniteMoveRoute([ Move.tileRandom() ])
        this.setComponentsTop(
            Components.text('Carina')
        )
        this.speed = Speed.Slowest
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Oh a laptop, and its unlocked!!', { talkWith: this })
        await player.showText('And with so many tabs open! Today must be my lucky day!', { talkWith: this })
        player.gold += 1
        const gui = player.gui('result')
        gui.open({ title: 'Boo!', info: 'Never leave you laptop unlocked and have a strong password!', isBad: true })
        this.remove();
    }
}