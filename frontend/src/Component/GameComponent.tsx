import React, { useState, useEffect } from 'react';
import { CharacterDataList } from 'src/Component/CharacterData/CharacterData';
import SGButton from 'src/Component/SelectGenderButton/SGButton';

interface CharacterData {
    name: string;
    gender: string;
}

const GameComponent: React.FC = () => {
    const [ ClickData, setClickData ] = useState<string>('');
    const [ isFirstRender, setIsFirstRender ] = useState(true);
    const [ characterItem, setCharacterItem ] = useState<CharacterData | null>(null);
    
    const pushButtonData = (data: string) => {
        setClickData(data)
    };

    useEffect(() => {
        if (CharacterDataList.length > 0) {
            setCharacterItem(CharacterDataList[0]);
        }
    }, []);
    
    useEffect(() => {
        // 初回レンダリング時は処理をスキップする
        if (isFirstRender) {
            setIsFirstRender(false);
            return;
        }

        if (characterItem && ClickData === characterItem.gender) {
            console.log('正解！')
        }else {
            console.log('残念！')
        };
    },[ClickData, isFirstRender, characterItem]);

    if (!characterItem) {
        return <p>Loading...</p>; // データがまだ読み込まれていない場合のローディング表示
    }

    return (
        <>
        <p>{characterItem.name}</p>
        <SGButton ClickData={ pushButtonData }/>
        </>
    );
};

export default GameComponent;