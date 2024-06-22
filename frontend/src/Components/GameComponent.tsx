import 'src/Components/gameComponent.scss';
import React, { useState, useEffect } from 'react';
import { CharacterData } from 'src/Components/CharacterData/characterDataInterface';
import characterDataList from 'src/Components/CharacterData/characterData';
import SGButton from 'src/Components/SelectGenderButton/SGButton';
import CheckAnswer from 'src/Components/System/CheckAnswer';
import ClickCounter from 'src/Components/System/ClickCounter';
import Popup from 'src/Components/System/Popup';

const GameComponent: React.FC = () => {
    const [ clickData, setClickData ] = useState<string>('');
    const [ characterItem, setCharacterItem ] = useState<CharacterData | null>(null);
    const [ prevCharacterItem, setPrevCharacterItem ] = useState<CharacterData | null>(null);
    const [ showPopup, setShowPopup ] = useState(false);
    const [ isCorrect, setIsCorrect ] = useState(false);
    const [ counter, setCounter ] = useState<number>(1);

    const questionLimit = 2;

    const pushButtonData = (clickData: string) => {
        setClickData(clickData)
    };

    const nextQuestion = () => {
        if (characterDataList.length > 0) {
            let randomIndex;
            let newCharacterItem;
            do {
                randomIndex = Math.floor(Math.random() * characterDataList.length);
                newCharacterItem = characterDataList[randomIndex];
            } while (newCharacterItem === characterItem);

            setPrevCharacterItem(characterItem);
            setCharacterItem(newCharacterItem);
        }
        setClickData('');
        setShowPopup(false);
        setCounter(prevCounter => prevCounter + 1);
    };

    useEffect(() => {
        if (characterDataList.length > 0) {
            nextQuestion();
            setCounter(1);
        }
    }, []);

    if (!characterItem) {
        return <p>Loading...</p>; // データがまだ読み込まれていない場合のローディング表示
    }

    return (
        <>
        <div className='questionText'>
            <div className='questionCharacterImg'><p>ここに画像が入ります</p></div>
            <p className='characterName'>{characterItem.name}</p>
        </div>    
        <SGButton clickData={ pushButtonData }/>
        <CheckAnswer
            clickData={clickData}
            characterItem={characterItem}
            setIsCorrect={setIsCorrect}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            isCorrect={isCorrect}
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
            />
        }
        </>
    );
};

export default GameComponent;