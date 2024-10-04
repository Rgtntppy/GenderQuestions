import 'Components/gameComponent.scss';
import React, { useState, useEffect } from 'react';
import { CharacterData } from 'Components/CharacterData/characterDataInterface';
import characterDataList from 'Components/CharacterData/characterData';
import SGButton from 'Components/SelectGenderButton/SGButton';
import CheckAnswer from 'Components/System/CheckAnswer';
import ClickCounter from 'Components/System/ClickCounter';
import Popup from 'Components/System/Popup/Popup';

const shuffleArray = (array: CharacterData[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const GameComponent: React.FC = () => {
    const [ clickData, setClickData ] = useState<string>('');
    const [ characterQueue, setCharacterQueue ] = useState<CharacterData[]>([]);
    const [ characterItem, setCharacterItem ] = useState<CharacterData | null>(null);
    const [ showPopup, setShowPopup ] = useState(false);
    const [ isCorrect, setIsCorrect ] = useState(false);
    const [ counter, setCounter ] = useState<number>(1);
    const [ correctCounter, setCorrectCounter ] = useState<number>(0);

    const questionLimit = 5;

    const pushButtonData = (clickData: string) => {
        setClickData(clickData)
    };

    const nextQuestion = () => {
        if (characterQueue.length === 0) {
            const shuffledCharacters = shuffleArray([...characterDataList]);
            setCharacterQueue(shuffledCharacters);
        }

        const newCharacterItem = characterQueue[0];
        setCharacterQueue(characterQueue.slice(1));
        setCharacterItem(newCharacterItem);
        
        setClickData('');
        setShowPopup(false);
        setCounter(prevCounter => prevCounter + 1);
    };

    useEffect(() => {
        if (characterDataList.length > 0) {
            const shuffledCharacters = shuffleArray([...characterDataList]);
            setCharacterQueue(shuffledCharacters);
            setCounter(0);
        }
    }, []);

    useEffect(() => {
        if (characterQueue.length > 0 && !characterItem) {
            nextQuestion();
        }
    }, [characterQueue, characterItem]);

    if (!characterItem) {
        return <p>Loading...</p>; // データがまだ読み込まれていない場合のローディング表示
    }

    return (
        <div className='gameScreen'>
            <div className='question'>
                <img className='characterImg' src={characterItem.img} alt={characterItem.name} />
                <p className='characterName'>{characterItem.name}</p>
                <p className='questionText'>Q.&nbsp;{characterItem.questionText}</p>
            </div>
            <SGButton characterItem={ characterItem } clickData={ pushButtonData } showPopup={showPopup}/>
            <CheckAnswer
                clickData={clickData}
                characterItem={characterItem}
                setIsCorrect={setIsCorrect}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                isCorrect={isCorrect}
                correctCounter={correctCounter}
                setCorrectCounter={setCorrectCounter}
                selects={characterItem.selects}
                answerKey={characterItem.answerKey}
            />
            <ClickCounter counter={counter} questionLimit={questionLimit}/>
            {showPopup && 
                <Popup 
                    clickData={clickData}
                    characterItem={characterItem}
                    setIsCorrect={setIsCorrect}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    nextQuestion={nextQuestion}
                    isCorrect={isCorrect}
                    counter={counter}
                    questionLimit={questionLimit}
                    correctCounter={correctCounter}
                    answerKey={characterItem.answerKey}
                    explanation={characterItem.explanation}
                />
            }
        </div>
    );
};

export default GameComponent;