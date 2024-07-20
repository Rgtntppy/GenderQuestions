import 'src/Components/SelectGenderButton/SGButton.scss';
import { useCallback, MouseEventHandler } from "react";
import { SGList } from 'src/Components/SelectGenderButton/SGList';
import { ClickData } from 'src/Components/SelectGenderButton/SGInterface';

const CustomButton: React.FC<ClickData> = ({ clickData, showPopup }) => {
    const handleClick: MouseEventHandler<HTMLButtonElement>  = useCallback((event) => {
        const index = parseInt(event.currentTarget.dataset.index || '0',10);
        const SGItem = SGList[index];
        console.log(SGItem.selectGender+'がクリックされました');
        clickData(SGItem.selectGender);
    },[]);
    
    return (
        <div className='selectButton'>
        <ul>
            {SGList.map((SGItem, index) => (
            <button
            key={ index }
            className='customButton'
            onClick={ handleClick }
            data-index={ index }
            disabled={showPopup}
            >
                <li key={ SGItem.selectGender }>
                    { SGItem.selectGender }
                </li>
            </button>
            ))}
        </ul>
        </div>
    );
};

export default CustomButton;