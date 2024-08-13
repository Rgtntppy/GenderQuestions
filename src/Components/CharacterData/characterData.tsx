import { CharacterData } from 'src/Components/CharacterData/characterDataInterface';

declare const require: {
    context: (path: string, deep?: boolean, filter?: RegExp) => {
        keys: () => string[];
        (key: string): string;
    };
};

const images = require.context('src/Components/CharacterData/img', false, /\.(png|jpe?g|svg)$/);

const characterDataList:CharacterData[] = [
    {
        name: '伊達あやね',
        gender: '女',
        img: images('./IMG_5721.jpeg'),
        questionText: '性別は？',
        select1: '男',
        select2: '女',
        select3: 'バ美肉',
        select4: '不明',
    },{
        name: '若葉まこと',
        gender: '女',
        img: images('./82781840_p0_master1200.jpg'),
        questionText: '性別は？',
        select1: '男',
        select2: '女',
        select3: 'バ美肉',
        select4: '不明',
    },{
        name: '兎鞠まり',
        gender: '女',
        img: images('./Fsn-L6caYAAnl2g.jpg-small.jpeg'),
        questionText: '性別は？',
        select1: '男',
        select2: '女',
        select3: 'バ美肉',
        select4: '不明',
    },{
        name: 'バード・ドーパント',
        gender: '女',
        img: images('./birdDopant.jpg'),
        questionText: '性別は？',
        select1: '男',
        select2: '女',
        select3: '化物',
        select4: '不明',
    },
    // {
    //     name: '近所のおじさん',
    //     gender: '男',
    //     img: images('./')
    // },{
    //     name: 'エイリアン',
    //     gender: '不明',
    //     img: images('./')
    // }
];

export default characterDataList;