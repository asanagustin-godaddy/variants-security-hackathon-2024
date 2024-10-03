import { RpgReactContext, useEventPropagator } from '@rpgjs/client/react'
import { useContext, useState } from 'react'

export default function code() {
    const [showModal, setShowModal] = useState(true);
    const [answer, setAnswer] = useState('');
    
    if (!showModal) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white opacity-100 text-black p-4 rounded-lg"> 
                    <div className="flex flex-col gap-5 max-w-96 justify-between">
                        <h1 className="font-bold">Spot the vulnerability:</h1>
                        {/* hard coded question (for now..?)*/}
                        {/* Question */}
                        <div className="bg-black p-4 text-white">
                            <p>1. user_input = input("Enter your password: ")</p>
                            <p>2. if user_input == "password123":</p>
                            <p>3.     print("Access granted!")</p>
                            <p>4. else:</p>
                            <p>5.     print("Access denied!")</p>
                        </div>
                        {/* <img src="[ADD VULNERABLE CODE HERE]" alt="some code" /> */}
                        {/* Answers */}
                        <div className="flex flex-col gap-2">
                            <button className="bg-blue-500 text-white p-2 w-full rounded">Line 1</button>
                            <button className="bg-blue-500 text-white p-2 w-full rounded">Line 2</button>
                            <button className="bg-blue-500 text-white p-2 w-full rounded">Line 3</button>
                            <button className="bg-blue-500 text-white p-2 w-full rounded">Line 4</button>
                        </div>
                        {/* TODO: add state to answer feedback */}
                        <div className="text-red-700">Oops! Try again.</div>
                        <div className="text-green-700">Correct! The vulnerability is in Line 2, as it is comparing the user input directly to a hardcoded password.</div>
                        <button onClick={()=>setShowModal(false)} className="bg-gray-600 text-white rounded p-2">Close</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}