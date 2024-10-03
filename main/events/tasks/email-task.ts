import { RpgEvent, EventData, RpgPlayer, Speed, Components } from '@rpgjs/server'

@EventData({
    name: 'TASK-2'
})
export default class CatEvent extends RpgEvent {
    onInit() {
        this.setGraphic('email-screen')
        this.setHitbox(16, 16)
        this.setComponentsTop(
            Components.text('Email')
        )
        this.speed = Speed.Slower
    }

    async onAction(player: RpgPlayer) {
        await player.showText('Hey there! Phishing is a type of cyberattack where people are tricked...')
        await player.showText('into sharing sensitive info or downloading malware through sneaky emails.')
        await player.showText('In this task, you will get a few emails to evaluate.')
        await player.showText('And remember: if you ever have doubt on the authenticity of an email, you can send it over to isitbad@godaddy.com.')
        const gui = player.gui('email')
        gui.open()
    }
}