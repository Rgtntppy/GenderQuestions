import { CharacterData, GenderOptions } from 'src/Components/CharacterData/characterDataInterface';

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
        gender: 'バ美肉',
        img: images('./IMG_5721.jpeg'),
        questionText: '伊達あやねの性別は？',
        answerKey: 'select2',
        selects:{
            select1: '男',
            select2: '女',
            select3: 'バ美肉',
            select4: '不明',
        },
    },{
        name: '若葉まこと',
        gender: '男',
        img: images('./82781840_p0_master1200.jpg'),
        questionText: '若葉まことの性別は？',
        answerKey: 'select2',
        selects:{
            select1: '男',
            select2: '女',
            select3: 'バ美肉',
            select4: '不明',
        },
    },{
        name: '兎鞠まり',
        gender: 'バ美肉',
        img: images('./Fsn-L6caYAAnl2g.jpg-small.jpeg'),
        questionText: '兎鞠まりの性別は？',
        answerKey: 'select2',
        selects:{
            select1: 'おじさん',
            select2: '女児',
            select3: 'バ美肉',
            select4: '不明',
        },
    },{
        name: 'バード・ドーパント',
        gender: '不明',
        img: images('./birdDopant.jpg'),
        questionText: 'バード・ドーパントの性別は？',
        answerKey: 'select4',
        selects:{
            select1: '男',
            select2: '女',
            select3: '怪人',
            select4: '不明',
        },
    },{
        name: '凪原涼菜',
        gender: '女',
        img: images('./IMG_5266.jpg'),
        questionText: '凪原涼菜とは？',
        answerKey: ['select1','select2','select3','select4'],
        selects:{
            select1: '歌姫',
            select2: '女神',
            select3: '救世主',
            select4: '天使',
        },
    },{
        name: '孔雀(クジャク)',
        gender: '雄',
        img: images('./02e195a89e8ad1d42aecfe3dd63f231f_t.jpeg'),
        questionText: '画像の孔雀(クジャク)の性別は何でしょう？',
        answerKey: 'select1',
        selects:{
            select1: '雄(オス)',
            select2: '雌(メス)',
            select3: '可変性生物',
            select4: '判別不可',
        },
    },{
        name: '孔雀(クジャク)',
        gender: '雌',
        img: images('./Unknown.jpeg'),
        questionText: '画像の孔雀(クジャク)の性別は何でしょう？',
        answerKey: 'select2',
        selects:{
            select1: '雄(オス)',
            select2: '雌(メス)',
            select3: '可変性生物',
            select4: '判別不可',
        },
    },{
        name: 'こたつネコ',
        gender: '不明',
        img: images('./cat_kotatsu_neko.png'),
        questionText: '猫の気持ちを答えなさい',
        answerKey: 'select2',
        selects:{
            select1: 'お腹すいた',
            select2: '満腹',
            select3: '遊んで欲しい',
            select4: '眠い',
        },
    },{
        name: '海辺で出会った少女(?)',
        gender: '不明',
        img: images('./chatmini_1723616773310410.jpg'),
        questionText: '画像の人物の性別を答えなさい',
        answerKey: 'select4',
        selects:{
            select1: '男',
            select2: '女',
            select3: 'ロボット',
            select4: '不明',
        },
    },{
        name: '帰省先で出会った少女(?)',
        gender: '不明',
        img: images('./chatmini_1723616809968043.jpg'),
        questionText: '画像の人物の性別を答えなさい',
        answerKey: 'select4',
        selects:{
            select1: '男',
            select2: '女',
            select3: 'ロボット',
            select4: '不明',
        },
    },
    // {
    //     name: '',
    //     gender: '',
    //     img: images('./'),
    //     questionText: '',
    //     answerKey: 'select',
    //     selects:{
    //         select1: '',
    //         select2: '',
    //         select3: '',
    //         select4: '',
    //     },
    // },
];

export default characterDataList;