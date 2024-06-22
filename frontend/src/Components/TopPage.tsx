import 'src/Components/topPage.scss';
import { Link } from 'react-router-dom';

const TopPage = () => {
    return (
        <div className='topPage'>
            <h1 className='title'>gender<br></br>question</h1>
            <div className='sk_img'><p>ここに画像が入ります</p></div>
            <Link to='GameComponent' className='startButton'>ゲームスタート</Link>
        </div>
    );
};

export default TopPage;