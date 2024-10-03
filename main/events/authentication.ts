import { RpgEvent, EventData, RpgPlayer, ShapePositioning, RpgShape, Speed, Move, Components } from '@rpgjs/server'
@EventData({
    name: 'EV-0'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('gobot-yellow')
        this.setHitbox(10, 20)
        this.setComponentsTop(
            Components.text('Mike')
        )
        this.infiniteMoveRoute([ Move.tileRandom() ])
        this.speed = Speed.Slowest
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Hey, I need your help...', {talkWith: this})
        const choice = await player.showChoices('Can you scan me in? I forgot my badge at home.', [
            { text: 'Sure thing!', value: 'yes' },
            { text: 'Sorry, you cant enter without a badge.', value: 'no' },
       ], {talkWith: this})
       if(choice?.value === 'yes') {
            const gui = player.gui('result')
            await gui.open( {title: 'Boo!', info: 'You cannot let people scan in like that', isBad: true},
            {
                waitingAction: true,
                blockPlayerInput: true
            });
       } else {
           const gui = player.gui('result')
           await gui.open( { title: 'Yayy!', info: 'Smart Move!' },
           {
               waitingAction: true,
               blockPlayerInput: true
           });
           player.gold += 1;
           this.remove();
       }


    }
}