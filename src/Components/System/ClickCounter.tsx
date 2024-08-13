import { ClickCounterProps } from 'src/Components/System/systemInterface';

const ClickCounter: React.FC<ClickCounterProps> = ({ counter, questionLimit }) => {
    return (
        <div className="clickCounter">
            <p>{counter}/{questionLimit}</p>
        </div>
    );
};

export default ClickCounter;