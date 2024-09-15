import 'src/Components/topPage.scss';
import { Link } from 'react-router-dom';
import topPageImage from 'src/Components/DALL·E 2024-09-07 16.54.53 - A playful, vibrant top page image for a game that challenges users to guess the gender of people and animals. The image should feature a fun and engag.webp';

const TopPage = () => {
    return (
        <div className='topPage'>
            <div className='titleContainer'>
                <h1 className='title'>gender<br></br>question</h1>
            </div>
            <img className='sk_img' src={topPageImage}/>
            <Link to='GameComponent' className='startButton'>ゲームスタート</Link>
        </div>
    );
};

export default TopPage;