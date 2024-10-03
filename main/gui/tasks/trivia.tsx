import { RpgReactContext, useEventPropagator } from '@rpgjs/client/react'
import { useContext, useState } from 'react'

const triviaQuestions = [
    {
        question: 'Which of the following is not one of the top 10 vulnerabilities discussed in the tech talk?',
        answers: [
            'SQL Injection',
            'Cross-site scripting',
            'Server side request forgery',
            'Gatekeeper'
        ],
        correctAnswerIndex: 3
    },
    {
        question: 'Who does GoDaddy partner with to discover vulnerabilities?',
        answers: [
            'Hackerone',
            'Anonymous',
            'Cyberpunk',
            'LimeWire'
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'An access control vulnerability that arises when an application uses user-supplied input to access objects directly is known as IDOR.  What does that stand for?',
        answers: [
            'I don’t own raisins',
            'Identity disabled object reference',
            'Incapacitated Data object reference',
            'Insecure direct object reference'
        ],
        correctAnswerIndex: 3
    }
];

export default function trivia() {
    const { rpgGuiClose } = useContext(RpgReactContext)

    const [showModal, setShowModal] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleAnswer = (answer: number) => {
        if (answer === triviaQuestions[currentQuestion].correctAnswerIndex) {
            setIsAnswerCorrect(true);
            if (currentQuestion === triviaQuestions.length - 1) {
                console.log('completed');
                setCompleted(true);
            }
        } else {
            setIsAnswerCorrect(false);
        }
        setShowFeedback(true);
    }

    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1);
        setShowFeedback(false);
        setIsAnswerCorrect(false);
    }

    if (!showModal) return null;

    return (
        <>
            {completed &&
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="flex flex-col gap-8 bg-white opacity-100 text-black p-8 rounded-lg"> 
                        <div className="text-black">Great work, you've completed a task!</div>
                        <button onClick={()=>setShowModal(false)} className="bg-gray-600 text-white rounded p-2 w-full">Close</button>
                    </div>
                </div>
            }
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white opacity-100 text-black p-4 rounded-lg">
                    <div className="flex flex-col gap-5 max-w-96 justify-between">
                        <h1 className="font-bold">It's trivia time!</h1>
                        <p>{triviaQuestions[currentQuestion].question}</p>
                        <div className="grid grid-cols-2 gap-2">
                            {triviaQuestions[currentQuestion].answers.map((option, index) => (
                                <button key={index} onClick={() => handleAnswer(index)} className="bg-teal-500 hover:opacity-90 text-white p-2 w-full rounded">{option}</button>
                            ))}
                        </div>
                        {/* TODO: add state to answer feedback */}
                        {showFeedback && !isAnswerCorrect && <div className="text-red-700">Oops! Try again.</div>}
                        {showFeedback && isAnswerCorrect && <div className="text-green-700">Correct!</div>}
                        {!completed && <button disabled={!isAnswerCorrect} onClick={handleNext} className="disabled:bg-gray-400 bg-gray-600 text-white p-2 w-full rounded ">Next</button>}
                        {completed && <><p>You are done!</p><button onClick={() => rpgGuiClose('trivia')} className="bg-gray-600 text-white rounded p-2">Close</button></>}
                    </div>
                </div>
            </div>

        </>
    )
}