import { RpgReactContext } from '@rpgjs/client/react'
import { useContext } from 'react'

export default function Badge({name, img, role, tasksCompleted, serverAccess}) {
    const { rpgGuiClose } = useContext(RpgReactContext)

    return (
        <>
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white text-black p-4 rounded-lg"> 
                <div className="flex flex-col gap-2 max-w-96 justify-between">
                    <div className="flex">
                        <div className="bg-gray-200 w-32 h-32">
                        <img src={img} alt="Badge" className="w-32 h-32" />
                        </div>
                        <div className="ml-4 flex flex-col gap-2">
                            <p><strong>Name:</strong> {name}</p>
                            <p><strong>Role:</strong> {role}</p>
                            <p><strong>Tasks Completed:</strong> {tasksCompleted}</p>
                            <p><strong>Server Access:</strong> {serverAccess ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                    <button onClick={() => rpgGuiClose('badge')} className="bg-black text-white rounded px-2 py-1 mt-2">Close</button>
                </div>
            </div>
        </div>
    </>
    )
}