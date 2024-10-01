import { Spritesheet } from '@rpgjs/client'

const to = () => {
    const array: any = []
    let k = 0
    for (let i=0 ; i < 4 ; i++) {
        for (let j=0 ; j < 5 ; j++) {
            array.push({ time: k * 5, frameX: j, frameY: i })
            k++
        }
    }
    return array
}

@Spritesheet({
    framesWidth: 5,
    framesHeight: 4,
    opacity: 1,
    anchor: [0.5],
    textures: {
        default: {
            animations: [ to() ]
        }
    }
})
export default class ShieldAnimations {}