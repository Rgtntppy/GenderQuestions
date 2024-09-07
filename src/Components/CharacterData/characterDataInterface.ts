export type GenderOptions = string[]; 

export interface CharacterData {
    name: string;
    gender: string;
    img: string;
    questionText: string;
    answerKey: string | string[];
    selects: {
        select1: string;
        select2: string;
        select3: string;
        select4: string;
    };
}