import { RpgReactContext, useEventPropagator } from '@rpgjs/client/react'
import { useContext, useState } from 'react'

export default function email() {
    const [showModal, setShowModal] = useState(true);
    const [answer, setAnswer] = useState('');
    
    if (!showModal) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white opacity-100 text-black p-4 rounded-lg"> 
                    <div className="flex flex-col gap-5 max-w-96 justify-between">
                        <h1>Is this a valid email?</h1>
                        <img src="public/images/email-1.png" alt="Phishing email" />
                        <div className="flex flex-row gap-2">
                            <button className="bg-green-500 text-white p-2 w-full rounded">Yes</button>
                            <button className="bg-red-500 text-white p-2 w-full rounded">No</button>
                        </div>
                        {/* TODO: add state to answer feedback */}
                        <div className="text-red-700">Oops! Try again.</div>
                        <div className="text-green-700">Correct! This is because...</div>
                        <button onClick={()=>setShowModal(false)} className="bg-gray-600 text-white rounded p-2">Close</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}