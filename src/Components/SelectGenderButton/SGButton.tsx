import 'src/Components/SelectGenderButton/SGButton.scss';
import { useCallback, MouseEventHandler } from "react";
import { ClickData } from 'src/Components/SelectGenderButton/SGInterface';

const CustomButton: React.FC<ClickData> = ({ characterItem, clickData, showPopup }) => {
    const handleClick: MouseEventHandler<HTMLButtonElement>  = useCallback ((event) => {
        const selectGender = event.currentTarget.dataset.select || '';
        console.log(selectGender+'がクリックされました');
        clickData(selectGender);
    },[]);
    
    return (
        <div className='selectButton'>
        <ul>
            {[characterItem.select1, characterItem.select2, characterItem.select3, characterItem.select4].map((selectButton, index) => (
            <button
            key={ index }
            className='customButton'
            onClick={ handleClick }
            data-select={ selectButton }
            disabled={showPopup}
            >
                <li key={ selectButton }>
                    { selectButton }
                </li>
            </button>
            ))}
        </ul>
        </div>
    );
};

export default CustomButton;