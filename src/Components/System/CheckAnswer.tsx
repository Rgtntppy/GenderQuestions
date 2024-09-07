import React, { useEffect } from 'react';
import { CheckAnswerProps } from 'src/Components/System/systemInterface';

const CheckAnswer: React.FC<CheckAnswerProps> = ({ clickData, characterItem, setIsCorrect, showPopup, setShowPopup, correctCounter, setCorrectCounter, selects, answerKey }) => {
    useEffect(() => {
        if (clickData && !showPopup && characterItem) {
            const correctAnswer = characterItem.answerKey;
            let isCorrectAnswer = false;
            
            if (Array.isArray(correctAnswer)) {
                const correctAnswers = correctAnswer.map(key => characterItem.selects[key as keyof typeof characterItem.selects]);
                isCorrectAnswer = correctAnswers.includes(clickData);
            } else {
                const singleCorrectAnswer = characterItem.selects[correctAnswer as keyof typeof characterItem.selects];
                isCorrectAnswer = clickData === singleCorrectAnswer;
            }

            if (isCorrectAnswer) {
                console.log('正解！')
                setShowPopup(true);
                setIsCorrect(true);
                setCorrectCounter(prevCorrectCounter => prevCorrectCounter + 1);
            }else {
                console.log('残念！')
                setShowPopup(true);
                setIsCorrect(false);
            };
        }
    },[clickData]);
    
    return (
        null
    );
};

export default CheckAnswer;