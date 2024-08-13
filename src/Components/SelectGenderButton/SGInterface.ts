import { CharacterData } from 'src/Components/CharacterData/characterDataInterface';

export interface ClickData {
    characterItem: CharacterData;
    clickData: (SGItem: string) => void;
    showPopup: boolean;
}

export interface Gender {
    selectGender: string;
}