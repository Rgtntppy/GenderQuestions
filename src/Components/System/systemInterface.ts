import { SetStateAction } from "react";
import { CharacterData } from "src/Components/CharacterData/characterDataInterface";

export interface PopupProps {
    clickData: string;
    characterItem: CharacterData | null;
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
    isCorrect: boolean;
    setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
    counter: number;
    questionLimit: number;
    nextQuestion: () => void;
    correctCounter: number;
}

export interface ClickCounterProps {
    counter: number;
    questionLimit: number;
}

export interface CheckAnswerProps {
    clickData: string;
    characterItem: CharacterData | null;
    showPopup: boolean;
    setShowPopup: React.Dispatch<SetStateAction<boolean>>;
    isCorrect: boolean;
    setIsCorrect: React.Dispatch<SetStateAction<boolean>>;
    correctCounter: number;
    setCorrectCounter: React.Dispatch<SetStateAction<number>>;
    selects: CharacterData[ 'selects' ];
    answerKey:string | string[];
}