import 'Components/System/Popup/popup.scss';
import { PopupTextInterface } from 'Components/System/Popup/popupInterface';

const PopupText: React.FC<PopupTextInterface> = ({ isCorrect, answerKey, explanation, characterItem }) => {
    if (!characterItem) {
        return <p>Loading...</p>; // データがまだ読み込まれていない場合のローディング表示
    }
    
    const iconClass = isCorrect ? 'oxIcon correct' : 'oxIcon inCorrect';
    let correctAnswer;
    if (Array.isArray(answerKey)) {
        correctAnswer = answerKey.map(key => characterItem.selects[key as keyof typeof characterItem.selects]).join('/');
    } else {
        correctAnswer = characterItem.selects[ answerKey as keyof typeof characterItem.selects ];
    }

    return (
        <div>
            <p className={ iconClass }>{ isCorrect ? 'O' : 'X' }</p>
            <p className='correctOrIncorrect'>{ isCorrect ? '正解！' : '残念！' }</p>
            <p className='answerExplanation'>
                解答・解説：{correctAnswer}
            </p>
            <p className='explantionText'>
                {explanation}
            </p>
        </div>
    );
};

export default PopupText;