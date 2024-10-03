import { room } from '@rpgjs/client'
import { RpgReactContext, useEventPropagator } from '@rpgjs/client/react'
import { useContext, useState, useEffect } from 'react'

export default function topbar() {
    const { rpgCurrentPlayer } = useContext(RpgReactContext)
    const [showModal, setShowModal] = useState(false);
    const [foundImposter, setFoundImposter] = useState(0);
    const [completedTask, setCompletedTask] = useState(0);

    // this is temporary until we can set variables:
    // associate the player's gold -> found imposters
    // associate the player's exp -> completed tasks
    useEffect(() => {
      const imposterSubscription = rpgCurrentPlayer.subscribe(({ object }) => {
        setFoundImposter(object.gold);
      });

      const taskSubscription = rpgCurrentPlayer.subscribe(({ object }) => {
        setCompletedTask(object.exp);
      });
      
      return () => {
        imposterSubscription.unsubscribe();
        taskSubscription.unsubscribe();
      };
    }, []);

    return (
        <>
            {/* top nav */}
            <div className="bg-white opacity-80 text-black p-4">
                <div className="flex flex-row justify-between">
                    <h1 className="font-bold text-xl">Imposter Invasion</h1>
                    <div className="flex flex-row gap-8">
                        <h1 className="text-red-500 font-medium text-lg">Imposters found: {foundImposter}/3</h1>
                        <h1 className="text-blue-500 font-medium text-lg">Tasks completed: {completedTask}/3</h1>
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