import { RpgReactContext, useEventPropagator } from '@rpgjs/client/react'
import { useContext, useState } from 'react'

export default function trivia() {
    const { rpgGuiClose } = useContext(RpgReactContext)

    const [showModal, setShowModal] = useState(true);
    const [answer, setAnswer] = useState('');

    if (!showModal) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white opacity-100 text-black p-4 rounded-lg">
                    <div className="flex flex-col gap-5 max-w-96 justify-between">
                        <h1 className="font-bold">It's trivia time!</h1>
                        <p>Question here...</p>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="bg-green-500 text-white p-2 rounded">Answer 1</button>
                            <button className="bg-red-500 text-white p-2 rounded">Answer 2</button>
                            <button className="bg-blue-500 text-white p-2 rounded">Answer 3</button>
                            <button className="bg-yellow-500 text-white p-2 rounded">Answer 4</button>
                        </div>
                        {/* TODO: add state to answer feedback */}
                        <div className="text-red-700">Oops! Try again.</div>
                        <div className="text-green-700">Correct! This is because...</div>
                        <button onClick={() => rpgGuiClose('trivia')} className="bg-gray-600 text-white rounded p-2">Close</button>
                    </div>
                </div>
            </div>

        </>
    )
}