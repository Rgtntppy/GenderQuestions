import 'src/Components/System/system.scss';
import { Link } from 'react-router-dom';
import { PopupProps } from 'src/Components/System/systemInterface';

const Popup: React.FC<PopupProps> = ({ nextQuestion, isCorrect, counter, questionLimit, correctCounter }) => {
  const iconClass = isCorrect ? 'oxIcon correct' : 'oxIcon inCorrect';

  if (counter < questionLimit) {          
    return (
        <div className="popup">
          <div className="popupContent">
            <p className={ iconClass }>{ isCorrect ? 'O' : 'X' }</p>
            <p className='popupText'>{ isCorrect ? '正解！' : '残念！' }</p>
            <button onClick={nextQuestion} className='nextButton'>次の問題へ</button>
          </div>
        </div>
      );
  }else{
    return(
      <>
      <div className="popup">
        <div className="popupContent">
          <p className={ iconClass }>{ isCorrect ? 'O' : 'X' }</p>
          <p className='popupText'>{ isCorrect ? '正解！' : '残念！' }</p>
          <Link
            to='/Result/Result'
            state= {{ correctCounter, questionLimit }}
            className='nextButton'
          >
            結果発表
          </Link>
        </div>
      </div>
      </>
    );
  }
};

export default Popup;