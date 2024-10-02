import { RpgEvent, EventData, RpgPlayer, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-4'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-orange')
        this.setComponentsTop(
            Components.text('Carina')
        )
    }

    async onAction(player: RpgPlayer) {
        const gui = player.gui('input')
        gui.open({ title: 'Yayy!', info: 'Smart Move!' })
    //     const choice = await player.showChoices('What looks odd?', [
    //         { text: 'For Sure thing!', value: 'yes' },
    //         { text: 'Sorry, you cant enter without authorization.', value: 'no' },
    //    ], {talkWith: this})
    //    if(choice?.value === 'yes') {
    //         const gui = player.gui('result')
    //         gui.open({ title: 'Boo!', info: 'You cannot let people scan in like that' })
    //    }else{
    //        await player.showText('Oh, okay. *mumbles* Guess I will try to find another way in.')
    //        const gui = player.gui('result')
    //        gui.open({ title: 'Yayy!', info: 'Smart Move!' })
    //    }
    }
}