import { room } from '@rpgjs/client'
import { RpgReactContext } from '@rpgjs/client/react'
import { useContext } from 'react'

export default function Result({ title, info, isBad }) {
    const { rpgGuiClose } = useContext(RpgReactContext)

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className={`opacity-90 text-black p-4 rounded-lg min-w-[300px] flex flex-col items-center justify-center ${isBad ? 'border-4 border-red-500 bg-red-100 ' : 'border-4 bg-teal-100 border-teal-500'}`}>
                    <div className="flex flex-col gap-5 max-w-96 justify-between items-center">
                        <h1 className="font-bold">{title}</h1>
                        <p>{info}</p>
                        <button onClick={() => rpgGuiClose('result')} className="w-full bg-black text-white rounded px-2 py-1">Close</button>
                    </div>
                </div>
            </div>
        </>
    )
} 