import { room } from '@rpgjs/client'
import { RpgReactContext, useEventPropagator } from '@rpgjs/client/react'
import { useContext, useState } from 'react'

export default function Badge({ name }) {
    const { rpgCurrentPlayer } = useContext(RpgReactContext)
    const propagate = useEventPropagator();
    const [showModal, setShowModal] = useState(true);
    
    if (!showModal) return null;

    return (
        <>
            {/* center dialog */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white opacity-80 text-black p-4 rounded-lg"> 
                    <div className="flex flex-col gap-5 max-w-96 justify-between">
                        <h1>{name}'s badge information here.</h1>
                        <button onClick={()=>setShowModal(false)} className="bg-black text-white rounded px-2 py-1">Close</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}