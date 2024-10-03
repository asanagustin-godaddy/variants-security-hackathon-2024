import { RpgPlayer, RpgPlayerHooks, Control, Components, RpgEvent, EventData } from '@rpgjs/server'

const player: RpgPlayerHooks = {

    onConnected(player: RpgPlayer) {
        player.name = 'Your name'
        player.setComponentsTop(Components.text('GoMe'))
    },
    onInput(player: RpgPlayer, { input }) {
        const map = player.getCurrentMap()
        if (input == 'action') {
            player.gui('topbar').open();
        }
        if (input == 'back') {
           player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        player.gui('topbar').open();
    }
}

export default player