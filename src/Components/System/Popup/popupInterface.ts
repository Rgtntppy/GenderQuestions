import { CharacterData } from "Components/CharacterData/characterDataInterface";

export interface PopupInterface {
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
    answerKey: string | string[];
    explanation: string;
}

export interface PopupTextInterface {
    characterItem: CharacterData | null;
    isCorrect: boolean;
    answerKey: string | string[];
    explanation: string;
}

