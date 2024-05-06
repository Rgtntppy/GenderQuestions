import 'src/Component/SelectGenderButton/SGButton.scss';
import { useCallback, MouseEventHandler } from "react";
import { SGList } from 'src/Component/SelectGenderButton/SGList';

interface ClickData {
    ClickData: (SGItem: string) => void;
}

const CustomButton: React.FC<ClickData> = ({ ClickData }) => {
    const handleClick: MouseEventHandler<HTMLButtonElement>  = useCallback((event) => {
        const index = parseInt(event.currentTarget.dataset.index || '0',10);
        const SGItem = SGList[index];
        console.log(SGItem.ButtonTitle+'がクリックされました');
        ClickData(SGItem.ButtonTitle);
    },[]);
    return (
        <div className='SelectButton'>
        <ul>
            {SGList.map((SGItem, index) => (
            <button
            key={ index }
            className='CustomButton'
            onClick={ handleClick }
            data-index={ index }
            >
                <li key={ SGItem.ButtonTitle }>
                    { SGItem.ButtonTitle }
                </li>
            </button>
            ))}
        </ul>
        </div>
    );
};

export default CustomButton;