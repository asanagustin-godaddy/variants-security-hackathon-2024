import { RpgEvent, EventData, RpgPlayer, Speed, Components } from '@rpgjs/server'

@EventData({
    name: 'TASK-0'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('open-screen')
        this.setHitbox(32, 32)
        this.setComponentsTop(
            Components.text('!!!')
        )
        this.speed = Speed.Slower
    }

    async onAction(player: RpgPlayer) {
        const choice = await player.showChoices('Turn off computer?', [
            { text: 'Yes', value: 'yes' },
            { text: 'No', value: 'no' },
       ], {talkWith: this})
       if(choice?.value === 'yes') {
            await player.showText('Hope those tabs were saved...')
            this.remove();
       }else{
           await player.showText('...')
       }
    }
}