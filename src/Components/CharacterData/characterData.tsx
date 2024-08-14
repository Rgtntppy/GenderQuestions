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
        questionText: '伊達あやねの性別は？',
        answer: '女',
        select1: '男',
        select2: '女',
        select3: 'バ美肉',
        select4: '不明',
    },{
        name: '若葉まこと',
        gender: '女',
        img: images('./82781840_p0_master1200.jpg'),
        questionText: '若葉まことの性別は？',
        answer: '女',
        select1: '男',
        select2: '女',
        select3: 'バ美肉',
        select4: '不明',
    },{
        name: '兎鞠まり',
        gender: '女',
        img: images('./Fsn-L6caYAAnl2g.jpg-small.jpeg'),
        questionText: '兎鞠まりの性別は？',
        answer: '女',
        select1: '男',
        select2: '女',
        select3: 'バ美肉',
        select4: '不明',
    },{
        name: 'バード・ドーパント',
        gender: '女',
        img: images('./birdDopant.jpg'),
        questionText: 'バード・ドーパントの性別は？',
        answer: '女',
        select1: '男',
        select2: '女',
        select3: '化物',
        select4: '不明',
    },{
        name: '凪原涼菜',
        gender: '女',
        img: images('./IMG_5266.jpg'),
        questionText: '凪原涼菜とは？',
        answer: ['女','歌姫','救世主','天使'],
        select1: '歌姫',
        select2: '女神',
        select3: '救世主',
        select4: '天使',
    },
    // {
    //     name: '近所のおじさん',
    //     gender: '男',
    //     img: images('./')
    //     questionText: '',
    //     answer: '',
    //     select1: '',
    //     select2: '',
    //     select3: '',
    //     select4: '',
    // },
    // {
    //     name: 'エイリアン',
    //     gender: '不明',
    //     img: images('./')
    //     questionText: '',
    //     answer: '',
    //     select1: '',
    //     select2: '',
    //     select3: '',
    //     select4: '',
    // }
    // ,{
    //     name: '',
    //     gender: '',
    //     img: images('./'),
    //     questionText: '',
    //     answer: '',
    //     select1: '',
    //     select2: '',
    //     select3: '',
    //     select4: '',
    // },

];

export default characterDataList;