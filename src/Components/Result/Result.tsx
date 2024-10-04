import 'Components/Result/result.scss';
import { Result } from "Components/Result/resultInterface";
import { Link, useLocation } from "react-router-dom";

const ResultComponent: React.FC = () => {
    const location = useLocation();
    const { correctCounter, questionLimit } = location.state as Result;

    const accuracy = (correctCounter / questionLimit) * 100;
    const formattedAccuracy = accuracy.toFixed(1);

    return (
        <div className='resultsScreen'>
            <div className='resultsData'>
                <p className='accuracyRate'>正解率 {formattedAccuracy}%</p>
                <p className='totalCorrect'>正回数 {correctCounter} / {questionLimit}</p>
            </div>
            <div className='resultsText'>
                {Math.floor(accuracy) < 35 ? (
                    <p>もう少し頑張りましょう</p>
                ) : Math.floor(accuracy) < 50 ? (
                    <p>良くできました</p>
                ) : Math.floor(accuracy) < 80 ? (
                    <p>頑張りましたね</p>
                ) : (
                    <p>素晴らしい結果です！</p>
                )}
            </div>
            <div className='bottomContent'>
                <Link to='/'  className='nextButton'>タイトルに戻る</Link>
            </div>
        </div>
    );
};

export default ResultComponent;