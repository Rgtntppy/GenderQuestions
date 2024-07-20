import React, { useEffect } from 'react';
import { CheckAnswerProps } from 'src/Components/System/systemInterface';

const CheckAnswer: React.FC<CheckAnswerProps> = ({ clickData, characterItem, setIsCorrect, showPopup, setShowPopup, correctCounter, setCorrectCounter }) => {
    useEffect(() => {
        if (clickData && !showPopup) {
            if (characterItem && clickData === characterItem.gender) {
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