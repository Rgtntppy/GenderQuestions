import 'Components/SelectGenderButton/SGButton.scss';
import { useEffect, useCallback, useRef, MouseEventHandler } from "react";
import { ClickData } from 'Components/SelectGenderButton/SGInterface';

const CustomButton: React.FC<ClickData> = ({ characterItem, clickData, showPopup }) => {
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        buttonRefs.current.forEach(button => {
            if (button) {
                const textLength = button.innerText.length;
                let fontSize = 24;

                if (textLength > 3) {
                    fontSize = 18;
                }
                if (textLength > 5) {
                    fontSize = 15;
                }
                if (textLength > 7) {
                    fontSize = 12;
                }

                button.style.fontSize = `${fontSize}px`;
            }
        });
    }, [characterItem]);
    
    const handleClick: MouseEventHandler<HTMLButtonElement>  = useCallback ((event) => {
        const selectGender = event.currentTarget.dataset.select || '';
        console.log(selectGender+'がクリックされました');
        clickData(selectGender);
    },[]);
    
    return (
        <div className='selectGrid'>
            {[0, 1, 2, 3].map(index => {
                const selectKey = `select${index + 1}` as keyof typeof characterItem.selects;
                const selectButton = characterItem.selects[selectKey];

                return (
                    <button
                        className='customButton'
                        key={index}
                        onClick={handleClick}
                        data-select={selectButton}
                        disabled={showPopup}
                        ref={(el) => buttonRefs.current[index] = el}
                    >
                        {selectButton}
                    </button>
                );
            })}
        </div>
    );
};

export default CustomButton;