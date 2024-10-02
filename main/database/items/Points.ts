import { Item } from '@rpgjs/database'

@Item({
    id: 'points',
    name: 'Points',
    description: 'Gives 100 Points',
    hpValue: 100,
    hitRate: 1,
    consumable: true,
    addStates: [],
    removeStates: [],
    elements: [],
    paramsModifier: {}
})
export default class Points {}