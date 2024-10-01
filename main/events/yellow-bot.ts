import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'

@EventData({
    name: 'EV-1'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-yellow')
        this.setHitbox(16, 16)
        this.infiniteMoveRoute([ Move.tileRandom() ])
        this.setComponentsTop(
            // Components.text('{id}')
            Components.text('Yellow')
        )
        this.speed = Speed.Slower
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Hey, I need your help...', {talkWith: this})
        const choice = await player.showChoices('Can you scan me in? I forgot my badge at home.', [
            { text: 'Sure thing!', value: 'yes' },
            { text: 'Sorry, you cant enter without a badge.', value: 'no' },
       ], {talkWith: this})
       if(choice?.value === 'yes') {
        //    Open "you let an imposter in!"
        //    const gui = player.gui('lose')
       }else{
            await player.showText('Oh, okay. *mumbles* Guess I will try to find another way in.')
       }
    }
}