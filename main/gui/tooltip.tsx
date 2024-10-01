import { RpgReactContext } from '@rpgjs/client/react'
import { useContext, useState } from 'react'

export default function tooltip({ spriteData }) {
    const context = useContext(RpgReactContext)
    const [showModal, setShowModal] = useState(true);

    if (!showModal) return null;

    return (
        <div className="max-w-32">
            <div className="bg-white text-black p-4 rounded-lg max-w-xs">
                <h2 className="text-center mb-4">Is this an imposter?</h2>
                <div className="flex justify-between">
                    <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white rounded px-2 py-1">No</button>
                    <button className="bg-red-500 text-white rounded px-2 py-1">Yes</button>
                </div>
            </div>
        </div>
    )
}

tooltip.rpgAttachToSprite = true