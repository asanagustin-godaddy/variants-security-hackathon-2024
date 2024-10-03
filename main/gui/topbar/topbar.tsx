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
            <div className="flex flex-row justify-center items-center p-2">
                <div className="ml-2 flex flex-col gap-2">
                    <h1 className="font-bold text-xl text-white hover:animate-pulse">Imposter Invasion!</h1>
                    {/* <h1 className="ml-6 font-bold text-xl text-white hover:animate-pulse">Invasion!</h1> */}
                </div>
                <button onClick={()=>setShowModal(true)} className="ml-auto hover:animate-pulse">
                    <img width="40" height="40" src="public/images/menu-button.png" alt="Button Image" />
                </button>
            </div>

            {/* center dialog */}
            {showModal &&
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black border-emerald-500 border-8 text-white p-8 rounded-lg max-w-md w-full">
                        <div className="flex flex-col gap-4 justify-between">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold text-xl mb-2">Imposter Invasion!</h1>
                                    <h1 className="text-red-500 font-medium text-lg">Imposters found: {foundImposter}/3</h1>
                                    <h1 className="text-blue-500 font-medium text-lg">Tasks completed: {completedTask}/3</h1>
                                </div>
                                <img src="public/images/green.png" alt="Crewmate" className="w-32 h-32" />
                            </div>
                            {/* Adding map visual is a ncie to have */}
                            {/* <button onClick={()=>setShowModal(false)} className="hover:animate-bounce bg-transparent border-orange-400 border-2 text-orange-400 rounded p-2">See Map</button> */}
                            <button onClick={()=>setShowModal(false)} className="hover:animate-bounce bg-transparent border-white border-2 text-white rounded p-2">Close</button>
                        </div>
                    </div>
                </div>}

        </>
    )
}