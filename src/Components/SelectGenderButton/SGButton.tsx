import 'src/Components/SelectGenderButton/SGButton.scss';
import { useEffect, useCallback, useRef, MouseEventHandler } from "react";
import { ClickData } from 'src/Components/SelectGenderButton/SGInterface';

const CustomButton: React.FC<ClickData> = ({ characterItem, clickData, showPopup }) => {
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        buttonRefs.current.forEach(button => {
            if (button) {
                const textLength = button.innerText.length;
                let fontSize = 20;

                if (textLength > 3) {
                    fontSize = 18;
                }
                if (textLength > 5) {
                    fontSize = 14;
                }
                if (textLength > 7) {
                    fontSize = 10;
                }

                button.setAttribute('style', `font-Size: ${fontSize}px !important;`);
            }
        });
    }, [characterItem]);
    
    const handleClick: MouseEventHandler<HTMLButtonElement>  = useCallback ((event) => {
        const selectGender = event.currentTarget.dataset.select || '';
        console.log(selectGender+'がクリックされました');
        clickData(selectGender);
    },[]);
    
    return (
        <table className='selectTable'>
            <tbody>
                {[0, 1].map(rowIndex => (
                    <tr key={rowIndex}>
                        {[0, 1].map((colIndex, index) => {
                            // インデックスに対応する selectキーを動的に作成
                            const selectKeyIndex = rowIndex + colIndex * 2 +1;
                            const selectKey = `select${selectKeyIndex}` as keyof typeof characterItem.selects;
                            const selectButton = characterItem.selects[selectKey];

                            return (
                                <td key={colIndex}>
                                    <button
                                        className='customButton'
                                        onClick={handleClick}
                                        data-select={selectButton}
                                        disabled={showPopup}
                                        ref={(el) => buttonRefs.current[rowIndex * 2 + colIndex] = el}
                                    >
                                        {selectButton}
                                    </button>
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CustomButton;