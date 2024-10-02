import { room } from '@rpgjs/client'
import { RpgReactContext, useEventPropagator } from '@rpgjs/client/react'
import { set } from '@rpgjs/common/lib/Utils';
import { useContext, useState } from 'react'

export default function input({ title, info }) {
    const { rpgCurrentPlayer } = useContext(RpgReactContext)
    const propagate = useEventPropagator();
    const [showModal, setShowModal] = useState(true);
  const [answer, setAnswer] = useState('');

    if (!showModal) return null;
  const onsubmit = (e) => {
    e.preventDefault();
    setAnswer(e.target.message.value);
  }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white opacity-80 text-black p-4 rounded-lg">
                    <div className="flex flex-col gap-5 max-w-96 justify-between">
                        <h1>{title}</h1>
                  </div>
                </div>
            </div>
        </>
    )
}