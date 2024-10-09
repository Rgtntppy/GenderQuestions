import { SetStateAction, ReactNode } from "react";
import { CharacterData } from "Components/CharacterData/characterDataInterface";

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

export interface ErrorBoundaryProps {
    children: ReactNode;
}

export interface ErrorBoundaryState {
    hasError: boolean;
}