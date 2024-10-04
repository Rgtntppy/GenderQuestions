import 'Components/System/Popup/popup.scss';
import { Link } from 'react-router-dom';
import { PopupInterface } from 'Components/System/Popup/popupInterface';
import PopupText from 'Components/System/Popup/PopupText';

const Popup: React.FC<PopupInterface> = ({ nextQuestion, isCorrect, counter, questionLimit, correctCounter, answerKey, explanation, characterItem }) => {
  const iconClass = isCorrect ? 'oxIcon correct' : 'oxIcon inCorrect';

  if (!characterItem) {
    return <p>Loading...</p>; // データがまだ読み込まれていない場合のローディング表示
  }

  if (counter < questionLimit) {          
    return (
        <div className='popup'>
          <div className='popupContent'>
            <PopupText characterItem={characterItem} isCorrect={isCorrect} answerKey={answerKey} explanation={explanation} />
            <button onClick={nextQuestion} className='nextButton'>次の問題へ</button>
          </div>
        </div>
      );
  }else{
    return(
      <div className='popup'>
        <div className='popupContent'>
          <PopupText characterItem={characterItem} isCorrect={isCorrect} answerKey={answerKey} explanation={explanation} />
          <Link
            to='/Result/Result'
            state= {{ correctCounter, questionLimit }}
            className='nextButton'
          >
            結果発表
          </Link>
        </div>
      </div>
    );
  }
};

export default Popup;