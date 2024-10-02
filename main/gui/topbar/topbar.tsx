import { room } from '@rpgjs/client'
import { RpgReactContext, useEventPropagator } from '@rpgjs/client/react'
import { useContext, useState } from 'react'

export default function topbar({ foundImposters }) {
    const { rpgCurrentPlayer } = useContext(RpgReactContext)
    const propagate = useEventPropagator();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* top nav */}
            <div className="bg-white opacity-80 text-black p-4">
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold text-xl">Imposter Invasion</h1>
                    <div className="flex flex-row gap-8">
                        <h1 className="font-medium text-lg">Imposters found: {foundImposters}/3</h1>
                        <button onClick={()=>setShowModal(true)} className="bg-black text-white rounded px-2 py-1">Open Map</button>
                    </div>
                </div>
            </div>

            {/* center dialog */}
            {showModal &&
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white opacity-80 text-black p-4 rounded-lg">
                    <div className="flex flex-col gap-5 max-w-96 justify-between">
                        <h1>This is like the map!</h1>
                        <button onClick={()=>setShowModal(false)} className="bg-black text-white rounded px-2 py-1">Close</button>
                    </div>
                </div>
            </div>}

        </>
    )
}