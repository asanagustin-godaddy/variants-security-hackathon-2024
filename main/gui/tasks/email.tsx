import { useState, useContext } from 'react'
import { RpgReactContext } from '@rpgjs/client/react'

interface Question {
    question: string;
    image: string;
    options: string[];
    correctAnswer: number;
    wrongExplanation: string;
    correctExplanation: string;
}

// should probably be moved as input?
const questions: Question[] = [
    {
        question: 'Q1) Review the email and choose a response below.',
        image: 'public/images/email1.png',
        options: ['Send Iris the files through regular email.', 'Advise Iris that you will need to take a different approach to protect employee data'],
        correctAnswer: 1,
        wrongExplanation: 'Try again!',
        correctExplanation: 'Great work. Urgency is a common tactic used in phishing emails to pressure the recipient into acting quickly. Also, getting information from a personal computer is risky because they are often less secure than work computers.'
    },
    {
        question: 'Q2) Is this a valid email?',
        image: 'public/images/email2.png',
        options: ['Send the funds to the new bank account.', 'Send the email to isitbad@godaddy.com.'],
        correctAnswer: 1,
        wrongExplanation: 'Try again!',
        correctExplanation: 'Nice catch. Always verify external ender’s email address and the content of the email before taking any action. If you have doubt, send it over to isitbad@godaddy.com!'
    },
];

export default function email() {
    const { rpgGuiClose } = useContext(RpgReactContext)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showModal, setShowModal] = useState(true);
    const [showExplanation, setShowExplanation] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handleAnswer = (answer: number) => {
        if (answer === questions[currentQuestion].correctAnswer) {
            setIsAnswerCorrect(true);
            if (currentQuestion === questions.length - 1) {
                console.log('completed');
                setCompleted(true);
            }
        } else {
            setIsAnswerCorrect(false);
        }
        setShowExplanation(true);
    }

    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1);
        setShowExplanation(false);
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
                <div className="bg-white opacity-100 text-black p-6 rounded-lg"> 
                    <div className="flex flex-col gap-2 max-w-3xl max-h-3xl justify-between">
                        <h1>{questions[currentQuestion].question}</h1>
                        <img src={questions[currentQuestion].image} alt="Question image" />
                        {showExplanation && <div className={isAnswerCorrect ? "text-green-700" : "text-red-700"}>{isAnswerCorrect ? questions[currentQuestion].correctExplanation : questions[currentQuestion].wrongExplanation}</div>}
                        {!isAnswerCorrect && <div className="flex flex-col gap-2">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button disabled={isAnswerCorrect} key={index} onClick={() => handleAnswer(index)} className="disabled:bg-gray-400 bg-teal-500 hover:opacity-90 text-white p-2 w-full rounded">{option}</button>
                            ))}
                        </div>}
                        {isAnswerCorrect && !completed && <button disabled={!isAnswerCorrect} onClick={handleNext} className="disabled:bg-gray-400 bg-gray-600 text-white p-2 w-full rounded ">Next</button>}
                        {completed && <button disabled={!isAnswerCorrect} onClick={() => rpgGuiClose('email')} className="disabled:bg-gray-400 bg-gray-600 text-white p-2 w-full rounded ">Close</button>}
                    </div>
                </div>
            </div>
        </>
        
    )
}