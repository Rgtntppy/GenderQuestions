import { CharacterData } from 'Components/CharacterData/characterDataInterface';

declare const require: {
    context: (path: string, deep?: boolean, filter?: RegExp) => {
        keys: () => string[];
        (key: string): string;
    };
};

const images = require.context('Components/CharacterData/img', false, /\.(png|jpe?g|svg)$/);

const characterDataList:CharacterData[] = [
    {
        name: '伊達あやね',
        gender: 'バ美肉',
        img: images('./IMG_5721.jpeg'),
        questionText: '伊達あやねの性別は？',
        answerKey: 'select2',
        explanation:'これだけ見事なポヨンポヨンをバインバインさせているのですから、彼女が女性である事は間違いありません。',
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
        explanation:'胸部の豊満な装甲をご覧になれば弾丸飛び交う危険な仕事である府警の仕事が似合う女性であることに何の疑問も持たないはずです。',
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
        explanation:'本人は自称おじさんと言っていますが、兎鞠と関わった人はみんな、彼女は女児だったと証言しています。',
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
        explanation:'作中でもバードのガイアメモリは複数人で使い回しされていたので画像から性別を判断することは不可能です。',
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
        explanation:'涼菜様の歌声を聞いた人は’歌姫’に出会えたことを感謝し、涼菜様のお姿を拝謁した瞬間、そこには’女神’の姿を見て、涼菜様の存在に救われ彼女が’救世主’に感じられ、彼女はまさしく人々を救済するまるで’天使’の様なお方です。',
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
        explanation:'雄の孔雀は、非常に鮮やかで美しい羽を持っています。特に目を引くのが「飾り羽」と呼ばれる長い尾羽で、虹色に輝く緑や青を基調とした華やかな模様が特徴です。この飾り羽は求愛行動の一環として広げられ、雌に自分をアピールします。尾羽には「目玉模様」があり、これがさらに雄の美しさを引き立てます。',
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
        explanation:'雌の孔雀は、雄に比べて羽が地味です。主に茶色や灰色などの落ち着いた色合いを持ち、雄のような長い飾り羽はありません。これは、雌が巣を守るために目立たないように進化したと考えられています。',
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
        explanation:'猫は満腹になると眠気を感じやすくなります。狩りを終えた野生の猫のように、エネルギーを蓄えるために休むという本能的な行動です。',
    selects:{
        select1: '空腹',
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
        explanation:'見てわかるように、画像の人物はAIの画像生成で作成されたもののため、性別は不明です。',
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
        explanation:'見てわかるように、画像の人物はAIの画像生成で作成されたもののため、性別は不明です。',
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
    //     explanation:'',
    //     selects:{
    //         select1: '',
    //         select2: '',
    //         select3: '',
    //         select4: '',
    //     },
    // },
];

export default characterDataList;