import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-2'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-pink')
        this.setComponentsTop(
            Components.text('Joel')
        )
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Hey, how can I help you?', {talkWith: this})
        const choice = await player.showChoices('Hey, how are you? I wanted a tour of the server room, could you help?', [
            { text: 'For Sure thing!', value: 'yes' },
            { text: 'I am sorry, but I cannot let you in without authorization.', value: 'no' },
       ], {talkWith: this})
       if(choice?.value === 'yes') {
            const gui = player.gui('result')
            gui.open({ title: 'Boo!', info: 'You cannot let people scan in like that' })
       }else{
           await player.showText('Oh, really? I am sorry, I will come back later with authorization.')
           const gui = player.gui('result')
           gui.open({ title: 'Yayy!', info: 'Smart Move!' })
       }
    }
}