angular.module('wizardApp')
.factory('emoji', function() {
    var idx = lunr(function () {
        this.field('keywords', {boost: 10})
        this.field('name')
        this.ref('code')
    });
[
  {
    "no": "1",
    "code": "1F600",
    "char": "ðŸ˜€",
    "name": "GRINNING FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | grin"
  },
  {
    "no": "2",
    "code": "1F601",
    "char": "ðŸ˜",
    "name": "GRINNING FACE WITH SMILING EYES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "eye | face | grin | smile"
  },
  {
    "no": "3",
    "code": "1F602",
    "char": "ðŸ˜‚",
    "name": "FACE WITH TEARS OF JOY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | joy | laugh | tear"
  },
  {
    "no": "4",
    "code": "1F923",
    "char": "ðŸ¤£",
    "name": "ROLLING ON THE FLOOR LAUGHING",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "face | floor | laugh | rolling"
  },
  {
    "no": "5",
    "code": "1F603",
    "char": "ðŸ˜ƒ",
    "name": "SMILING FACE WITH OPEN MOUTH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | mouth | open | smile"
  },
  {
    "no": "6",
    "code": "1F604",
    "char": "ðŸ˜„",
    "name": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES\nâ‰Š smiling face with open mouth & smiling eyes",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "eye | face | mouth | open | smile"
  },
  {
    "no": "7",
    "code": "1F605",
    "char": "ðŸ˜…",
    "name": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT\nâ‰Š smiling face with open mouth & cold sweat",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cold | face | open | smile | sweat"
  },
  {
    "no": "8",
    "code": "1F606",
    "char": "ðŸ˜†",
    "name": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES\nâ‰Š smiling face with open mouth & closed eyes",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | laugh | mouth | open | satisfied | smile"
  },
  {
    "no": "9",
    "code": "1F609",
    "char": "ðŸ˜‰",
    "name": "WINKING FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | wink"
  },
  {
    "no": "10",
    "code": "1F60A",
    "char": "ðŸ˜Š",
    "name": "SMILING FACE WITH SMILING EYES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blush | eye | face | smile"
  },
  {
    "no": "11",
    "code": "1F60B",
    "char": "ðŸ˜‹",
    "name": "FACE SAVOURING DELICIOUS FOOD",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "delicious | face | savouring | smile | um | yum"
  },
  {
    "no": "12",
    "code": "1F60E",
    "char": "ðŸ˜Ž",
    "name": "SMILING FACE WITH SUNGLASSES",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bright | cool | eye | eyewear | face | glasses | smile | sun | sunglasses | weather"
  },
  {
    "no": "13",
    "code": "1F60D",
    "char": "ðŸ˜",
    "name": "SMILING FACE WITH HEART-SHAPED EYES\nâ‰Š smiling face with heart-eyes",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "eye | face | heart | love | smile"
  },
  {
    "no": "14",
    "code": "1F618",
    "char": "ðŸ˜˜",
    "name": "FACE THROWING A KISS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | heart | kiss"
  },
  {
    "no": "15",
    "code": "1F617",
    "char": "ðŸ˜—",
    "name": "KISSING FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | kiss"
  },
  {
    "no": "16",
    "code": "1F619",
    "char": "ðŸ˜™",
    "name": "KISSING FACE WITH SMILING EYES",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "eye | face | kiss | smile"
  },
  {
    "no": "17",
    "code": "1F61A",
    "char": "ðŸ˜š",
    "name": "KISSING FACE WITH CLOSED EYES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "closed | eye | face | kiss"
  },
  {
    "no": "18",
    "code": "263A",
    "char": "â˜º",
    "name": "WHITE SMILING FACE\nâ‰Š smiling face",
    "date": "1995Ê²Ê·",
    "default": "text*",
    "keywords": "face | outlined | relaxed | smile"
  },
  {
    "no": "19",
    "code": "1F642",
    "char": "ðŸ™‚",
    "name": "SLIGHTLY SMILING FACE",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "face | smile"
  },
  {
    "no": "20",
    "code": "1F917",
    "char": "ðŸ¤—",
    "name": "HUGGING FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | hug | hugging"
  },
  {
    "no": "21",
    "code": "1F914",
    "char": "ðŸ¤”",
    "name": "THINKING FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | thinking"
  },
  {
    "no": "22",
    "code": "1F610",
    "char": "ðŸ˜",
    "name": "NEUTRAL FACE",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "deadpan | face | neutral"
  },
  {
    "no": "23",
    "code": "1F611",
    "char": "ðŸ˜‘",
    "name": "EXPRESSIONLESS FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "expressionless | face | inexpressive | unexpressive"
  },
  {
    "no": "24",
    "code": "1F636",
    "char": "ðŸ˜¶",
    "name": "FACE WITHOUT MOUTH",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "face | mouth | quiet | silent"
  },
  {
    "no": "25",
    "code": "1F644",
    "char": "ðŸ™„",
    "name": "FACE WITH ROLLING EYES",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "eyes | face | rolling"
  },
  {
    "no": "26",
    "code": "1F60F",
    "char": "ðŸ˜",
    "name": "SMIRKING FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | smirk"
  },
  {
    "no": "27",
    "code": "1F623",
    "char": "ðŸ˜£",
    "name": "PERSEVERING FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | persevere"
  },
  {
    "no": "28",
    "code": "1F625",
    "char": "ðŸ˜¥",
    "name": "DISAPPOINTED BUT RELIEVED FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "disappointed | face | relieved | whew"
  },
  {
    "no": "29",
    "code": "1F62E",
    "char": "ðŸ˜®",
    "name": "FACE WITH OPEN MOUTH",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | mouth | open | sympathy"
  },
  {
    "no": "30",
    "code": "1F910",
    "char": "ðŸ¤",
    "name": "ZIPPER-MOUTH FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | mouth | zipper"
  },
  {
    "no": "31",
    "code": "1F62F",
    "char": "ðŸ˜¯",
    "name": "HUSHED FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | hushed | stunned | surprised"
  },
  {
    "no": "32",
    "code": "1F62A",
    "char": "ðŸ˜ª",
    "name": "SLEEPY FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | sleep"
  },
  {
    "no": "33",
    "code": "1F62B",
    "char": "ðŸ˜«",
    "name": "TIRED FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | tired"
  },
  {
    "no": "34",
    "code": "1F634",
    "char": "ðŸ˜´",
    "name": "SLEEPING FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | sleep | zzz"
  },
  {
    "no": "35",
    "code": "1F60C",
    "char": "ðŸ˜Œ",
    "name": "RELIEVED FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | relieved"
  },
  {
    "no": "36",
    "code": "1F913",
    "char": "ðŸ¤“",
    "name": "NERD FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | geek | nerd"
  },
  {
    "no": "37",
    "code": "1F61B",
    "char": "ðŸ˜›",
    "name": "FACE WITH STUCK-OUT TONGUE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | tongue"
  },
  {
    "no": "38",
    "code": "1F61C",
    "char": "ðŸ˜œ",
    "name": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE\nâ‰Š face with stuck-out tongue & winking eye",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "eye | face | joke | tongue | wink"
  },
  {
    "no": "39",
    "code": "1F61D",
    "char": "ðŸ˜",
    "name": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES\nâ‰Š face with stuck-out tongue & closed eyes",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "eye | face | horrible | taste | tongue"
  },
  {
    "no": "40",
    "code": "1F924",
    "char": "ðŸ¤¤",
    "name": "DROOLING FACE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "drooling | face"
  },
  {
    "no": "41",
    "code": "1F612",
    "char": "ðŸ˜’",
    "name": "UNAMUSED FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | unamused | unhappy"
  },
  {
    "no": "42",
    "code": "1F613",
    "char": "ðŸ˜“",
    "name": "FACE WITH COLD SWEAT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cold | face | sweat"
  },
  {
    "no": "43",
    "code": "1F614",
    "char": "ðŸ˜”",
    "name": "PENSIVE FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dejected | face | pensive"
  },
  {
    "no": "44",
    "code": "1F615",
    "char": "ðŸ˜•",
    "name": "CONFUSED FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "confused | face"
  },
  {
    "no": "45",
    "code": "1F643",
    "char": "ðŸ™ƒ",
    "name": "UPSIDE-DOWN FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | upside-down"
  },
  {
    "no": "46",
    "code": "1F911",
    "char": "ðŸ¤‘",
    "name": "MONEY-MOUTH FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | money | mouth"
  },
  {
    "no": "47",
    "code": "1F632",
    "char": "ðŸ˜²",
    "name": "ASTONISHED FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "astonished | face | shocked | totally"
  },
  {
    "no": "48",
    "code": "2639",
    "char": "â˜¹",
    "name": "WHITE FROWNING FACE\nâ‰Š frowning face",
    "date": "1995Ê·",
    "default": "text*",
    "keywords": "face | frown"
  },
  {
    "no": "49",
    "code": "1F641",
    "char": "ðŸ™",
    "name": "SLIGHTLY FROWNING FACE",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "face | frown"
  },
  {
    "no": "50",
    "code": "1F616",
    "char": "ðŸ˜–",
    "name": "CONFOUNDED FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "confounded | face"
  },
  {
    "no": "51",
    "code": "1F61E",
    "char": "ðŸ˜ž",
    "name": "DISAPPOINTED FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "disappointed | face"
  },
  {
    "no": "52",
    "code": "1F61F",
    "char": "ðŸ˜Ÿ",
    "name": "WORRIED FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | worried"
  },
  {
    "no": "53",
    "code": "1F624",
    "char": "ðŸ˜¤",
    "name": "FACE WITH LOOK OF TRIUMPH\nâ‰Š face with steam from nose",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | triumph | won"
  },
  {
    "no": "54",
    "code": "1F622",
    "char": "ðŸ˜¢",
    "name": "CRYING FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cry | face | sad | tear"
  },
  {
    "no": "55",
    "code": "1F62D",
    "char": "ðŸ˜­",
    "name": "LOUDLY CRYING FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cry | face | sad | sob | tear"
  },
  {
    "no": "56",
    "code": "1F626",
    "char": "ðŸ˜¦",
    "name": "FROWNING FACE WITH OPEN MOUTH",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | frown | mouth | open"
  },
  {
    "no": "57",
    "code": "1F627",
    "char": "ðŸ˜§",
    "name": "ANGUISHED FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "anguished | face"
  },
  {
    "no": "58",
    "code": "1F628",
    "char": "ðŸ˜¨",
    "name": "FEARFUL FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | fear | fearful | scared"
  },
  {
    "no": "59",
    "code": "1F629",
    "char": "ðŸ˜©",
    "name": "WEARY FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | tired | weary"
  },
  {
    "no": "60",
    "code": "1F62C",
    "char": "ðŸ˜¬",
    "name": "GRIMACING FACE",
    "date": "2012Ë£",
    "default": "emoji",
    "keywords": "face | grimace"
  },
  {
    "no": "61",
    "code": "1F630",
    "char": "ðŸ˜°",
    "name": "FACE WITH OPEN MOUTH AND COLD SWEAT\nâ‰Š face with open mouth & cold sweat",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blue | cold | face | mouth | open | rushed | sweat"
  },
  {
    "no": "62",
    "code": "1F631",
    "char": "ðŸ˜±",
    "name": "FACE SCREAMING IN FEAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | fear | fearful | munch | scared | scream"
  },
  {
    "no": "63",
    "code": "1F633",
    "char": "ðŸ˜³",
    "name": "FLUSHED FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dazed | face | flushed"
  },
  {
    "no": "64",
    "code": "1F635",
    "char": "ðŸ˜µ",
    "name": "DIZZY FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dizzy | face"
  },
  {
    "no": "65",
    "code": "1F621",
    "char": "ðŸ˜¡",
    "name": "POUTING FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "angry | face | mad | pouting | rage | red"
  },
  {
    "no": "66",
    "code": "1F620",
    "char": "ðŸ˜ ",
    "name": "ANGRY FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "angry | face | mad"
  },
  {
    "no": "67",
    "code": "1F607",
    "char": "ðŸ˜‡",
    "name": "SMILING FACE WITH HALO",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "angel | face | fairy tale | fantasy | halo | innocent | smile"
  },
  {
    "no": "68",
    "code": "1F920",
    "char": "ðŸ¤ ",
    "name": "FACE WITH COWBOY HAT\nâ‰Š cowboy hat face",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "cowboy | cowgirl | face | hat"
  },
  {
    "no": "69",
    "code": "1F921",
    "char": "ðŸ¤¡",
    "name": "CLOWN FACE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "clown | face"
  },
  {
    "no": "70",
    "code": "1F925",
    "char": "ðŸ¤¥",
    "name": "LYING FACE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "face | lie | pinocchio"
  },
  {
    "no": "71",
    "code": "1F637",
    "char": "ðŸ˜·",
    "name": "FACE WITH MEDICAL MASK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cold | doctor | face | mask | medicine | sick"
  },
  {
    "no": "72",
    "code": "1F912",
    "char": "ðŸ¤’",
    "name": "FACE WITH THERMOMETER",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | ill | sick | thermometer"
  },
  {
    "no": "73",
    "code": "1F915",
    "char": "ðŸ¤•",
    "name": "FACE WITH HEAD-BANDAGE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "bandage | face | hurt | injury"
  },
  {
    "no": "74",
    "code": "1F922",
    "char": "ðŸ¤¢",
    "name": "NAUSEATED FACE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "face | nauseated | vomit"
  },
  {
    "no": "75",
    "code": "1F927",
    "char": "ðŸ¤§",
    "name": "SNEEZING FACE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "face | gesundheit | sneeze"
  },
  {
    "no": "76",
    "code": "1F608",
    "char": "ðŸ˜ˆ",
    "name": "SMILING FACE WITH HORNS",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "face | fairy tale | fantasy | horns | smile"
  },
  {
    "no": "77",
    "code": "1F47F",
    "char": "ðŸ‘¿",
    "name": "IMP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "demon | devil | face | fairy tale | fantasy"
  },
  {
    "no": "78",
    "code": "1F479",
    "char": "ðŸ‘¹",
    "name": "JAPANESE OGRE\nâ‰Š ogre",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "creature | face | fairy tale | fantasy | japanese | monster"
  },
  {
    "no": "79",
    "code": "1F47A",
    "char": "ðŸ‘º",
    "name": "JAPANESE GOBLIN\nâ‰Š goblin",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "creature | face | fairy tale | fantasy | japanese | monster"
  },
  {
    "no": "80",
    "code": "1F480",
    "char": "ðŸ’€",
    "name": "SKULL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | death | face | fairy tale | monster"
  },
  {
    "no": "81",
    "code": "2620",
    "char": "â˜ ",
    "name": "SKULL AND CROSSBONES",
    "date": "1995Ë£",
    "default": "text*",
    "keywords": "body | crossbones | death | face | monster | skull"
  },
  {
    "no": "82",
    "code": "1F47B",
    "char": "ðŸ‘»",
    "name": "GHOST",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "creature | face | fairy tale | fantasy | monster"
  },
  {
    "no": "83",
    "code": "1F47D",
    "char": "ðŸ‘½",
    "name": "EXTRATERRESTRIAL ALIEN\nâ‰Š alien",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "creature | extraterrestrial | face | fairy tale | fantasy | monster | space | ufo"
  },
  {
    "no": "84",
    "code": "1F47E",
    "char": "ðŸ‘¾",
    "name": "ALIEN MONSTER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "alien | creature | extraterrestrial | face | fairy tale | fantasy | monster | space | ufo"
  },
  {
    "no": "85",
    "code": "1F916",
    "char": "ðŸ¤–",
    "name": "ROBOT FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | monster | robot"
  },
  {
    "no": "86",
    "code": "1F4A9",
    "char": "ðŸ’©",
    "name": "PILE OF POO",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "comic | dung | face | monster | poo | poop"
  },
  {
    "no": "87",
    "code": "1F63A",
    "char": "ðŸ˜º",
    "name": "SMILING CAT FACE WITH OPEN MOUTH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | face | mouth | open | smile"
  },
  {
    "no": "88",
    "code": "1F638",
    "char": "ðŸ˜¸",
    "name": "GRINNING CAT FACE WITH SMILING EYES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | eye | face | grin | smile"
  },
  {
    "no": "89",
    "code": "1F639",
    "char": "ðŸ˜¹",
    "name": "CAT FACE WITH TEARS OF JOY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | face | joy | tear"
  },
  {
    "no": "90",
    "code": "1F63B",
    "char": "ðŸ˜»",
    "name": "SMILING CAT FACE WITH HEART-SHAPED EYES\nâ‰Š smiling cat face with heart-eyes",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | eye | face | heart | love | smile"
  },
  {
    "no": "91",
    "code": "1F63C",
    "char": "ðŸ˜¼",
    "name": "CAT FACE WITH WRY SMILE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | face | ironic | smile | wry"
  },
  {
    "no": "92",
    "code": "1F63D",
    "char": "ðŸ˜½",
    "name": "KISSING CAT FACE WITH CLOSED EYES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | eye | face | kiss"
  },
  {
    "no": "93",
    "code": "1F640",
    "char": "ðŸ™€",
    "name": "WEARY CAT FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | face | oh | surprised | weary"
  },
  {
    "no": "94",
    "code": "1F63F",
    "char": "ðŸ˜¿",
    "name": "CRYING CAT FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | cry | face | sad | tear"
  },
  {
    "no": "95",
    "code": "1F63E",
    "char": "ðŸ˜¾",
    "name": "POUTING CAT FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | face | pouting"
  },
  {
    "no": "96",
    "code": "1F648",
    "char": "ðŸ™ˆ",
    "name": "SEE-NO-EVIL MONKEY\nâ‰Š see-no-evil",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "evil | face | forbidden | gesture | monkey | no | not | prohibited | see"
  },
  {
    "no": "97",
    "code": "1F649",
    "char": "ðŸ™‰",
    "name": "HEAR-NO-EVIL MONKEY\nâ‰Š hear-no-evil",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "evil | face | forbidden | gesture | hear | monkey | no | not | prohibited"
  },
  {
    "no": "98",
    "code": "1F64A",
    "char": "ðŸ™Š",
    "name": "SPEAK-NO-EVIL MONKEY\nâ‰Š speak-no-evil",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "evil | face | forbidden | gesture | monkey | no | not | prohibited | speak"
  },
  {
    "no": "99",
    "code": "1F466",
    "char": "ðŸ‘¦",
    "name": "BOY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "boy | male"
  },
  {
    "no": "100",
    "code": "1F466 1F3FB",
    "char": "ðŸ‘¦ðŸ»",
    "name": "boy, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boy | male | type-1-2"
  },
  {
    "no": "101",
    "code": "1F466 1F3FC",
    "char": "ðŸ‘¦ðŸ¼",
    "name": "boy, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boy | male | type-3"
  },
  {
    "no": "102",
    "code": "1F466 1F3FD",
    "char": "ðŸ‘¦ðŸ½",
    "name": "boy, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boy | male | type-4"
  },
  {
    "no": "103",
    "code": "1F466 1F3FE",
    "char": "ðŸ‘¦ðŸ¾",
    "name": "boy, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boy | male | type-5"
  },
  {
    "no": "104",
    "code": "1F466 1F3FF",
    "char": "ðŸ‘¦ðŸ¿",
    "name": "boy, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boy | male | type-6"
  },
  {
    "no": "105",
    "code": "1F467",
    "char": "ðŸ‘§",
    "name": "GIRL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "female | maiden | virgin | virgo | zodiac"
  },
  {
    "no": "106",
    "code": "1F467 1F3FB",
    "char": "ðŸ‘§ðŸ»",
    "name": "girl, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | maiden | type-1-2 | virgin | virgo | zodiac"
  },
  {
    "no": "107",
    "code": "1F467 1F3FC",
    "char": "ðŸ‘§ðŸ¼",
    "name": "girl, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | maiden | type-3 | virgin | virgo | zodiac"
  },
  {
    "no": "108",
    "code": "1F467 1F3FD",
    "char": "ðŸ‘§ðŸ½",
    "name": "girl, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | maiden | type-4 | virgin | virgo | zodiac"
  },
  {
    "no": "109",
    "code": "1F467 1F3FE",
    "char": "ðŸ‘§ðŸ¾",
    "name": "girl, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | maiden | type-5 | virgin | virgo | zodiac"
  },
  {
    "no": "110",
    "code": "1F467 1F3FF",
    "char": "ðŸ‘§ðŸ¿",
    "name": "girl, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | maiden | type-6 | virgin | virgo | zodiac"
  },
  {
    "no": "111",
    "code": "1F468",
    "char": "ðŸ‘¨",
    "name": "MAN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "male | man"
  },
  {
    "no": "112",
    "code": "1F468 1F3FB",
    "char": "ðŸ‘¨ðŸ»",
    "name": "man, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | type-1-2"
  },
  {
    "no": "113",
    "code": "1F468 1F3FC",
    "char": "ðŸ‘¨ðŸ¼",
    "name": "man, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | type-3"
  },
  {
    "no": "114",
    "code": "1F468 1F3FD",
    "char": "ðŸ‘¨ðŸ½",
    "name": "man, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | type-4"
  },
  {
    "no": "115",
    "code": "1F468 1F3FE",
    "char": "ðŸ‘¨ðŸ¾",
    "name": "man, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | type-5"
  },
  {
    "no": "116",
    "code": "1F468 1F3FF",
    "char": "ðŸ‘¨ðŸ¿",
    "name": "man, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | type-6"
  },
  {
    "no": "117",
    "code": "1F469",
    "char": "ðŸ‘©",
    "name": "WOMAN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "female | woman"
  },
  {
    "no": "118",
    "code": "1F469 1F3FB",
    "char": "ðŸ‘©ðŸ»",
    "name": "woman, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | type-1-2 | woman"
  },
  {
    "no": "119",
    "code": "1F469 1F3FC",
    "char": "ðŸ‘©ðŸ¼",
    "name": "woman, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | type-3 | woman"
  },
  {
    "no": "120",
    "code": "1F469 1F3FD",
    "char": "ðŸ‘©ðŸ½",
    "name": "woman, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | type-4 | woman"
  },
  {
    "no": "121",
    "code": "1F469 1F3FE",
    "char": "ðŸ‘©ðŸ¾",
    "name": "woman, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | type-5 | woman"
  },
  {
    "no": "122",
    "code": "1F469 1F3FF",
    "char": "ðŸ‘©ðŸ¿",
    "name": "woman, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | type-6 | woman"
  },
  {
    "no": "123",
    "code": "1F474",
    "char": "ðŸ‘´",
    "name": "OLDER MAN\nâ‰Š old man",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "male | man | old"
  },
  {
    "no": "124",
    "code": "1F474 1F3FB",
    "char": "ðŸ‘´ðŸ»",
    "name": "old man, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | old | type-1-2"
  },
  {
    "no": "125",
    "code": "1F474 1F3FC",
    "char": "ðŸ‘´ðŸ¼",
    "name": "old man, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | old | type-3"
  },
  {
    "no": "126",
    "code": "1F474 1F3FD",
    "char": "ðŸ‘´ðŸ½",
    "name": "old man, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | old | type-4"
  },
  {
    "no": "127",
    "code": "1F474 1F3FE",
    "char": "ðŸ‘´ðŸ¾",
    "name": "old man, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | old | type-5"
  },
  {
    "no": "128",
    "code": "1F474 1F3FF",
    "char": "ðŸ‘´ðŸ¿",
    "name": "old man, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "male | man | old | type-6"
  },
  {
    "no": "129",
    "code": "1F475",
    "char": "ðŸ‘µ",
    "name": "OLDER WOMAN\nâ‰Š old woman",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "female | old | woman"
  },
  {
    "no": "130",
    "code": "1F475 1F3FB",
    "char": "ðŸ‘µðŸ»",
    "name": "old woman, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | old | type-1-2 | woman"
  },
  {
    "no": "131",
    "code": "1F475 1F3FC",
    "char": "ðŸ‘µðŸ¼",
    "name": "old woman, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | old | type-3 | woman"
  },
  {
    "no": "132",
    "code": "1F475 1F3FD",
    "char": "ðŸ‘µðŸ½",
    "name": "old woman, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | old | type-4 | woman"
  },
  {
    "no": "133",
    "code": "1F475 1F3FE",
    "char": "ðŸ‘µðŸ¾",
    "name": "old woman, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | old | type-5 | woman"
  },
  {
    "no": "134",
    "code": "1F475 1F3FF",
    "char": "ðŸ‘µðŸ¿",
    "name": "old woman, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "female | old | type-6 | woman"
  },
  {
    "no": "135",
    "code": "1F476",
    "char": "ðŸ‘¶",
    "name": "BABY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "baby"
  },
  {
    "no": "136",
    "code": "1F476 1F3FB",
    "char": "ðŸ‘¶ðŸ»",
    "name": "baby, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "baby | type-1-2"
  },
  {
    "no": "137",
    "code": "1F476 1F3FC",
    "char": "ðŸ‘¶ðŸ¼",
    "name": "baby, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "baby | type-3"
  },
  {
    "no": "138",
    "code": "1F476 1F3FD",
    "char": "ðŸ‘¶ðŸ½",
    "name": "baby, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "baby | type-4"
  },
  {
    "no": "139",
    "code": "1F476 1F3FE",
    "char": "ðŸ‘¶ðŸ¾",
    "name": "baby, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "baby | type-5"
  },
  {
    "no": "140",
    "code": "1F476 1F3FF",
    "char": "ðŸ‘¶ðŸ¿",
    "name": "baby, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "baby | type-6"
  },
  {
    "no": "141",
    "code": "1F47C",
    "char": "ðŸ‘¼",
    "name": "BABY ANGEL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "angel | baby | face | fairy tale | fantasy"
  },
  {
    "no": "142",
    "code": "1F47C 1F3FB",
    "char": "ðŸ‘¼ðŸ»",
    "name": "baby angel, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "angel | baby | face | fairy tale | fantasy | type-1-2"
  },
  {
    "no": "143",
    "code": "1F47C 1F3FC",
    "char": "ðŸ‘¼ðŸ¼",
    "name": "baby angel, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "angel | baby | face | fairy tale | fantasy | type-3"
  },
  {
    "no": "144",
    "code": "1F47C 1F3FD",
    "char": "ðŸ‘¼ðŸ½",
    "name": "baby angel, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "angel | baby | face | fairy tale | fantasy | type-4"
  },
  {
    "no": "145",
    "code": "1F47C 1F3FE",
    "char": "ðŸ‘¼ðŸ¾",
    "name": "baby angel, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "angel | baby | face | fairy tale | fantasy | type-5"
  },
  {
    "no": "146",
    "code": "1F47C 1F3FF",
    "char": "ðŸ‘¼ðŸ¿",
    "name": "baby angel, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "angel | baby | face | fairy tale | fantasy | type-6"
  },
  {
    "no": "147",
    "code": "1F46E",
    "char": "ðŸ‘®",
    "name": "POLICE OFFICER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cop | officer | police"
  },
  {
    "no": "148",
    "code": "1F46E 1F3FB",
    "char": "ðŸ‘®ðŸ»",
    "name": "police officer, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "cop | officer | police | type-1-2"
  },
  {
    "no": "149",
    "code": "1F46E 1F3FC",
    "char": "ðŸ‘®ðŸ¼",
    "name": "police officer, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "cop | officer | police | type-3"
  },
  {
    "no": "150",
    "code": "1F46E 1F3FD",
    "char": "ðŸ‘®ðŸ½",
    "name": "police officer, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "cop | officer | police | type-4"
  },
  {
    "no": "151",
    "code": "1F46E 1F3FE",
    "char": "ðŸ‘®ðŸ¾",
    "name": "police officer, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "cop | officer | police | type-5"
  },
  {
    "no": "152",
    "code": "1F46E 1F3FF",
    "char": "ðŸ‘®ðŸ¿",
    "name": "police officer, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "cop | officer | police | type-6"
  },
  {
    "no": "153",
    "code": "1F575",
    "char": "ðŸ•µ",
    "name": "SLEUTH OR SPY\nâ‰Š detective",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "detective | sleuth | spy"
  },
  {
    "no": "154",
    "code": "1F575 1F3FB",
    "char": "ðŸ•µðŸ»",
    "name": "detective, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "detective | sleuth | spy | type-1-2"
  },
  {
    "no": "155",
    "code": "1F575 1F3FC",
    "char": "ðŸ•µðŸ¼",
    "name": "detective, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "detective | sleuth | spy | type-3"
  },
  {
    "no": "156",
    "code": "1F575 1F3FD",
    "char": "ðŸ•µðŸ½",
    "name": "detective, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "detective | sleuth | spy | type-4"
  },
  {
    "no": "157",
    "code": "1F575 1F3FE",
    "char": "ðŸ•µðŸ¾",
    "name": "detective, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "detective | sleuth | spy | type-5"
  },
  {
    "no": "158",
    "code": "1F575 1F3FF",
    "char": "ðŸ•µðŸ¿",
    "name": "detective, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "detective | sleuth | spy | type-6"
  },
  {
    "no": "159",
    "code": "1F482",
    "char": "ðŸ’‚",
    "name": "GUARDSMAN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "guard"
  },
  {
    "no": "160",
    "code": "1F482 1F3FB",
    "char": "ðŸ’‚ðŸ»",
    "name": "guardsman, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "guard | type-1-2"
  },
  {
    "no": "161",
    "code": "1F482 1F3FC",
    "char": "ðŸ’‚ðŸ¼",
    "name": "guardsman, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "guard | type-3"
  },
  {
    "no": "162",
    "code": "1F482 1F3FD",
    "char": "ðŸ’‚ðŸ½",
    "name": "guardsman, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "guard | type-4"
  },
  {
    "no": "163",
    "code": "1F482 1F3FE",
    "char": "ðŸ’‚ðŸ¾",
    "name": "guardsman, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "guard | type-5"
  },
  {
    "no": "164",
    "code": "1F482 1F3FF",
    "char": "ðŸ’‚ðŸ¿",
    "name": "guardsman, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "guard | type-6"
  },
  {
    "no": "165",
    "code": "1F477",
    "char": "ðŸ‘·",
    "name": "CONSTRUCTION WORKER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "construction | hat | worker"
  },
  {
    "no": "166",
    "code": "1F477 1F3FB",
    "char": "ðŸ‘·ðŸ»",
    "name": "construction worker, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "construction | hat | type-1-2 | worker"
  },
  {
    "no": "167",
    "code": "1F477 1F3FC",
    "char": "ðŸ‘·ðŸ¼",
    "name": "construction worker, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "construction | hat | type-3 | worker"
  },
  {
    "no": "168",
    "code": "1F477 1F3FD",
    "char": "ðŸ‘·ðŸ½",
    "name": "construction worker, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "construction | hat | type-4 | worker"
  },
  {
    "no": "169",
    "code": "1F477 1F3FE",
    "char": "ðŸ‘·ðŸ¾",
    "name": "construction worker, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "construction | hat | type-5 | worker"
  },
  {
    "no": "170",
    "code": "1F477 1F3FF",
    "char": "ðŸ‘·ðŸ¿",
    "name": "construction worker, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "construction | hat | type-6 | worker"
  },
  {
    "no": "171",
    "code": "1F473",
    "char": "ðŸ‘³",
    "name": "MAN WITH TURBAN\nâ‰Š person with turban",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "turban"
  },
  {
    "no": "172",
    "code": "1F473 1F3FB",
    "char": "ðŸ‘³ðŸ»",
    "name": "person with turban, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "turban | type-1-2"
  },
  {
    "no": "173",
    "code": "1F473 1F3FC",
    "char": "ðŸ‘³ðŸ¼",
    "name": "person with turban, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "turban | type-3"
  },
  {
    "no": "174",
    "code": "1F473 1F3FD",
    "char": "ðŸ‘³ðŸ½",
    "name": "person with turban, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "turban | type-4"
  },
  {
    "no": "175",
    "code": "1F473 1F3FE",
    "char": "ðŸ‘³ðŸ¾",
    "name": "person with turban, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "turban | type-5"
  },
  {
    "no": "176",
    "code": "1F473 1F3FF",
    "char": "ðŸ‘³ðŸ¿",
    "name": "person with turban, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "turban | type-6"
  },
  {
    "no": "177",
    "code": "1F471",
    "char": "ðŸ‘±",
    "name": "PERSON WITH BLOND HAIR\nâ‰Š blond person",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blond"
  },
  {
    "no": "178",
    "code": "1F471 1F3FB",
    "char": "ðŸ‘±ðŸ»",
    "name": "blond person, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "blond | type-1-2"
  },
  {
    "no": "179",
    "code": "1F471 1F3FC",
    "char": "ðŸ‘±ðŸ¼",
    "name": "blond person, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "blond | type-3"
  },
  {
    "no": "180",
    "code": "1F471 1F3FD",
    "char": "ðŸ‘±ðŸ½",
    "name": "blond person, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "blond | type-4"
  },
  {
    "no": "181",
    "code": "1F471 1F3FE",
    "char": "ðŸ‘±ðŸ¾",
    "name": "blond person, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "blond | type-5"
  },
  {
    "no": "182",
    "code": "1F471 1F3FF",
    "char": "ðŸ‘±ðŸ¿",
    "name": "blond person, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "blond | type-6"
  },
  {
    "no": "183",
    "code": "1F385",
    "char": "ðŸŽ…",
    "name": "FATHER CHRISTMAS\nâ‰Š santa claus",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration | christmas | fairy tale | fantasy | father | santa"
  },
  {
    "no": "184",
    "code": "1F385 1F3FB",
    "char": "ðŸŽ…ðŸ»",
    "name": "santa claus, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-1-2"
  },
  {
    "no": "185",
    "code": "1F385 1F3FC",
    "char": "ðŸŽ…ðŸ¼",
    "name": "santa claus, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-3"
  },
  {
    "no": "186",
    "code": "1F385 1F3FD",
    "char": "ðŸŽ…ðŸ½",
    "name": "santa claus, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-4"
  },
  {
    "no": "187",
    "code": "1F385 1F3FE",
    "char": "ðŸŽ…ðŸ¾",
    "name": "santa claus, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-5"
  },
  {
    "no": "188",
    "code": "1F385 1F3FF",
    "char": "ðŸŽ…ðŸ¿",
    "name": "santa claus, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "celebration | christmas | fairy tale | fantasy | father | santa | type-6"
  },
  {
    "no": "189",
    "code": "1F936",
    "char": "ðŸ¤¶",
    "name": "MOTHER CHRISTMAS",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "christmas | mother | Mrs. Claus"
  },
  {
    "no": "190",
    "code": "1F936 1F3FB",
    "char": "ðŸ¤¶ðŸ»",
    "name": "mother christmas, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "christmas | mother | Mrs. Claus | type-1-2"
  },
  {
    "no": "191",
    "code": "1F936 1F3FC",
    "char": "ðŸ¤¶ðŸ¼",
    "name": "mother christmas, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "christmas | mother | Mrs. Claus | type-3"
  },
  {
    "no": "192",
    "code": "1F936 1F3FD",
    "char": "ðŸ¤¶ðŸ½",
    "name": "mother christmas, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "christmas | mother | Mrs. Claus | type-4"
  },
  {
    "no": "193",
    "code": "1F936 1F3FE",
    "char": "ðŸ¤¶ðŸ¾",
    "name": "mother christmas, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "christmas | mother | Mrs. Claus | type-5"
  },
  {
    "no": "194",
    "code": "1F936 1F3FF",
    "char": "ðŸ¤¶ðŸ¿",
    "name": "mother christmas, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "christmas | mother | Mrs. Claus | type-6"
  },
  {
    "no": "195",
    "code": "1F478",
    "char": "ðŸ‘¸",
    "name": "PRINCESS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fairy tale | fantasy"
  },
  {
    "no": "196",
    "code": "1F478 1F3FB",
    "char": "ðŸ‘¸ðŸ»",
    "name": "princess, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "fairy tale | fantasy | type-1-2"
  },
  {
    "no": "197",
    "code": "1F478 1F3FC",
    "char": "ðŸ‘¸ðŸ¼",
    "name": "princess, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "fairy tale | fantasy | type-3"
  },
  {
    "no": "198",
    "code": "1F478 1F3FD",
    "char": "ðŸ‘¸ðŸ½",
    "name": "princess, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "fairy tale | fantasy | type-4"
  },
  {
    "no": "199",
    "code": "1F478 1F3FE",
    "char": "ðŸ‘¸ðŸ¾",
    "name": "princess, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "fairy tale | fantasy | type-5"
  },
  {
    "no": "200",
    "code": "1F478 1F3FF",
    "char": "ðŸ‘¸ðŸ¿",
    "name": "princess, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "fairy tale | fantasy | type-6"
  },
  {
    "no": "201",
    "code": "1F934",
    "char": "ðŸ¤´",
    "name": "PRINCE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "prince"
  },
  {
    "no": "202",
    "code": "1F934 1F3FB",
    "char": "ðŸ¤´ðŸ»",
    "name": "prince, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "prince | type-1-2"
  },
  {
    "no": "203",
    "code": "1F934 1F3FC",
    "char": "ðŸ¤´ðŸ¼",
    "name": "prince, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "prince | type-3"
  },
  {
    "no": "204",
    "code": "1F934 1F3FD",
    "char": "ðŸ¤´ðŸ½",
    "name": "prince, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "prince | type-4"
  },
  {
    "no": "205",
    "code": "1F934 1F3FE",
    "char": "ðŸ¤´ðŸ¾",
    "name": "prince, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "prince | type-5"
  },
  {
    "no": "206",
    "code": "1F934 1F3FF",
    "char": "ðŸ¤´ðŸ¿",
    "name": "prince, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "prince | type-6"
  },
  {
    "no": "207",
    "code": "1F470",
    "char": "ðŸ‘°",
    "name": "BRIDE WITH VEIL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bride | veil | wedding"
  },
  {
    "no": "208",
    "code": "1F470 1F3FB",
    "char": "ðŸ‘°ðŸ»",
    "name": "bride with veil, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bride | type-1-2 | veil | wedding"
  },
  {
    "no": "209",
    "code": "1F470 1F3FC",
    "char": "ðŸ‘°ðŸ¼",
    "name": "bride with veil, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bride | type-3 | veil | wedding"
  },
  {
    "no": "210",
    "code": "1F470 1F3FD",
    "char": "ðŸ‘°ðŸ½",
    "name": "bride with veil, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bride | type-4 | veil | wedding"
  },
  {
    "no": "211",
    "code": "1F470 1F3FE",
    "char": "ðŸ‘°ðŸ¾",
    "name": "bride with veil, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bride | type-5 | veil | wedding"
  },
  {
    "no": "212",
    "code": "1F470 1F3FF",
    "char": "ðŸ‘°ðŸ¿",
    "name": "bride with veil, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bride | type-6 | veil | wedding"
  },
  {
    "no": "213",
    "code": "1F935",
    "char": "ðŸ¤µ",
    "name": "MAN IN TUXEDO",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "groom | man | tuxedo"
  },
  {
    "no": "214",
    "code": "1F935 1F3FB",
    "char": "ðŸ¤µðŸ»",
    "name": "man in tuxedo, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "groom | man | tuxedo | type-1-2"
  },
  {
    "no": "215",
    "code": "1F935 1F3FC",
    "char": "ðŸ¤µðŸ¼",
    "name": "man in tuxedo, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "groom | man | tuxedo | type-3"
  },
  {
    "no": "216",
    "code": "1F935 1F3FD",
    "char": "ðŸ¤µðŸ½",
    "name": "man in tuxedo, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "groom | man | tuxedo | type-4"
  },
  {
    "no": "217",
    "code": "1F935 1F3FE",
    "char": "ðŸ¤µðŸ¾",
    "name": "man in tuxedo, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "groom | man | tuxedo | type-5"
  },
  {
    "no": "218",
    "code": "1F935 1F3FF",
    "char": "ðŸ¤µðŸ¿",
    "name": "man in tuxedo, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "groom | man | tuxedo | type-6"
  },
  {
    "no": "219",
    "code": "1F930",
    "char": "ðŸ¤°",
    "name": "PREGNANT WOMAN",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "pregnant | woman"
  },
  {
    "no": "220",
    "code": "1F930 1F3FB",
    "char": "ðŸ¤°ðŸ»",
    "name": "pregnant woman, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "pregnant | type-1-2 | woman"
  },
  {
    "no": "221",
    "code": "1F930 1F3FC",
    "char": "ðŸ¤°ðŸ¼",
    "name": "pregnant woman, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "pregnant | type-3 | woman"
  },
  {
    "no": "222",
    "code": "1F930 1F3FD",
    "char": "ðŸ¤°ðŸ½",
    "name": "pregnant woman, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "pregnant | type-4 | woman"
  },
  {
    "no": "223",
    "code": "1F930 1F3FE",
    "char": "ðŸ¤°ðŸ¾",
    "name": "pregnant woman, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "pregnant | type-5 | woman"
  },
  {
    "no": "224",
    "code": "1F930 1F3FF",
    "char": "ðŸ¤°ðŸ¿",
    "name": "pregnant woman, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "pregnant | type-6 | woman"
  },
  {
    "no": "225",
    "code": "1F472",
    "char": "ðŸ‘²",
    "name": "MAN WITH GUA PI MAO\nâ‰Š man with chinese cap",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "gua pi mao | hat | man"
  },
  {
    "no": "226",
    "code": "1F472 1F3FB",
    "char": "ðŸ‘²ðŸ»",
    "name": "man with chinese cap, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gua pi mao | hat | man | type-1-2"
  },
  {
    "no": "227",
    "code": "1F472 1F3FC",
    "char": "ðŸ‘²ðŸ¼",
    "name": "man with chinese cap, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gua pi mao | hat | man | type-3"
  },
  {
    "no": "228",
    "code": "1F472 1F3FD",
    "char": "ðŸ‘²ðŸ½",
    "name": "man with chinese cap, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gua pi mao | hat | man | type-4"
  },
  {
    "no": "229",
    "code": "1F472 1F3FE",
    "char": "ðŸ‘²ðŸ¾",
    "name": "man with chinese cap, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gua pi mao | hat | man | type-5"
  },
  {
    "no": "230",
    "code": "1F472 1F3FF",
    "char": "ðŸ‘²ðŸ¿",
    "name": "man with chinese cap, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gua pi mao | hat | man | type-6"
  },
  {
    "no": "231",
    "code": "1F64D",
    "char": "ðŸ™",
    "name": "PERSON FROWNING",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "frown | gesture"
  },
  {
    "no": "232",
    "code": "1F64D 1F3FB",
    "char": "ðŸ™ðŸ»",
    "name": "person frowning, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "frown | gesture | type-1-2"
  },
  {
    "no": "233",
    "code": "1F64D 1F3FC",
    "char": "ðŸ™ðŸ¼",
    "name": "person frowning, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "frown | gesture | type-3"
  },
  {
    "no": "234",
    "code": "1F64D 1F3FD",
    "char": "ðŸ™ðŸ½",
    "name": "person frowning, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "frown | gesture | type-4"
  },
  {
    "no": "235",
    "code": "1F64D 1F3FE",
    "char": "ðŸ™ðŸ¾",
    "name": "person frowning, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "frown | gesture | type-5"
  },
  {
    "no": "236",
    "code": "1F64D 1F3FF",
    "char": "ðŸ™ðŸ¿",
    "name": "person frowning, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "frown | gesture | type-6"
  },
  {
    "no": "237",
    "code": "1F64E",
    "char": "ðŸ™Ž",
    "name": "PERSON WITH POUTING FACE\nâ‰Š person pouting",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "gesture | pouting"
  },
  {
    "no": "238",
    "code": "1F64E 1F3FB",
    "char": "ðŸ™ŽðŸ»",
    "name": "person pouting, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | pouting | type-1-2"
  },
  {
    "no": "239",
    "code": "1F64E 1F3FC",
    "char": "ðŸ™ŽðŸ¼",
    "name": "person pouting, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | pouting | type-3"
  },
  {
    "no": "240",
    "code": "1F64E 1F3FD",
    "char": "ðŸ™ŽðŸ½",
    "name": "person pouting, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | pouting | type-4"
  },
  {
    "no": "241",
    "code": "1F64E 1F3FE",
    "char": "ðŸ™ŽðŸ¾",
    "name": "person pouting, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | pouting | type-5"
  },
  {
    "no": "242",
    "code": "1F64E 1F3FF",
    "char": "ðŸ™ŽðŸ¿",
    "name": "person pouting, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | pouting | type-6"
  },
  {
    "no": "243",
    "code": "1F645",
    "char": "ðŸ™…",
    "name": "FACE WITH NO GOOD GESTURE\nâ‰Š person gesturing not ok",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "forbidden | gesture | hand | no | not | prohibited"
  },
  {
    "no": "244",
    "code": "1F645 1F3FB",
    "char": "ðŸ™…ðŸ»",
    "name": "person gesturing not ok, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "forbidden | gesture | hand | no | not | prohibited | type-1-2"
  },
  {
    "no": "245",
    "code": "1F645 1F3FC",
    "char": "ðŸ™…ðŸ¼",
    "name": "person gesturing not ok, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "forbidden | gesture | hand | no | not | prohibited | type-3"
  },
  {
    "no": "246",
    "code": "1F645 1F3FD",
    "char": "ðŸ™…ðŸ½",
    "name": "person gesturing not ok, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "forbidden | gesture | hand | no | not | prohibited | type-4"
  },
  {
    "no": "247",
    "code": "1F645 1F3FE",
    "char": "ðŸ™…ðŸ¾",
    "name": "person gesturing not ok, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "forbidden | gesture | hand | no | not | prohibited | type-5"
  },
  {
    "no": "248",
    "code": "1F645 1F3FF",
    "char": "ðŸ™…ðŸ¿",
    "name": "person gesturing not ok, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "forbidden | gesture | hand | no | not | prohibited | type-6"
  },
  {
    "no": "249",
    "code": "1F646",
    "char": "ðŸ™†",
    "name": "FACE WITH OK GESTURE\nâ‰Š person gesturing ok",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "gesture | hand | ok"
  },
  {
    "no": "250",
    "code": "1F646 1F3FB",
    "char": "ðŸ™†ðŸ»",
    "name": "person gesturing ok, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | ok | type-1-2"
  },
  {
    "no": "251",
    "code": "1F646 1F3FC",
    "char": "ðŸ™†ðŸ¼",
    "name": "person gesturing ok, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | ok | type-3"
  },
  {
    "no": "252",
    "code": "1F646 1F3FD",
    "char": "ðŸ™†ðŸ½",
    "name": "person gesturing ok, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | ok | type-4"
  },
  {
    "no": "253",
    "code": "1F646 1F3FE",
    "char": "ðŸ™†ðŸ¾",
    "name": "person gesturing ok, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | ok | type-5"
  },
  {
    "no": "254",
    "code": "1F646 1F3FF",
    "char": "ðŸ™†ðŸ¿",
    "name": "person gesturing ok, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | ok | type-6"
  },
  {
    "no": "255",
    "code": "1F481",
    "char": "ðŸ’",
    "name": "INFORMATION DESK PERSON\nâ‰Š person tipping hand",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "hand | help | information | sassy | tipping"
  },
  {
    "no": "256",
    "code": "1F481 1F3FB",
    "char": "ðŸ’ðŸ»",
    "name": "person tipping hand, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hand | help | information | sassy | tipping | type-1-2"
  },
  {
    "no": "257",
    "code": "1F481 1F3FC",
    "char": "ðŸ’ðŸ¼",
    "name": "person tipping hand, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hand | help | information | sassy | tipping | type-3"
  },
  {
    "no": "258",
    "code": "1F481 1F3FD",
    "char": "ðŸ’ðŸ½",
    "name": "person tipping hand, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hand | help | information | sassy | tipping | type-4"
  },
  {
    "no": "259",
    "code": "1F481 1F3FE",
    "char": "ðŸ’ðŸ¾",
    "name": "person tipping hand, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hand | help | information | sassy | tipping | type-5"
  },
  {
    "no": "260",
    "code": "1F481 1F3FF",
    "char": "ðŸ’ðŸ¿",
    "name": "person tipping hand, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hand | help | information | sassy | tipping | type-6"
  },
  {
    "no": "261",
    "code": "1F64B",
    "char": "ðŸ™‹",
    "name": "HAPPY PERSON RAISING ONE HAND\nâ‰Š person raising hand",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "gesture | hand | happy | raised"
  },
  {
    "no": "262",
    "code": "1F64B 1F3FB",
    "char": "ðŸ™‹ðŸ»",
    "name": "person raising hand, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | happy | raised | type-1-2"
  },
  {
    "no": "263",
    "code": "1F64B 1F3FC",
    "char": "ðŸ™‹ðŸ¼",
    "name": "person raising hand, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | happy | raised | type-3"
  },
  {
    "no": "264",
    "code": "1F64B 1F3FD",
    "char": "ðŸ™‹ðŸ½",
    "name": "person raising hand, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | happy | raised | type-4"
  },
  {
    "no": "265",
    "code": "1F64B 1F3FE",
    "char": "ðŸ™‹ðŸ¾",
    "name": "person raising hand, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | happy | raised | type-5"
  },
  {
    "no": "266",
    "code": "1F64B 1F3FF",
    "char": "ðŸ™‹ðŸ¿",
    "name": "person raising hand, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "gesture | hand | happy | raised | type-6"
  },
  {
    "no": "267",
    "code": "1F647",
    "char": "ðŸ™‡",
    "name": "PERSON BOWING DEEPLY\nâ‰Š person bowing",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "apology | bow | gesture | sorry"
  },
  {
    "no": "268",
    "code": "1F647 1F3FB",
    "char": "ðŸ™‡ðŸ»",
    "name": "person bowing, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "apology | bow | gesture | sorry | type-1-2"
  },
  {
    "no": "269",
    "code": "1F647 1F3FC",
    "char": "ðŸ™‡ðŸ¼",
    "name": "person bowing, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "apology | bow | gesture | sorry | type-3"
  },
  {
    "no": "270",
    "code": "1F647 1F3FD",
    "char": "ðŸ™‡ðŸ½",
    "name": "person bowing, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "apology | bow | gesture | sorry | type-4"
  },
  {
    "no": "271",
    "code": "1F647 1F3FE",
    "char": "ðŸ™‡ðŸ¾",
    "name": "person bowing, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "apology | bow | gesture | sorry | type-5"
  },
  {
    "no": "272",
    "code": "1F647 1F3FF",
    "char": "ðŸ™‡ðŸ¿",
    "name": "person bowing, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "apology | bow | gesture | sorry | type-6"
  },
  {
    "no": "273",
    "code": "1F926",
    "char": "ðŸ¤¦",
    "name": "FACE PALM\nâ‰Š person facepalming",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "disbelief | exasperation | face | palm"
  },
  {
    "no": "274",
    "code": "1F926 1F3FB",
    "char": "ðŸ¤¦ðŸ»",
    "name": "person facepalming, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "disbelief | exasperation | face | palm | type-1-2"
  },
  {
    "no": "275",
    "code": "1F926 1F3FC",
    "char": "ðŸ¤¦ðŸ¼",
    "name": "person facepalming, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "disbelief | exasperation | face | palm | type-3"
  },
  {
    "no": "276",
    "code": "1F926 1F3FD",
    "char": "ðŸ¤¦ðŸ½",
    "name": "person facepalming, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "disbelief | exasperation | face | palm | type-4"
  },
  {
    "no": "277",
    "code": "1F926 1F3FE",
    "char": "ðŸ¤¦ðŸ¾",
    "name": "person facepalming, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "disbelief | exasperation | face | palm | type-5"
  },
  {
    "no": "278",
    "code": "1F926 1F3FF",
    "char": "ðŸ¤¦ðŸ¿",
    "name": "person facepalming, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "disbelief | exasperation | face | palm | type-6"
  },
  {
    "no": "279",
    "code": "1F937",
    "char": "ðŸ¤·",
    "name": "SHRUG\nâ‰Š person shrugging",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "doubt | ignorance | indifference | shrug"
  },
  {
    "no": "280",
    "code": "1F937 1F3FB",
    "char": "ðŸ¤·ðŸ»",
    "name": "person shrugging, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "doubt | ignorance | indifference | shrug | type-1-2"
  },
  {
    "no": "281",
    "code": "1F937 1F3FC",
    "char": "ðŸ¤·ðŸ¼",
    "name": "person shrugging, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "doubt | ignorance | indifference | shrug | type-3"
  },
  {
    "no": "282",
    "code": "1F937 1F3FD",
    "char": "ðŸ¤·ðŸ½",
    "name": "person shrugging, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "doubt | ignorance | indifference | shrug | type-4"
  },
  {
    "no": "283",
    "code": "1F937 1F3FE",
    "char": "ðŸ¤·ðŸ¾",
    "name": "person shrugging, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "doubt | ignorance | indifference | shrug | type-5"
  },
  {
    "no": "284",
    "code": "1F937 1F3FF",
    "char": "ðŸ¤·ðŸ¿",
    "name": "person shrugging, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "doubt | ignorance | indifference | shrug | type-6"
  },
  {
    "no": "285",
    "code": "1F486",
    "char": "ðŸ’†",
    "name": "FACE MASSAGE\nâ‰Š person getting massage",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | massage | salon"
  },
  {
    "no": "286",
    "code": "1F486 1F3FB",
    "char": "ðŸ’†ðŸ»",
    "name": "person getting massage, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "face | massage | salon | type-1-2"
  },
  {
    "no": "287",
    "code": "1F486 1F3FC",
    "char": "ðŸ’†ðŸ¼",
    "name": "person getting massage, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "face | massage | salon | type-3"
  },
  {
    "no": "288",
    "code": "1F486 1F3FD",
    "char": "ðŸ’†ðŸ½",
    "name": "person getting massage, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "face | massage | salon | type-4"
  },
  {
    "no": "289",
    "code": "1F486 1F3FE",
    "char": "ðŸ’†ðŸ¾",
    "name": "person getting massage, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "face | massage | salon | type-5"
  },
  {
    "no": "290",
    "code": "1F486 1F3FF",
    "char": "ðŸ’†ðŸ¿",
    "name": "person getting massage, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "face | massage | salon | type-6"
  },
  {
    "no": "291",
    "code": "1F487",
    "char": "ðŸ’‡",
    "name": "HAIRCUT\nâ‰Š person getting haircut",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "barber | beauty | haircut | parlor"
  },
  {
    "no": "292",
    "code": "1F487 1F3FB",
    "char": "ðŸ’‡ðŸ»",
    "name": "person getting haircut, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "barber | beauty | haircut | parlor | type-1-2"
  },
  {
    "no": "293",
    "code": "1F487 1F3FC",
    "char": "ðŸ’‡ðŸ¼",
    "name": "person getting haircut, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "barber | beauty | haircut | parlor | type-3"
  },
  {
    "no": "294",
    "code": "1F487 1F3FD",
    "char": "ðŸ’‡ðŸ½",
    "name": "person getting haircut, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "barber | beauty | haircut | parlor | type-4"
  },
  {
    "no": "295",
    "code": "1F487 1F3FE",
    "char": "ðŸ’‡ðŸ¾",
    "name": "person getting haircut, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "barber | beauty | haircut | parlor | type-5"
  },
  {
    "no": "296",
    "code": "1F487 1F3FF",
    "char": "ðŸ’‡ðŸ¿",
    "name": "person getting haircut, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "barber | beauty | haircut | parlor | type-6"
  },
  {
    "no": "297",
    "code": "1F6B6",
    "char": "ðŸš¶",
    "name": "PEDESTRIAN\nâ‰Š person walking",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "hike | walk | walking"
  },
  {
    "no": "298",
    "code": "1F6B6 1F3FB",
    "char": "ðŸš¶ðŸ»",
    "name": "person walking, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hike | type-1-2 | walk | walking"
  },
  {
    "no": "299",
    "code": "1F6B6 1F3FC",
    "char": "ðŸš¶ðŸ¼",
    "name": "person walking, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hike | type-3 | walk | walking"
  },
  {
    "no": "300",
    "code": "1F6B6 1F3FD",
    "char": "ðŸš¶ðŸ½",
    "name": "person walking, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hike | type-4 | walk | walking"
  },
  {
    "no": "301",
    "code": "1F6B6 1F3FE",
    "char": "ðŸš¶ðŸ¾",
    "name": "person walking, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hike | type-5 | walk | walking"
  },
  {
    "no": "302",
    "code": "1F6B6 1F3FF",
    "char": "ðŸš¶ðŸ¿",
    "name": "person walking, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "hike | type-6 | walk | walking"
  },
  {
    "no": "303",
    "code": "1F3C3",
    "char": "ðŸƒ",
    "name": "RUNNER\nâ‰Š person running",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "marathon | running"
  },
  {
    "no": "304",
    "code": "1F3C3 1F3FB",
    "char": "ðŸƒðŸ»",
    "name": "person running, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "marathon | running | type-1-2"
  },
  {
    "no": "305",
    "code": "1F3C3 1F3FC",
    "char": "ðŸƒðŸ¼",
    "name": "person running, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "marathon | running | type-3"
  },
  {
    "no": "306",
    "code": "1F3C3 1F3FD",
    "char": "ðŸƒðŸ½",
    "name": "person running, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "marathon | running | type-4"
  },
  {
    "no": "307",
    "code": "1F3C3 1F3FE",
    "char": "ðŸƒðŸ¾",
    "name": "person running, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "marathon | running | type-5"
  },
  {
    "no": "308",
    "code": "1F3C3 1F3FF",
    "char": "ðŸƒðŸ¿",
    "name": "person running, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "marathon | running | type-6"
  },
  {
    "no": "309",
    "code": "1F483",
    "char": "ðŸ’ƒ",
    "name": "DANCER\nâ‰Š woman dancing",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dancing | woman"
  },
  {
    "no": "310",
    "code": "1F483 1F3FB",
    "char": "ðŸ’ƒðŸ»",
    "name": "woman dancing, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "dancing | type-1-2 | woman"
  },
  {
    "no": "311",
    "code": "1F483 1F3FC",
    "char": "ðŸ’ƒðŸ¼",
    "name": "woman dancing, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "dancing | type-3 | woman"
  },
  {
    "no": "312",
    "code": "1F483 1F3FD",
    "char": "ðŸ’ƒðŸ½",
    "name": "woman dancing, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "dancing | type-4 | woman"
  },
  {
    "no": "313",
    "code": "1F483 1F3FE",
    "char": "ðŸ’ƒðŸ¾",
    "name": "woman dancing, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "dancing | type-5 | woman"
  },
  {
    "no": "314",
    "code": "1F483 1F3FF",
    "char": "ðŸ’ƒðŸ¿",
    "name": "woman dancing, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "dancing | type-6 | woman"
  },
  {
    "no": "315",
    "code": "1F57A",
    "char": "ðŸ•º",
    "name": "MAN DANCING",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "dance | man"
  },
  {
    "no": "316",
    "code": "1F57A 1F3FB",
    "char": "ðŸ•ºðŸ»",
    "name": "man dancing, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "dance | man | type-1-2"
  },
  {
    "no": "317",
    "code": "1F57A 1F3FC",
    "char": "ðŸ•ºðŸ¼",
    "name": "man dancing, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "dance | man | type-3"
  },
  {
    "no": "318",
    "code": "1F57A 1F3FD",
    "char": "ðŸ•ºðŸ½",
    "name": "man dancing, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "dance | man | type-4"
  },
  {
    "no": "319",
    "code": "1F57A 1F3FE",
    "char": "ðŸ•ºðŸ¾",
    "name": "man dancing, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "dance | man | type-5"
  },
  {
    "no": "320",
    "code": "1F57A 1F3FF",
    "char": "ðŸ•ºðŸ¿",
    "name": "man dancing, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "dance | man | type-6"
  },
  {
    "no": "321",
    "code": "1F46F",
    "char": "ðŸ‘¯",
    "name": "WOMAN WITH BUNNY EARS\nâ‰Š people partying",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bunny | dancer | ear | girl | woman"
  },
  {
    "no": "322",
    "code": "1F574",
    "char": "ðŸ•´",
    "name": "MAN IN BUSINESS SUIT LEVITATING",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "business | man | suit"
  },
  {
    "no": "323",
    "code": "1F5E3",
    "char": "ðŸ—£",
    "name": "SPEAKING HEAD IN SILHOUETTE\nâ‰Š speaking head",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "face | head | silhouette | speak | speaking"
  },
  {
    "no": "324",
    "code": "1F464",
    "char": "ðŸ‘¤",
    "name": "BUST IN SILHOUETTE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bust | silhouette"
  },
  {
    "no": "325",
    "code": "1F465",
    "char": "ðŸ‘¥",
    "name": "BUSTS IN SILHOUETTE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bust | silhouette"
  },
  {
    "no": "326",
    "code": "1F46B",
    "char": "ðŸ‘«",
    "name": "MAN AND WOMAN HOLDING HANDS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "couple | hand | hold | man | woman"
  },
  {
    "no": "327",
    "code": "1F46C",
    "char": "ðŸ‘¬",
    "name": "TWO MEN HOLDING HANDS",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "couple | gemini | hand | hold | man | twins | zodiac"
  },
  {
    "no": "328",
    "code": "1F46D",
    "char": "ðŸ‘­",
    "name": "TWO WOMEN HOLDING HANDS",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "couple | hand | hold | woman"
  },
  {
    "no": "329",
    "code": "1F48F",
    "char": "ðŸ’",
    "name": "KISS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "couple"
  },
  {
    "no": "330",
    "code": "1F469 200D 2764 FE0F 200D 1F48B 200D 1F468",
    "char": "ðŸ‘©â€â¤ï¸â€ðŸ’‹â€ðŸ‘¨",
    "name": "kiss, woman, man",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "couple | female | male | man | woman"
  },
  {
    "no": "331",
    "code": "1F468 200D 2764 FE0F 200D 1F48B 200D 1F468",
    "char": "ðŸ‘¨â€â¤ï¸â€ðŸ’‹â€ðŸ‘¨",
    "name": "kiss, man, man",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "couple | male | man"
  },
  {
    "no": "332",
    "code": "1F469 200D 2764 FE0F 200D 1F48B 200D 1F469",
    "char": "ðŸ‘©â€â¤ï¸â€ðŸ’‹â€ðŸ‘©",
    "name": "kiss, woman, woman",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "couple | female | woman"
  },
  {
    "no": "333",
    "code": "1F491",
    "char": "ðŸ’‘",
    "name": "COUPLE WITH HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "couple | heart | love"
  },
  {
    "no": "334",
    "code": "1F469 200D 2764 FE0F 200D 1F468",
    "char": "ðŸ‘©â€â¤ï¸â€ðŸ‘¨",
    "name": "couple with heart, woman, man",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "couple | female | heart | love | male | man | woman"
  },
  {
    "no": "335",
    "code": "1F468 200D 2764 FE0F 200D 1F468",
    "char": "ðŸ‘¨â€â¤ï¸â€ðŸ‘¨",
    "name": "couple with heart, man, man",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "couple | heart | love | male | man"
  },
  {
    "no": "336",
    "code": "1F469 200D 2764 FE0F 200D 1F469",
    "char": "ðŸ‘©â€â¤ï¸â€ðŸ‘©",
    "name": "couple with heart, woman, woman",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "couple | female | heart | love | woman"
  },
  {
    "no": "337",
    "code": "1F46A",
    "char": "ðŸ‘ª",
    "name": "FAMILY",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "child | father | mother"
  },
  {
    "no": "338",
    "code": "1F468 200D 1F469 200D 1F466",
    "char": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘¦",
    "name": "family, man, woman, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | female | male | man | mother | woman"
  },
  {
    "no": "339",
    "code": "1F468 200D 1F469 200D 1F467",
    "char": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§",
    "name": "family, man, woman, girl",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "child | father | female | maiden | male | man | mother | virgin | virgo | woman | zodiac"
  },
  {
    "no": "340",
    "code": "1F468 200D 1F469 200D 1F467 200D 1F466",
    "char": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦",
    "name": "family, man, woman, girl, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | female | maiden | male | man | mother | virgin | virgo | woman | zodiac"
  },
  {
    "no": "341",
    "code": "1F468 200D 1F469 200D 1F466 200D 1F466",
    "char": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘¦â€ðŸ‘¦",
    "name": "family, man, woman, boy, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | female | male | man | mother | woman"
  },
  {
    "no": "342",
    "code": "1F468 200D 1F469 200D 1F467 200D 1F467",
    "char": "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘§",
    "name": "family, man, woman, girl, girl",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "child | father | female | maiden | male | man | mother | virgin | virgo | woman | zodiac"
  },
  {
    "no": "343",
    "code": "1F468 200D 1F468 200D 1F466",
    "char": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘¦",
    "name": "family, man, man, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | male | man | mother"
  },
  {
    "no": "344",
    "code": "1F468 200D 1F468 200D 1F467",
    "char": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘§",
    "name": "family, man, man, girl",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "child | father | female | maiden | male | man | mother | virgin | virgo | zodiac"
  },
  {
    "no": "345",
    "code": "1F468 200D 1F468 200D 1F467 200D 1F466",
    "char": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘§â€ðŸ‘¦",
    "name": "family, man, man, girl, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | female | maiden | male | man | mother | virgin | virgo | zodiac"
  },
  {
    "no": "346",
    "code": "1F468 200D 1F468 200D 1F466 200D 1F466",
    "char": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘¦â€ðŸ‘¦",
    "name": "family, man, man, boy, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | male | man | mother"
  },
  {
    "no": "347",
    "code": "1F468 200D 1F468 200D 1F467 200D 1F467",
    "char": "ðŸ‘¨â€ðŸ‘¨â€ðŸ‘§â€ðŸ‘§",
    "name": "family, man, man, girl, girl",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "child | father | female | maiden | male | man | mother | virgin | virgo | zodiac"
  },
  {
    "no": "348",
    "code": "1F469 200D 1F469 200D 1F466",
    "char": "ðŸ‘©â€ðŸ‘©â€ðŸ‘¦",
    "name": "family, woman, woman, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | female | male | mother | woman"
  },
  {
    "no": "349",
    "code": "1F469 200D 1F469 200D 1F467",
    "char": "ðŸ‘©â€ðŸ‘©â€ðŸ‘§",
    "name": "family, woman, woman, girl",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "child | father | female | maiden | mother | virgin | virgo | woman | zodiac"
  },
  {
    "no": "350",
    "code": "1F469 200D 1F469 200D 1F467 200D 1F466",
    "char": "ðŸ‘©â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦",
    "name": "family, woman, woman, girl, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | female | maiden | male | mother | virgin | virgo | woman | zodiac"
  },
  {
    "no": "351",
    "code": "1F469 200D 1F469 200D 1F466 200D 1F466",
    "char": "ðŸ‘©â€ðŸ‘©â€ðŸ‘¦â€ðŸ‘¦",
    "name": "family, woman, woman, boy, boy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "boy | child | father | female | male | mother | woman"
  },
  {
    "no": "352",
    "code": "1F469 200D 1F469 200D 1F467 200D 1F467",
    "char": "ðŸ‘©â€ðŸ‘©â€ðŸ‘§â€ðŸ‘§",
    "name": "family, woman, woman, girl, girl",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "child | father | female | maiden | mother | virgin | virgo | woman | zodiac"
  },
  {
    "no": "353",
    "code": "1F3FB",
    "char": "ðŸ»",
    "name": "EMOJI MODIFIER FITZPATRICK TYPE-1-2\nâ‰Š type-1-2",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "emoji modifier | fitzpatrick | skin | tone"
  },
  {
    "no": "354",
    "code": "1F3FC",
    "char": "ðŸ¼",
    "name": "EMOJI MODIFIER FITZPATRICK TYPE-3\nâ‰Š type-3",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "emoji modifier | fitzpatrick | skin | tone"
  },
  {
    "no": "355",
    "code": "1F3FD",
    "char": "ðŸ½",
    "name": "EMOJI MODIFIER FITZPATRICK TYPE-4\nâ‰Š type-4",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "emoji modifier | fitzpatrick | skin | tone"
  },
  {
    "no": "356",
    "code": "1F3FE",
    "char": "ðŸ¾",
    "name": "EMOJI MODIFIER FITZPATRICK TYPE-5\nâ‰Š type-5",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "emoji modifier | fitzpatrick | skin | tone"
  },
  {
    "no": "357",
    "code": "1F3FF",
    "char": "ðŸ¿",
    "name": "EMOJI MODIFIER FITZPATRICK TYPE-6\nâ‰Š type-6",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "emoji modifier | fitzpatrick | skin | tone"
  },
  {
    "no": "358",
    "code": "1F4AA",
    "char": "ðŸ’ª",
    "name": "FLEXED BICEPS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "biceps | body | comic | flex | muscle"
  },
  {
    "no": "359",
    "code": "1F4AA 1F3FB",
    "char": "ðŸ’ªðŸ»",
    "name": "flexed biceps, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "biceps | body | comic | flex | muscle | type-1-2"
  },
  {
    "no": "360",
    "code": "1F4AA 1F3FC",
    "char": "ðŸ’ªðŸ¼",
    "name": "flexed biceps, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "biceps | body | comic | flex | muscle | type-3"
  },
  {
    "no": "361",
    "code": "1F4AA 1F3FD",
    "char": "ðŸ’ªðŸ½",
    "name": "flexed biceps, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "biceps | body | comic | flex | muscle | type-4"
  },
  {
    "no": "362",
    "code": "1F4AA 1F3FE",
    "char": "ðŸ’ªðŸ¾",
    "name": "flexed biceps, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "biceps | body | comic | flex | muscle | type-5"
  },
  {
    "no": "363",
    "code": "1F4AA 1F3FF",
    "char": "ðŸ’ªðŸ¿",
    "name": "flexed biceps, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "biceps | body | comic | flex | muscle | type-6"
  },
  {
    "no": "364",
    "code": "1F933",
    "char": "ðŸ¤³",
    "name": "SELFIE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "camera | phone | selfie"
  },
  {
    "no": "365",
    "code": "1F933 1F3FB",
    "char": "ðŸ¤³ðŸ»",
    "name": "selfie, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "camera | phone | selfie | type-1-2"
  },
  {
    "no": "366",
    "code": "1F933 1F3FC",
    "char": "ðŸ¤³ðŸ¼",
    "name": "selfie, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "camera | phone | selfie | type-3"
  },
  {
    "no": "367",
    "code": "1F933 1F3FD",
    "char": "ðŸ¤³ðŸ½",
    "name": "selfie, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "camera | phone | selfie | type-4"
  },
  {
    "no": "368",
    "code": "1F933 1F3FE",
    "char": "ðŸ¤³ðŸ¾",
    "name": "selfie, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "camera | phone | selfie | type-5"
  },
  {
    "no": "369",
    "code": "1F933 1F3FF",
    "char": "ðŸ¤³ðŸ¿",
    "name": "selfie, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "camera | phone | selfie | type-6"
  },
  {
    "no": "370",
    "code": "1F448",
    "char": "ðŸ‘ˆ",
    "name": "WHITE LEFT POINTING BACKHAND INDEX\nâ‰Š backhand index pointing left",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "backhand | body | finger | hand | index | point"
  },
  {
    "no": "371",
    "code": "1F448 1F3FB",
    "char": "ðŸ‘ˆðŸ»",
    "name": "backhand index pointing left, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-1-2"
  },
  {
    "no": "372",
    "code": "1F448 1F3FC",
    "char": "ðŸ‘ˆðŸ¼",
    "name": "backhand index pointing left, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-3"
  },
  {
    "no": "373",
    "code": "1F448 1F3FD",
    "char": "ðŸ‘ˆðŸ½",
    "name": "backhand index pointing left, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-4"
  },
  {
    "no": "374",
    "code": "1F448 1F3FE",
    "char": "ðŸ‘ˆðŸ¾",
    "name": "backhand index pointing left, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-5"
  },
  {
    "no": "375",
    "code": "1F448 1F3FF",
    "char": "ðŸ‘ˆðŸ¿",
    "name": "backhand index pointing left, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-6"
  },
  {
    "no": "376",
    "code": "1F449",
    "char": "ðŸ‘‰",
    "name": "WHITE RIGHT POINTING BACKHAND INDEX\nâ‰Š backhand index pointing right",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "backhand | body | finger | hand | index | point"
  },
  {
    "no": "377",
    "code": "1F449 1F3FB",
    "char": "ðŸ‘‰ðŸ»",
    "name": "backhand index pointing right, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-1-2"
  },
  {
    "no": "378",
    "code": "1F449 1F3FC",
    "char": "ðŸ‘‰ðŸ¼",
    "name": "backhand index pointing right, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-3"
  },
  {
    "no": "379",
    "code": "1F449 1F3FD",
    "char": "ðŸ‘‰ðŸ½",
    "name": "backhand index pointing right, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-4"
  },
  {
    "no": "380",
    "code": "1F449 1F3FE",
    "char": "ðŸ‘‰ðŸ¾",
    "name": "backhand index pointing right, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-5"
  },
  {
    "no": "381",
    "code": "1F449 1F3FF",
    "char": "ðŸ‘‰ðŸ¿",
    "name": "backhand index pointing right, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-6"
  },
  {
    "no": "382",
    "code": "261D",
    "char": "â˜",
    "name": "WHITE UP POINTING INDEX\nâ‰Š index pointing up",
    "date": "1995Ê²Ê·",
    "default": "text*",
    "keywords": "body | finger | hand | index | point | up"
  },
  {
    "no": "383",
    "code": "261D 1F3FB",
    "char": "â˜ðŸ»",
    "name": "index pointing up, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | index | point | type-1-2 | up"
  },
  {
    "no": "384",
    "code": "261D 1F3FC",
    "char": "â˜ðŸ¼",
    "name": "index pointing up, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | index | point | type-3 | up"
  },
  {
    "no": "385",
    "code": "261D 1F3FD",
    "char": "â˜ðŸ½",
    "name": "index pointing up, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | index | point | type-4 | up"
  },
  {
    "no": "386",
    "code": "261D 1F3FE",
    "char": "â˜ðŸ¾",
    "name": "index pointing up, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | index | point | type-5 | up"
  },
  {
    "no": "387",
    "code": "261D 1F3FF",
    "char": "â˜ðŸ¿",
    "name": "index pointing up, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | index | point | type-6 | up"
  },
  {
    "no": "388",
    "code": "1F446",
    "char": "ðŸ‘†",
    "name": "WHITE UP POINTING BACKHAND INDEX\nâ‰Š backhand index pointing up",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "backhand | body | finger | hand | index | point | up"
  },
  {
    "no": "389",
    "code": "1F446 1F3FB",
    "char": "ðŸ‘†ðŸ»",
    "name": "backhand index pointing up, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-1-2 | up"
  },
  {
    "no": "390",
    "code": "1F446 1F3FC",
    "char": "ðŸ‘†ðŸ¼",
    "name": "backhand index pointing up, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-3 | up"
  },
  {
    "no": "391",
    "code": "1F446 1F3FD",
    "char": "ðŸ‘†ðŸ½",
    "name": "backhand index pointing up, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-4 | up"
  },
  {
    "no": "392",
    "code": "1F446 1F3FE",
    "char": "ðŸ‘†ðŸ¾",
    "name": "backhand index pointing up, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-5 | up"
  },
  {
    "no": "393",
    "code": "1F446 1F3FF",
    "char": "ðŸ‘†ðŸ¿",
    "name": "backhand index pointing up, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | finger | hand | index | point | type-6 | up"
  },
  {
    "no": "394",
    "code": "1F595",
    "char": "ðŸ–•",
    "name": "REVERSED HAND WITH MIDDLE FINGER EXTENDED\nâ‰Š middle finger",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "body | finger | hand"
  },
  {
    "no": "395",
    "code": "1F595 1F3FB",
    "char": "ðŸ–•ðŸ»",
    "name": "middle finger, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | type-1-2"
  },
  {
    "no": "396",
    "code": "1F595 1F3FC",
    "char": "ðŸ–•ðŸ¼",
    "name": "middle finger, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | type-3"
  },
  {
    "no": "397",
    "code": "1F595 1F3FD",
    "char": "ðŸ–•ðŸ½",
    "name": "middle finger, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | type-4"
  },
  {
    "no": "398",
    "code": "1F595 1F3FE",
    "char": "ðŸ–•ðŸ¾",
    "name": "middle finger, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | type-5"
  },
  {
    "no": "399",
    "code": "1F595 1F3FF",
    "char": "ðŸ–•ðŸ¿",
    "name": "middle finger, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | type-6"
  },
  {
    "no": "400",
    "code": "1F447",
    "char": "ðŸ‘‡",
    "name": "WHITE DOWN POINTING BACKHAND INDEX\nâ‰Š backhand index pointing down",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "backhand | body | down | finger | hand | index | point"
  },
  {
    "no": "401",
    "code": "1F447 1F3FB",
    "char": "ðŸ‘‡ðŸ»",
    "name": "backhand index pointing down, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | down | finger | hand | index | point | type-1-2"
  },
  {
    "no": "402",
    "code": "1F447 1F3FC",
    "char": "ðŸ‘‡ðŸ¼",
    "name": "backhand index pointing down, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | down | finger | hand | index | point | type-3"
  },
  {
    "no": "403",
    "code": "1F447 1F3FD",
    "char": "ðŸ‘‡ðŸ½",
    "name": "backhand index pointing down, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | down | finger | hand | index | point | type-4"
  },
  {
    "no": "404",
    "code": "1F447 1F3FE",
    "char": "ðŸ‘‡ðŸ¾",
    "name": "backhand index pointing down, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | down | finger | hand | index | point | type-5"
  },
  {
    "no": "405",
    "code": "1F447 1F3FF",
    "char": "ðŸ‘‡ðŸ¿",
    "name": "backhand index pointing down, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "backhand | body | down | finger | hand | index | point | type-6"
  },
  {
    "no": "406",
    "code": "270C",
    "char": "âœŒ",
    "name": "VICTORY HAND",
    "date": "1995á¶»Ê²Ê·",
    "default": "text*",
    "keywords": "body | hand | v | victory"
  },
  {
    "no": "407",
    "code": "270C 1F3FB",
    "char": "âœŒðŸ»",
    "name": "victory hand, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-1-2 | v | victory"
  },
  {
    "no": "408",
    "code": "270C 1F3FC",
    "char": "âœŒðŸ¼",
    "name": "victory hand, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-3 | v | victory"
  },
  {
    "no": "409",
    "code": "270C 1F3FD",
    "char": "âœŒðŸ½",
    "name": "victory hand, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-4 | v | victory"
  },
  {
    "no": "410",
    "code": "270C 1F3FE",
    "char": "âœŒðŸ¾",
    "name": "victory hand, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-5 | v | victory"
  },
  {
    "no": "411",
    "code": "270C 1F3FF",
    "char": "âœŒðŸ¿",
    "name": "victory hand, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-6 | v | victory"
  },
  {
    "no": "412",
    "code": "1F91E",
    "char": "ðŸ¤ž",
    "name": "HAND WITH INDEX AND MIDDLE FINGERS CROSSED\nâ‰Š crossed fingers",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "cross | finger | hand | luck"
  },
  {
    "no": "413",
    "code": "1F91E 1F3FB",
    "char": "ðŸ¤žðŸ»",
    "name": "crossed fingers, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cross | finger | hand | luck | type-1-2"
  },
  {
    "no": "414",
    "code": "1F91E 1F3FC",
    "char": "ðŸ¤žðŸ¼",
    "name": "crossed fingers, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cross | finger | hand | luck | type-3"
  },
  {
    "no": "415",
    "code": "1F91E 1F3FD",
    "char": "ðŸ¤žðŸ½",
    "name": "crossed fingers, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cross | finger | hand | luck | type-4"
  },
  {
    "no": "416",
    "code": "1F91E 1F3FE",
    "char": "ðŸ¤žðŸ¾",
    "name": "crossed fingers, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cross | finger | hand | luck | type-5"
  },
  {
    "no": "417",
    "code": "1F91E 1F3FF",
    "char": "ðŸ¤žðŸ¿",
    "name": "crossed fingers, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cross | finger | hand | luck | type-6"
  },
  {
    "no": "418",
    "code": "1F596",
    "char": "ðŸ––",
    "name": "RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS\nâ‰Š vulcan salute",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "body | finger | hand | spock | vulcan"
  },
  {
    "no": "419",
    "code": "1F596 1F3FB",
    "char": "ðŸ––ðŸ»",
    "name": "vulcan salute, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | spock | type-1-2 | vulcan"
  },
  {
    "no": "420",
    "code": "1F596 1F3FC",
    "char": "ðŸ––ðŸ¼",
    "name": "vulcan salute, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | spock | type-3 | vulcan"
  },
  {
    "no": "421",
    "code": "1F596 1F3FD",
    "char": "ðŸ––ðŸ½",
    "name": "vulcan salute, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | spock | type-4 | vulcan"
  },
  {
    "no": "422",
    "code": "1F596 1F3FE",
    "char": "ðŸ––ðŸ¾",
    "name": "vulcan salute, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | spock | type-5 | vulcan"
  },
  {
    "no": "423",
    "code": "1F596 1F3FF",
    "char": "ðŸ––ðŸ¿",
    "name": "vulcan salute, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | spock | type-6 | vulcan"
  },
  {
    "no": "424",
    "code": "1F918",
    "char": "ðŸ¤˜",
    "name": "SIGN OF THE HORNS",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "body | finger | hand | horns | rock-on"
  },
  {
    "no": "425",
    "code": "1F918 1F3FB",
    "char": "ðŸ¤˜ðŸ»",
    "name": "sign of the horns, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | horns | rock-on | type-1-2"
  },
  {
    "no": "426",
    "code": "1F918 1F3FC",
    "char": "ðŸ¤˜ðŸ¼",
    "name": "sign of the horns, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | horns | rock-on | type-3"
  },
  {
    "no": "427",
    "code": "1F918 1F3FD",
    "char": "ðŸ¤˜ðŸ½",
    "name": "sign of the horns, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | horns | rock-on | type-4"
  },
  {
    "no": "428",
    "code": "1F918 1F3FE",
    "char": "ðŸ¤˜ðŸ¾",
    "name": "sign of the horns, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | horns | rock-on | type-5"
  },
  {
    "no": "429",
    "code": "1F918 1F3FF",
    "char": "ðŸ¤˜ðŸ¿",
    "name": "sign of the horns, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | horns | rock-on | type-6"
  },
  {
    "no": "430",
    "code": "1F919",
    "char": "ðŸ¤™",
    "name": "CALL ME HAND",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "call | hand"
  },
  {
    "no": "431",
    "code": "1F919 1F3FB",
    "char": "ðŸ¤™ðŸ»",
    "name": "call me hand, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "call | hand | type-1-2"
  },
  {
    "no": "432",
    "code": "1F919 1F3FC",
    "char": "ðŸ¤™ðŸ¼",
    "name": "call me hand, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "call | hand | type-3"
  },
  {
    "no": "433",
    "code": "1F919 1F3FD",
    "char": "ðŸ¤™ðŸ½",
    "name": "call me hand, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "call | hand | type-4"
  },
  {
    "no": "434",
    "code": "1F919 1F3FE",
    "char": "ðŸ¤™ðŸ¾",
    "name": "call me hand, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "call | hand | type-5"
  },
  {
    "no": "435",
    "code": "1F919 1F3FF",
    "char": "ðŸ¤™ðŸ¿",
    "name": "call me hand, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "call | hand | type-6"
  },
  {
    "no": "436",
    "code": "1F590",
    "char": "ðŸ–",
    "name": "RAISED HAND WITH FINGERS SPLAYED",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "body | finger | hand | splayed"
  },
  {
    "no": "437",
    "code": "1F590 1F3FB",
    "char": "ðŸ–ðŸ»",
    "name": "raised hand with fingers splayed, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | splayed | type-1-2"
  },
  {
    "no": "438",
    "code": "1F590 1F3FC",
    "char": "ðŸ–ðŸ¼",
    "name": "raised hand with fingers splayed, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | splayed | type-3"
  },
  {
    "no": "439",
    "code": "1F590 1F3FD",
    "char": "ðŸ–ðŸ½",
    "name": "raised hand with fingers splayed, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | splayed | type-4"
  },
  {
    "no": "440",
    "code": "1F590 1F3FE",
    "char": "ðŸ–ðŸ¾",
    "name": "raised hand with fingers splayed, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | splayed | type-5"
  },
  {
    "no": "441",
    "code": "1F590 1F3FF",
    "char": "ðŸ–ðŸ¿",
    "name": "raised hand with fingers splayed, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | finger | hand | splayed | type-6"
  },
  {
    "no": "442",
    "code": "270B",
    "char": "âœ‹",
    "name": "RAISED HAND",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | hand"
  },
  {
    "no": "443",
    "code": "270B 1F3FB",
    "char": "âœ‹ðŸ»",
    "name": "raised hand, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-1-2"
  },
  {
    "no": "444",
    "code": "270B 1F3FC",
    "char": "âœ‹ðŸ¼",
    "name": "raised hand, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-3"
  },
  {
    "no": "445",
    "code": "270B 1F3FD",
    "char": "âœ‹ðŸ½",
    "name": "raised hand, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-4"
  },
  {
    "no": "446",
    "code": "270B 1F3FE",
    "char": "âœ‹ðŸ¾",
    "name": "raised hand, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-5"
  },
  {
    "no": "447",
    "code": "270B 1F3FF",
    "char": "âœ‹ðŸ¿",
    "name": "raised hand, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-6"
  },
  {
    "no": "448",
    "code": "1F44C",
    "char": "ðŸ‘Œ",
    "name": "OK HAND SIGN\nâ‰Š ok hand",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | hand | ok"
  },
  {
    "no": "449",
    "code": "1F44C 1F3FB",
    "char": "ðŸ‘ŒðŸ»",
    "name": "ok hand, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | ok | type-1-2"
  },
  {
    "no": "450",
    "code": "1F44C 1F3FC",
    "char": "ðŸ‘ŒðŸ¼",
    "name": "ok hand, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | ok | type-3"
  },
  {
    "no": "451",
    "code": "1F44C 1F3FD",
    "char": "ðŸ‘ŒðŸ½",
    "name": "ok hand, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | ok | type-4"
  },
  {
    "no": "452",
    "code": "1F44C 1F3FE",
    "char": "ðŸ‘ŒðŸ¾",
    "name": "ok hand, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | ok | type-5"
  },
  {
    "no": "453",
    "code": "1F44C 1F3FF",
    "char": "ðŸ‘ŒðŸ¿",
    "name": "ok hand, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | ok | type-6"
  },
  {
    "no": "454",
    "code": "1F44D",
    "char": "ðŸ‘",
    "name": "THUMBS UP SIGN\nâ‰Š thumbs up",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "+1 | body | hand | thumb | up"
  },
  {
    "no": "455",
    "code": "1F44D 1F3FB",
    "char": "ðŸ‘ðŸ»",
    "name": "thumbs up, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "+1 | body | hand | thumb | type-1-2 | up"
  },
  {
    "no": "456",
    "code": "1F44D 1F3FC",
    "char": "ðŸ‘ðŸ¼",
    "name": "thumbs up, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "+1 | body | hand | thumb | type-3 | up"
  },
  {
    "no": "457",
    "code": "1F44D 1F3FD",
    "char": "ðŸ‘ðŸ½",
    "name": "thumbs up, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "+1 | body | hand | thumb | type-4 | up"
  },
  {
    "no": "458",
    "code": "1F44D 1F3FE",
    "char": "ðŸ‘ðŸ¾",
    "name": "thumbs up, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "+1 | body | hand | thumb | type-5 | up"
  },
  {
    "no": "459",
    "code": "1F44D 1F3FF",
    "char": "ðŸ‘ðŸ¿",
    "name": "thumbs up, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "+1 | body | hand | thumb | type-6 | up"
  },
  {
    "no": "460",
    "code": "1F44E",
    "char": "ðŸ‘Ž",
    "name": "THUMBS DOWN SIGN\nâ‰Š thumbs down",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "-1 | body | down | hand | thumb"
  },
  {
    "no": "461",
    "code": "1F44E 1F3FB",
    "char": "ðŸ‘ŽðŸ»",
    "name": "thumbs down, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "-1 | body | down | hand | thumb | type-1-2"
  },
  {
    "no": "462",
    "code": "1F44E 1F3FC",
    "char": "ðŸ‘ŽðŸ¼",
    "name": "thumbs down, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "-1 | body | down | hand | thumb | type-3"
  },
  {
    "no": "463",
    "code": "1F44E 1F3FD",
    "char": "ðŸ‘ŽðŸ½",
    "name": "thumbs down, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "-1 | body | down | hand | thumb | type-4"
  },
  {
    "no": "464",
    "code": "1F44E 1F3FE",
    "char": "ðŸ‘ŽðŸ¾",
    "name": "thumbs down, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "-1 | body | down | hand | thumb | type-5"
  },
  {
    "no": "465",
    "code": "1F44E 1F3FF",
    "char": "ðŸ‘ŽðŸ¿",
    "name": "thumbs down, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "-1 | body | down | hand | thumb | type-6"
  },
  {
    "no": "466",
    "code": "270A",
    "char": "âœŠ",
    "name": "RAISED FIST",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | clenched | fist | hand | punch"
  },
  {
    "no": "467",
    "code": "270A 1F3FB",
    "char": "âœŠðŸ»",
    "name": "raised fist, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-1-2"
  },
  {
    "no": "468",
    "code": "270A 1F3FC",
    "char": "âœŠðŸ¼",
    "name": "raised fist, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-3"
  },
  {
    "no": "469",
    "code": "270A 1F3FD",
    "char": "âœŠðŸ½",
    "name": "raised fist, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-4"
  },
  {
    "no": "470",
    "code": "270A 1F3FE",
    "char": "âœŠðŸ¾",
    "name": "raised fist, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-5"
  },
  {
    "no": "471",
    "code": "270A 1F3FF",
    "char": "âœŠðŸ¿",
    "name": "raised fist, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-6"
  },
  {
    "no": "472",
    "code": "1F44A",
    "char": "ðŸ‘Š",
    "name": "FISTED HAND SIGN\nâ‰Š oncoming fist",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | clenched | fist | hand | punch"
  },
  {
    "no": "473",
    "code": "1F44A 1F3FB",
    "char": "ðŸ‘ŠðŸ»",
    "name": "oncoming fist, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-1-2"
  },
  {
    "no": "474",
    "code": "1F44A 1F3FC",
    "char": "ðŸ‘ŠðŸ¼",
    "name": "oncoming fist, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-3"
  },
  {
    "no": "475",
    "code": "1F44A 1F3FD",
    "char": "ðŸ‘ŠðŸ½",
    "name": "oncoming fist, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-4"
  },
  {
    "no": "476",
    "code": "1F44A 1F3FE",
    "char": "ðŸ‘ŠðŸ¾",
    "name": "oncoming fist, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-5"
  },
  {
    "no": "477",
    "code": "1F44A 1F3FF",
    "char": "ðŸ‘ŠðŸ¿",
    "name": "oncoming fist, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clenched | fist | hand | punch | type-6"
  },
  {
    "no": "478",
    "code": "1F91B",
    "char": "ðŸ¤›",
    "name": "LEFT-FACING FIST",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "fist | leftwards"
  },
  {
    "no": "479",
    "code": "1F91B 1F3FB",
    "char": "ðŸ¤›ðŸ»",
    "name": "left-facing fist, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | leftwards | type-1-2"
  },
  {
    "no": "480",
    "code": "1F91B 1F3FC",
    "char": "ðŸ¤›ðŸ¼",
    "name": "left-facing fist, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | leftwards | type-3"
  },
  {
    "no": "481",
    "code": "1F91B 1F3FD",
    "char": "ðŸ¤›ðŸ½",
    "name": "left-facing fist, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | leftwards | type-4"
  },
  {
    "no": "482",
    "code": "1F91B 1F3FE",
    "char": "ðŸ¤›ðŸ¾",
    "name": "left-facing fist, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | leftwards | type-5"
  },
  {
    "no": "483",
    "code": "1F91B 1F3FF",
    "char": "ðŸ¤›ðŸ¿",
    "name": "left-facing fist, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | leftwards | type-6"
  },
  {
    "no": "484",
    "code": "1F91C",
    "char": "ðŸ¤œ",
    "name": "RIGHT-FACING FIST",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "fist | rightwards"
  },
  {
    "no": "485",
    "code": "1F91C 1F3FB",
    "char": "ðŸ¤œðŸ»",
    "name": "right-facing fist, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | rightwards | type-1-2"
  },
  {
    "no": "486",
    "code": "1F91C 1F3FC",
    "char": "ðŸ¤œðŸ¼",
    "name": "right-facing fist, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | rightwards | type-3"
  },
  {
    "no": "487",
    "code": "1F91C 1F3FD",
    "char": "ðŸ¤œðŸ½",
    "name": "right-facing fist, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | rightwards | type-4"
  },
  {
    "no": "488",
    "code": "1F91C 1F3FE",
    "char": "ðŸ¤œðŸ¾",
    "name": "right-facing fist, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | rightwards | type-5"
  },
  {
    "no": "489",
    "code": "1F91C 1F3FF",
    "char": "ðŸ¤œðŸ¿",
    "name": "right-facing fist, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "fist | rightwards | type-6"
  },
  {
    "no": "490",
    "code": "1F91A",
    "char": "ðŸ¤š",
    "name": "RAISED BACK OF HAND",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "backhand | raised"
  },
  {
    "no": "491",
    "code": "1F91A 1F3FB",
    "char": "ðŸ¤šðŸ»",
    "name": "raised back of hand, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "backhand | raised | type-1-2"
  },
  {
    "no": "492",
    "code": "1F91A 1F3FC",
    "char": "ðŸ¤šðŸ¼",
    "name": "raised back of hand, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "backhand | raised | type-3"
  },
  {
    "no": "493",
    "code": "1F91A 1F3FD",
    "char": "ðŸ¤šðŸ½",
    "name": "raised back of hand, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "backhand | raised | type-4"
  },
  {
    "no": "494",
    "code": "1F91A 1F3FE",
    "char": "ðŸ¤šðŸ¾",
    "name": "raised back of hand, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "backhand | raised | type-5"
  },
  {
    "no": "495",
    "code": "1F91A 1F3FF",
    "char": "ðŸ¤šðŸ¿",
    "name": "raised back of hand, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "backhand | raised | type-6"
  },
  {
    "no": "496",
    "code": "1F44B",
    "char": "ðŸ‘‹",
    "name": "WAVING HAND SIGN\nâ‰Š waving hand",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | hand | wave | waving"
  },
  {
    "no": "497",
    "code": "1F44B 1F3FB",
    "char": "ðŸ‘‹ðŸ»",
    "name": "waving hand, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-1-2 | wave | waving"
  },
  {
    "no": "498",
    "code": "1F44B 1F3FC",
    "char": "ðŸ‘‹ðŸ¼",
    "name": "waving hand, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-3 | wave | waving"
  },
  {
    "no": "499",
    "code": "1F44B 1F3FD",
    "char": "ðŸ‘‹ðŸ½",
    "name": "waving hand, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-4 | wave | waving"
  },
  {
    "no": "500",
    "code": "1F44B 1F3FE",
    "char": "ðŸ‘‹ðŸ¾",
    "name": "waving hand, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-5 | wave | waving"
  },
  {
    "no": "501",
    "code": "1F44B 1F3FF",
    "char": "ðŸ‘‹ðŸ¿",
    "name": "waving hand, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-6 | wave | waving"
  },
  {
    "no": "502",
    "code": "1F44F",
    "char": "ðŸ‘",
    "name": "CLAPPING HANDS SIGN\nâ‰Š clapping hands",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | clap | hand"
  },
  {
    "no": "503",
    "code": "1F44F 1F3FB",
    "char": "ðŸ‘ðŸ»",
    "name": "clapping hands, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clap | hand | type-1-2"
  },
  {
    "no": "504",
    "code": "1F44F 1F3FC",
    "char": "ðŸ‘ðŸ¼",
    "name": "clapping hands, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clap | hand | type-3"
  },
  {
    "no": "505",
    "code": "1F44F 1F3FD",
    "char": "ðŸ‘ðŸ½",
    "name": "clapping hands, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clap | hand | type-4"
  },
  {
    "no": "506",
    "code": "1F44F 1F3FE",
    "char": "ðŸ‘ðŸ¾",
    "name": "clapping hands, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clap | hand | type-5"
  },
  {
    "no": "507",
    "code": "1F44F 1F3FF",
    "char": "ðŸ‘ðŸ¿",
    "name": "clapping hands, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | clap | hand | type-6"
  },
  {
    "no": "508",
    "code": "270D",
    "char": "âœ",
    "name": "WRITING HAND",
    "date": "1995á¶»Ê·",
    "default": "text*",
    "keywords": "body | hand | write"
  },
  {
    "no": "509",
    "code": "270D 1F3FB",
    "char": "âœðŸ»",
    "name": "writing hand, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-1-2 | write"
  },
  {
    "no": "510",
    "code": "270D 1F3FC",
    "char": "âœðŸ¼",
    "name": "writing hand, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-3 | write"
  },
  {
    "no": "511",
    "code": "270D 1F3FD",
    "char": "âœðŸ½",
    "name": "writing hand, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-4 | write"
  },
  {
    "no": "512",
    "code": "270D 1F3FE",
    "char": "âœðŸ¾",
    "name": "writing hand, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-5 | write"
  },
  {
    "no": "513",
    "code": "270D 1F3FF",
    "char": "âœðŸ¿",
    "name": "writing hand, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | type-6 | write"
  },
  {
    "no": "514",
    "code": "1F450",
    "char": "ðŸ‘",
    "name": "OPEN HANDS SIGN\nâ‰Š open hands",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | hand | open"
  },
  {
    "no": "515",
    "code": "1F450 1F3FB",
    "char": "ðŸ‘ðŸ»",
    "name": "open hands, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | open | type-1-2"
  },
  {
    "no": "516",
    "code": "1F450 1F3FC",
    "char": "ðŸ‘ðŸ¼",
    "name": "open hands, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | open | type-3"
  },
  {
    "no": "517",
    "code": "1F450 1F3FD",
    "char": "ðŸ‘ðŸ½",
    "name": "open hands, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | open | type-4"
  },
  {
    "no": "518",
    "code": "1F450 1F3FE",
    "char": "ðŸ‘ðŸ¾",
    "name": "open hands, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | open | type-5"
  },
  {
    "no": "519",
    "code": "1F450 1F3FF",
    "char": "ðŸ‘ðŸ¿",
    "name": "open hands, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | hand | open | type-6"
  },
  {
    "no": "520",
    "code": "1F64C",
    "char": "ðŸ™Œ",
    "name": "PERSON RAISING BOTH HANDS IN CELEBRATION\nâ‰Š person raising hands",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | celebration | gesture | hand | hooray | raised"
  },
  {
    "no": "521",
    "code": "1F64C 1F3FB",
    "char": "ðŸ™ŒðŸ»",
    "name": "person raising hands, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | celebration | gesture | hand | hooray | raised | type-1-2"
  },
  {
    "no": "522",
    "code": "1F64C 1F3FC",
    "char": "ðŸ™ŒðŸ¼",
    "name": "person raising hands, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | celebration | gesture | hand | hooray | raised | type-3"
  },
  {
    "no": "523",
    "code": "1F64C 1F3FD",
    "char": "ðŸ™ŒðŸ½",
    "name": "person raising hands, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | celebration | gesture | hand | hooray | raised | type-4"
  },
  {
    "no": "524",
    "code": "1F64C 1F3FE",
    "char": "ðŸ™ŒðŸ¾",
    "name": "person raising hands, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | celebration | gesture | hand | hooray | raised | type-5"
  },
  {
    "no": "525",
    "code": "1F64C 1F3FF",
    "char": "ðŸ™ŒðŸ¿",
    "name": "person raising hands, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | celebration | gesture | hand | hooray | raised | type-6"
  },
  {
    "no": "526",
    "code": "1F64F",
    "char": "ðŸ™",
    "name": "PERSON WITH FOLDED HANDS\nâ‰Š folded hands",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks"
  },
  {
    "no": "527",
    "code": "1F64F 1F3FB",
    "char": "ðŸ™ðŸ»",
    "name": "folded hands, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-1-2"
  },
  {
    "no": "528",
    "code": "1F64F 1F3FC",
    "char": "ðŸ™ðŸ¼",
    "name": "folded hands, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-3"
  },
  {
    "no": "529",
    "code": "1F64F 1F3FD",
    "char": "ðŸ™ðŸ½",
    "name": "folded hands, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-4"
  },
  {
    "no": "530",
    "code": "1F64F 1F3FE",
    "char": "ðŸ™ðŸ¾",
    "name": "folded hands, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-5"
  },
  {
    "no": "531",
    "code": "1F64F 1F3FF",
    "char": "ðŸ™ðŸ¿",
    "name": "folded hands, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ask | body | bow | folded | gesture | hand | please | pray | thanks | type-6"
  },
  {
    "no": "532",
    "code": "1F91D",
    "char": "ðŸ¤",
    "name": "HANDSHAKE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "agreement | hand | handshake | meeting | shake"
  },
  {
    "no": "533",
    "code": "1F91D 1F3FB",
    "char": "ðŸ¤ðŸ»",
    "name": "handshake, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "agreement | hand | handshake | meeting | shake | type-1-2"
  },
  {
    "no": "534",
    "code": "1F91D 1F3FC",
    "char": "ðŸ¤ðŸ¼",
    "name": "handshake, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "agreement | hand | handshake | meeting | shake | type-3"
  },
  {
    "no": "535",
    "code": "1F91D 1F3FD",
    "char": "ðŸ¤ðŸ½",
    "name": "handshake, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "agreement | hand | handshake | meeting | shake | type-4"
  },
  {
    "no": "536",
    "code": "1F91D 1F3FE",
    "char": "ðŸ¤ðŸ¾",
    "name": "handshake, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "agreement | hand | handshake | meeting | shake | type-5"
  },
  {
    "no": "537",
    "code": "1F91D 1F3FF",
    "char": "ðŸ¤ðŸ¿",
    "name": "handshake, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "agreement | hand | handshake | meeting | shake | type-6"
  },
  {
    "no": "538",
    "code": "1F485",
    "char": "ðŸ’…",
    "name": "NAIL POLISH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | care | cosmetics | manicure | nail | polish"
  },
  {
    "no": "539",
    "code": "1F485 1F3FB",
    "char": "ðŸ’…ðŸ»",
    "name": "nail polish, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | care | cosmetics | manicure | nail | polish | type-1-2"
  },
  {
    "no": "540",
    "code": "1F485 1F3FC",
    "char": "ðŸ’…ðŸ¼",
    "name": "nail polish, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | care | cosmetics | manicure | nail | polish | type-3"
  },
  {
    "no": "541",
    "code": "1F485 1F3FD",
    "char": "ðŸ’…ðŸ½",
    "name": "nail polish, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | care | cosmetics | manicure | nail | polish | type-4"
  },
  {
    "no": "542",
    "code": "1F485 1F3FE",
    "char": "ðŸ’…ðŸ¾",
    "name": "nail polish, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | care | cosmetics | manicure | nail | polish | type-5"
  },
  {
    "no": "543",
    "code": "1F485 1F3FF",
    "char": "ðŸ’…ðŸ¿",
    "name": "nail polish, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | care | cosmetics | manicure | nail | polish | type-6"
  },
  {
    "no": "544",
    "code": "1F442",
    "char": "ðŸ‘‚",
    "name": "EAR",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "body"
  },
  {
    "no": "545",
    "code": "1F442 1F3FB",
    "char": "ðŸ‘‚ðŸ»",
    "name": "ear, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-1-2"
  },
  {
    "no": "546",
    "code": "1F442 1F3FC",
    "char": "ðŸ‘‚ðŸ¼",
    "name": "ear, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-3"
  },
  {
    "no": "547",
    "code": "1F442 1F3FD",
    "char": "ðŸ‘‚ðŸ½",
    "name": "ear, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-4"
  },
  {
    "no": "548",
    "code": "1F442 1F3FE",
    "char": "ðŸ‘‚ðŸ¾",
    "name": "ear, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-5"
  },
  {
    "no": "549",
    "code": "1F442 1F3FF",
    "char": "ðŸ‘‚ðŸ¿",
    "name": "ear, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-6"
  },
  {
    "no": "550",
    "code": "1F443",
    "char": "ðŸ‘ƒ",
    "name": "NOSE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body"
  },
  {
    "no": "551",
    "code": "1F443 1F3FB",
    "char": "ðŸ‘ƒðŸ»",
    "name": "nose, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-1-2"
  },
  {
    "no": "552",
    "code": "1F443 1F3FC",
    "char": "ðŸ‘ƒðŸ¼",
    "name": "nose, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-3"
  },
  {
    "no": "553",
    "code": "1F443 1F3FD",
    "char": "ðŸ‘ƒðŸ½",
    "name": "nose, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-4"
  },
  {
    "no": "554",
    "code": "1F443 1F3FE",
    "char": "ðŸ‘ƒðŸ¾",
    "name": "nose, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-5"
  },
  {
    "no": "555",
    "code": "1F443 1F3FF",
    "char": "ðŸ‘ƒðŸ¿",
    "name": "nose, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "body | type-6"
  },
  {
    "no": "556",
    "code": "1F463",
    "char": "ðŸ‘£",
    "name": "FOOTPRINTS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | clothing | footprint | print"
  },
  {
    "no": "557",
    "code": "1F440",
    "char": "ðŸ‘€",
    "name": "EYES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | eye | face"
  },
  {
    "no": "558",
    "code": "1F441",
    "char": "ðŸ‘",
    "name": "EYE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "body"
  },
  {
    "no": "559",
    "code": "1F441 200D 1F5E8",
    "char": "ðŸ‘â€ðŸ—¨",
    "name": "eye, left speech bubble",
    "date": "2014Ë£",
    "default": "n/a*",
    "keywords": "body | dialog | speech"
  },
  {
    "no": "560",
    "code": "1F445",
    "char": "ðŸ‘…",
    "name": "TONGUE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body"
  },
  {
    "no": "561",
    "code": "1F444",
    "char": "ðŸ‘„",
    "name": "MOUTH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "body | lips"
  },
  {
    "no": "562",
    "code": "1F48B",
    "char": "ðŸ’‹",
    "name": "KISS MARK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "kiss | lips"
  },
  {
    "no": "563",
    "code": "1F498",
    "char": "ðŸ’˜",
    "name": "HEART WITH ARROW",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | cupid | heart"
  },
  {
    "no": "564",
    "code": "2764",
    "char": "â¤",
    "name": "HEAVY BLACK HEART\nâ‰Š red heart",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "heart"
  },
  {
    "no": "565",
    "code": "1F493",
    "char": "ðŸ’“",
    "name": "BEATING HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "beating | heart | heartbeat | pulsating"
  },
  {
    "no": "566",
    "code": "1F494",
    "char": "ðŸ’”",
    "name": "BROKEN HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "break | broken | heart"
  },
  {
    "no": "567",
    "code": "1F495",
    "char": "ðŸ’•",
    "name": "TWO HEARTS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "heart | love"
  },
  {
    "no": "568",
    "code": "1F496",
    "char": "ðŸ’–",
    "name": "SPARKLING HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "excited | heart | sparkle"
  },
  {
    "no": "569",
    "code": "1F497",
    "char": "ðŸ’—",
    "name": "GROWING HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "excited | growing | heart | heartpulse | nervous"
  },
  {
    "no": "570",
    "code": "1F499",
    "char": "ðŸ’™",
    "name": "BLUE HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blue | heart"
  },
  {
    "no": "571",
    "code": "1F49A",
    "char": "ðŸ’š",
    "name": "GREEN HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "green | heart"
  },
  {
    "no": "572",
    "code": "1F49B",
    "char": "ðŸ’›",
    "name": "YELLOW HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "heart | yellow"
  },
  {
    "no": "573",
    "code": "1F49C",
    "char": "ðŸ’œ",
    "name": "PURPLE HEART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "heart | purple"
  },
  {
    "no": "574",
    "code": "1F5A4",
    "char": "ðŸ–¤",
    "name": "BLACK HEART",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "black | evil | heart | wicked"
  },
  {
    "no": "575",
    "code": "1F49D",
    "char": "ðŸ’",
    "name": "HEART WITH RIBBON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "heart | ribbon | valentine"
  },
  {
    "no": "576",
    "code": "1F49E",
    "char": "ðŸ’ž",
    "name": "REVOLVING HEARTS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "heart | revolving"
  },
  {
    "no": "577",
    "code": "1F49F",
    "char": "ðŸ’Ÿ",
    "name": "HEART DECORATION",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "heart"
  },
  {
    "no": "578",
    "code": "2763",
    "char": "â£",
    "name": "HEAVY HEART EXCLAMATION MARK ORNAMENT\nâ‰Š heavy heart exclamation",
    "date": "1995á¶»",
    "default": "text*",
    "keywords": "exclamation | heart | mark | punctuation"
  },
  {
    "no": "579",
    "code": "1F48C",
    "char": "ðŸ’Œ",
    "name": "LOVE LETTER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "heart | letter | love | mail"
  },
  {
    "no": "580",
    "code": "1F4A4",
    "char": "ðŸ’¤",
    "name": "SLEEPING SYMBOL\nâ‰Š zzz",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "comic | sleep"
  },
  {
    "no": "581",
    "code": "1F4A2",
    "char": "ðŸ’¢",
    "name": "ANGER SYMBOL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "angry | comic | mad"
  },
  {
    "no": "582",
    "code": "1F4A3",
    "char": "ðŸ’£",
    "name": "BOMB",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "comic"
  },
  {
    "no": "583",
    "code": "1F4A5",
    "char": "ðŸ’¥",
    "name": "COLLISION SYMBOL\nâ‰Š collision",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "boom | comic"
  },
  {
    "no": "584",
    "code": "1F4A6",
    "char": "ðŸ’¦",
    "name": "SPLASHING SWEAT SYMBOL\nâ‰Š sweat droplets",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "comic | splashing | sweat"
  },
  {
    "no": "585",
    "code": "1F4A8",
    "char": "ðŸ’¨",
    "name": "DASH SYMBOL\nâ‰Š dashing",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "comic | dash | running"
  },
  {
    "no": "586",
    "code": "1F4AB",
    "char": "ðŸ’«",
    "name": "DIZZY SYMBOL\nâ‰Š dizzy",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "comic | star"
  },
  {
    "no": "587",
    "code": "1F4AC",
    "char": "ðŸ’¬",
    "name": "SPEECH BALLOON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "balloon | bubble | comic | dialog | speech"
  },
  {
    "no": "588",
    "code": "1F5E8",
    "char": "ðŸ—¨",
    "name": "LEFT SPEECH BUBBLE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "dialog | speech"
  },
  {
    "no": "589",
    "code": "1F5EF",
    "char": "ðŸ—¯",
    "name": "RIGHT ANGER BUBBLE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "angry | balloon | bubble | mad"
  },
  {
    "no": "590",
    "code": "1F4AD",
    "char": "ðŸ’­",
    "name": "THOUGHT BALLOON",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "balloon | bubble | comic | thought"
  },
  {
    "no": "591",
    "code": "1F573",
    "char": "ðŸ•³",
    "name": "HOLE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "hole"
  },
  {
    "no": "592",
    "code": "1F453",
    "char": "ðŸ‘“",
    "name": "EYEGLASSES\nâ‰Š glasses",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "clothing | eye | eyeglasses | eyewear"
  },
  {
    "no": "593",
    "code": "1F576",
    "char": "ðŸ•¶",
    "name": "DARK SUNGLASSES\nâ‰Š sunglasses",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "dark | eye | eyewear | glasses"
  },
  {
    "no": "594",
    "code": "1F454",
    "char": "ðŸ‘”",
    "name": "NECKTIE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing"
  },
  {
    "no": "595",
    "code": "1F455",
    "char": "ðŸ‘•",
    "name": "T-SHIRT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | shirt | tshirt"
  },
  {
    "no": "596",
    "code": "1F456",
    "char": "ðŸ‘–",
    "name": "JEANS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | pants | trousers"
  },
  {
    "no": "597",
    "code": "1F457",
    "char": "ðŸ‘—",
    "name": "DRESS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing"
  },
  {
    "no": "598",
    "code": "1F458",
    "char": "ðŸ‘˜",
    "name": "KIMONO",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing"
  },
  {
    "no": "599",
    "code": "1F459",
    "char": "ðŸ‘™",
    "name": "BIKINI",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | swim"
  },
  {
    "no": "600",
    "code": "1F45A",
    "char": "ðŸ‘š",
    "name": "WOMANS CLOTHES\nâ‰Š womanâ€™s clothes",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | woman"
  },
  {
    "no": "601",
    "code": "1F45B",
    "char": "ðŸ‘›",
    "name": "PURSE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | coin"
  },
  {
    "no": "602",
    "code": "1F45C",
    "char": "ðŸ‘œ",
    "name": "HANDBAG",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bag | clothing"
  },
  {
    "no": "603",
    "code": "1F45D",
    "char": "ðŸ‘",
    "name": "POUCH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bag | clothing"
  },
  {
    "no": "604",
    "code": "1F6CD",
    "char": "ðŸ›",
    "name": "SHOPPING BAGS",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "bag | hotel | shopping"
  },
  {
    "no": "605",
    "code": "1F392",
    "char": "ðŸŽ’",
    "name": "SCHOOL SATCHEL\nâ‰Š school backpack",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bag | satchel | school"
  },
  {
    "no": "606",
    "code": "1F45E",
    "char": "ðŸ‘ž",
    "name": "MANS SHOE\nâ‰Š manâ€™s shoe",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | man | shoe"
  },
  {
    "no": "607",
    "code": "1F45F",
    "char": "ðŸ‘Ÿ",
    "name": "ATHLETIC SHOE\nâ‰Š running shoe",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "athletic | clothing | shoe | sneaker"
  },
  {
    "no": "608",
    "code": "1F460",
    "char": "ðŸ‘ ",
    "name": "HIGH-HEELED SHOE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | heel | shoe | woman"
  },
  {
    "no": "609",
    "code": "1F461",
    "char": "ðŸ‘¡",
    "name": "WOMANS SANDAL\nâ‰Š womanâ€™s sandal",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | sandal | shoe | woman"
  },
  {
    "no": "610",
    "code": "1F462",
    "char": "ðŸ‘¢",
    "name": "WOMANS BOOTS\nâ‰Š womanâ€™s boot",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "boot | clothing | shoe | woman"
  },
  {
    "no": "611",
    "code": "1F451",
    "char": "ðŸ‘‘",
    "name": "CROWN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | king | queen"
  },
  {
    "no": "612",
    "code": "1F452",
    "char": "ðŸ‘’",
    "name": "WOMANS HAT\nâ‰Š womanâ€™s hat",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | hat | woman"
  },
  {
    "no": "613",
    "code": "1F3A9",
    "char": "ðŸŽ©",
    "name": "TOP HAT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | hat | top | tophat"
  },
  {
    "no": "614",
    "code": "1F393",
    "char": "ðŸŽ“",
    "name": "GRADUATION CAP",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "cap | celebration | clothing | graduation | hat"
  },
  {
    "no": "615",
    "code": "26D1",
    "char": "â›‘",
    "name": "HELMET WITH WHITE CROSS",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "aid | cross | face | hat | helmet"
  },
  {
    "no": "616",
    "code": "1F4FF",
    "char": "ðŸ“¿",
    "name": "PRAYER BEADS",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "beads | clothing | necklace | prayer | religion"
  },
  {
    "no": "617",
    "code": "1F484",
    "char": "ðŸ’„",
    "name": "LIPSTICK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cosmetics | makeup"
  },
  {
    "no": "618",
    "code": "1F48D",
    "char": "ðŸ’",
    "name": "RING",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "diamond"
  },
  {
    "no": "619",
    "code": "1F48E",
    "char": "ðŸ’Ž",
    "name": "GEM STONE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "diamond | gem | jewel"
  },
  {
    "no": "620",
    "code": "1F435",
    "char": "ðŸµ",
    "name": "MONKEY FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | monkey"
  },
  {
    "no": "621",
    "code": "1F412",
    "char": "ðŸ’",
    "name": "MONKEY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "monkey"
  },
  {
    "no": "622",
    "code": "1F98D",
    "char": "ðŸ¦",
    "name": "GORILLA",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "animal | gorilla"
  },
  {
    "no": "623",
    "code": "1F436",
    "char": "ðŸ¶",
    "name": "DOG FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dog | face | pet"
  },
  {
    "no": "624",
    "code": "1F415",
    "char": "ðŸ•",
    "name": "DOG",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "pet"
  },
  {
    "no": "625",
    "code": "1F429",
    "char": "ðŸ©",
    "name": "POODLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dog"
  },
  {
    "no": "626",
    "code": "1F43A",
    "char": "ðŸº",
    "name": "WOLF FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | wolf"
  },
  {
    "no": "627",
    "code": "1F98A",
    "char": "ðŸ¦Š",
    "name": "FOX FACE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "animal | face | fox"
  },
  {
    "no": "628",
    "code": "1F431",
    "char": "ðŸ±",
    "name": "CAT FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cat | face | pet"
  },
  {
    "no": "629",
    "code": "1F408",
    "char": "ðŸˆ",
    "name": "CAT",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "pet"
  },
  {
    "no": "630",
    "code": "1F981",
    "char": "ðŸ¦",
    "name": "LION FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | leo | lion | zodiac"
  },
  {
    "no": "631",
    "code": "1F42F",
    "char": "ðŸ¯",
    "name": "TIGER FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | tiger"
  },
  {
    "no": "632",
    "code": "1F405",
    "char": "ðŸ…",
    "name": "TIGER",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "tiger"
  },
  {
    "no": "633",
    "code": "1F406",
    "char": "ðŸ†",
    "name": "LEOPARD",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "leopard"
  },
  {
    "no": "634",
    "code": "1F434",
    "char": "ðŸ´",
    "name": "HORSE FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | horse"
  },
  {
    "no": "635",
    "code": "1F40E",
    "char": "ðŸŽ",
    "name": "HORSE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "racehorse | racing"
  },
  {
    "no": "636",
    "code": "1F98C",
    "char": "ðŸ¦Œ",
    "name": "DEER",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "animal | deer"
  },
  {
    "no": "637",
    "code": "1F984",
    "char": "ðŸ¦„",
    "name": "UNICORN FACE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "face | unicorn"
  },
  {
    "no": "638",
    "code": "1F42E",
    "char": "ðŸ®",
    "name": "COW FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cow | face"
  },
  {
    "no": "639",
    "code": "1F402",
    "char": "ðŸ‚",
    "name": "OX",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bull | taurus | zodiac"
  },
  {
    "no": "640",
    "code": "1F403",
    "char": "ðŸƒ",
    "name": "WATER BUFFALO",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "buffalo | water"
  },
  {
    "no": "641",
    "code": "1F404",
    "char": "ðŸ„",
    "name": "COW",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "cow"
  },
  {
    "no": "642",
    "code": "1F437",
    "char": "ðŸ·",
    "name": "PIG FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | pig"
  },
  {
    "no": "643",
    "code": "1F416",
    "char": "ðŸ–",
    "name": "PIG",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "sow"
  },
  {
    "no": "644",
    "code": "1F417",
    "char": "ðŸ—",
    "name": "BOAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "pig"
  },
  {
    "no": "645",
    "code": "1F43D",
    "char": "ðŸ½",
    "name": "PIG NOSE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | nose | pig"
  },
  {
    "no": "646",
    "code": "1F40F",
    "char": "ðŸ",
    "name": "RAM",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "aries | sheep | zodiac"
  },
  {
    "no": "647",
    "code": "1F411",
    "char": "ðŸ‘",
    "name": "SHEEP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ewe"
  },
  {
    "no": "648",
    "code": "1F410",
    "char": "ðŸ",
    "name": "GOAT",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "capricorn | zodiac"
  },
  {
    "no": "649",
    "code": "1F42A",
    "char": "ðŸª",
    "name": "DROMEDARY CAMEL\nâ‰Š camel",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "dromedary | hump"
  },
  {
    "no": "650",
    "code": "1F42B",
    "char": "ðŸ«",
    "name": "BACTRIAN CAMEL\nâ‰Š two-hump camel",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bactrian | camel | hump"
  },
  {
    "no": "651",
    "code": "1F418",
    "char": "ðŸ˜",
    "name": "ELEPHANT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "elephant"
  },
  {
    "no": "652",
    "code": "1F98F",
    "char": "ðŸ¦",
    "name": "RHINOCEROS",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "animal | rhinoceros"
  },
  {
    "no": "653",
    "code": "1F42D",
    "char": "ðŸ­",
    "name": "MOUSE FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | mouse"
  },
  {
    "no": "654",
    "code": "1F401",
    "char": "ðŸ",
    "name": "MOUSE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "mouse"
  },
  {
    "no": "655",
    "code": "1F400",
    "char": "ðŸ€",
    "name": "RAT",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "rat"
  },
  {
    "no": "656",
    "code": "1F439",
    "char": "ðŸ¹",
    "name": "HAMSTER FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | hamster | pet"
  },
  {
    "no": "657",
    "code": "1F430",
    "char": "ðŸ°",
    "name": "RABBIT FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bunny | face | pet | rabbit"
  },
  {
    "no": "658",
    "code": "1F407",
    "char": "ðŸ‡",
    "name": "RABBIT",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bunny | pet"
  },
  {
    "no": "659",
    "code": "1F43F",
    "char": "ðŸ¿",
    "name": "CHIPMUNK",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "chipmunk"
  },
  {
    "no": "660",
    "code": "1F987",
    "char": "ðŸ¦‡",
    "name": "BAT",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "animal | bat | vampire"
  },
  {
    "no": "661",
    "code": "1F43B",
    "char": "ðŸ»",
    "name": "BEAR FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bear | face"
  },
  {
    "no": "662",
    "code": "1F428",
    "char": "ðŸ¨",
    "name": "KOALA",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bear"
  },
  {
    "no": "663",
    "code": "1F43C",
    "char": "ðŸ¼",
    "name": "PANDA FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | panda"
  },
  {
    "no": "664",
    "code": "1F43E",
    "char": "ðŸ¾",
    "name": "PAW PRINTS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "feet | paw | print"
  },
  {
    "no": "665",
    "code": "1F983",
    "char": "ðŸ¦ƒ",
    "name": "TURKEY",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "turkey"
  },
  {
    "no": "666",
    "code": "1F414",
    "char": "ðŸ”",
    "name": "CHICKEN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chicken"
  },
  {
    "no": "667",
    "code": "1F413",
    "char": "ðŸ“",
    "name": "ROOSTER",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "rooster"
  },
  {
    "no": "668",
    "code": "1F423",
    "char": "ðŸ£",
    "name": "HATCHING CHICK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "baby | chick | hatching"
  },
  {
    "no": "669",
    "code": "1F424",
    "char": "ðŸ¤",
    "name": "BABY CHICK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "baby | chick"
  },
  {
    "no": "670",
    "code": "1F425",
    "char": "ðŸ¥",
    "name": "FRONT-FACING BABY CHICK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "baby | chick"
  },
  {
    "no": "671",
    "code": "1F426",
    "char": "ðŸ¦",
    "name": "BIRD",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "bird"
  },
  {
    "no": "672",
    "code": "1F427",
    "char": "ðŸ§",
    "name": "PENGUIN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "penguin"
  },
  {
    "no": "673",
    "code": "1F54A",
    "char": "ðŸ•Š",
    "name": "DOVE OF PEACE\nâ‰Š dove",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "bird | fly | peace"
  },
  {
    "no": "674",
    "code": "1F985",
    "char": "ðŸ¦…",
    "name": "EAGLE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "bird | eagle"
  },
  {
    "no": "675",
    "code": "1F986",
    "char": "ðŸ¦†",
    "name": "DUCK",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "bird | duck"
  },
  {
    "no": "676",
    "code": "1F989",
    "char": "ðŸ¦‰",
    "name": "OWL",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "bird | owl | wise"
  },
  {
    "no": "677",
    "code": "1F438",
    "char": "ðŸ¸",
    "name": "FROG FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | frog"
  },
  {
    "no": "678",
    "code": "1F40A",
    "char": "ðŸŠ",
    "name": "CROCODILE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "crocodile"
  },
  {
    "no": "679",
    "code": "1F422",
    "char": "ðŸ¢",
    "name": "TURTLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "turtle"
  },
  {
    "no": "680",
    "code": "1F98E",
    "char": "ðŸ¦Ž",
    "name": "LIZARD",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "lizard | reptile"
  },
  {
    "no": "681",
    "code": "1F40D",
    "char": "ðŸ",
    "name": "SNAKE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bearer | ophiuchus | serpent | zodiac"
  },
  {
    "no": "682",
    "code": "1F432",
    "char": "ðŸ²",
    "name": "DRAGON FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dragon | face | fairy tale"
  },
  {
    "no": "683",
    "code": "1F409",
    "char": "ðŸ‰",
    "name": "DRAGON",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "fairy tale"
  },
  {
    "no": "684",
    "code": "1F433",
    "char": "ðŸ³",
    "name": "SPOUTING WHALE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | spouting | whale"
  },
  {
    "no": "685",
    "code": "1F40B",
    "char": "ðŸ‹",
    "name": "WHALE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "whale"
  },
  {
    "no": "686",
    "code": "1F42C",
    "char": "ðŸ¬",
    "name": "DOLPHIN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flipper"
  },
  {
    "no": "687",
    "code": "1F41F",
    "char": "ðŸŸ",
    "name": "FISH",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "pisces | zodiac"
  },
  {
    "no": "688",
    "code": "1F420",
    "char": "ðŸ ",
    "name": "TROPICAL FISH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fish | tropical"
  },
  {
    "no": "689",
    "code": "1F421",
    "char": "ðŸ¡",
    "name": "BLOWFISH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fish"
  },
  {
    "no": "690",
    "code": "1F988",
    "char": "ðŸ¦ˆ",
    "name": "SHARK",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "fish | shark"
  },
  {
    "no": "691",
    "code": "1F419",
    "char": "ðŸ™",
    "name": "OCTOPUS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "octopus"
  },
  {
    "no": "692",
    "code": "1F41A",
    "char": "ðŸš",
    "name": "SPIRAL SHELL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "shell | spiral"
  },
  {
    "no": "693",
    "code": "1F980",
    "char": "ðŸ¦€",
    "name": "CRAB",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "cancer | zodiac"
  },
  {
    "no": "694",
    "code": "1F990",
    "char": "ðŸ¦",
    "name": "SHRIMP",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "food | shellfish | shrimp | small"
  },
  {
    "no": "695",
    "code": "1F991",
    "char": "ðŸ¦‘",
    "name": "SQUID",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "food | molusc | squid"
  },
  {
    "no": "696",
    "code": "1F98B",
    "char": "ðŸ¦‹",
    "name": "BUTTERFLY",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "butterfly | insect | pretty"
  },
  {
    "no": "697",
    "code": "1F40C",
    "char": "ðŸŒ",
    "name": "SNAIL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "snail"
  },
  {
    "no": "698",
    "code": "1F41B",
    "char": "ðŸ›",
    "name": "BUG",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "insect"
  },
  {
    "no": "699",
    "code": "1F41C",
    "char": "ðŸœ",
    "name": "ANT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "insect"
  },
  {
    "no": "700",
    "code": "1F41D",
    "char": "ðŸ",
    "name": "HONEYBEE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bee | insect"
  },
  {
    "no": "701",
    "code": "1F41E",
    "char": "ðŸž",
    "name": "LADY BEETLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "beetle | insect | ladybird | ladybug"
  },
  {
    "no": "702",
    "code": "1F577",
    "char": "ðŸ•·",
    "name": "SPIDER",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "insect"
  },
  {
    "no": "703",
    "code": "1F578",
    "char": "ðŸ•¸",
    "name": "SPIDER WEB",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "spider | web"
  },
  {
    "no": "704",
    "code": "1F982",
    "char": "ðŸ¦‚",
    "name": "SCORPION",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "scorpio | scorpius | zodiac"
  },
  {
    "no": "705",
    "code": "1F490",
    "char": "ðŸ’",
    "name": "BOUQUET",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flower | plant"
  },
  {
    "no": "706",
    "code": "1F338",
    "char": "ðŸŒ¸",
    "name": "CHERRY BLOSSOM",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blossom | cherry | flower | plant"
  },
  {
    "no": "707",
    "code": "1F4AE",
    "char": "ðŸ’®",
    "name": "WHITE FLOWER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flower"
  },
  {
    "no": "708",
    "code": "1F3F5",
    "char": "ðŸµ",
    "name": "ROSETTE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "plant"
  },
  {
    "no": "709",
    "code": "1F339",
    "char": "ðŸŒ¹",
    "name": "ROSE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flower | plant"
  },
  {
    "no": "710",
    "code": "1F940",
    "char": "ðŸ¥€",
    "name": "WILTED FLOWER",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "flower | wilted"
  },
  {
    "no": "711",
    "code": "1F33A",
    "char": "ðŸŒº",
    "name": "HIBISCUS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flower | plant"
  },
  {
    "no": "712",
    "code": "1F33B",
    "char": "ðŸŒ»",
    "name": "SUNFLOWER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flower | plant | sun"
  },
  {
    "no": "713",
    "code": "1F33C",
    "char": "ðŸŒ¼",
    "name": "BLOSSOM",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flower | plant"
  },
  {
    "no": "714",
    "code": "1F337",
    "char": "ðŸŒ·",
    "name": "TULIP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flower | plant"
  },
  {
    "no": "715",
    "code": "1F331",
    "char": "ðŸŒ±",
    "name": "SEEDLING",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "plant | young"
  },
  {
    "no": "716",
    "code": "1F332",
    "char": "ðŸŒ²",
    "name": "EVERGREEN TREE\nâ‰Š evergreen",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "plant | tree"
  },
  {
    "no": "717",
    "code": "1F333",
    "char": "ðŸŒ³",
    "name": "DECIDUOUS TREE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "deciduous | plant | shedding | tree"
  },
  {
    "no": "718",
    "code": "1F334",
    "char": "ðŸŒ´",
    "name": "PALM TREE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "palm | plant | tree"
  },
  {
    "no": "719",
    "code": "1F335",
    "char": "ðŸŒµ",
    "name": "CACTUS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "plant"
  },
  {
    "no": "720",
    "code": "1F33E",
    "char": "ðŸŒ¾",
    "name": "EAR OF RICE\nâ‰Š sheaf of rice",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ear | grain | plant | rice"
  },
  {
    "no": "721",
    "code": "1F33F",
    "char": "ðŸŒ¿",
    "name": "HERB",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "leaf | plant"
  },
  {
    "no": "722",
    "code": "2618",
    "char": "â˜˜",
    "name": "SHAMROCK",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "plant"
  },
  {
    "no": "723",
    "code": "1F340",
    "char": "ðŸ€",
    "name": "FOUR LEAF CLOVER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "4 | clover | four | leaf | plant"
  },
  {
    "no": "724",
    "code": "1F341",
    "char": "ðŸ",
    "name": "MAPLE LEAF",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "falling | leaf | maple | plant"
  },
  {
    "no": "725",
    "code": "1F342",
    "char": "ðŸ‚",
    "name": "FALLEN LEAF",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "falling | leaf | plant"
  },
  {
    "no": "726",
    "code": "1F343",
    "char": "ðŸƒ",
    "name": "LEAF FLUTTERING IN WIND",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blow | flutter | leaf | plant | wind"
  },
  {
    "no": "727",
    "code": "1F347",
    "char": "ðŸ‡",
    "name": "GRAPES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fruit | grape | plant"
  },
  {
    "no": "728",
    "code": "1F348",
    "char": "ðŸˆ",
    "name": "MELON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fruit | plant"
  },
  {
    "no": "729",
    "code": "1F349",
    "char": "ðŸ‰",
    "name": "WATERMELON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fruit | plant"
  },
  {
    "no": "730",
    "code": "1F34A",
    "char": "ðŸŠ",
    "name": "TANGERINE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fruit | orange | plant"
  },
  {
    "no": "731",
    "code": "1F34B",
    "char": "ðŸ‹",
    "name": "LEMON",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "citrus | fruit | plant"
  },
  {
    "no": "732",
    "code": "1F34C",
    "char": "ðŸŒ",
    "name": "BANANA",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fruit | plant"
  },
  {
    "no": "733",
    "code": "1F34D",
    "char": "ðŸ",
    "name": "PINEAPPLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fruit | plant"
  },
  {
    "no": "734",
    "code": "1F34E",
    "char": "ðŸŽ",
    "name": "RED APPLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "apple | fruit | plant | red"
  },
  {
    "no": "735",
    "code": "1F34F",
    "char": "ðŸ",
    "name": "GREEN APPLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "apple | fruit | green | plant"
  },
  {
    "no": "736",
    "code": "1F350",
    "char": "ðŸ",
    "name": "PEAR",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "fruit | plant"
  },
  {
    "no": "737",
    "code": "1F351",
    "char": "ðŸ‘",
    "name": "PEACH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fruit | plant"
  },
  {
    "no": "738",
    "code": "1F352",
    "char": "ðŸ’",
    "name": "CHERRIES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cherry | fruit | plant"
  },
  {
    "no": "739",
    "code": "1F353",
    "char": "ðŸ“",
    "name": "STRAWBERRY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "berry | fruit | plant"
  },
  {
    "no": "740",
    "code": "1F95D",
    "char": "ðŸ¥",
    "name": "KIWIFRUIT",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "food | fruit | kiwi"
  },
  {
    "no": "741",
    "code": "1F345",
    "char": "ðŸ…",
    "name": "TOMATO",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "plant | vegetable"
  },
  {
    "no": "742",
    "code": "1F951",
    "char": "ðŸ¥‘",
    "name": "AVOCADO",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "avocado | food | fruit"
  },
  {
    "no": "743",
    "code": "1F346",
    "char": "ðŸ†",
    "name": "AUBERGINE\nâ‰Š eggplant",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "aubergine | plant | vegetable"
  },
  {
    "no": "744",
    "code": "1F954",
    "char": "ðŸ¥”",
    "name": "POTATO",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "food | potato | vegetable"
  },
  {
    "no": "745",
    "code": "1F955",
    "char": "ðŸ¥•",
    "name": "CARROT",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "carrot | food | vegetable"
  },
  {
    "no": "746",
    "code": "1F33D",
    "char": "ðŸŒ½",
    "name": "EAR OF MAIZE\nâ‰Š ear of corn",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "corn | ear | maize | maze | plant"
  },
  {
    "no": "747",
    "code": "1F336",
    "char": "ðŸŒ¶",
    "name": "HOT PEPPER",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "hot | pepper | plant"
  },
  {
    "no": "748",
    "code": "1F952",
    "char": "ðŸ¥’",
    "name": "CUCUMBER",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "cucumber | food | pickle | vegetable"
  },
  {
    "no": "749",
    "code": "1F344",
    "char": "ðŸ„",
    "name": "MUSHROOM",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "plant"
  },
  {
    "no": "750",
    "code": "1F95C",
    "char": "ðŸ¥œ",
    "name": "PEANUTS",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "food | nut | peanut | vegetable"
  },
  {
    "no": "751",
    "code": "1F330",
    "char": "ðŸŒ°",
    "name": "CHESTNUT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "plant"
  },
  {
    "no": "752",
    "code": "1F35E",
    "char": "ðŸž",
    "name": "BREAD",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "loaf"
  },
  {
    "no": "753",
    "code": "1F950",
    "char": "ðŸ¥",
    "name": "CROISSANT",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "bread | crescent roll | croissant | food | french"
  },
  {
    "no": "754",
    "code": "1F956",
    "char": "ðŸ¥–",
    "name": "BAGUETTE BREAD",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "baguette | bread | food | french"
  },
  {
    "no": "755",
    "code": "1F95E",
    "char": "ðŸ¥ž",
    "name": "PANCAKES",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "crÃªpe | food | hotcake | pancake"
  },
  {
    "no": "756",
    "code": "1F9C0",
    "char": "ðŸ§€",
    "name": "CHEESE WEDGE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "cheese"
  },
  {
    "no": "757",
    "code": "1F356",
    "char": "ðŸ–",
    "name": "MEAT ON BONE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bone | meat"
  },
  {
    "no": "758",
    "code": "1F357",
    "char": "ðŸ—",
    "name": "POULTRY LEG",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bone | chicken | leg | poultry"
  },
  {
    "no": "759",
    "code": "1F953",
    "char": "ðŸ¥“",
    "name": "BACON",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "bacon | food | meat"
  },
  {
    "no": "760",
    "code": "1F354",
    "char": "ðŸ”",
    "name": "HAMBURGER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "burger"
  },
  {
    "no": "761",
    "code": "1F35F",
    "char": "ðŸŸ",
    "name": "FRENCH FRIES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "french | fries"
  },
  {
    "no": "762",
    "code": "1F355",
    "char": "ðŸ•",
    "name": "SLICE OF PIZZA\nâ‰Š pizza",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cheese | slice"
  },
  {
    "no": "763",
    "code": "1F32D",
    "char": "ðŸŒ­",
    "name": "HOT DOG",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "frankfurter | hotdog | sausage"
  },
  {
    "no": "764",
    "code": "1F32E",
    "char": "ðŸŒ®",
    "name": "TACO",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "mexican"
  },
  {
    "no": "765",
    "code": "1F32F",
    "char": "ðŸŒ¯",
    "name": "BURRITO",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "mexican"
  },
  {
    "no": "766",
    "code": "1F959",
    "char": "ðŸ¥™",
    "name": "STUFFED FLATBREAD",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "falafel | flatbread | food | gyro | kebab | stuffed"
  },
  {
    "no": "767",
    "code": "1F95A",
    "char": "ðŸ¥š",
    "name": "EGG",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "egg | food"
  },
  {
    "no": "768",
    "code": "1F373",
    "char": "ðŸ³",
    "name": "COOKING",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "egg | frying | pan"
  },
  {
    "no": "769",
    "code": "1F958",
    "char": "ðŸ¥˜",
    "name": "SHALLOW PAN OF FOOD",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "casserole | food | paella | pan | shallow"
  },
  {
    "no": "770",
    "code": "1F372",
    "char": "ðŸ²",
    "name": "POT OF FOOD",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "pot | stew"
  },
  {
    "no": "771",
    "code": "1F957",
    "char": "ðŸ¥—",
    "name": "GREEN SALAD",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "food | green | salad"
  },
  {
    "no": "772",
    "code": "1F37F",
    "char": "ðŸ¿",
    "name": "POPCORN",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "popcorn"
  },
  {
    "no": "773",
    "code": "1F371",
    "char": "ðŸ±",
    "name": "BENTO BOX",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bento | box"
  },
  {
    "no": "774",
    "code": "1F358",
    "char": "ðŸ˜",
    "name": "RICE CRACKER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cracker | rice"
  },
  {
    "no": "775",
    "code": "1F359",
    "char": "ðŸ™",
    "name": "RICE BALL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ball | japanese | rice"
  },
  {
    "no": "776",
    "code": "1F35A",
    "char": "ðŸš",
    "name": "COOKED RICE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cooked | rice"
  },
  {
    "no": "777",
    "code": "1F35B",
    "char": "ðŸ›",
    "name": "CURRY AND RICE\nâ‰Š curry rice",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "curry | rice"
  },
  {
    "no": "778",
    "code": "1F35C",
    "char": "ðŸœ",
    "name": "STEAMING BOWL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bowl | noodle | ramen | steaming"
  },
  {
    "no": "779",
    "code": "1F35D",
    "char": "ðŸ",
    "name": "SPAGHETTI",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "pasta"
  },
  {
    "no": "780",
    "code": "1F360",
    "char": "ðŸ ",
    "name": "ROASTED SWEET POTATO",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "potato | roasted | sweet"
  },
  {
    "no": "781",
    "code": "1F362",
    "char": "ðŸ¢",
    "name": "ODEN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "kebab | seafood | skewer | stick"
  },
  {
    "no": "782",
    "code": "1F363",
    "char": "ðŸ£",
    "name": "SUSHI",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "sushi"
  },
  {
    "no": "783",
    "code": "1F364",
    "char": "ðŸ¤",
    "name": "FRIED SHRIMP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fried | prawn | shrimp | tempura"
  },
  {
    "no": "784",
    "code": "1F365",
    "char": "ðŸ¥",
    "name": "FISH CAKE WITH SWIRL DESIGN\nâ‰Š fish cake with swirl",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cake | fish | pastry | swirl"
  },
  {
    "no": "785",
    "code": "1F361",
    "char": "ðŸ¡",
    "name": "DANGO",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dessert | japanese | skewer | stick | sweet"
  },
  {
    "no": "786",
    "code": "1F366",
    "char": "ðŸ¦",
    "name": "SOFT ICE CREAM",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cream | dessert | ice | icecream | soft | sweet"
  },
  {
    "no": "787",
    "code": "1F367",
    "char": "ðŸ§",
    "name": "SHAVED ICE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dessert | ice | shaved | sweet"
  },
  {
    "no": "788",
    "code": "1F368",
    "char": "ðŸ¨",
    "name": "ICE CREAM",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cream | dessert | ice | sweet"
  },
  {
    "no": "789",
    "code": "1F369",
    "char": "ðŸ©",
    "name": "DOUGHNUT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dessert | donut | sweet"
  },
  {
    "no": "790",
    "code": "1F36A",
    "char": "ðŸª",
    "name": "COOKIE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dessert | sweet"
  },
  {
    "no": "791",
    "code": "1F382",
    "char": "ðŸŽ‚",
    "name": "BIRTHDAY CAKE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "birthday | cake | celebration | dessert | pastry | sweet"
  },
  {
    "no": "792",
    "code": "1F370",
    "char": "ðŸ°",
    "name": "SHORTCAKE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cake | dessert | pastry | slice | sweet"
  },
  {
    "no": "793",
    "code": "1F36B",
    "char": "ðŸ«",
    "name": "CHOCOLATE BAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bar | chocolate | dessert | sweet"
  },
  {
    "no": "794",
    "code": "1F36C",
    "char": "ðŸ¬",
    "name": "CANDY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dessert | sweet"
  },
  {
    "no": "795",
    "code": "1F36D",
    "char": "ðŸ­",
    "name": "LOLLIPOP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "candy | dessert | sweet"
  },
  {
    "no": "796",
    "code": "1F36E",
    "char": "ðŸ®",
    "name": "CUSTARD",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dessert | pudding | sweet"
  },
  {
    "no": "797",
    "code": "1F36F",
    "char": "ðŸ¯",
    "name": "HONEY POT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "honey | honeypot | pot | sweet"
  },
  {
    "no": "798",
    "code": "1F37C",
    "char": "ðŸ¼",
    "name": "BABY BOTTLE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "baby | bottle | drink | milk"
  },
  {
    "no": "799",
    "code": "1F95B",
    "char": "ðŸ¥›",
    "name": "GLASS OF MILK",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "drink | glass | milk"
  },
  {
    "no": "800",
    "code": "2615",
    "char": "â˜•",
    "name": "HOT BEVERAGE",
    "date": "2003Ê²",
    "default": "emoji",
    "keywords": "beverage | coffee | drink | hot | steaming | tea"
  },
  {
    "no": "801",
    "code": "1F375",
    "char": "ðŸµ",
    "name": "TEACUP WITHOUT HANDLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "beverage | cup | drink | tea | teacup"
  },
  {
    "no": "802",
    "code": "1F376",
    "char": "ðŸ¶",
    "name": "SAKE BOTTLE AND CUP\nâ‰Š sake",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bar | beverage | bottle | cup | drink"
  },
  {
    "no": "803",
    "code": "1F37E",
    "char": "ðŸ¾",
    "name": "BOTTLE WITH POPPING CORK",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "bar | bottle | cork | drink | popping"
  },
  {
    "no": "804",
    "code": "1F377",
    "char": "ðŸ·",
    "name": "WINE GLASS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bar | beverage | drink | glass | wine"
  },
  {
    "no": "805",
    "code": "1F378",
    "char": "ðŸ¸",
    "name": "COCKTAIL GLASS",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "bar | cocktail | drink | glass"
  },
  {
    "no": "806",
    "code": "1F379",
    "char": "ðŸ¹",
    "name": "TROPICAL DRINK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bar | drink | tropical"
  },
  {
    "no": "807",
    "code": "1F37A",
    "char": "ðŸº",
    "name": "BEER MUG",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bar | beer | drink | mug"
  },
  {
    "no": "808",
    "code": "1F37B",
    "char": "ðŸ»",
    "name": "CLINKING BEER MUGS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bar | beer | clink | drink | mug"
  },
  {
    "no": "809",
    "code": "1F942",
    "char": "ðŸ¥‚",
    "name": "CLINKING GLASSES",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "celebrate | clink | drink | glass"
  },
  {
    "no": "810",
    "code": "1F943",
    "char": "ðŸ¥ƒ",
    "name": "TUMBLER GLASS",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "glass | liquor | shot | tumbler | whisky"
  },
  {
    "no": "811",
    "code": "1F37D",
    "char": "ðŸ½",
    "name": "FORK AND KNIFE WITH PLATE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cooking | fork | knife | plate"
  },
  {
    "no": "812",
    "code": "1F374",
    "char": "ðŸ´",
    "name": "FORK AND KNIFE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cooking | fork | knife"
  },
  {
    "no": "813",
    "code": "1F944",
    "char": "ðŸ¥„",
    "name": "SPOON",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "spoon | tableware"
  },
  {
    "no": "814",
    "code": "1F52A",
    "char": "ðŸ”ª",
    "name": "HOCHO\nâ‰Š kitchen knife",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cooking | hocho | knife | tool | weapon"
  },
  {
    "no": "815",
    "code": "1F3FA",
    "char": "ðŸº",
    "name": "AMPHORA",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "aquarius | cooking | drink | jug | tool | weapon | zodiac"
  },
  {
    "no": "816",
    "code": "1F30D",
    "char": "ðŸŒ",
    "name": "EARTH GLOBE EUROPE-AFRICA\nâ‰Š globe showing europe-africa",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "africa | earth | europe | globe | world"
  },
  {
    "no": "817",
    "code": "1F30E",
    "char": "ðŸŒŽ",
    "name": "EARTH GLOBE AMERICAS\nâ‰Š globe showing americas",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "americas | earth | globe | world"
  },
  {
    "no": "818",
    "code": "1F30F",
    "char": "ðŸŒ",
    "name": "EARTH GLOBE ASIA-AUSTRALIA\nâ‰Š globe showing asia-australia",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "asia | australia | earth | globe | world"
  },
  {
    "no": "819",
    "code": "1F310",
    "char": "ðŸŒ",
    "name": "GLOBE WITH MERIDIANS",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "earth | globe | meridians | world"
  },
  {
    "no": "820",
    "code": "1F5FA",
    "char": "ðŸ—º",
    "name": "WORLD MAP",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "map | world"
  },
  {
    "no": "821",
    "code": "1F5FE",
    "char": "ðŸ—¾",
    "name": "SILHOUETTE OF JAPAN\nâ‰Š map of japan",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "japan | map"
  },
  {
    "no": "822",
    "code": "1F3D4",
    "char": "ðŸ”",
    "name": "SNOW CAPPED MOUNTAIN\nâ‰Š snow-capped mountain",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cold | mountain | snow"
  },
  {
    "no": "823",
    "code": "26F0",
    "char": "â›°",
    "name": "MOUNTAIN",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "mountain"
  },
  {
    "no": "824",
    "code": "1F30B",
    "char": "ðŸŒ‹",
    "name": "VOLCANO",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "eruption | mountain | weather"
  },
  {
    "no": "825",
    "code": "1F5FB",
    "char": "ðŸ—»",
    "name": "MOUNT FUJI",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fuji | mountain"
  },
  {
    "no": "826",
    "code": "1F3D5",
    "char": "ðŸ•",
    "name": "CAMPING",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "camping"
  },
  {
    "no": "827",
    "code": "1F3D6",
    "char": "ðŸ–",
    "name": "BEACH WITH UMBRELLA",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "beach | umbrella"
  },
  {
    "no": "828",
    "code": "1F3DC",
    "char": "ðŸœ",
    "name": "DESERT",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "desert"
  },
  {
    "no": "829",
    "code": "1F3DD",
    "char": "ðŸ",
    "name": "DESERT ISLAND",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "desert | island"
  },
  {
    "no": "830",
    "code": "1F3DE",
    "char": "ðŸž",
    "name": "NATIONAL PARK",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "park"
  },
  {
    "no": "831",
    "code": "1F3DF",
    "char": "ðŸŸ",
    "name": "STADIUM",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "stadium"
  },
  {
    "no": "832",
    "code": "1F3DB",
    "char": "ðŸ›",
    "name": "CLASSICAL BUILDING",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "building | classical"
  },
  {
    "no": "833",
    "code": "1F3D7",
    "char": "ðŸ—",
    "name": "BUILDING CONSTRUCTION",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "building | construction"
  },
  {
    "no": "834",
    "code": "1F3D8",
    "char": "ðŸ˜",
    "name": "HOUSE BUILDINGS",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "building | house"
  },
  {
    "no": "835",
    "code": "1F3D9",
    "char": "ðŸ™",
    "name": "CITYSCAPE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "building | city"
  },
  {
    "no": "836",
    "code": "1F3DA",
    "char": "ðŸš",
    "name": "DERELICT HOUSE BUILDING",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "building | derelict | house"
  },
  {
    "no": "837",
    "code": "1F3E0",
    "char": "ðŸ ",
    "name": "HOUSE BUILDING",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "building | home | house"
  },
  {
    "no": "838",
    "code": "1F3E1",
    "char": "ðŸ¡",
    "name": "HOUSE WITH GARDEN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | garden | home | house"
  },
  {
    "no": "839",
    "code": "1F3E2",
    "char": "ðŸ¢",
    "name": "OFFICE BUILDING",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building"
  },
  {
    "no": "840",
    "code": "1F3E3",
    "char": "ðŸ£",
    "name": "JAPANESE POST OFFICE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | japanese | post"
  },
  {
    "no": "841",
    "code": "1F3E4",
    "char": "ðŸ¤",
    "name": "EUROPEAN POST OFFICE\nâ‰Š post office",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "building | european | post"
  },
  {
    "no": "842",
    "code": "1F3E5",
    "char": "ðŸ¥",
    "name": "HOSPITAL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | doctor | medicine"
  },
  {
    "no": "843",
    "code": "1F3E6",
    "char": "ðŸ¦",
    "name": "BANK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building"
  },
  {
    "no": "844",
    "code": "1F3E8",
    "char": "ðŸ¨",
    "name": "HOTEL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building"
  },
  {
    "no": "845",
    "code": "1F3E9",
    "char": "ðŸ©",
    "name": "LOVE HOTEL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | hotel | love"
  },
  {
    "no": "846",
    "code": "1F3EA",
    "char": "ðŸª",
    "name": "CONVENIENCE STORE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | convenience | store"
  },
  {
    "no": "847",
    "code": "1F3EB",
    "char": "ðŸ«",
    "name": "SCHOOL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building"
  },
  {
    "no": "848",
    "code": "1F3EC",
    "char": "ðŸ¬",
    "name": "DEPARTMENT STORE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | department | store"
  },
  {
    "no": "849",
    "code": "1F3ED",
    "char": "ðŸ­",
    "name": "FACTORY",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "building"
  },
  {
    "no": "850",
    "code": "1F3EF",
    "char": "ðŸ¯",
    "name": "JAPANESE CASTLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | castle | japanese"
  },
  {
    "no": "851",
    "code": "1F3F0",
    "char": "ðŸ°",
    "name": "EUROPEAN CASTLE\nâ‰Š castle",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | european"
  },
  {
    "no": "852",
    "code": "1F492",
    "char": "ðŸ’’",
    "name": "WEDDING",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chapel | romance"
  },
  {
    "no": "853",
    "code": "1F5FC",
    "char": "ðŸ—¼",
    "name": "TOKYO TOWER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "tokyo | tower"
  },
  {
    "no": "854",
    "code": "1F5FD",
    "char": "ðŸ—½",
    "name": "STATUE OF LIBERTY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "liberty | statue"
  },
  {
    "no": "855",
    "code": "26EA",
    "char": "â›ª",
    "name": "CHURCH",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "building | christian | cross | religion"
  },
  {
    "no": "856",
    "code": "1F54C",
    "char": "ðŸ•Œ",
    "name": "MOSQUE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "islam | muslim | religion"
  },
  {
    "no": "857",
    "code": "1F54D",
    "char": "ðŸ•",
    "name": "SYNAGOGUE",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "jew | jewish | religion | temple"
  },
  {
    "no": "858",
    "code": "26E9",
    "char": "â›©",
    "name": "SHINTO SHRINE",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "religion | shinto | shrine"
  },
  {
    "no": "859",
    "code": "1F54B",
    "char": "ðŸ•‹",
    "name": "KAABA",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "islam | muslim | religion"
  },
  {
    "no": "860",
    "code": "26F2",
    "char": "â›²",
    "name": "FOUNTAIN",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "fountain"
  },
  {
    "no": "861",
    "code": "26FA",
    "char": "â›º",
    "name": "TENT",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "camping"
  },
  {
    "no": "862",
    "code": "1F301",
    "char": "ðŸŒ",
    "name": "FOGGY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fog | weather"
  },
  {
    "no": "863",
    "code": "1F303",
    "char": "ðŸŒƒ",
    "name": "NIGHT WITH STARS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "night | star | weather"
  },
  {
    "no": "864",
    "code": "1F304",
    "char": "ðŸŒ„",
    "name": "SUNRISE OVER MOUNTAINS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "morning | mountain | sun | sunrise | weather"
  },
  {
    "no": "865",
    "code": "1F305",
    "char": "ðŸŒ…",
    "name": "SUNRISE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "morning | sun | weather"
  },
  {
    "no": "866",
    "code": "1F306",
    "char": "ðŸŒ†",
    "name": "CITYSCAPE AT DUSK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | city | dusk | evening | landscape | sun | sunset | weather"
  },
  {
    "no": "867",
    "code": "1F307",
    "char": "ðŸŒ‡",
    "name": "SUNSET OVER BUILDINGS\nâ‰Š sunset",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "building | dusk | sun | weather"
  },
  {
    "no": "868",
    "code": "1F309",
    "char": "ðŸŒ‰",
    "name": "BRIDGE AT NIGHT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bridge | night | weather"
  },
  {
    "no": "869",
    "code": "2668",
    "char": "â™¨",
    "name": "HOT SPRINGS",
    "date": "1995ÂªÊ²",
    "default": "text*",
    "keywords": "hot | hotsprings | springs | steaming"
  },
  {
    "no": "870",
    "code": "1F30C",
    "char": "ðŸŒŒ",
    "name": "MILKY WAY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "space | weather"
  },
  {
    "no": "871",
    "code": "1F3A0",
    "char": "ðŸŽ ",
    "name": "CAROUSEL HORSE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "carousel | horse"
  },
  {
    "no": "872",
    "code": "1F3A1",
    "char": "ðŸŽ¡",
    "name": "FERRIS WHEEL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "amusement park | ferris | wheel"
  },
  {
    "no": "873",
    "code": "1F3A2",
    "char": "ðŸŽ¢",
    "name": "ROLLER COASTER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "amusement park | coaster | roller"
  },
  {
    "no": "874",
    "code": "1F488",
    "char": "ðŸ’ˆ",
    "name": "BARBER POLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "barber | haircut | pole"
  },
  {
    "no": "875",
    "code": "1F3AA",
    "char": "ðŸŽª",
    "name": "CIRCUS TENT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "circus | tent"
  },
  {
    "no": "876",
    "code": "1F3AD",
    "char": "ðŸŽ­",
    "name": "PERFORMING ARTS",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "art | mask | performing | theater | theatre"
  },
  {
    "no": "877",
    "code": "1F5BC",
    "char": "ðŸ–¼",
    "name": "FRAME WITH PICTURE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "art | frame | museum | painting | picture"
  },
  {
    "no": "878",
    "code": "1F3A8",
    "char": "ðŸŽ¨",
    "name": "ARTIST PALETTE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "art | museum | painting | palette"
  },
  {
    "no": "879",
    "code": "1F3B0",
    "char": "ðŸŽ°",
    "name": "SLOT MACHINE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "game | slot"
  },
  {
    "no": "880",
    "code": "1F682",
    "char": "ðŸš‚",
    "name": "STEAM LOCOMOTIVE\nâ‰Š locomotive",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "engine | railway | steam | train | vehicle"
  },
  {
    "no": "881",
    "code": "1F683",
    "char": "ðŸšƒ",
    "name": "RAILWAY CAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "car | electric | railway | train | tram | trolleybus | vehicle"
  },
  {
    "no": "882",
    "code": "1F684",
    "char": "ðŸš„",
    "name": "HIGH-SPEED TRAIN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "railway | shinkansen | speed | train | vehicle"
  },
  {
    "no": "883",
    "code": "1F685",
    "char": "ðŸš…",
    "name": "HIGH-SPEED TRAIN WITH BULLET NOSE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bullet | railway | shinkansen | speed | train | vehicle"
  },
  {
    "no": "884",
    "code": "1F686",
    "char": "ðŸš†",
    "name": "TRAIN",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "railway | vehicle"
  },
  {
    "no": "885",
    "code": "1F687",
    "char": "ðŸš‡",
    "name": "METRO",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "subway | vehicle"
  },
  {
    "no": "886",
    "code": "1F688",
    "char": "ðŸšˆ",
    "name": "LIGHT RAIL",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "railway | vehicle"
  },
  {
    "no": "887",
    "code": "1F689",
    "char": "ðŸš‰",
    "name": "STATION",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "railway | train | vehicle"
  },
  {
    "no": "888",
    "code": "1F68A",
    "char": "ðŸšŠ",
    "name": "TRAM",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "trolleybus | vehicle"
  },
  {
    "no": "889",
    "code": "1F69D",
    "char": "ðŸš",
    "name": "MONORAIL",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "vehicle"
  },
  {
    "no": "890",
    "code": "1F69E",
    "char": "ðŸšž",
    "name": "MOUNTAIN RAILWAY",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "car | mountain | railway | vehicle"
  },
  {
    "no": "891",
    "code": "1F68B",
    "char": "ðŸš‹",
    "name": "TRAM CAR",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "car | tram | trolleybus | vehicle"
  },
  {
    "no": "892",
    "code": "1F68C",
    "char": "ðŸšŒ",
    "name": "BUS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "vehicle"
  },
  {
    "no": "893",
    "code": "1F68D",
    "char": "ðŸš",
    "name": "ONCOMING BUS",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "bus | oncoming | vehicle"
  },
  {
    "no": "894",
    "code": "1F68E",
    "char": "ðŸšŽ",
    "name": "TROLLEYBUS",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bus | tram | trolley | vehicle"
  },
  {
    "no": "895",
    "code": "1F690",
    "char": "ðŸš",
    "name": "MINIBUS",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bus | vehicle"
  },
  {
    "no": "896",
    "code": "1F691",
    "char": "ðŸš‘",
    "name": "AMBULANCE",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "vehicle"
  },
  {
    "no": "897",
    "code": "1F692",
    "char": "ðŸš’",
    "name": "FIRE ENGINE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "engine | fire | truck | vehicle"
  },
  {
    "no": "898",
    "code": "1F693",
    "char": "ðŸš“",
    "name": "POLICE CAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "car | patrol | police | vehicle"
  },
  {
    "no": "899",
    "code": "1F694",
    "char": "ðŸš”",
    "name": "ONCOMING POLICE CAR",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "car | oncoming | police | vehicle"
  },
  {
    "no": "900",
    "code": "1F695",
    "char": "ðŸš•",
    "name": "TAXI",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "vehicle"
  },
  {
    "no": "901",
    "code": "1F696",
    "char": "ðŸš–",
    "name": "ONCOMING TAXI",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "oncoming | taxi | vehicle"
  },
  {
    "no": "902",
    "code": "1F697",
    "char": "ðŸš—",
    "name": "AUTOMOBILE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "car | vehicle"
  },
  {
    "no": "903",
    "code": "1F698",
    "char": "ðŸš˜",
    "name": "ONCOMING AUTOMOBILE",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "automobile | car | oncoming | vehicle"
  },
  {
    "no": "904",
    "code": "1F699",
    "char": "ðŸš™",
    "name": "RECREATIONAL VEHICLE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "recreational | rv | vehicle"
  },
  {
    "no": "905",
    "code": "1F69A",
    "char": "ðŸšš",
    "name": "DELIVERY TRUCK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "delivery | truck | vehicle"
  },
  {
    "no": "906",
    "code": "1F69B",
    "char": "ðŸš›",
    "name": "ARTICULATED LORRY",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "lorry | semi | truck | vehicle"
  },
  {
    "no": "907",
    "code": "1F69C",
    "char": "ðŸšœ",
    "name": "TRACTOR",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "vehicle"
  },
  {
    "no": "908",
    "code": "1F6B2",
    "char": "ðŸš²",
    "name": "BICYCLE",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "bike | vehicle"
  },
  {
    "no": "909",
    "code": "1F6F4",
    "char": "ðŸ›´",
    "name": "SCOOTER\nâ‰Š kick scooter",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "kick | scooter"
  },
  {
    "no": "910",
    "code": "1F6F5",
    "char": "ðŸ›µ",
    "name": "MOTOR SCOOTER",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "motor | scooter"
  },
  {
    "no": "911",
    "code": "1F3CE",
    "char": "ðŸŽ",
    "name": "RACING CAR",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "car | racing"
  },
  {
    "no": "912",
    "code": "1F3CD",
    "char": "ðŸ",
    "name": "RACING MOTORCYCLE\nâ‰Š motorcycle",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "racing"
  },
  {
    "no": "913",
    "code": "1F68F",
    "char": "ðŸš",
    "name": "BUS STOP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bus | busstop | stop"
  },
  {
    "no": "914",
    "code": "1F6E3",
    "char": "ðŸ›£",
    "name": "MOTORWAY",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "highway | road"
  },
  {
    "no": "915",
    "code": "1F6E4",
    "char": "ðŸ›¤",
    "name": "RAILWAY TRACK",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "railway | train"
  },
  {
    "no": "916",
    "code": "26FD",
    "char": "â›½",
    "name": "FUEL PUMP",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "fuel | fuelpump | gas | pump | station"
  },
  {
    "no": "917",
    "code": "1F6A8",
    "char": "ðŸš¨",
    "name": "POLICE CARS REVOLVING LIGHT\nâ‰Š police carâ€™s light",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "beacon | car | light | police | revolving | vehicle"
  },
  {
    "no": "918",
    "code": "1F6A5",
    "char": "ðŸš¥",
    "name": "HORIZONTAL TRAFFIC LIGHT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "light | signal | traffic"
  },
  {
    "no": "919",
    "code": "1F6A6",
    "char": "ðŸš¦",
    "name": "VERTICAL TRAFFIC LIGHT",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "light | signal | traffic"
  },
  {
    "no": "920",
    "code": "1F6A7",
    "char": "ðŸš§",
    "name": "CONSTRUCTION SIGN\nâ‰Š construction",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "barrier"
  },
  {
    "no": "921",
    "code": "1F6D1",
    "char": "ðŸ›‘",
    "name": "OCTAGONAL SIGN\nâ‰Š stop sign",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "octagonal | sign | stop"
  },
  {
    "no": "922",
    "code": "2693",
    "char": "âš“",
    "name": "ANCHOR",
    "date": "2005ÂªÊ²",
    "default": "emoji",
    "keywords": "ship | tool"
  },
  {
    "no": "923",
    "code": "26F5",
    "char": "â›µ",
    "name": "SAILBOAT",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "boat | resort | sea | vehicle | yacht"
  },
  {
    "no": "924",
    "code": "1F6F6",
    "char": "ðŸ›¶",
    "name": "CANOE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "boat | canoe"
  },
  {
    "no": "925",
    "code": "1F6A4",
    "char": "ðŸš¤",
    "name": "SPEEDBOAT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "boat | vehicle"
  },
  {
    "no": "926",
    "code": "1F6F3",
    "char": "ðŸ›³",
    "name": "PASSENGER SHIP",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "passenger | ship | vehicle"
  },
  {
    "no": "927",
    "code": "26F4",
    "char": "â›´",
    "name": "FERRY",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "boat"
  },
  {
    "no": "928",
    "code": "1F6E5",
    "char": "ðŸ›¥",
    "name": "MOTOR BOAT",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "boat | motorboat | vehicle"
  },
  {
    "no": "929",
    "code": "1F6A2",
    "char": "ðŸš¢",
    "name": "SHIP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "vehicle"
  },
  {
    "no": "930",
    "code": "2708",
    "char": "âœˆ",
    "name": "AIRPLANE",
    "date": "1995á¶»ÂªÊ²Ê·",
    "default": "text*",
    "keywords": "vehicle"
  },
  {
    "no": "931",
    "code": "1F6E9",
    "char": "ðŸ›©",
    "name": "SMALL AIRPLANE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "airplane | vehicle"
  },
  {
    "no": "932",
    "code": "1F6EB",
    "char": "ðŸ›«",
    "name": "AIRPLANE DEPARTURE",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "airplane | check-in | departure | departures | vehicle"
  },
  {
    "no": "933",
    "code": "1F6EC",
    "char": "ðŸ›¬",
    "name": "AIRPLANE ARRIVING\nâ‰Š airplane arrival",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "airplane | arrivals | arriving | landing | vehicle"
  },
  {
    "no": "934",
    "code": "1F4BA",
    "char": "ðŸ’º",
    "name": "SEAT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chair"
  },
  {
    "no": "935",
    "code": "1F681",
    "char": "ðŸš",
    "name": "HELICOPTER",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "vehicle"
  },
  {
    "no": "936",
    "code": "1F69F",
    "char": "ðŸšŸ",
    "name": "SUSPENSION RAILWAY",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "railway | suspension | vehicle"
  },
  {
    "no": "937",
    "code": "1F6A0",
    "char": "ðŸš ",
    "name": "MOUNTAIN CABLEWAY",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "cable | gondola | mountain | vehicle"
  },
  {
    "no": "938",
    "code": "1F6A1",
    "char": "ðŸš¡",
    "name": "AERIAL TRAMWAY",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "aerial | cable | car | gondola | ropeway | tramway | vehicle"
  },
  {
    "no": "939",
    "code": "1F680",
    "char": "ðŸš€",
    "name": "ROCKET",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "space | vehicle"
  },
  {
    "no": "940",
    "code": "1F6F0",
    "char": "ðŸ›°",
    "name": "SATELLITE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "space | vehicle"
  },
  {
    "no": "941",
    "code": "1F6CE",
    "char": "ðŸ›Ž",
    "name": "BELLHOP BELL",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "bell | bellhop | hotel"
  },
  {
    "no": "942",
    "code": "1F6AA",
    "char": "ðŸšª",
    "name": "DOOR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "door"
  },
  {
    "no": "943",
    "code": "1F6CC",
    "char": "ðŸ›Œ",
    "name": "SLEEPING ACCOMMODATION\nâ‰Š person in bed",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "hotel | sleep"
  },
  {
    "no": "944",
    "code": "1F6CF",
    "char": "ðŸ›",
    "name": "BED",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "hotel | sleep"
  },
  {
    "no": "945",
    "code": "1F6CB",
    "char": "ðŸ›‹",
    "name": "COUCH AND LAMP",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "couch | hotel | lamp"
  },
  {
    "no": "946",
    "code": "1F6BD",
    "char": "ðŸš½",
    "name": "TOILET",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "toilet"
  },
  {
    "no": "947",
    "code": "1F6BF",
    "char": "ðŸš¿",
    "name": "SHOWER",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "water"
  },
  {
    "no": "948",
    "code": "1F6C0",
    "char": "ðŸ›€",
    "name": "BATH\nâ‰Š person taking bath",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bath | bathtub"
  },
  {
    "no": "949",
    "code": "1F6C0 1F3FB",
    "char": "ðŸ›€ðŸ»",
    "name": "person taking bath, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bath | bathtub | type-1-2"
  },
  {
    "no": "950",
    "code": "1F6C0 1F3FC",
    "char": "ðŸ›€ðŸ¼",
    "name": "person taking bath, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bath | bathtub | type-3"
  },
  {
    "no": "951",
    "code": "1F6C0 1F3FD",
    "char": "ðŸ›€ðŸ½",
    "name": "person taking bath, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bath | bathtub | type-4"
  },
  {
    "no": "952",
    "code": "1F6C0 1F3FE",
    "char": "ðŸ›€ðŸ¾",
    "name": "person taking bath, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bath | bathtub | type-5"
  },
  {
    "no": "953",
    "code": "1F6C0 1F3FF",
    "char": "ðŸ›€ðŸ¿",
    "name": "person taking bath, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bath | bathtub | type-6"
  },
  {
    "no": "954",
    "code": "1F6C1",
    "char": "ðŸ›",
    "name": "BATHTUB",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bath"
  },
  {
    "no": "955",
    "code": "231B",
    "char": "âŒ›",
    "name": "HOURGLASS",
    "date": "1995Ê²",
    "default": "emoji",
    "keywords": "sand | timer"
  },
  {
    "no": "956",
    "code": "23F3",
    "char": "â³",
    "name": "HOURGLASS WITH FLOWING SAND",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "hourglass | sand | timer"
  },
  {
    "no": "957",
    "code": "231A",
    "char": "âŒš",
    "name": "WATCH",
    "date": "1995Ê²",
    "default": "emoji",
    "keywords": "clock"
  },
  {
    "no": "958",
    "code": "23F0",
    "char": "â°",
    "name": "ALARM CLOCK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "alarm | clock"
  },
  {
    "no": "959",
    "code": "23F1",
    "char": "â±",
    "name": "STOPWATCH",
    "date": "2010Ë£",
    "default": "text*",
    "keywords": "clock"
  },
  {
    "no": "960",
    "code": "23F2",
    "char": "â²",
    "name": "TIMER CLOCK",
    "date": "2010Ë£",
    "default": "text*",
    "keywords": "clock | timer"
  },
  {
    "no": "961",
    "code": "1F570",
    "char": "ðŸ•°",
    "name": "MANTELPIECE CLOCK",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "clock"
  },
  {
    "no": "962",
    "code": "1F55B",
    "char": "ðŸ•›",
    "name": "CLOCK FACE TWELVE OCLOCK\nâ‰Š twelve oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 12 | 12:00 | clock | oâ€™clock | twelve"
  },
  {
    "no": "963",
    "code": "1F567",
    "char": "ðŸ•§",
    "name": "CLOCK FACE TWELVE-THIRTY\nâ‰Š twelve-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "12 | 12:30 | 30 | clock | thirty | twelve"
  },
  {
    "no": "964",
    "code": "1F550",
    "char": "ðŸ•",
    "name": "CLOCK FACE ONE OCLOCK\nâ‰Š one oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 1 | 1:00 | clock | oâ€™clock | one"
  },
  {
    "no": "965",
    "code": "1F55C",
    "char": "ðŸ•œ",
    "name": "CLOCK FACE ONE-THIRTY\nâ‰Š one-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "1 | 1:30 | 30 | clock | one | thirty"
  },
  {
    "no": "966",
    "code": "1F551",
    "char": "ðŸ•‘",
    "name": "CLOCK FACE TWO OCLOCK\nâ‰Š two oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 2 | 2:00 | clock | oâ€™clock | two"
  },
  {
    "no": "967",
    "code": "1F55D",
    "char": "ðŸ•",
    "name": "CLOCK FACE TWO-THIRTY\nâ‰Š two-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "2 | 2:30 | 30 | clock | thirty | two"
  },
  {
    "no": "968",
    "code": "1F552",
    "char": "ðŸ•’",
    "name": "CLOCK FACE THREE OCLOCK\nâ‰Š three oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 3 | 3:00 | clock | oâ€™clock | three"
  },
  {
    "no": "969",
    "code": "1F55E",
    "char": "ðŸ•ž",
    "name": "CLOCK FACE THREE-THIRTY\nâ‰Š three-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "3 | 3:30 | 30 | clock | thirty | three"
  },
  {
    "no": "970",
    "code": "1F553",
    "char": "ðŸ•“",
    "name": "CLOCK FACE FOUR OCLOCK\nâ‰Š four oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 4 | 4:00 | clock | four | oâ€™clock"
  },
  {
    "no": "971",
    "code": "1F55F",
    "char": "ðŸ•Ÿ",
    "name": "CLOCK FACE FOUR-THIRTY\nâ‰Š four-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "30 | 4 | 4:30 | clock | four | thirty"
  },
  {
    "no": "972",
    "code": "1F554",
    "char": "ðŸ•”",
    "name": "CLOCK FACE FIVE OCLOCK\nâ‰Š five oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 5 | 5:00 | clock | five | oâ€™clock"
  },
  {
    "no": "973",
    "code": "1F560",
    "char": "ðŸ• ",
    "name": "CLOCK FACE FIVE-THIRTY\nâ‰Š five-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "30 | 5 | 5:30 | clock | five | thirty"
  },
  {
    "no": "974",
    "code": "1F555",
    "char": "ðŸ••",
    "name": "CLOCK FACE SIX OCLOCK\nâ‰Š six oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 6 | 6:00 | clock | oâ€™clock | six"
  },
  {
    "no": "975",
    "code": "1F561",
    "char": "ðŸ•¡",
    "name": "CLOCK FACE SIX-THIRTY\nâ‰Š six-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "30 | 6 | 6:30 | clock | six | thirty"
  },
  {
    "no": "976",
    "code": "1F556",
    "char": "ðŸ•–",
    "name": "CLOCK FACE SEVEN OCLOCK\nâ‰Š seven oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 7 | 7:00 | clock | oâ€™clock | seven"
  },
  {
    "no": "977",
    "code": "1F562",
    "char": "ðŸ•¢",
    "name": "CLOCK FACE SEVEN-THIRTY\nâ‰Š seven-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "30 | 7 | 7:30 | clock | seven | thirty"
  },
  {
    "no": "978",
    "code": "1F557",
    "char": "ðŸ•—",
    "name": "CLOCK FACE EIGHT OCLOCK\nâ‰Š eight oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 8 | 8:00 | clock | eight | oâ€™clock"
  },
  {
    "no": "979",
    "code": "1F563",
    "char": "ðŸ•£",
    "name": "CLOCK FACE EIGHT-THIRTY\nâ‰Š eight-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "30 | 8 | 8:30 | clock | eight | thirty"
  },
  {
    "no": "980",
    "code": "1F558",
    "char": "ðŸ•˜",
    "name": "CLOCK FACE NINE OCLOCK\nâ‰Š nine oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 9 | 9:00 | clock | nine | oâ€™clock"
  },
  {
    "no": "981",
    "code": "1F564",
    "char": "ðŸ•¤",
    "name": "CLOCK FACE NINE-THIRTY\nâ‰Š nine-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "30 | 9 | 9:30 | clock | nine | thirty"
  },
  {
    "no": "982",
    "code": "1F559",
    "char": "ðŸ•™",
    "name": "CLOCK FACE TEN OCLOCK\nâ‰Š ten oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 10 | 10:00 | clock | oâ€™clock | ten"
  },
  {
    "no": "983",
    "code": "1F565",
    "char": "ðŸ•¥",
    "name": "CLOCK FACE TEN-THIRTY\nâ‰Š ten-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "10 | 10:30 | 30 | clock | ten | thirty"
  },
  {
    "no": "984",
    "code": "1F55A",
    "char": "ðŸ•š",
    "name": "CLOCK FACE ELEVEN OCLOCK\nâ‰Š eleven oâ€™clock",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "00 | 11 | 11:00 | clock | eleven | oâ€™clock"
  },
  {
    "no": "985",
    "code": "1F566",
    "char": "ðŸ•¦",
    "name": "CLOCK FACE ELEVEN-THIRTY\nâ‰Š eleven-thirty",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "11 | 11:30 | 30 | clock | eleven | thirty"
  },
  {
    "no": "986",
    "code": "1F311",
    "char": "ðŸŒ‘",
    "name": "NEW MOON SYMBOL\nâ‰Š new moon",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dark | moon | space | weather"
  },
  {
    "no": "987",
    "code": "1F312",
    "char": "ðŸŒ’",
    "name": "WAXING CRESCENT MOON SYMBOL\nâ‰Š waxing crescent moon",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "crescent | moon | space | waxing | weather"
  },
  {
    "no": "988",
    "code": "1F313",
    "char": "ðŸŒ“",
    "name": "FIRST QUARTER MOON SYMBOL\nâ‰Š first quarter moon",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "moon | quarter | space | weather"
  },
  {
    "no": "989",
    "code": "1F314",
    "char": "ðŸŒ”",
    "name": "WAXING GIBBOUS MOON SYMBOL\nâ‰Š waxing gibbous moon",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "gibbous | moon | space | waxing | weather"
  },
  {
    "no": "990",
    "code": "1F315",
    "char": "ðŸŒ•",
    "name": "FULL MOON SYMBOL\nâ‰Š full moon",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "full | moon | space | weather"
  },
  {
    "no": "991",
    "code": "1F316",
    "char": "ðŸŒ–",
    "name": "WANING GIBBOUS MOON SYMBOL\nâ‰Š waning gibbous moon",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "gibbous | moon | space | waning | weather"
  },
  {
    "no": "992",
    "code": "1F317",
    "char": "ðŸŒ—",
    "name": "LAST QUARTER MOON SYMBOL\nâ‰Š last quarter moon",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "moon | quarter | space | weather"
  },
  {
    "no": "993",
    "code": "1F318",
    "char": "ðŸŒ˜",
    "name": "WANING CRESCENT MOON SYMBOL\nâ‰Š waning crescent moon",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "crescent | moon | space | waning | weather"
  },
  {
    "no": "994",
    "code": "1F319",
    "char": "ðŸŒ™",
    "name": "CRESCENT MOON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "crescent | moon | space | weather"
  },
  {
    "no": "995",
    "code": "1F31A",
    "char": "ðŸŒš",
    "name": "NEW MOON WITH FACE\nâ‰Š new moon face",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "face | moon | space | weather"
  },
  {
    "no": "996",
    "code": "1F31B",
    "char": "ðŸŒ›",
    "name": "FIRST QUARTER MOON WITH FACE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | moon | quarter | space | weather"
  },
  {
    "no": "997",
    "code": "1F31C",
    "char": "ðŸŒœ",
    "name": "LAST QUARTER MOON WITH FACE",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "face | moon | quarter | space | weather"
  },
  {
    "no": "998",
    "code": "1F321",
    "char": "ðŸŒ¡",
    "name": "THERMOMETER",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "weather"
  },
  {
    "no": "999",
    "code": "2600",
    "char": "â˜€",
    "name": "BLACK SUN WITH RAYS\nâ‰Š sun",
    "date": "1995ÂªÊ²",
    "default": "text*",
    "keywords": "bright | rays | space | sunny | weather"
  },
  {
    "no": "1000",
    "code": "1F31D",
    "char": "ðŸŒ",
    "name": "FULL MOON WITH FACE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bright | face | full | moon | space | weather"
  },
  {
    "no": "1001",
    "code": "1F31E",
    "char": "ðŸŒž",
    "name": "SUN WITH FACE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bright | face | space | sun | weather"
  },
  {
    "no": "1002",
    "code": "2B50",
    "char": "â­",
    "name": "WHITE MEDIUM STAR",
    "date": "2008Ê²",
    "default": "emoji",
    "keywords": "star"
  },
  {
    "no": "1003",
    "code": "1F31F",
    "char": "ðŸŒŸ",
    "name": "GLOWING STAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "glittery | glow | shining | sparkle | star"
  },
  {
    "no": "1004",
    "code": "1F320",
    "char": "ðŸŒ ",
    "name": "SHOOTING STAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "falling | shooting | space | star"
  },
  {
    "no": "1005",
    "code": "2601",
    "char": "â˜",
    "name": "CLOUD",
    "date": "1995ÂªÊ²Ê·",
    "default": "text*",
    "keywords": "weather"
  },
  {
    "no": "1006",
    "code": "26C5",
    "char": "â›…",
    "name": "SUN BEHIND CLOUD",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "cloud | sun | weather"
  },
  {
    "no": "1007",
    "code": "26C8",
    "char": "â›ˆ",
    "name": "THUNDER CLOUD AND RAIN\nâ‰Š cloud with lightning and rain",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "cloud | rain | thunder | weather"
  },
  {
    "no": "1008",
    "code": "1F324",
    "char": "ðŸŒ¤",
    "name": "WHITE SUN WITH SMALL CLOUD\nâ‰Š sun behind small cloud",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cloud | sun | weather"
  },
  {
    "no": "1009",
    "code": "1F325",
    "char": "ðŸŒ¥",
    "name": "WHITE SUN BEHIND CLOUD\nâ‰Š sun behind large cloud",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cloud | sun | weather"
  },
  {
    "no": "1010",
    "code": "1F326",
    "char": "ðŸŒ¦",
    "name": "WHITE SUN BEHIND CLOUD WITH RAIN\nâ‰Š sun behind cloud with rain",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cloud | rain | sun | weather"
  },
  {
    "no": "1011",
    "code": "1F327",
    "char": "ðŸŒ§",
    "name": "CLOUD WITH RAIN",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cloud | rain | weather"
  },
  {
    "no": "1012",
    "code": "1F328",
    "char": "ðŸŒ¨",
    "name": "CLOUD WITH SNOW",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cloud | cold | snow | weather"
  },
  {
    "no": "1013",
    "code": "1F329",
    "char": "ðŸŒ©",
    "name": "CLOUD WITH LIGHTNING",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cloud | lightning | weather"
  },
  {
    "no": "1014",
    "code": "1F32A",
    "char": "ðŸŒª",
    "name": "CLOUD WITH TORNADO\nâ‰Š tornado",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cloud | weather | whirlwind"
  },
  {
    "no": "1015",
    "code": "1F32B",
    "char": "ðŸŒ«",
    "name": "FOG",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cloud | weather"
  },
  {
    "no": "1016",
    "code": "1F32C",
    "char": "ðŸŒ¬",
    "name": "WIND BLOWING FACE\nâ‰Š wind face",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "blow | cloud | face | weather | wind"
  },
  {
    "no": "1017",
    "code": "1F300",
    "char": "ðŸŒ€",
    "name": "CYCLONE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dizzy | twister | typhoon | weather"
  },
  {
    "no": "1018",
    "code": "1F308",
    "char": "ðŸŒˆ",
    "name": "RAINBOW",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "rain | weather"
  },
  {
    "no": "1019",
    "code": "1F302",
    "char": "ðŸŒ‚",
    "name": "CLOSED UMBRELLA",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "clothing | rain | umbrella | weather"
  },
  {
    "no": "1020",
    "code": "2602",
    "char": "â˜‚",
    "name": "UMBRELLA",
    "date": "1995Âª",
    "default": "text*",
    "keywords": "clothing | rain | weather"
  },
  {
    "no": "1021",
    "code": "2614",
    "char": "â˜”",
    "name": "UMBRELLA WITH RAIN DROPS",
    "date": "2003ÂªÊ²",
    "default": "emoji",
    "keywords": "clothing | drop | rain | umbrella | weather"
  },
  {
    "no": "1022",
    "code": "26F1",
    "char": "â›±",
    "name": "UMBRELLA ON GROUND",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "rain | sun | umbrella | weather"
  },
  {
    "no": "1023",
    "code": "26A1",
    "char": "âš¡",
    "name": "HIGH VOLTAGE SIGN\nâ‰Š high voltage",
    "date": "2003ÂªÊ²",
    "default": "emoji",
    "keywords": "danger | electric | electricity | lightning | voltage | zap"
  },
  {
    "no": "1024",
    "code": "2744",
    "char": "â„",
    "name": "SNOWFLAKE",
    "date": "1995á¶»Ê²Ê·",
    "default": "text*",
    "keywords": "cold | snow | weather"
  },
  {
    "no": "1025",
    "code": "2603",
    "char": "â˜ƒ",
    "name": "SNOWMAN",
    "date": "1995Âª",
    "default": "text*",
    "keywords": "cold | snow | weather"
  },
  {
    "no": "1026",
    "code": "26C4",
    "char": "â›„",
    "name": "SNOWMAN WITHOUT SNOW",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "cold | snow | snowman | weather"
  },
  {
    "no": "1027",
    "code": "2604",
    "char": "â˜„",
    "name": "COMET",
    "date": "1995Ë£",
    "default": "text*",
    "keywords": "space"
  },
  {
    "no": "1028",
    "code": "1F525",
    "char": "ðŸ”¥",
    "name": "FIRE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "flame | tool"
  },
  {
    "no": "1029",
    "code": "1F4A7",
    "char": "ðŸ’§",
    "name": "DROPLET",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cold | comic | drop | sweat | weather"
  },
  {
    "no": "1030",
    "code": "1F30A",
    "char": "ðŸŒŠ",
    "name": "WATER WAVE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ocean | water | wave | weather"
  },
  {
    "no": "1031",
    "code": "1F383",
    "char": "ðŸŽƒ",
    "name": "JACK-O-LANTERN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration | halloween | jack | lantern"
  },
  {
    "no": "1032",
    "code": "1F384",
    "char": "ðŸŽ„",
    "name": "CHRISTMAS TREE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration | christmas | tree"
  },
  {
    "no": "1033",
    "code": "1F386",
    "char": "ðŸŽ†",
    "name": "FIREWORKS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration"
  },
  {
    "no": "1034",
    "code": "1F387",
    "char": "ðŸŽ‡",
    "name": "FIREWORK SPARKLER\nâ‰Š sparkler",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration | fireworks | sparkle"
  },
  {
    "no": "1035",
    "code": "2728",
    "char": "âœ¨",
    "name": "SPARKLES",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "sparkle | star"
  },
  {
    "no": "1036",
    "code": "1F388",
    "char": "ðŸŽˆ",
    "name": "BALLOON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration"
  },
  {
    "no": "1037",
    "code": "1F389",
    "char": "ðŸŽ‰",
    "name": "PARTY POPPER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration | party | popper | tada"
  },
  {
    "no": "1038",
    "code": "1F38A",
    "char": "ðŸŽŠ",
    "name": "CONFETTI BALL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ball | celebration | confetti"
  },
  {
    "no": "1039",
    "code": "1F38B",
    "char": "ðŸŽ‹",
    "name": "TANABATA TREE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "banner | celebration | japanese | tree"
  },
  {
    "no": "1040",
    "code": "1F38D",
    "char": "ðŸŽ",
    "name": "PINE DECORATION",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bamboo | celebration | japanese | pine | plant"
  },
  {
    "no": "1041",
    "code": "1F38E",
    "char": "ðŸŽŽ",
    "name": "JAPANESE DOLLS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration | doll | festival | japanese"
  },
  {
    "no": "1042",
    "code": "1F38F",
    "char": "ðŸŽ",
    "name": "CARP STREAMER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "carp | celebration | streamer"
  },
  {
    "no": "1043",
    "code": "1F390",
    "char": "ðŸŽ",
    "name": "WIND CHIME",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bell | celebration | chime | wind"
  },
  {
    "no": "1044",
    "code": "1F391",
    "char": "ðŸŽ‘",
    "name": "MOON VIEWING CEREMONY\nâ‰Š moon ceremony",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration | ceremony | moon"
  },
  {
    "no": "1045",
    "code": "1F380",
    "char": "ðŸŽ€",
    "name": "RIBBON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration"
  },
  {
    "no": "1046",
    "code": "1F381",
    "char": "ðŸŽ",
    "name": "WRAPPED PRESENT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "box | celebration | gift | present | wrapped"
  },
  {
    "no": "1047",
    "code": "1F397",
    "char": "ðŸŽ—",
    "name": "REMINDER RIBBON",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "celebration | reminder | ribbon"
  },
  {
    "no": "1048",
    "code": "1F39F",
    "char": "ðŸŽŸ",
    "name": "ADMISSION TICKETS",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "admission | ticket"
  },
  {
    "no": "1049",
    "code": "1F3AB",
    "char": "ðŸŽ«",
    "name": "TICKET",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "admission"
  },
  {
    "no": "1050",
    "code": "1F396",
    "char": "ðŸŽ–",
    "name": "MILITARY MEDAL",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "celebration | medal | military"
  },
  {
    "no": "1051",
    "code": "1F3C6",
    "char": "ðŸ†",
    "name": "TROPHY",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "prize"
  },
  {
    "no": "1052",
    "code": "1F3C5",
    "char": "ðŸ…",
    "name": "SPORTS MEDAL",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "medal"
  },
  {
    "no": "1053",
    "code": "1F947",
    "char": "ðŸ¥‡",
    "name": "FIRST PLACE MEDAL\nâ‰Š 1st place medal",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "first | gold | medal"
  },
  {
    "no": "1054",
    "code": "1F948",
    "char": "ðŸ¥ˆ",
    "name": "SECOND PLACE MEDAL\nâ‰Š 2nd place medal",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "medal | second | silver"
  },
  {
    "no": "1055",
    "code": "1F949",
    "char": "ðŸ¥‰",
    "name": "THIRD PLACE MEDAL\nâ‰Š 3rd place medal",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "bronze | medal | third"
  },
  {
    "no": "1056",
    "code": "26BD",
    "char": "âš½",
    "name": "SOCCER BALL",
    "date": "2009Ê²",
    "default": "emoji",
    "keywords": "ball | soccer"
  },
  {
    "no": "1057",
    "code": "26BE",
    "char": "âš¾",
    "name": "BASEBALL",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "ball"
  },
  {
    "no": "1058",
    "code": "1F3C0",
    "char": "ðŸ€",
    "name": "BASKETBALL AND HOOP\nâ‰Š basketball",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ball | hoop"
  },
  {
    "no": "1059",
    "code": "1F3D0",
    "char": "ðŸ",
    "name": "VOLLEYBALL",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "ball | game"
  },
  {
    "no": "1060",
    "code": "1F3C8",
    "char": "ðŸˆ",
    "name": "AMERICAN FOOTBALL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "american | ball | football"
  },
  {
    "no": "1061",
    "code": "1F3C9",
    "char": "ðŸ‰",
    "name": "RUGBY FOOTBALL",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "ball | football | rugby"
  },
  {
    "no": "1062",
    "code": "1F3BE",
    "char": "ðŸŽ¾",
    "name": "TENNIS RACQUET AND BALL\nâ‰Š tennis",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ball | racquet"
  },
  {
    "no": "1063",
    "code": "1F3B1",
    "char": "ðŸŽ±",
    "name": "BILLIARDS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "8 | 8 ball | ball | billiard | eight | game"
  },
  {
    "no": "1064",
    "code": "1F3B3",
    "char": "ðŸŽ³",
    "name": "BOWLING",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ball | game"
  },
  {
    "no": "1065",
    "code": "1F3CF",
    "char": "ðŸ",
    "name": "CRICKET BAT AND BALL\nâ‰Š cricket",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "ball | bat | game"
  },
  {
    "no": "1066",
    "code": "1F3D1",
    "char": "ðŸ‘",
    "name": "FIELD HOCKEY STICK AND BALL\nâ‰Š field hockey",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "ball | field | game | hockey | stick"
  },
  {
    "no": "1067",
    "code": "1F3D2",
    "char": "ðŸ’",
    "name": "ICE HOCKEY STICK AND PUCK",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "game | hockey | ice | puck | stick"
  },
  {
    "no": "1068",
    "code": "1F3D3",
    "char": "ðŸ“",
    "name": "TABLE TENNIS PADDLE AND BALL\nâ‰Š ping pong",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "ball | bat | game | paddle | table tennis"
  },
  {
    "no": "1069",
    "code": "1F3F8",
    "char": "ðŸ¸",
    "name": "BADMINTON RACQUET AND SHUTTLECOCK\nâ‰Š badminton",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "birdie | game | racquet | shuttlecock"
  },
  {
    "no": "1070",
    "code": "1F94A",
    "char": "ðŸ¥Š",
    "name": "BOXING GLOVE",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "boxing | glove | sport"
  },
  {
    "no": "1071",
    "code": "1F94B",
    "char": "ðŸ¥‹",
    "name": "MARTIAL ARTS UNIFORM",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "judo | karate | martial arts | sport | taekwondo | uniform"
  },
  {
    "no": "1072",
    "code": "1F945",
    "char": "ðŸ¥…",
    "name": "GOAL NET",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "goal | net | sport"
  },
  {
    "no": "1073",
    "code": "1F3AF",
    "char": "ðŸŽ¯",
    "name": "DIRECT HIT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bull | bullseye | dart | eye | game | hit | target"
  },
  {
    "no": "1074",
    "code": "26F3",
    "char": "â›³",
    "name": "FLAG IN HOLE",
    "date": "2009ÂªÊ²Ê·",
    "default": "emoji",
    "keywords": "golf | hole"
  },
  {
    "no": "1075",
    "code": "26F8",
    "char": "â›¸",
    "name": "ICE SKATE",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "ice | skate"
  },
  {
    "no": "1076",
    "code": "1F3A3",
    "char": "ðŸŽ£",
    "name": "FISHING POLE AND FISH\nâ‰Š fishing pole",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fish | pole"
  },
  {
    "no": "1077",
    "code": "1F3BD",
    "char": "ðŸŽ½",
    "name": "RUNNING SHIRT WITH SASH\nâ‰Š running shirt",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "running | sash | shirt"
  },
  {
    "no": "1078",
    "code": "1F3BF",
    "char": "ðŸŽ¿",
    "name": "SKI AND SKI BOOT\nâ‰Š skis",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ski | snow"
  },
  {
    "no": "1079",
    "code": "1F93A",
    "char": "ðŸ¤º",
    "name": "FENCER\nâ‰Š person fencing",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "fencer | fencing | person | sport | sword"
  },
  {
    "no": "1080",
    "code": "1F3C7",
    "char": "ðŸ‡",
    "name": "HORSE RACING",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "horse | jockey | racehorse | racing"
  },
  {
    "no": "1081",
    "code": "26F7",
    "char": "â›·",
    "name": "SKIER",
    "date": "2009ÂªÊ·",
    "default": "text*",
    "keywords": "ski | snow"
  },
  {
    "no": "1082",
    "code": "1F3C2",
    "char": "ðŸ‚",
    "name": "SNOWBOARDER",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "ski | snow | snowboard"
  },
  {
    "no": "1083",
    "code": "1F3CC",
    "char": "ðŸŒ",
    "name": "GOLFER\nâ‰Š person golfing",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "ball | golf"
  },
  {
    "no": "1084",
    "code": "1F3C4",
    "char": "ðŸ„",
    "name": "SURFER\nâ‰Š person surfing",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "surfing"
  },
  {
    "no": "1085",
    "code": "1F3C4 1F3FB",
    "char": "ðŸ„ðŸ»",
    "name": "person surfing, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "surfing | type-1-2"
  },
  {
    "no": "1086",
    "code": "1F3C4 1F3FC",
    "char": "ðŸ„ðŸ¼",
    "name": "person surfing, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "surfing | type-3"
  },
  {
    "no": "1087",
    "code": "1F3C4 1F3FD",
    "char": "ðŸ„ðŸ½",
    "name": "person surfing, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "surfing | type-4"
  },
  {
    "no": "1088",
    "code": "1F3C4 1F3FE",
    "char": "ðŸ„ðŸ¾",
    "name": "person surfing, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "surfing | type-5"
  },
  {
    "no": "1089",
    "code": "1F3C4 1F3FF",
    "char": "ðŸ„ðŸ¿",
    "name": "person surfing, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "surfing | type-6"
  },
  {
    "no": "1090",
    "code": "1F6A3",
    "char": "ðŸš£",
    "name": "ROWBOAT\nâ‰Š person rowing boat",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "boat | rowboat | vehicle"
  },
  {
    "no": "1091",
    "code": "1F6A3 1F3FB",
    "char": "ðŸš£ðŸ»",
    "name": "person rowing boat, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boat | rowboat | type-1-2 | vehicle"
  },
  {
    "no": "1092",
    "code": "1F6A3 1F3FC",
    "char": "ðŸš£ðŸ¼",
    "name": "person rowing boat, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boat | rowboat | type-3 | vehicle"
  },
  {
    "no": "1093",
    "code": "1F6A3 1F3FD",
    "char": "ðŸš£ðŸ½",
    "name": "person rowing boat, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boat | rowboat | type-4 | vehicle"
  },
  {
    "no": "1094",
    "code": "1F6A3 1F3FE",
    "char": "ðŸš£ðŸ¾",
    "name": "person rowing boat, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boat | rowboat | type-5 | vehicle"
  },
  {
    "no": "1095",
    "code": "1F6A3 1F3FF",
    "char": "ðŸš£ðŸ¿",
    "name": "person rowing boat, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "boat | rowboat | type-6 | vehicle"
  },
  {
    "no": "1096",
    "code": "1F3CA",
    "char": "ðŸŠ",
    "name": "SWIMMER\nâ‰Š person swimming",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "swim"
  },
  {
    "no": "1097",
    "code": "1F3CA 1F3FB",
    "char": "ðŸŠðŸ»",
    "name": "person swimming, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "swim | type-1-2"
  },
  {
    "no": "1098",
    "code": "1F3CA 1F3FC",
    "char": "ðŸŠðŸ¼",
    "name": "person swimming, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "swim | type-3"
  },
  {
    "no": "1099",
    "code": "1F3CA 1F3FD",
    "char": "ðŸŠðŸ½",
    "name": "person swimming, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "swim | type-4"
  },
  {
    "no": "1100",
    "code": "1F3CA 1F3FE",
    "char": "ðŸŠðŸ¾",
    "name": "person swimming, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "swim | type-5"
  },
  {
    "no": "1101",
    "code": "1F3CA 1F3FF",
    "char": "ðŸŠðŸ¿",
    "name": "person swimming, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "swim | type-6"
  },
  {
    "no": "1102",
    "code": "26F9",
    "char": "â›¹",
    "name": "PERSON WITH BALL",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "ball"
  },
  {
    "no": "1103",
    "code": "26F9 1F3FB",
    "char": "â›¹ðŸ»",
    "name": "person with ball, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ball | type-1-2"
  },
  {
    "no": "1104",
    "code": "26F9 1F3FC",
    "char": "â›¹ðŸ¼",
    "name": "person with ball, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ball | type-3"
  },
  {
    "no": "1105",
    "code": "26F9 1F3FD",
    "char": "â›¹ðŸ½",
    "name": "person with ball, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ball | type-4"
  },
  {
    "no": "1106",
    "code": "26F9 1F3FE",
    "char": "â›¹ðŸ¾",
    "name": "person with ball, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ball | type-5"
  },
  {
    "no": "1107",
    "code": "26F9 1F3FF",
    "char": "â›¹ðŸ¿",
    "name": "person with ball, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "ball | type-6"
  },
  {
    "no": "1108",
    "code": "1F3CB",
    "char": "ðŸ‹",
    "name": "WEIGHT LIFTER\nâ‰Š person weight lifting",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "lifter | weight"
  },
  {
    "no": "1109",
    "code": "1F3CB 1F3FB",
    "char": "ðŸ‹ðŸ»",
    "name": "person weight lifting, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "lifter | type-1-2 | weight"
  },
  {
    "no": "1110",
    "code": "1F3CB 1F3FC",
    "char": "ðŸ‹ðŸ¼",
    "name": "person weight lifting, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "lifter | type-3 | weight"
  },
  {
    "no": "1111",
    "code": "1F3CB 1F3FD",
    "char": "ðŸ‹ðŸ½",
    "name": "person weight lifting, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "lifter | type-4 | weight"
  },
  {
    "no": "1112",
    "code": "1F3CB 1F3FE",
    "char": "ðŸ‹ðŸ¾",
    "name": "person weight lifting, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "lifter | type-5 | weight"
  },
  {
    "no": "1113",
    "code": "1F3CB 1F3FF",
    "char": "ðŸ‹ðŸ¿",
    "name": "person weight lifting, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "lifter | type-6 | weight"
  },
  {
    "no": "1114",
    "code": "1F6B4",
    "char": "ðŸš´",
    "name": "BICYCLIST\nâ‰Š person biking",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bicycle | bike | cyclist"
  },
  {
    "no": "1115",
    "code": "1F6B4 1F3FB",
    "char": "ðŸš´ðŸ»",
    "name": "person biking, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bike | cyclist | type-1-2"
  },
  {
    "no": "1116",
    "code": "1F6B4 1F3FC",
    "char": "ðŸš´ðŸ¼",
    "name": "person biking, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bike | cyclist | type-3"
  },
  {
    "no": "1117",
    "code": "1F6B4 1F3FD",
    "char": "ðŸš´ðŸ½",
    "name": "person biking, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bike | cyclist | type-4"
  },
  {
    "no": "1118",
    "code": "1F6B4 1F3FE",
    "char": "ðŸš´ðŸ¾",
    "name": "person biking, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bike | cyclist | type-5"
  },
  {
    "no": "1119",
    "code": "1F6B4 1F3FF",
    "char": "ðŸš´ðŸ¿",
    "name": "person biking, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bike | cyclist | type-6"
  },
  {
    "no": "1120",
    "code": "1F6B5",
    "char": "ðŸšµ",
    "name": "MOUNTAIN BICYCLIST\nâ‰Š person mountain biking",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bicycle | bicyclist | bike | cyclist | mountain"
  },
  {
    "no": "1121",
    "code": "1F6B5 1F3FB",
    "char": "ðŸšµðŸ»",
    "name": "person mountain biking, type-1-2",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-1-2"
  },
  {
    "no": "1122",
    "code": "1F6B5 1F3FC",
    "char": "ðŸšµðŸ¼",
    "name": "person mountain biking, type-3",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-3"
  },
  {
    "no": "1123",
    "code": "1F6B5 1F3FD",
    "char": "ðŸšµðŸ½",
    "name": "person mountain biking, type-4",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-4"
  },
  {
    "no": "1124",
    "code": "1F6B5 1F3FE",
    "char": "ðŸšµðŸ¾",
    "name": "person mountain biking, type-5",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-5"
  },
  {
    "no": "1125",
    "code": "1F6B5 1F3FF",
    "char": "ðŸšµðŸ¿",
    "name": "person mountain biking, type-6",
    "date": "2015Ë£",
    "default": "n/a",
    "keywords": "bicycle | bicyclist | bike | cyclist | mountain | type-6"
  },
  {
    "no": "1126",
    "code": "1F938",
    "char": "ðŸ¤¸",
    "name": "PERSON DOING CARTWHEEL",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "cartwheel | gymnastics | person | sport"
  },
  {
    "no": "1127",
    "code": "1F938 1F3FB",
    "char": "ðŸ¤¸ðŸ»",
    "name": "person doing cartwheel, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cartwheel | gymnastics | person | sport | type-1-2"
  },
  {
    "no": "1128",
    "code": "1F938 1F3FC",
    "char": "ðŸ¤¸ðŸ¼",
    "name": "person doing cartwheel, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cartwheel | gymnastics | person | sport | type-3"
  },
  {
    "no": "1129",
    "code": "1F938 1F3FD",
    "char": "ðŸ¤¸ðŸ½",
    "name": "person doing cartwheel, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cartwheel | gymnastics | person | sport | type-4"
  },
  {
    "no": "1130",
    "code": "1F938 1F3FE",
    "char": "ðŸ¤¸ðŸ¾",
    "name": "person doing cartwheel, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cartwheel | gymnastics | person | sport | type-5"
  },
  {
    "no": "1131",
    "code": "1F938 1F3FF",
    "char": "ðŸ¤¸ðŸ¿",
    "name": "person doing cartwheel, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "cartwheel | gymnastics | person | sport | type-6"
  },
  {
    "no": "1132",
    "code": "1F93C",
    "char": "ðŸ¤¼",
    "name": "WRESTLERS\nâ‰Š people wrestling",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "person | sport | wrestle | wrestler"
  },
  {
    "no": "1133",
    "code": "1F93C 1F3FB",
    "char": "ðŸ¤¼ðŸ»",
    "name": "people wrestling, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | sport | type-1-2 | wrestle | wrestler"
  },
  {
    "no": "1134",
    "code": "1F93C 1F3FC",
    "char": "ðŸ¤¼ðŸ¼",
    "name": "people wrestling, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | sport | type-3 | wrestle | wrestler"
  },
  {
    "no": "1135",
    "code": "1F93C 1F3FD",
    "char": "ðŸ¤¼ðŸ½",
    "name": "people wrestling, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | sport | type-4 | wrestle | wrestler"
  },
  {
    "no": "1136",
    "code": "1F93C 1F3FE",
    "char": "ðŸ¤¼ðŸ¾",
    "name": "people wrestling, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | sport | type-5 | wrestle | wrestler"
  },
  {
    "no": "1137",
    "code": "1F93C 1F3FF",
    "char": "ðŸ¤¼ðŸ¿",
    "name": "people wrestling, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | sport | type-6 | wrestle | wrestler"
  },
  {
    "no": "1138",
    "code": "1F93D",
    "char": "ðŸ¤½",
    "name": "WATER POLO\nâ‰Š person playing water polo",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "person | polo | sport | water"
  },
  {
    "no": "1139",
    "code": "1F93D 1F3FB",
    "char": "ðŸ¤½ðŸ»",
    "name": "person playing water polo, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | polo | sport | type-1-2 | water"
  },
  {
    "no": "1140",
    "code": "1F93D 1F3FC",
    "char": "ðŸ¤½ðŸ¼",
    "name": "person playing water polo, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | polo | sport | type-3 | water"
  },
  {
    "no": "1141",
    "code": "1F93D 1F3FD",
    "char": "ðŸ¤½ðŸ½",
    "name": "person playing water polo, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | polo | sport | type-4 | water"
  },
  {
    "no": "1142",
    "code": "1F93D 1F3FE",
    "char": "ðŸ¤½ðŸ¾",
    "name": "person playing water polo, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | polo | sport | type-5 | water"
  },
  {
    "no": "1143",
    "code": "1F93D 1F3FF",
    "char": "ðŸ¤½ðŸ¿",
    "name": "person playing water polo, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "person | polo | sport | type-6 | water"
  },
  {
    "no": "1144",
    "code": "1F93E",
    "char": "ðŸ¤¾",
    "name": "HANDBALL\nâ‰Š person playing handball",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "ball | handball | person | sport"
  },
  {
    "no": "1145",
    "code": "1F93E 1F3FB",
    "char": "ðŸ¤¾ðŸ»",
    "name": "person playing handball, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "ball | handball | person | sport | type-1-2"
  },
  {
    "no": "1146",
    "code": "1F93E 1F3FC",
    "char": "ðŸ¤¾ðŸ¼",
    "name": "person playing handball, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "ball | handball | person | sport | type-3"
  },
  {
    "no": "1147",
    "code": "1F93E 1F3FD",
    "char": "ðŸ¤¾ðŸ½",
    "name": "person playing handball, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "ball | handball | person | sport | type-4"
  },
  {
    "no": "1148",
    "code": "1F93E 1F3FE",
    "char": "ðŸ¤¾ðŸ¾",
    "name": "person playing handball, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "ball | handball | person | sport | type-5"
  },
  {
    "no": "1149",
    "code": "1F93E 1F3FF",
    "char": "ðŸ¤¾ðŸ¿",
    "name": "person playing handball, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "ball | handball | person | sport | type-6"
  },
  {
    "no": "1150",
    "code": "1F939",
    "char": "ðŸ¤¹",
    "name": "JUGGLING\nâ‰Š person juggling",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "balance | juggle | multitask | skill"
  },
  {
    "no": "1151",
    "code": "1F939 1F3FB",
    "char": "ðŸ¤¹ðŸ»",
    "name": "person juggling, type-1-2",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "balance | juggle | multitask | skill | type-1-2"
  },
  {
    "no": "1152",
    "code": "1F939 1F3FC",
    "char": "ðŸ¤¹ðŸ¼",
    "name": "person juggling, type-3",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "balance | juggle | multitask | skill | type-3"
  },
  {
    "no": "1153",
    "code": "1F939 1F3FD",
    "char": "ðŸ¤¹ðŸ½",
    "name": "person juggling, type-4",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "balance | juggle | multitask | skill | type-4"
  },
  {
    "no": "1154",
    "code": "1F939 1F3FE",
    "char": "ðŸ¤¹ðŸ¾",
    "name": "person juggling, type-5",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "balance | juggle | multitask | skill | type-5"
  },
  {
    "no": "1155",
    "code": "1F939 1F3FF",
    "char": "ðŸ¤¹ðŸ¿",
    "name": "person juggling, type-6",
    "date": "2016Ë£",
    "default": "n/a",
    "keywords": "balance | juggle | multitask | skill | type-6"
  },
  {
    "no": "1156",
    "code": "1F3AE",
    "char": "ðŸŽ®",
    "name": "VIDEO GAME",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "controller | game"
  },
  {
    "no": "1157",
    "code": "1F579",
    "char": "ðŸ•¹",
    "name": "JOYSTICK",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "game | video game"
  },
  {
    "no": "1158",
    "code": "1F3B2",
    "char": "ðŸŽ²",
    "name": "GAME DIE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "dice | die | game"
  },
  {
    "no": "1159",
    "code": "2660",
    "char": "â™ ",
    "name": "BLACK SPADE SUIT\nâ‰Š spade suit",
    "date": "1995á¶»ÂªÊ²",
    "default": "text*",
    "keywords": "card | game | spade | suit"
  },
  {
    "no": "1160",
    "code": "2665",
    "char": "â™¥",
    "name": "BLACK HEART SUIT\nâ‰Š heart suit",
    "date": "1995á¶»ÂªÊ²",
    "default": "text*",
    "keywords": "card | game | heart | hearts | suit"
  },
  {
    "no": "1161",
    "code": "2666",
    "char": "â™¦",
    "name": "BLACK DIAMOND SUIT\nâ‰Š diamond suit",
    "date": "1995á¶»ÂªÊ²",
    "default": "text*",
    "keywords": "card | diamond | diamonds | game | suit"
  },
  {
    "no": "1162",
    "code": "2663",
    "char": "â™£",
    "name": "BLACK CLUB SUIT\nâ‰Š club suit",
    "date": "1995á¶»ÂªÊ²",
    "default": "text*",
    "keywords": "card | club | clubs | game | suit"
  },
  {
    "no": "1163",
    "code": "1F0CF",
    "char": "ðŸƒ",
    "name": "PLAYING CARD BLACK JOKER\nâ‰Š joker",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "card | game | playing"
  },
  {
    "no": "1164",
    "code": "1F004",
    "char": "ðŸ€„",
    "name": "MAHJONG TILE RED DRAGON\nâ‰Š mahjong red dragon",
    "date": "2008Ê²",
    "default": "emoji",
    "keywords": "game | mahjong | red"
  },
  {
    "no": "1165",
    "code": "1F3B4",
    "char": "ðŸŽ´",
    "name": "FLOWER PLAYING CARDS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "card | flower | game | japanese | playing"
  },
  {
    "no": "1166",
    "code": "1F507",
    "char": "ðŸ”‡",
    "name": "SPEAKER WITH CANCELLATION STROKE\nâ‰Š speaker off",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "mute | quiet | silent | speaker | volume"
  },
  {
    "no": "1167",
    "code": "1F508",
    "char": "ðŸ”ˆ",
    "name": "SPEAKER",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "volume"
  },
  {
    "no": "1168",
    "code": "1F509",
    "char": "ðŸ”‰",
    "name": "SPEAKER WITH ONE SOUND WAVE\nâ‰Š speaker on",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "low | speaker | volume | wave"
  },
  {
    "no": "1169",
    "code": "1F50A",
    "char": "ðŸ”Š",
    "name": "SPEAKER WITH THREE SOUND WAVES\nâ‰Š speaker loud",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "3 | high | loud | speaker | three | volume"
  },
  {
    "no": "1170",
    "code": "1F4E2",
    "char": "ðŸ“¢",
    "name": "PUBLIC ADDRESS LOUDSPEAKER\nâ‰Š loudspeaker",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "loud | public address"
  },
  {
    "no": "1171",
    "code": "1F4E3",
    "char": "ðŸ“£",
    "name": "CHEERING MEGAPHONE\nâ‰Š megaphone",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cheering"
  },
  {
    "no": "1172",
    "code": "1F4EF",
    "char": "ðŸ“¯",
    "name": "POSTAL HORN",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "horn | post | postal"
  },
  {
    "no": "1173",
    "code": "1F514",
    "char": "ðŸ””",
    "name": "BELL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bell"
  },
  {
    "no": "1174",
    "code": "1F515",
    "char": "ðŸ”•",
    "name": "BELL WITH CANCELLATION STROKE\nâ‰Š bell with slash",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bell | forbidden | mute | no | not | prohibited | quiet | silent"
  },
  {
    "no": "1175",
    "code": "1F3BC",
    "char": "ðŸŽ¼",
    "name": "MUSICAL SCORE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "music | score"
  },
  {
    "no": "1176",
    "code": "1F3B5",
    "char": "ðŸŽµ",
    "name": "MUSICAL NOTE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "music | note"
  },
  {
    "no": "1177",
    "code": "1F3B6",
    "char": "ðŸŽ¶",
    "name": "MULTIPLE MUSICAL NOTES\nâ‰Š musical notes",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "music | note | notes"
  },
  {
    "no": "1178",
    "code": "1F399",
    "char": "ðŸŽ™",
    "name": "STUDIO MICROPHONE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "mic | microphone | music | studio"
  },
  {
    "no": "1179",
    "code": "1F39A",
    "char": "ðŸŽš",
    "name": "LEVEL SLIDER",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "level | music | slider"
  },
  {
    "no": "1180",
    "code": "1F39B",
    "char": "ðŸŽ›",
    "name": "CONTROL KNOBS",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "control | knobs | music"
  },
  {
    "no": "1181",
    "code": "1F3A4",
    "char": "ðŸŽ¤",
    "name": "MICROPHONE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "karaoke | mic"
  },
  {
    "no": "1182",
    "code": "1F3A7",
    "char": "ðŸŽ§",
    "name": "HEADPHONE",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "earbud"
  },
  {
    "no": "1183",
    "code": "1F4FB",
    "char": "ðŸ“»",
    "name": "RADIO",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "video"
  },
  {
    "no": "1184",
    "code": "1F3B7",
    "char": "ðŸŽ·",
    "name": "SAXOPHONE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "instrument | music | sax"
  },
  {
    "no": "1185",
    "code": "1F3B8",
    "char": "ðŸŽ¸",
    "name": "GUITAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "instrument | music"
  },
  {
    "no": "1186",
    "code": "1F3B9",
    "char": "ðŸŽ¹",
    "name": "MUSICAL KEYBOARD",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "instrument | keyboard | music | piano"
  },
  {
    "no": "1187",
    "code": "1F3BA",
    "char": "ðŸŽº",
    "name": "TRUMPET",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "instrument | music"
  },
  {
    "no": "1188",
    "code": "1F3BB",
    "char": "ðŸŽ»",
    "name": "VIOLIN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "instrument | music"
  },
  {
    "no": "1189",
    "code": "1F941",
    "char": "ðŸ¥",
    "name": "DRUM WITH DRUMSTICKS\nâ‰Š drum",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "drum | drumsticks | music"
  },
  {
    "no": "1190",
    "code": "1F4F1",
    "char": "ðŸ“±",
    "name": "MOBILE PHONE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cell | mobile | phone | telephone"
  },
  {
    "no": "1191",
    "code": "1F4F2",
    "char": "ðŸ“²",
    "name": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT\nâ‰Š mobile phone with arrow",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | call | cell | mobile | phone | receive | telephone"
  },
  {
    "no": "1192",
    "code": "260E",
    "char": "â˜Ž",
    "name": "BLACK TELEPHONE\nâ‰Š telephone",
    "date": "1995á¶»ÂªÊ²",
    "default": "text*",
    "keywords": "phone"
  },
  {
    "no": "1193",
    "code": "1F4DE",
    "char": "ðŸ“ž",
    "name": "TELEPHONE RECEIVER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "phone | receiver | telephone"
  },
  {
    "no": "1194",
    "code": "1F4DF",
    "char": "ðŸ“Ÿ",
    "name": "PAGER",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "pager"
  },
  {
    "no": "1195",
    "code": "1F4E0",
    "char": "ðŸ“ ",
    "name": "FAX MACHINE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fax"
  },
  {
    "no": "1196",
    "code": "1F50B",
    "char": "ðŸ”‹",
    "name": "BATTERY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "battery"
  },
  {
    "no": "1197",
    "code": "1F50C",
    "char": "ðŸ”Œ",
    "name": "ELECTRIC PLUG",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "electric | electricity | plug"
  },
  {
    "no": "1198",
    "code": "1F4BB",
    "char": "ðŸ’»",
    "name": "PERSONAL COMPUTER\nâ‰Š laptop computer",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "computer | pc | personal"
  },
  {
    "no": "1199",
    "code": "1F5A5",
    "char": "ðŸ–¥",
    "name": "DESKTOP COMPUTER",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "computer | desktop"
  },
  {
    "no": "1200",
    "code": "1F5A8",
    "char": "ðŸ–¨",
    "name": "PRINTER",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "computer"
  },
  {
    "no": "1201",
    "code": "2328",
    "char": "âŒ¨",
    "name": "KEYBOARD",
    "date": "1995Ë£",
    "default": "text*",
    "keywords": "computer"
  },
  {
    "no": "1202",
    "code": "1F5B1",
    "char": "ðŸ–±",
    "name": "THREE BUTTON MOUSE\nâ‰Š computer mouse",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "3 | button | computer | mouse | three"
  },
  {
    "no": "1203",
    "code": "1F5B2",
    "char": "ðŸ–²",
    "name": "TRACKBALL",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "computer"
  },
  {
    "no": "1204",
    "code": "1F4BD",
    "char": "ðŸ’½",
    "name": "MINIDISC",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "computer | disk | minidisk | optical"
  },
  {
    "no": "1205",
    "code": "1F4BE",
    "char": "ðŸ’¾",
    "name": "FLOPPY DISK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "computer | disk | floppy"
  },
  {
    "no": "1206",
    "code": "1F4BF",
    "char": "ðŸ’¿",
    "name": "OPTICAL DISC",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "blu-ray | cd | computer | disk | dvd | optical"
  },
  {
    "no": "1207",
    "code": "1F4C0",
    "char": "ðŸ“€",
    "name": "DVD",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blu-ray | cd | computer | disk | optical"
  },
  {
    "no": "1208",
    "code": "1F3A5",
    "char": "ðŸŽ¥",
    "name": "MOVIE CAMERA",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "camera | cinema | movie"
  },
  {
    "no": "1209",
    "code": "1F39E",
    "char": "ðŸŽž",
    "name": "FILM FRAMES",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cinema | film | frames | movie"
  },
  {
    "no": "1210",
    "code": "1F4FD",
    "char": "ðŸ“½",
    "name": "FILM PROJECTOR",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cinema | film | movie | projector | video"
  },
  {
    "no": "1211",
    "code": "1F3AC",
    "char": "ðŸŽ¬",
    "name": "CLAPPER BOARD",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "clapper | movie"
  },
  {
    "no": "1212",
    "code": "1F4FA",
    "char": "ðŸ“º",
    "name": "TELEVISION",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "tv | video"
  },
  {
    "no": "1213",
    "code": "1F4F7",
    "char": "ðŸ“·",
    "name": "CAMERA",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "video"
  },
  {
    "no": "1214",
    "code": "1F4F8",
    "char": "ðŸ“¸",
    "name": "CAMERA WITH FLASH",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "camera | flash | video"
  },
  {
    "no": "1215",
    "code": "1F4F9",
    "char": "ðŸ“¹",
    "name": "VIDEO CAMERA",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "camera | video"
  },
  {
    "no": "1216",
    "code": "1F4FC",
    "char": "ðŸ“¼",
    "name": "VIDEOCASSETTE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "tape | vhs | video"
  },
  {
    "no": "1217",
    "code": "1F50D",
    "char": "ðŸ”",
    "name": "LEFT-POINTING MAGNIFYING GLASS",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "glass | magnifying | search | tool"
  },
  {
    "no": "1218",
    "code": "1F50E",
    "char": "ðŸ”Ž",
    "name": "RIGHT-POINTING MAGNIFYING GLASS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "glass | magnifying | search | tool"
  },
  {
    "no": "1219",
    "code": "1F52C",
    "char": "ðŸ”¬",
    "name": "MICROSCOPE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "tool"
  },
  {
    "no": "1220",
    "code": "1F52D",
    "char": "ðŸ”­",
    "name": "TELESCOPE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "tool"
  },
  {
    "no": "1221",
    "code": "1F4E1",
    "char": "ðŸ“¡",
    "name": "SATELLITE ANTENNA",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "antenna | dish | satellite"
  },
  {
    "no": "1222",
    "code": "1F56F",
    "char": "ðŸ•¯",
    "name": "CANDLE",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "light"
  },
  {
    "no": "1223",
    "code": "1F4A1",
    "char": "ðŸ’¡",
    "name": "ELECTRIC LIGHT BULB\nâ‰Š light bulb",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bulb | comic | electric | idea | light"
  },
  {
    "no": "1224",
    "code": "1F526",
    "char": "ðŸ”¦",
    "name": "ELECTRIC TORCH\nâ‰Š flashlight",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "electric | light | tool | torch"
  },
  {
    "no": "1225",
    "code": "1F3EE",
    "char": "ðŸ®",
    "name": "IZAKAYA LANTERN\nâ‰Š red paper lantern",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bar | japanese | lantern | light | red"
  },
  {
    "no": "1226",
    "code": "1F4D4",
    "char": "ðŸ“”",
    "name": "NOTEBOOK WITH DECORATIVE COVER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "book | cover | decorated | notebook"
  },
  {
    "no": "1227",
    "code": "1F4D5",
    "char": "ðŸ“•",
    "name": "CLOSED BOOK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "book | closed"
  },
  {
    "no": "1228",
    "code": "1F4D6",
    "char": "ðŸ“–",
    "name": "OPEN BOOK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "book | open"
  },
  {
    "no": "1229",
    "code": "1F4D7",
    "char": "ðŸ“—",
    "name": "GREEN BOOK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "book | green"
  },
  {
    "no": "1230",
    "code": "1F4D8",
    "char": "ðŸ“˜",
    "name": "BLUE BOOK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blue | book"
  },
  {
    "no": "1231",
    "code": "1F4D9",
    "char": "ðŸ“™",
    "name": "ORANGE BOOK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "book | orange"
  },
  {
    "no": "1232",
    "code": "1F4DA",
    "char": "ðŸ“š",
    "name": "BOOKS",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "book"
  },
  {
    "no": "1233",
    "code": "1F4D3",
    "char": "ðŸ““",
    "name": "NOTEBOOK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "notebook"
  },
  {
    "no": "1234",
    "code": "1F4D2",
    "char": "ðŸ“’",
    "name": "LEDGER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "notebook"
  },
  {
    "no": "1235",
    "code": "1F4C3",
    "char": "ðŸ“ƒ",
    "name": "PAGE WITH CURL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "curl | document | page"
  },
  {
    "no": "1236",
    "code": "1F4DC",
    "char": "ðŸ“œ",
    "name": "SCROLL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "paper"
  },
  {
    "no": "1237",
    "code": "1F4C4",
    "char": "ðŸ“„",
    "name": "PAGE FACING UP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "document | page"
  },
  {
    "no": "1238",
    "code": "1F4F0",
    "char": "ðŸ“°",
    "name": "NEWSPAPER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "news | paper"
  },
  {
    "no": "1239",
    "code": "1F5DE",
    "char": "ðŸ—ž",
    "name": "ROLLED-UP NEWSPAPER",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "news | newspaper | paper | rolled"
  },
  {
    "no": "1240",
    "code": "1F4D1",
    "char": "ðŸ“‘",
    "name": "BOOKMARK TABS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bookmark | mark | marker | tabs"
  },
  {
    "no": "1241",
    "code": "1F516",
    "char": "ðŸ”–",
    "name": "BOOKMARK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "mark"
  },
  {
    "no": "1242",
    "code": "1F3F7",
    "char": "ðŸ·",
    "name": "LABEL",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "label"
  },
  {
    "no": "1243",
    "code": "1F4B0",
    "char": "ðŸ’°",
    "name": "MONEY BAG",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "bag | dollar | money | moneybag"
  },
  {
    "no": "1244",
    "code": "1F4B4",
    "char": "ðŸ’´",
    "name": "BANKNOTE WITH YEN SIGN\nâ‰Š yen banknote",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bank | banknote | bill | currency | money | note | yen"
  },
  {
    "no": "1245",
    "code": "1F4B5",
    "char": "ðŸ’µ",
    "name": "BANKNOTE WITH DOLLAR SIGN\nâ‰Š dollar banknote",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bank | banknote | bill | currency | dollar | money | note"
  },
  {
    "no": "1246",
    "code": "1F4B6",
    "char": "ðŸ’¶",
    "name": "BANKNOTE WITH EURO SIGN\nâ‰Š euro banknote",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bank | banknote | bill | currency | euro | money | note"
  },
  {
    "no": "1247",
    "code": "1F4B7",
    "char": "ðŸ’·",
    "name": "BANKNOTE WITH POUND SIGN\nâ‰Š pound banknote",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bank | banknote | bill | currency | money | note | pound"
  },
  {
    "no": "1248",
    "code": "1F4B8",
    "char": "ðŸ’¸",
    "name": "MONEY WITH WINGS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bank | banknote | bill | dollar | fly | money | note | wings"
  },
  {
    "no": "1249",
    "code": "1F4B3",
    "char": "ðŸ’³",
    "name": "CREDIT CARD",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "bank | card | credit | money"
  },
  {
    "no": "1250",
    "code": "1F4B9",
    "char": "ðŸ’¹",
    "name": "CHART WITH UPWARDS TREND AND YEN SIGN\nâ‰Š chart increasing with yen",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bank | chart | currency | graph | growth | market | money | rise | trend | upward | yen"
  },
  {
    "no": "1251",
    "code": "1F4B1",
    "char": "ðŸ’±",
    "name": "CURRENCY EXCHANGE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bank | currency | exchange | money"
  },
  {
    "no": "1252",
    "code": "1F4B2",
    "char": "ðŸ’²",
    "name": "HEAVY DOLLAR SIGN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "currency | dollar | money"
  },
  {
    "no": "1253",
    "code": "2709",
    "char": "âœ‰",
    "name": "ENVELOPE",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "e-mail | email"
  },
  {
    "no": "1254",
    "code": "1F4E7",
    "char": "ðŸ“§",
    "name": "E-MAIL SYMBOL\nâ‰Š e-mail",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "email | letter | mail"
  },
  {
    "no": "1255",
    "code": "1F4E8",
    "char": "ðŸ“¨",
    "name": "INCOMING ENVELOPE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "e-mail | email | envelope | incoming | letter | mail | receive"
  },
  {
    "no": "1256",
    "code": "1F4E9",
    "char": "ðŸ“©",
    "name": "ENVELOPE WITH DOWNWARDS ARROW ABOVE\nâ‰Š envelope with arrow",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | down | e-mail | email | envelope | letter | mail | outgoing | sent"
  },
  {
    "no": "1257",
    "code": "1F4E4",
    "char": "ðŸ“¤",
    "name": "OUTBOX TRAY",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "box | letter | mail | outbox | sent | tray"
  },
  {
    "no": "1258",
    "code": "1F4E5",
    "char": "ðŸ“¥",
    "name": "INBOX TRAY",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "box | inbox | letter | mail | receive | tray"
  },
  {
    "no": "1259",
    "code": "1F4E6",
    "char": "ðŸ“¦",
    "name": "PACKAGE",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "box | parcel"
  },
  {
    "no": "1260",
    "code": "1F4EB",
    "char": "ðŸ“«",
    "name": "CLOSED MAILBOX WITH RAISED FLAG",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "closed | mail | mailbox | postbox"
  },
  {
    "no": "1261",
    "code": "1F4EA",
    "char": "ðŸ“ª",
    "name": "CLOSED MAILBOX WITH LOWERED FLAG",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "closed | lowered | mail | mailbox | postbox"
  },
  {
    "no": "1262",
    "code": "1F4EC",
    "char": "ðŸ“¬",
    "name": "OPEN MAILBOX WITH RAISED FLAG",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "mail | mailbox | open | postbox"
  },
  {
    "no": "1263",
    "code": "1F4ED",
    "char": "ðŸ“­",
    "name": "OPEN MAILBOX WITH LOWERED FLAG",
    "date": "2010Ê·",
    "default": "emoji",
    "keywords": "lowered | mail | mailbox | open | postbox"
  },
  {
    "no": "1264",
    "code": "1F4EE",
    "char": "ðŸ“®",
    "name": "POSTBOX",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "mail | mailbox"
  },
  {
    "no": "1265",
    "code": "1F5F3",
    "char": "ðŸ—³",
    "name": "BALLOT BOX WITH BALLOT",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "ballot | box"
  },
  {
    "no": "1266",
    "code": "270F",
    "char": "âœ",
    "name": "PENCIL",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "pencil"
  },
  {
    "no": "1267",
    "code": "2712",
    "char": "âœ’",
    "name": "BLACK NIB",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "nib | pen"
  },
  {
    "no": "1268",
    "code": "1F58B",
    "char": "ðŸ–‹",
    "name": "LOWER LEFT FOUNTAIN PEN\nâ‰Š fountain pen",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "fountain | pen"
  },
  {
    "no": "1269",
    "code": "1F58A",
    "char": "ðŸ–Š",
    "name": "LOWER LEFT BALLPOINT PEN\nâ‰Š pen",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "ballpoint"
  },
  {
    "no": "1270",
    "code": "1F58C",
    "char": "ðŸ–Œ",
    "name": "LOWER LEFT PAINTBRUSH\nâ‰Š paintbrush",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "painting"
  },
  {
    "no": "1271",
    "code": "1F58D",
    "char": "ðŸ–",
    "name": "LOWER LEFT CRAYON\nâ‰Š crayon",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "crayon"
  },
  {
    "no": "1272",
    "code": "1F4DD",
    "char": "ðŸ“",
    "name": "MEMO",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "pencil"
  },
  {
    "no": "1273",
    "code": "1F4BC",
    "char": "ðŸ’¼",
    "name": "BRIEFCASE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "briefcase"
  },
  {
    "no": "1274",
    "code": "1F4C1",
    "char": "ðŸ“",
    "name": "FILE FOLDER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "file | folder"
  },
  {
    "no": "1275",
    "code": "1F4C2",
    "char": "ðŸ“‚",
    "name": "OPEN FILE FOLDER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "file | folder | open"
  },
  {
    "no": "1276",
    "code": "1F5C2",
    "char": "ðŸ—‚",
    "name": "CARD INDEX DIVIDERS",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "card | dividers | index"
  },
  {
    "no": "1277",
    "code": "1F4C5",
    "char": "ðŸ“…",
    "name": "CALENDAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "date"
  },
  {
    "no": "1278",
    "code": "1F4C6",
    "char": "ðŸ“†",
    "name": "TEAR-OFF CALENDAR",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "calendar"
  },
  {
    "no": "1279",
    "code": "1F5D2",
    "char": "ðŸ—’",
    "name": "SPIRAL NOTE PAD\nâ‰Š spiral notepad",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "note | pad | spiral"
  },
  {
    "no": "1280",
    "code": "1F5D3",
    "char": "ðŸ—“",
    "name": "SPIRAL CALENDAR PAD\nâ‰Š spiral calendar",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "calendar | pad | spiral"
  },
  {
    "no": "1281",
    "code": "1F4C7",
    "char": "ðŸ“‡",
    "name": "CARD INDEX",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "card | index | rolodex"
  },
  {
    "no": "1282",
    "code": "1F4C8",
    "char": "ðŸ“ˆ",
    "name": "CHART WITH UPWARDS TREND\nâ‰Š chart increasing",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chart | graph | growth | trend | upward"
  },
  {
    "no": "1283",
    "code": "1F4C9",
    "char": "ðŸ“‰",
    "name": "CHART WITH DOWNWARDS TREND\nâ‰Š chart decreasing",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chart | down | graph | trend"
  },
  {
    "no": "1284",
    "code": "1F4CA",
    "char": "ðŸ“Š",
    "name": "BAR CHART",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bar | chart | graph"
  },
  {
    "no": "1285",
    "code": "1F4CB",
    "char": "ðŸ“‹",
    "name": "CLIPBOARD",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "clipboard"
  },
  {
    "no": "1286",
    "code": "1F4CC",
    "char": "ðŸ“Œ",
    "name": "PUSHPIN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "pin"
  },
  {
    "no": "1287",
    "code": "1F4CD",
    "char": "ðŸ“",
    "name": "ROUND PUSHPIN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "pin | pushpin"
  },
  {
    "no": "1288",
    "code": "1F4CE",
    "char": "ðŸ“Ž",
    "name": "PAPERCLIP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "paperclip"
  },
  {
    "no": "1289",
    "code": "1F587",
    "char": "ðŸ–‡",
    "name": "LINKED PAPERCLIPS",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "link | paperclip"
  },
  {
    "no": "1290",
    "code": "1F4CF",
    "char": "ðŸ“",
    "name": "STRAIGHT RULER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ruler | straight edge"
  },
  {
    "no": "1291",
    "code": "1F4D0",
    "char": "ðŸ“",
    "name": "TRIANGULAR RULER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ruler | set | triangle"
  },
  {
    "no": "1292",
    "code": "2702",
    "char": "âœ‚",
    "name": "BLACK SCISSORS\nâ‰Š scissors",
    "date": "1995á¶»Ê²Ê·",
    "default": "text*",
    "keywords": "tool"
  },
  {
    "no": "1293",
    "code": "1F5C3",
    "char": "ðŸ—ƒ",
    "name": "CARD FILE BOX",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "box | card | file"
  },
  {
    "no": "1294",
    "code": "1F5C4",
    "char": "ðŸ—„",
    "name": "FILE CABINET",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "cabinet | file"
  },
  {
    "no": "1295",
    "code": "1F5D1",
    "char": "ðŸ—‘",
    "name": "WASTEBASKET",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "wastebasket"
  },
  {
    "no": "1296",
    "code": "1F512",
    "char": "ðŸ”’",
    "name": "LOCK",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "closed"
  },
  {
    "no": "1297",
    "code": "1F513",
    "char": "ðŸ”“",
    "name": "OPEN LOCK",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "lock | open | unlock"
  },
  {
    "no": "1298",
    "code": "1F50F",
    "char": "ðŸ”",
    "name": "LOCK WITH INK PEN\nâ‰Š lock with pen",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ink | lock | nib | pen | privacy"
  },
  {
    "no": "1299",
    "code": "1F510",
    "char": "ðŸ”",
    "name": "CLOSED LOCK WITH KEY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "closed | key | lock | secure"
  },
  {
    "no": "1300",
    "code": "1F511",
    "char": "ðŸ”‘",
    "name": "KEY",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "lock | password"
  },
  {
    "no": "1301",
    "code": "1F5DD",
    "char": "ðŸ—",
    "name": "OLD KEY",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "clue | key | lock | old"
  },
  {
    "no": "1302",
    "code": "1F528",
    "char": "ðŸ”¨",
    "name": "HAMMER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "tool"
  },
  {
    "no": "1303",
    "code": "26CF",
    "char": "â›",
    "name": "PICK",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "mining | tool"
  },
  {
    "no": "1304",
    "code": "2692",
    "char": "âš’",
    "name": "HAMMER AND PICK",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "hammer | pick | tool"
  },
  {
    "no": "1305",
    "code": "1F6E0",
    "char": "ðŸ› ",
    "name": "HAMMER AND WRENCH",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "hammer | tool | wrench"
  },
  {
    "no": "1306",
    "code": "1F5E1",
    "char": "ðŸ—¡",
    "name": "DAGGER KNIFE\nâ‰Š dagger",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "knife | weapon"
  },
  {
    "no": "1307",
    "code": "2694",
    "char": "âš”",
    "name": "CROSSED SWORDS",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "crossed | swords | weapon"
  },
  {
    "no": "1308",
    "code": "1F52B",
    "char": "ðŸ”«",
    "name": "PISTOL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "gun | handgun | revolver | tool | weapon"
  },
  {
    "no": "1309",
    "code": "1F3F9",
    "char": "ðŸ¹",
    "name": "BOW AND ARROW",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "archer | arrow | bow | sagittarius | tool | weapon | zodiac"
  },
  {
    "no": "1310",
    "code": "1F6E1",
    "char": "ðŸ›¡",
    "name": "SHIELD",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "weapon"
  },
  {
    "no": "1311",
    "code": "1F527",
    "char": "ðŸ”§",
    "name": "WRENCH",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "tool"
  },
  {
    "no": "1312",
    "code": "1F529",
    "char": "ðŸ”©",
    "name": "NUT AND BOLT",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "bolt | nut | tool"
  },
  {
    "no": "1313",
    "code": "2699",
    "char": "âš™",
    "name": "GEAR",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "tool"
  },
  {
    "no": "1314",
    "code": "1F5DC",
    "char": "ðŸ—œ",
    "name": "COMPRESSION",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "tool | vice"
  },
  {
    "no": "1315",
    "code": "2697",
    "char": "âš—",
    "name": "ALEMBIC",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "chemistry | tool"
  },
  {
    "no": "1316",
    "code": "2696",
    "char": "âš–",
    "name": "SCALES\nâ‰Š balance scale",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "balance | justice | libra | scales | tool | weight | zodiac"
  },
  {
    "no": "1317",
    "code": "1F517",
    "char": "ðŸ”—",
    "name": "LINK SYMBOL\nâ‰Š link",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "link"
  },
  {
    "no": "1318",
    "code": "26D3",
    "char": "â›“",
    "name": "CHAINS",
    "date": "2009Âª",
    "default": "text*",
    "keywords": "chain"
  },
  {
    "no": "1319",
    "code": "1F489",
    "char": "ðŸ’‰",
    "name": "SYRINGE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "doctor | medicine | needle | shot | sick | tool"
  },
  {
    "no": "1320",
    "code": "1F48A",
    "char": "ðŸ’Š",
    "name": "PILL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "doctor | medicine | sick"
  },
  {
    "no": "1321",
    "code": "1F6AC",
    "char": "ðŸš¬",
    "name": "SMOKING SYMBOL\nâ‰Š smoking",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "smoking"
  },
  {
    "no": "1322",
    "code": "26B0",
    "char": "âš°",
    "name": "COFFIN",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "death"
  },
  {
    "no": "1323",
    "code": "26B1",
    "char": "âš±",
    "name": "FUNERAL URN",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "death | funeral | urn"
  },
  {
    "no": "1324",
    "code": "1F5FF",
    "char": "ðŸ—¿",
    "name": "MOYAI\nâ‰Š moai",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "face | moyai | statue"
  },
  {
    "no": "1325",
    "code": "1F6E2",
    "char": "ðŸ›¢",
    "name": "OIL DRUM",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "drum | oil"
  },
  {
    "no": "1326",
    "code": "1F52E",
    "char": "ðŸ”®",
    "name": "CRYSTAL BALL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ball | crystal | fairy tale | fantasy | fortune | tool"
  },
  {
    "no": "1327",
    "code": "1F6D2",
    "char": "ðŸ›’",
    "name": "SHOPPING TROLLEY\nâ‰Š shopping cart",
    "date": "2016Ë£",
    "default": "emoji",
    "keywords": "cart | shopping | trolley"
  },
  {
    "no": "1328",
    "code": "1F3E7",
    "char": "ðŸ§",
    "name": "AUTOMATED TELLER MACHINE\nâ‰Š ATM sign",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "atm | automated | bank | teller"
  },
  {
    "no": "1329",
    "code": "1F6AE",
    "char": "ðŸš®",
    "name": "PUT LITTER IN ITS PLACE SYMBOL\nâ‰Š litter in bin sign",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "litter | litterbox"
  },
  {
    "no": "1330",
    "code": "1F6B0",
    "char": "ðŸš°",
    "name": "POTABLE WATER SYMBOL\nâ‰Š potable water",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "drink | potable | water"
  },
  {
    "no": "1331",
    "code": "267F",
    "char": "â™¿",
    "name": "WHEELCHAIR SYMBOL\nâ‰Š wheelchair",
    "date": "2005Ê²Ê·",
    "default": "emoji",
    "keywords": "access"
  },
  {
    "no": "1332",
    "code": "1F6B9",
    "char": "ðŸš¹",
    "name": "MENS SYMBOL\nâ‰Š menâ€™s room",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "lavatory | man | restroom | wc"
  },
  {
    "no": "1333",
    "code": "1F6BA",
    "char": "ðŸšº",
    "name": "WOMENS SYMBOL\nâ‰Š womenâ€™s room",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "lavatory | restroom | wc | woman"
  },
  {
    "no": "1334",
    "code": "1F6BB",
    "char": "ðŸš»",
    "name": "RESTROOM",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "lavatory | wc"
  },
  {
    "no": "1335",
    "code": "1F6BC",
    "char": "ðŸš¼",
    "name": "BABY SYMBOL",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "baby | changing"
  },
  {
    "no": "1336",
    "code": "1F6BE",
    "char": "ðŸš¾",
    "name": "WATER CLOSET",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "closet | lavatory | restroom | water | wc"
  },
  {
    "no": "1337",
    "code": "1F6C2",
    "char": "ðŸ›‚",
    "name": "PASSPORT CONTROL",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "control | passport"
  },
  {
    "no": "1338",
    "code": "1F6C3",
    "char": "ðŸ›ƒ",
    "name": "CUSTOMS",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "customs"
  },
  {
    "no": "1339",
    "code": "1F6C4",
    "char": "ðŸ›„",
    "name": "BAGGAGE CLAIM",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "baggage | claim"
  },
  {
    "no": "1340",
    "code": "1F6C5",
    "char": "ðŸ›…",
    "name": "LEFT LUGGAGE",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "baggage | locker | luggage"
  },
  {
    "no": "1341",
    "code": "26A0",
    "char": "âš ",
    "name": "WARNING SIGN\nâ‰Š warning",
    "date": "2003Ê²",
    "default": "text*",
    "keywords": "warning"
  },
  {
    "no": "1342",
    "code": "1F6B8",
    "char": "ðŸš¸",
    "name": "CHILDREN CROSSING",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "child | crossing | pedestrian | traffic"
  },
  {
    "no": "1343",
    "code": "26D4",
    "char": "â›”",
    "name": "NO ENTRY",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "entry | forbidden | no | not | prohibited | traffic"
  },
  {
    "no": "1344",
    "code": "1F6AB",
    "char": "ðŸš«",
    "name": "NO ENTRY SIGN\nâ‰Š prohibited",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "entry | forbidden | no | not"
  },
  {
    "no": "1345",
    "code": "1F6B3",
    "char": "ðŸš³",
    "name": "NO BICYCLES",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bicycle | bike | forbidden | no | not | prohibited | vehicle"
  },
  {
    "no": "1346",
    "code": "1F6AD",
    "char": "ðŸš­",
    "name": "NO SMOKING SYMBOL\nâ‰Š no smoking",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "forbidden | no | not | prohibited | smoking"
  },
  {
    "no": "1347",
    "code": "1F6AF",
    "char": "ðŸš¯",
    "name": "DO NOT LITTER SYMBOL\nâ‰Š no littering",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "forbidden | litter | no | not | prohibited"
  },
  {
    "no": "1348",
    "code": "1F6B1",
    "char": "ðŸš±",
    "name": "NON-POTABLE WATER SYMBOL\nâ‰Š non-potable water",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "drink | forbidden | no | not | potable | prohibited | water"
  },
  {
    "no": "1349",
    "code": "1F6B7",
    "char": "ðŸš·",
    "name": "NO PEDESTRIANS",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "forbidden | no | not | pedestrian | prohibited"
  },
  {
    "no": "1350",
    "code": "1F4F5",
    "char": "ðŸ“µ",
    "name": "NO MOBILE PHONES",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "cell | forbidden | mobile | no | not | phone | prohibited | telephone"
  },
  {
    "no": "1351",
    "code": "1F51E",
    "char": "ðŸ”ž",
    "name": "NO ONE UNDER EIGHTEEN SYMBOL\nâ‰Š no one under eighteen",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "18 | age restriction | eighteen | forbidden | no | not | prohibited | underage"
  },
  {
    "no": "1352",
    "code": "2622",
    "char": "â˜¢",
    "name": "RADIOACTIVE SIGN\nâ‰Š radioactive",
    "date": "1995Ë£",
    "default": "text*",
    "keywords": "radioactive | sign"
  },
  {
    "no": "1353",
    "code": "2623",
    "char": "â˜£",
    "name": "BIOHAZARD SIGN\nâ‰Š biohazard",
    "date": "1995Ë£",
    "default": "text*",
    "keywords": "biohazard | sign"
  },
  {
    "no": "1354",
    "code": "2B06",
    "char": "â¬†",
    "name": "UPWARDS BLACK ARROW\nâ‰Š up arrow",
    "date": "2003ÂªÊ²",
    "default": "text*",
    "keywords": "arrow | cardinal | direction | north"
  },
  {
    "no": "1355",
    "code": "2197",
    "char": "â†—",
    "name": "NORTH EAST ARROW\nâ‰Š up-right arrow",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "arrow | direction | intercardinal | northeast"
  },
  {
    "no": "1356",
    "code": "27A1",
    "char": "âž¡",
    "name": "BLACK RIGHTWARDS ARROW\nâ‰Š right arrow",
    "date": "1995á¶»ÂªÊ²",
    "default": "text*",
    "keywords": "arrow | cardinal | direction | east"
  },
  {
    "no": "1357",
    "code": "2198",
    "char": "â†˜",
    "name": "SOUTH EAST ARROW\nâ‰Š down-right arrow",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "arrow | direction | intercardinal | southeast"
  },
  {
    "no": "1358",
    "code": "2B07",
    "char": "â¬‡",
    "name": "DOWNWARDS BLACK ARROW\nâ‰Š down arrow",
    "date": "2003ÂªÊ²",
    "default": "text*",
    "keywords": "arrow | cardinal | direction | down | south"
  },
  {
    "no": "1359",
    "code": "2199",
    "char": "â†™",
    "name": "SOUTH WEST ARROW\nâ‰Š down-left arrow",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "arrow | direction | intercardinal | southwest"
  },
  {
    "no": "1360",
    "code": "2B05",
    "char": "â¬…",
    "name": "LEFTWARDS BLACK ARROW\nâ‰Š left arrow",
    "date": "2003ÂªÊ²",
    "default": "text*",
    "keywords": "arrow | cardinal | direction | west"
  },
  {
    "no": "1361",
    "code": "2196",
    "char": "â†–",
    "name": "NORTH WEST ARROW\nâ‰Š up-left arrow",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "arrow | direction | intercardinal | northwest"
  },
  {
    "no": "1362",
    "code": "2195",
    "char": "â†•",
    "name": "UP DOWN ARROW\nâ‰Š up-down arrow",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "arrow"
  },
  {
    "no": "1363",
    "code": "2194",
    "char": "â†”",
    "name": "LEFT RIGHT ARROW\nâ‰Š left-right arrow",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "arrow"
  },
  {
    "no": "1364",
    "code": "21A9",
    "char": "â†©",
    "name": "LEFTWARDS ARROW WITH HOOK\nâ‰Š right arrow curving left",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "arrow"
  },
  {
    "no": "1365",
    "code": "21AA",
    "char": "â†ª",
    "name": "RIGHTWARDS ARROW WITH HOOK\nâ‰Š left arrow curving right",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "arrow"
  },
  {
    "no": "1366",
    "code": "2934",
    "char": "â¤´",
    "name": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS\nâ‰Š right arrow curving up",
    "date": "2002Ê²",
    "default": "text*",
    "keywords": "arrow"
  },
  {
    "no": "1367",
    "code": "2935",
    "char": "â¤µ",
    "name": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS\nâ‰Š right arrow curving down",
    "date": "2002Ê²",
    "default": "text*",
    "keywords": "arrow | down"
  },
  {
    "no": "1368",
    "code": "1F503",
    "char": "ðŸ”ƒ",
    "name": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS\nâ‰Š clockwise vertical arrows",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | clockwise | reload"
  },
  {
    "no": "1369",
    "code": "1F504",
    "char": "ðŸ”„",
    "name": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS\nâ‰Š anticlockwise arrows button",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "anticlockwise | arrow | counterclockwise | withershins"
  },
  {
    "no": "1370",
    "code": "1F519",
    "char": "ðŸ”™",
    "name": "BACK WITH LEFTWARDS ARROW ABOVE\nâ‰Š back arrow",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | back"
  },
  {
    "no": "1371",
    "code": "1F51A",
    "char": "ðŸ”š",
    "name": "END WITH LEFTWARDS ARROW ABOVE\nâ‰Š end arrow",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | end"
  },
  {
    "no": "1372",
    "code": "1F51B",
    "char": "ðŸ”›",
    "name": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE\nâ‰Š on! arrow",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | mark | on"
  },
  {
    "no": "1373",
    "code": "1F51C",
    "char": "ðŸ”œ",
    "name": "SOON WITH RIGHTWARDS ARROW ABOVE\nâ‰Š soon arrow",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | soon"
  },
  {
    "no": "1374",
    "code": "1F51D",
    "char": "ðŸ”",
    "name": "TOP WITH UPWARDS ARROW ABOVE\nâ‰Š top arrow",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | top | up"
  },
  {
    "no": "1375",
    "code": "1F6D0",
    "char": "ðŸ›",
    "name": "PLACE OF WORSHIP",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "religion | worship"
  },
  {
    "no": "1376",
    "code": "269B",
    "char": "âš›",
    "name": "ATOM SYMBOL",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "atheist | atom"
  },
  {
    "no": "1377",
    "code": "1F549",
    "char": "ðŸ•‰",
    "name": "OM SYMBOL\nâ‰Š om",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "hindu | religion"
  },
  {
    "no": "1378",
    "code": "2721",
    "char": "âœ¡",
    "name": "STAR OF DAVID",
    "date": "1995Ê·",
    "default": "text*",
    "keywords": "david | jew | jewish | religion | star"
  },
  {
    "no": "1379",
    "code": "2638",
    "char": "â˜¸",
    "name": "WHEEL OF DHARMA",
    "date": "1995Ê·",
    "default": "text*",
    "keywords": "buddhist | dharma | religion | wheel"
  },
  {
    "no": "1380",
    "code": "262F",
    "char": "â˜¯",
    "name": "YIN YANG",
    "date": "1995Ê·",
    "default": "text*",
    "keywords": "religion | tao | taoist | yang | yin"
  },
  {
    "no": "1381",
    "code": "271D",
    "char": "âœ",
    "name": "LATIN CROSS",
    "date": "1995Ê·",
    "default": "text*",
    "keywords": "christian | cross | religion"
  },
  {
    "no": "1382",
    "code": "2626",
    "char": "â˜¦",
    "name": "ORTHODOX CROSS",
    "date": "1995Ë£",
    "default": "text*",
    "keywords": "christian | cross | religion"
  },
  {
    "no": "1383",
    "code": "262A",
    "char": "â˜ª",
    "name": "STAR AND CRESCENT",
    "date": "1995Ê·",
    "default": "text*",
    "keywords": "islam | muslim | religion"
  },
  {
    "no": "1384",
    "code": "262E",
    "char": "â˜®",
    "name": "PEACE SYMBOL",
    "date": "1995Ë£",
    "default": "text*",
    "keywords": "peace"
  },
  {
    "no": "1385",
    "code": "1F54E",
    "char": "ðŸ•Ž",
    "name": "MENORAH WITH NINE BRANCHES\nâ‰Š menorah",
    "date": "2015Ë£",
    "default": "emoji",
    "keywords": "candelabrum | candlestick | religion"
  },
  {
    "no": "1386",
    "code": "1F52F",
    "char": "ðŸ”¯",
    "name": "SIX POINTED STAR WITH MIDDLE DOT\nâ‰Š dotted six-pointed star",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "fortune | star"
  },
  {
    "no": "1387",
    "code": "267B",
    "char": "â™»",
    "name": "BLACK UNIVERSAL RECYCLING SYMBOL\nâ‰Š recycling symbol",
    "date": "2002Ê²",
    "default": "text*",
    "keywords": "recycle"
  },
  {
    "no": "1388",
    "code": "1F4DB",
    "char": "ðŸ“›",
    "name": "NAME BADGE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "badge | name"
  },
  {
    "no": "1389",
    "code": "269C",
    "char": "âšœ",
    "name": "FLEUR-DE-LIS",
    "date": "2005Ë£",
    "default": "text*",
    "keywords": "fleur-de-lis"
  },
  {
    "no": "1390",
    "code": "1F530",
    "char": "ðŸ”°",
    "name": "JAPANESE SYMBOL FOR BEGINNER",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "beginner | chevron | green | japanese | leaf | tool | yellow"
  },
  {
    "no": "1391",
    "code": "1F531",
    "char": "ðŸ”±",
    "name": "TRIDENT EMBLEM",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "anchor | emblem | ship | tool | trident"
  },
  {
    "no": "1392",
    "code": "2B55",
    "char": "â­•",
    "name": "HEAVY LARGE CIRCLE",
    "date": "2009Ê²",
    "default": "emoji",
    "keywords": "circle | o"
  },
  {
    "no": "1393",
    "code": "2705",
    "char": "âœ…",
    "name": "WHITE HEAVY CHECK MARK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "check | mark"
  },
  {
    "no": "1394",
    "code": "2611",
    "char": "â˜‘",
    "name": "BALLOT BOX WITH CHECK",
    "date": "1995Ê²Ê·",
    "default": "text*",
    "keywords": "ballot | box | check"
  },
  {
    "no": "1395",
    "code": "2714",
    "char": "âœ”",
    "name": "HEAVY CHECK MARK",
    "date": "1995á¶»Ê²Ê·",
    "default": "text*",
    "keywords": "check | mark"
  },
  {
    "no": "1396",
    "code": "2716",
    "char": "âœ–",
    "name": "HEAVY MULTIPLICATION X",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "cancel | multiplication | multiply | x"
  },
  {
    "no": "1397",
    "code": "274C",
    "char": "âŒ",
    "name": "CROSS MARK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cancel | mark | multiplication | multiply | x"
  },
  {
    "no": "1398",
    "code": "274E",
    "char": "âŽ",
    "name": "NEGATIVE SQUARED CROSS MARK\nâ‰Š cross mark button",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "mark | square"
  },
  {
    "no": "1399",
    "code": "2795",
    "char": "âž•",
    "name": "HEAVY PLUS SIGN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "math | plus"
  },
  {
    "no": "1400",
    "code": "2796",
    "char": "âž–",
    "name": "HEAVY MINUS SIGN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "math | minus"
  },
  {
    "no": "1401",
    "code": "2797",
    "char": "âž—",
    "name": "HEAVY DIVISION SIGN",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "division | math"
  },
  {
    "no": "1402",
    "code": "27B0",
    "char": "âž°",
    "name": "CURLY LOOP",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "curl | loop"
  },
  {
    "no": "1403",
    "code": "27BF",
    "char": "âž¿",
    "name": "DOUBLE CURLY LOOP",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "curl | double | loop"
  },
  {
    "no": "1404",
    "code": "303D",
    "char": "ã€½",
    "name": "PART ALTERNATION MARK",
    "date": "2002Ê²",
    "default": "text*",
    "keywords": "mark | part"
  },
  {
    "no": "1405",
    "code": "2733",
    "char": "âœ³",
    "name": "EIGHT SPOKED ASTERISK\nâ‰Š eight-spoked asterisk",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "asterisk"
  },
  {
    "no": "1406",
    "code": "2734",
    "char": "âœ´",
    "name": "EIGHT POINTED BLACK STAR\nâ‰Š eight-pointed star",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "star"
  },
  {
    "no": "1407",
    "code": "2747",
    "char": "â‡",
    "name": "SPARKLE",
    "date": "1995á¶»Ê²",
    "default": "text*",
    "keywords": "sparkle"
  },
  {
    "no": "1408",
    "code": "203C",
    "char": "â€¼",
    "name": "DOUBLE EXCLAMATION MARK",
    "date": "1995ÂªÊ²",
    "default": "text*",
    "keywords": "bangbang | exclamation | mark | punctuation"
  },
  {
    "no": "1409",
    "code": "2049",
    "char": "â‰",
    "name": "EXCLAMATION QUESTION MARK",
    "date": "2000ÂªÊ²",
    "default": "text*",
    "keywords": "exclamation | interrobang | mark | punctuation | question"
  },
  {
    "no": "1410",
    "code": "2753",
    "char": "â“",
    "name": "BLACK QUESTION MARK ORNAMENT\nâ‰Š question mark",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "mark | punctuation | question"
  },
  {
    "no": "1411",
    "code": "2754",
    "char": "â”",
    "name": "WHITE QUESTION MARK ORNAMENT\nâ‰Š white question mark",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "mark | outlined | punctuation | question"
  },
  {
    "no": "1412",
    "code": "2755",
    "char": "â•",
    "name": "WHITE EXCLAMATION MARK ORNAMENT\nâ‰Š white exclamation mark",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "exclamation | mark | outlined | punctuation"
  },
  {
    "no": "1413",
    "code": "2757",
    "char": "â—",
    "name": "HEAVY EXCLAMATION MARK SYMBOL\nâ‰Š exclamation mark",
    "date": "2009Ê²",
    "default": "emoji",
    "keywords": "exclamation | mark | punctuation"
  },
  {
    "no": "1414",
    "code": "3030",
    "char": "ã€°",
    "name": "WAVY DASH",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "dash | punctuation | wavy"
  },
  {
    "no": "1415",
    "code": "00A9",
    "char": "Â©",
    "name": "COPYRIGHT SIGN\nâ‰Š copyright",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "copyright"
  },
  {
    "no": "1416",
    "code": "00AE",
    "char": "Â®",
    "name": "REGISTERED SIGN\nâ‰Š registered",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "registered"
  },
  {
    "no": "1417",
    "code": "2122",
    "char": "â„¢",
    "name": "TRADE MARK SIGN\nâ‰Š trade mark",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "mark | tm | trademark"
  },
  {
    "no": "1418",
    "code": "2648",
    "char": "â™ˆ",
    "name": "ARIES",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "ram | zodiac"
  },
  {
    "no": "1419",
    "code": "2649",
    "char": "â™‰",
    "name": "TAURUS",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "bull | ox | zodiac"
  },
  {
    "no": "1420",
    "code": "264A",
    "char": "â™Š",
    "name": "GEMINI",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "twins | zodiac"
  },
  {
    "no": "1421",
    "code": "264B",
    "char": "â™‹",
    "name": "CANCER",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "crab | zodiac"
  },
  {
    "no": "1422",
    "code": "264C",
    "char": "â™Œ",
    "name": "LEO",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "lion | zodiac"
  },
  {
    "no": "1423",
    "code": "264D",
    "char": "â™",
    "name": "VIRGO",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "maiden | virgin | zodiac"
  },
  {
    "no": "1424",
    "code": "264E",
    "char": "â™Ž",
    "name": "LIBRA",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "balance | justice | scales | zodiac"
  },
  {
    "no": "1425",
    "code": "264F",
    "char": "â™",
    "name": "SCORPIUS",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "scorpio | scorpion | zodiac"
  },
  {
    "no": "1426",
    "code": "2650",
    "char": "â™",
    "name": "SAGITTARIUS",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "archer | zodiac"
  },
  {
    "no": "1427",
    "code": "2651",
    "char": "â™‘",
    "name": "CAPRICORN",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "goat | zodiac"
  },
  {
    "no": "1428",
    "code": "2652",
    "char": "â™’",
    "name": "AQUARIUS",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "bearer | water | zodiac"
  },
  {
    "no": "1429",
    "code": "2653",
    "char": "â™“",
    "name": "PISCES",
    "date": "1995Ê²Ê·",
    "default": "emoji",
    "keywords": "fish | zodiac"
  },
  {
    "no": "1430",
    "code": "26CE",
    "char": "â›Ž",
    "name": "OPHIUCHUS",
    "date": "2010ÂªÊ²",
    "default": "emoji",
    "keywords": "bearer | serpent | snake | zodiac"
  },
  {
    "no": "1431",
    "code": "1F500",
    "char": "ðŸ”€",
    "name": "TWISTED RIGHTWARDS ARROWS\nâ‰Š shuffle tracks button",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "arrow | crossed"
  },
  {
    "no": "1432",
    "code": "1F501",
    "char": "ðŸ”",
    "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS\nâ‰Š repeat button",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "arrow | clockwise | repeat"
  },
  {
    "no": "1433",
    "code": "1F502",
    "char": "ðŸ”‚",
    "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY\nâ‰Š repeat single button",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "arrow | clockwise | once"
  },
  {
    "no": "1434",
    "code": "25B6",
    "char": "â–¶",
    "name": "BLACK RIGHT-POINTING TRIANGLE\nâ‰Š play button",
    "date": "1995ÂªÊ²Ê·",
    "default": "text*",
    "keywords": "arrow | play | right | triangle"
  },
  {
    "no": "1435",
    "code": "23E9",
    "char": "â©",
    "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE\nâ‰Š fast-forword button",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "arrow | double | fast | forward"
  },
  {
    "no": "1436",
    "code": "23ED",
    "char": "â­",
    "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR\nâ‰Š next track button",
    "date": "2010Ê·",
    "default": "text*",
    "keywords": "arrow | next scene | next track | triangle"
  },
  {
    "no": "1437",
    "code": "23EF",
    "char": "â¯",
    "name": "BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR\nâ‰Š play or pause button",
    "date": "2010Ë£",
    "default": "text*",
    "keywords": "arrow | pause | play | right | triangle"
  },
  {
    "no": "1438",
    "code": "25C0",
    "char": "â—€",
    "name": "BLACK LEFT-POINTING TRIANGLE\nâ‰Š reverse button",
    "date": "1995ÂªÊ²Ê·",
    "default": "text*",
    "keywords": "arrow | left | reverse | triangle"
  },
  {
    "no": "1439",
    "code": "23EA",
    "char": "âª",
    "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE\nâ‰Š fast reverse button",
    "date": "2010Ê²Ê·",
    "default": "emoji",
    "keywords": "arrow | double | rewind"
  },
  {
    "no": "1440",
    "code": "23EE",
    "char": "â®",
    "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR\nâ‰Š last track button",
    "date": "2010Ê·",
    "default": "text*",
    "keywords": "arrow | previous scene | previous track | triangle"
  },
  {
    "no": "1441",
    "code": "1F53C",
    "char": "ðŸ”¼",
    "name": "UP-POINTING SMALL RED TRIANGLE\nâ‰Š up button",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | button | red"
  },
  {
    "no": "1442",
    "code": "23EB",
    "char": "â«",
    "name": "BLACK UP-POINTING DOUBLE TRIANGLE\nâ‰Š fast up button",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | double"
  },
  {
    "no": "1443",
    "code": "1F53D",
    "char": "ðŸ”½",
    "name": "DOWN-POINTING SMALL RED TRIANGLE\nâ‰Š down button",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | button | down | red"
  },
  {
    "no": "1444",
    "code": "23EC",
    "char": "â¬",
    "name": "BLACK DOWN-POINTING DOUBLE TRIANGLE\nâ‰Š fast down button",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "arrow | double | down"
  },
  {
    "no": "1445",
    "code": "23F8",
    "char": "â¸",
    "name": "DOUBLE VERTICAL BAR\nâ‰Š pause button",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "bar | double | pause | vertical"
  },
  {
    "no": "1446",
    "code": "23F9",
    "char": "â¹",
    "name": "BLACK SQUARE FOR STOP\nâ‰Š stop button",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "square | stop"
  },
  {
    "no": "1447",
    "code": "23FA",
    "char": "âº",
    "name": "BLACK CIRCLE FOR RECORD\nâ‰Š record button",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "circle | record"
  },
  {
    "no": "1448",
    "code": "23CF",
    "char": "â",
    "name": "EJECT SYMBOL\nâ‰Š eject button",
    "date": "2003Ë£",
    "default": "text*",
    "keywords": "eject"
  },
  {
    "no": "1449",
    "code": "1F3A6",
    "char": "ðŸŽ¦",
    "name": "CINEMA",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "camera | film | movie"
  },
  {
    "no": "1450",
    "code": "1F505",
    "char": "ðŸ”…",
    "name": "LOW BRIGHTNESS SYMBOL\nâ‰Š dim button",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "brightness | dim | low"
  },
  {
    "no": "1451",
    "code": "1F506",
    "char": "ðŸ”†",
    "name": "HIGH BRIGHTNESS SYMBOL\nâ‰Š bright button",
    "date": "2010Ë£",
    "default": "emoji",
    "keywords": "bright | brightness"
  },
  {
    "no": "1452",
    "code": "1F4F6",
    "char": "ðŸ“¶",
    "name": "ANTENNA WITH BARS\nâ‰Š antenna bars",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "antenna | bar | cell | mobile | phone | signal | telephone"
  },
  {
    "no": "1453",
    "code": "1F4F3",
    "char": "ðŸ“³",
    "name": "VIBRATION MODE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cell | mobile | mode | phone | telephone | vibration"
  },
  {
    "no": "1454",
    "code": "1F4F4",
    "char": "ðŸ“´",
    "name": "MOBILE PHONE OFF",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cell | mobile | off | phone | telephone"
  },
  {
    "no": "1455",
    "code": "0023 FE0F 20E3",
    "char": "#ï¸âƒ£",
    "name": "keycap #",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1456",
    "code": "002A FE0F 20E3",
    "char": "*ï¸âƒ£",
    "name": "keycap *",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1457",
    "code": "0030 FE0F 20E3",
    "char": "0ï¸âƒ£",
    "name": "keycap 0",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1458",
    "code": "0031 FE0F 20E3",
    "char": "1ï¸âƒ£",
    "name": "keycap 1",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1459",
    "code": "0032 FE0F 20E3",
    "char": "2ï¸âƒ£",
    "name": "keycap 2",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1460",
    "code": "0033 FE0F 20E3",
    "char": "3ï¸âƒ£",
    "name": "keycap 3",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1461",
    "code": "0034 FE0F 20E3",
    "char": "4ï¸âƒ£",
    "name": "keycap 4",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1462",
    "code": "0035 FE0F 20E3",
    "char": "5ï¸âƒ£",
    "name": "keycap 5",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1463",
    "code": "0036 FE0F 20E3",
    "char": "6ï¸âƒ£",
    "name": "keycap 6",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1464",
    "code": "0037 FE0F 20E3",
    "char": "7ï¸âƒ£",
    "name": "keycap 7",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1465",
    "code": "0038 FE0F 20E3",
    "char": "8ï¸âƒ£",
    "name": "keycap 8",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1466",
    "code": "0039 FE0F 20E3",
    "char": "9ï¸âƒ£",
    "name": "keycap 9",
    "date": "2002Ë£",
    "default": "n/a",
    "keywords": "keycap"
  },
  {
    "no": "1467",
    "code": "1F51F",
    "char": "ðŸ”Ÿ",
    "name": "KEYCAP TEN\nâ‰Š keycap #",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "keycap"
  },
  {
    "no": "1468",
    "code": "1F4AF",
    "char": "ðŸ’¯",
    "name": "HUNDRED POINTS SYMBOL\nâ‰Š hundred points",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "100 | full | hundred | score"
  },
  {
    "no": "1469",
    "code": "1F520",
    "char": "ðŸ” ",
    "name": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS\nâ‰Š input latin uppercase",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "input | latin | letters | uppercase"
  },
  {
    "no": "1470",
    "code": "1F521",
    "char": "ðŸ”¡",
    "name": "INPUT SYMBOL FOR LATIN SMALL LETTERS\nâ‰Š input latin lowercase",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "abcd | input | latin | letters | lowercase"
  },
  {
    "no": "1471",
    "code": "1F522",
    "char": "ðŸ”¢",
    "name": "INPUT SYMBOL FOR NUMBERS\nâ‰Š input numbers",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "1234 | input | numbers"
  },
  {
    "no": "1472",
    "code": "1F523",
    "char": "ðŸ”£",
    "name": "INPUT SYMBOL FOR SYMBOLS\nâ‰Š input symbols",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "input"
  },
  {
    "no": "1473",
    "code": "1F524",
    "char": "ðŸ”¤",
    "name": "INPUT SYMBOL FOR LATIN LETTERS\nâ‰Š input latin letters",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "abc | alphabet | input | latin | letters"
  },
  {
    "no": "1474",
    "code": "1F170",
    "char": "ðŸ…°",
    "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER A\nâ‰Š a button",
    "date": "2010Ê²",
    "default": "text*",
    "keywords": "a | blood"
  },
  {
    "no": "1475",
    "code": "1F18E",
    "char": "ðŸ†Ž",
    "name": "NEGATIVE SQUARED AB\nâ‰Š ab button",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ab | blood"
  },
  {
    "no": "1476",
    "code": "1F171",
    "char": "ðŸ…±",
    "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER B\nâ‰Š b button",
    "date": "2010Ê²",
    "default": "text*",
    "keywords": "b | blood"
  },
  {
    "no": "1477",
    "code": "1F191",
    "char": "ðŸ†‘",
    "name": "SQUARED CL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cl"
  },
  {
    "no": "1478",
    "code": "1F192",
    "char": "ðŸ†’",
    "name": "SQUARED COOL",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "cool"
  },
  {
    "no": "1479",
    "code": "1F193",
    "char": "ðŸ†“",
    "name": "SQUARED FREE",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "free"
  },
  {
    "no": "1480",
    "code": "2139",
    "char": "â„¹",
    "name": "INFORMATION SOURCE",
    "date": "2000Ê²",
    "default": "text*",
    "keywords": "i | information"
  },
  {
    "no": "1481",
    "code": "1F194",
    "char": "ðŸ†”",
    "name": "SQUARED ID",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "id | identity"
  },
  {
    "no": "1482",
    "code": "24C2",
    "char": "â“‚",
    "name": "CIRCLED LATIN CAPITAL LETTER M\nâ‰Š circled letter m",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "circle | m"
  },
  {
    "no": "1483",
    "code": "1F195",
    "char": "ðŸ†•",
    "name": "SQUARED NEW",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "new"
  },
  {
    "no": "1484",
    "code": "1F196",
    "char": "ðŸ†–",
    "name": "SQUARED NG",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ng"
  },
  {
    "no": "1485",
    "code": "1F17E",
    "char": "ðŸ…¾",
    "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER O\nâ‰Š o button",
    "date": "2010Ê²",
    "default": "text*",
    "keywords": "blood | o"
  },
  {
    "no": "1486",
    "code": "1F197",
    "char": "ðŸ†—",
    "name": "SQUARED OK",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "ok"
  },
  {
    "no": "1487",
    "code": "1F17F",
    "char": "ðŸ…¿",
    "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER P\nâ‰Š p button",
    "date": "2009ÂªÊ²",
    "default": "text*",
    "keywords": "parking"
  },
  {
    "no": "1488",
    "code": "1F198",
    "char": "ðŸ†˜",
    "name": "SQUARED SOS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "help | sos"
  },
  {
    "no": "1489",
    "code": "1F199",
    "char": "ðŸ†™",
    "name": "SQUARED UP WITH EXCLAMATION MARK\nâ‰Š up! button",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "mark | up"
  },
  {
    "no": "1490",
    "code": "1F19A",
    "char": "ðŸ†š",
    "name": "SQUARED VS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "versus | vs"
  },
  {
    "no": "1491",
    "code": "1F201",
    "char": "ðŸˆ",
    "name": "SQUARED KATAKANA KOKO",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "japanese"
  },
  {
    "no": "1492",
    "code": "1F202",
    "char": "ðŸˆ‚",
    "name": "SQUARED KATAKANA SA",
    "date": "2010Ê²",
    "default": "text*",
    "keywords": "japanese"
  },
  {
    "no": "1493",
    "code": "1F237",
    "char": "ðŸˆ·",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-6708\nâ‰Š squared moon ideograph",
    "date": "2010Ê²",
    "default": "text*",
    "keywords": "japanese"
  },
  {
    "no": "1494",
    "code": "1F236",
    "char": "ðŸˆ¶",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-6709\nâ‰Š squared exist ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "japanese"
  },
  {
    "no": "1495",
    "code": "1F22F",
    "char": "ðŸˆ¯",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-6307\nâ‰Š squared finger ideograph",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "japanese"
  },
  {
    "no": "1496",
    "code": "1F250",
    "char": "ðŸ‰",
    "name": "CIRCLED IDEOGRAPH ADVANTAGE\nâ‰Š circled advantage ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "japanese"
  },
  {
    "no": "1497",
    "code": "1F239",
    "char": "ðŸˆ¹",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-5272\nâ‰Š squared divide ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "japanese"
  },
  {
    "no": "1498",
    "code": "1F21A",
    "char": "ðŸˆš",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-7121\nâ‰Š squared negation ideograph",
    "date": "2009ÂªÊ²",
    "default": "emoji",
    "keywords": "japanese"
  },
  {
    "no": "1499",
    "code": "1F232",
    "char": "ðŸˆ²",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-7981\nâ‰Š squared prohibit ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "japanese"
  },
  {
    "no": "1500",
    "code": "1F251",
    "char": "ðŸ‰‘",
    "name": "CIRCLED IDEOGRAPH ACCEPT\nâ‰Š circled accept ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chinese"
  },
  {
    "no": "1501",
    "code": "1F238",
    "char": "ðŸˆ¸",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-7533\nâ‰Š squared apply ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chinese"
  },
  {
    "no": "1502",
    "code": "1F234",
    "char": "ðŸˆ´",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-5408\nâ‰Š squared together ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chinese"
  },
  {
    "no": "1503",
    "code": "1F233",
    "char": "ðŸˆ³",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A\nâ‰Š squared empty ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chinese"
  },
  {
    "no": "1504",
    "code": "3297",
    "char": "ãŠ—",
    "name": "CIRCLED IDEOGRAPH CONGRATULATION\nâ‰Š circled congratulate ideograph",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "chinese | congratulation | congratulations | ideograph"
  },
  {
    "no": "1505",
    "code": "3299",
    "char": "ãŠ™",
    "name": "CIRCLED IDEOGRAPH SECRET\nâ‰Š circled secret ideograph",
    "date": "1995ÂªÊ²",
    "default": "text*",
    "keywords": "chinese | ideograph | secret"
  },
  {
    "no": "1506",
    "code": "1F23A",
    "char": "ðŸˆº",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-55B6\nâ‰Š squared operating ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chinese"
  },
  {
    "no": "1507",
    "code": "1F235",
    "char": "ðŸˆµ",
    "name": "SQUARED CJK UNIFIED IDEOGRAPH-6E80\nâ‰Š squared fullness ideograph",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "chinese"
  },
  {
    "no": "1508",
    "code": "25AA",
    "char": "â–ª",
    "name": "BLACK SMALL SQUARE",
    "date": "1995Ê²Ê·",
    "default": "text*",
    "keywords": "geometric | square"
  },
  {
    "no": "1509",
    "code": "25AB",
    "char": "â–«",
    "name": "WHITE SMALL SQUARE",
    "date": "1995Ê²",
    "default": "text*",
    "keywords": "geometric | square"
  },
  {
    "no": "1510",
    "code": "25FB",
    "char": "â—»",
    "name": "WHITE MEDIUM SQUARE",
    "date": "2002Ê²",
    "default": "text*",
    "keywords": "geometric | square"
  },
  {
    "no": "1511",
    "code": "25FC",
    "char": "â—¼",
    "name": "BLACK MEDIUM SQUARE",
    "date": "2002Ê²Ê·",
    "default": "text*",
    "keywords": "geometric | square"
  },
  {
    "no": "1512",
    "code": "25FD",
    "char": "â—½",
    "name": "WHITE MEDIUM SMALL SQUARE\nâ‰Š white medium-small square",
    "date": "2002Ê²",
    "default": "emoji",
    "keywords": "geometric | square"
  },
  {
    "no": "1513",
    "code": "25FE",
    "char": "â—¾",
    "name": "BLACK MEDIUM SMALL SQUARE\nâ‰Š black medium-small square",
    "date": "2002Ê²Ê·",
    "default": "emoji",
    "keywords": "geometric | square"
  },
  {
    "no": "1514",
    "code": "2B1B",
    "char": "â¬›",
    "name": "BLACK LARGE SQUARE",
    "date": "2008ÂªÊ²Ê·",
    "default": "emoji",
    "keywords": "geometric | square"
  },
  {
    "no": "1515",
    "code": "2B1C",
    "char": "â¬œ",
    "name": "WHITE LARGE SQUARE",
    "date": "2008Ê²Ê·",
    "default": "emoji",
    "keywords": "geometric | square"
  },
  {
    "no": "1516",
    "code": "1F536",
    "char": "ðŸ”¶",
    "name": "LARGE ORANGE DIAMOND",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "diamond | geometric | orange"
  },
  {
    "no": "1517",
    "code": "1F537",
    "char": "ðŸ”·",
    "name": "LARGE BLUE DIAMOND",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blue | diamond | geometric"
  },
  {
    "no": "1518",
    "code": "1F538",
    "char": "ðŸ”¸",
    "name": "SMALL ORANGE DIAMOND",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "diamond | geometric | orange"
  },
  {
    "no": "1519",
    "code": "1F539",
    "char": "ðŸ”¹",
    "name": "SMALL BLUE DIAMOND",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blue | diamond | geometric"
  },
  {
    "no": "1520",
    "code": "1F53A",
    "char": "ðŸ”º",
    "name": "UP-POINTING RED TRIANGLE\nâ‰Š red triangle pointed up",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "geometric | red"
  },
  {
    "no": "1521",
    "code": "1F53B",
    "char": "ðŸ”»",
    "name": "DOWN-POINTING RED TRIANGLE\nâ‰Š red triangle pointed down",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "down | geometric | red"
  },
  {
    "no": "1522",
    "code": "1F4A0",
    "char": "ðŸ’ ",
    "name": "DIAMOND SHAPE WITH A DOT INSIDE\nâ‰Š diamond with a dot",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "comic | diamond | geometric | inside"
  },
  {
    "no": "1523",
    "code": "1F518",
    "char": "ðŸ”˜",
    "name": "RADIO BUTTON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "button | geometric | radio"
  },
  {
    "no": "1524",
    "code": "1F532",
    "char": "ðŸ”²",
    "name": "BLACK SQUARE BUTTON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "button | geometric | square"
  },
  {
    "no": "1525",
    "code": "1F533",
    "char": "ðŸ”³",
    "name": "WHITE SQUARE BUTTON",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "button | geometric | outlined | square"
  },
  {
    "no": "1526",
    "code": "26AA",
    "char": "âšª",
    "name": "MEDIUM WHITE CIRCLE\nâ‰Š white circle",
    "date": "2005Ê²",
    "default": "emoji",
    "keywords": "circle | geometric"
  },
  {
    "no": "1527",
    "code": "26AB",
    "char": "âš«",
    "name": "MEDIUM BLACK CIRCLE\nâ‰Š black circle",
    "date": "2005Ê²Ê·",
    "default": "emoji",
    "keywords": "circle | geometric"
  },
  {
    "no": "1528",
    "code": "1F534",
    "char": "ðŸ”´",
    "name": "LARGE RED CIRCLE\nâ‰Š red circle",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "circle | geometric | red"
  },
  {
    "no": "1529",
    "code": "1F535",
    "char": "ðŸ”µ",
    "name": "LARGE BLUE CIRCLE\nâ‰Š blue circle",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "blue | circle | geometric"
  },
  {
    "no": "1530",
    "code": "1F3C1",
    "char": "ðŸ",
    "name": "CHEQUERED FLAG",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "checkered | chequered | racing"
  },
  {
    "no": "1531",
    "code": "1F6A9",
    "char": "ðŸš©",
    "name": "TRIANGULAR FLAG ON POST\nâ‰Š triangular flag",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "post"
  },
  {
    "no": "1532",
    "code": "1F38C",
    "char": "ðŸŽŒ",
    "name": "CROSSED FLAGS",
    "date": "2010Ê²",
    "default": "emoji",
    "keywords": "celebration | cross | crossed | japanese"
  },
  {
    "no": "1533",
    "code": "1F3F4",
    "char": "ðŸ´",
    "name": "WAVING BLACK FLAG",
    "date": "2014Ë£",
    "default": "emoji",
    "keywords": "waving"
  },
  {
    "no": "1534",
    "code": "1F3F3",
    "char": "ðŸ³",
    "name": "WAVING WHITE FLAG",
    "date": "2014Ê·",
    "default": "text*",
    "keywords": "waving"
  },
  {
    "no": "1535",
    "code": "1F1E6 1F1E8",
    "char": "ðŸ‡¦ðŸ‡¨",
    "name": "Ascension Island",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1536",
    "code": "1F1E6 1F1E9",
    "char": "ðŸ‡¦ðŸ‡©",
    "name": "Andorra",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1537",
    "code": "1F1E6 1F1EA",
    "char": "ðŸ‡¦ðŸ‡ª",
    "name": "United Arab Emirates",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1538",
    "code": "1F1E6 1F1EB",
    "char": "ðŸ‡¦ðŸ‡«",
    "name": "Afghanistan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1539",
    "code": "1F1E6 1F1EC",
    "char": "ðŸ‡¦ðŸ‡¬",
    "name": "Antigua & Barbuda",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1540",
    "code": "1F1E6 1F1EE",
    "char": "ðŸ‡¦ðŸ‡®",
    "name": "Anguilla",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1541",
    "code": "1F1E6 1F1F1",
    "char": "ðŸ‡¦ðŸ‡±",
    "name": "Albania",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1542",
    "code": "1F1E6 1F1F2",
    "char": "ðŸ‡¦ðŸ‡²",
    "name": "Armenia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1543",
    "code": "1F1E6 1F1F4",
    "char": "ðŸ‡¦ðŸ‡´",
    "name": "Angola",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1544",
    "code": "1F1E6 1F1F6",
    "char": "ðŸ‡¦ðŸ‡¶",
    "name": "Antarctica",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1545",
    "code": "1F1E6 1F1F7",
    "char": "ðŸ‡¦ðŸ‡·",
    "name": "Argentina",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1546",
    "code": "1F1E6 1F1F8",
    "char": "ðŸ‡¦ðŸ‡¸",
    "name": "American Samoa",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1547",
    "code": "1F1E6 1F1F9",
    "char": "ðŸ‡¦ðŸ‡¹",
    "name": "Austria",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1548",
    "code": "1F1E6 1F1FA",
    "char": "ðŸ‡¦ðŸ‡º",
    "name": "Australia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1549",
    "code": "1F1E6 1F1FC",
    "char": "ðŸ‡¦ðŸ‡¼",
    "name": "Aruba",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1550",
    "code": "1F1E6 1F1FD",
    "char": "ðŸ‡¦ðŸ‡½",
    "name": "Ã…land Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1551",
    "code": "1F1E6 1F1FF",
    "char": "ðŸ‡¦ðŸ‡¿",
    "name": "Azerbaijan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1552",
    "code": "1F1E7 1F1E6",
    "char": "ðŸ‡§ðŸ‡¦",
    "name": "Bosnia & Herzegovina",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1553",
    "code": "1F1E7 1F1E7",
    "char": "ðŸ‡§ðŸ‡§",
    "name": "Barbados",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1554",
    "code": "1F1E7 1F1E9",
    "char": "ðŸ‡§ðŸ‡©",
    "name": "Bangladesh",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1555",
    "code": "1F1E7 1F1EA",
    "char": "ðŸ‡§ðŸ‡ª",
    "name": "Belgium",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1556",
    "code": "1F1E7 1F1EB",
    "char": "ðŸ‡§ðŸ‡«",
    "name": "Burkina Faso",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1557",
    "code": "1F1E7 1F1EC",
    "char": "ðŸ‡§ðŸ‡¬",
    "name": "Bulgaria",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1558",
    "code": "1F1E7 1F1ED",
    "char": "ðŸ‡§ðŸ‡­",
    "name": "Bahrain",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1559",
    "code": "1F1E7 1F1EE",
    "char": "ðŸ‡§ðŸ‡®",
    "name": "Burundi",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1560",
    "code": "1F1E7 1F1EF",
    "char": "ðŸ‡§ðŸ‡¯",
    "name": "Benin",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1561",
    "code": "1F1E7 1F1F1",
    "char": "ðŸ‡§ðŸ‡±",
    "name": "St. BarthÃ©lemy",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1562",
    "code": "1F1E7 1F1F2",
    "char": "ðŸ‡§ðŸ‡²",
    "name": "Bermuda",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1563",
    "code": "1F1E7 1F1F3",
    "char": "ðŸ‡§ðŸ‡³",
    "name": "Brunei",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1564",
    "code": "1F1E7 1F1F4",
    "char": "ðŸ‡§ðŸ‡´",
    "name": "Bolivia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1565",
    "code": "1F1E7 1F1F6",
    "char": "ðŸ‡§ðŸ‡¶",
    "name": "Caribbean Netherlands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1566",
    "code": "1F1E7 1F1F7",
    "char": "ðŸ‡§ðŸ‡·",
    "name": "Brazil",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1567",
    "code": "1F1E7 1F1F8",
    "char": "ðŸ‡§ðŸ‡¸",
    "name": "Bahamas",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1568",
    "code": "1F1E7 1F1F9",
    "char": "ðŸ‡§ðŸ‡¹",
    "name": "Bhutan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1569",
    "code": "1F1E7 1F1FB",
    "char": "ðŸ‡§ðŸ‡»",
    "name": "Bouvet Island",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1570",
    "code": "1F1E7 1F1FC",
    "char": "ðŸ‡§ðŸ‡¼",
    "name": "Botswana",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1571",
    "code": "1F1E7 1F1FE",
    "char": "ðŸ‡§ðŸ‡¾",
    "name": "Belarus",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1572",
    "code": "1F1E7 1F1FF",
    "char": "ðŸ‡§ðŸ‡¿",
    "name": "Belize",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1573",
    "code": "1F1E8 1F1E6",
    "char": "ðŸ‡¨ðŸ‡¦",
    "name": "Canada",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1574",
    "code": "1F1E8 1F1E8",
    "char": "ðŸ‡¨ðŸ‡¨",
    "name": "Cocos (Keeling) Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1575",
    "code": "1F1E8 1F1E9",
    "char": "ðŸ‡¨ðŸ‡©",
    "name": "Congo - Kinshasa",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1576",
    "code": "1F1E8 1F1EB",
    "char": "ðŸ‡¨ðŸ‡«",
    "name": "Central African Republic",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1577",
    "code": "1F1E8 1F1EC",
    "char": "ðŸ‡¨ðŸ‡¬",
    "name": "Congo - Brazzaville",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1578",
    "code": "1F1E8 1F1ED",
    "char": "ðŸ‡¨ðŸ‡­",
    "name": "Switzerland",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1579",
    "code": "1F1E8 1F1EE",
    "char": "ðŸ‡¨ðŸ‡®",
    "name": "CÃ´te dâ€™Ivoire",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1580",
    "code": "1F1E8 1F1F0",
    "char": "ðŸ‡¨ðŸ‡°",
    "name": "Cook Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1581",
    "code": "1F1E8 1F1F1",
    "char": "ðŸ‡¨ðŸ‡±",
    "name": "Chile",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1582",
    "code": "1F1E8 1F1F2",
    "char": "ðŸ‡¨ðŸ‡²",
    "name": "Cameroon",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1583",
    "code": "1F1E8 1F1F3",
    "char": "ðŸ‡¨ðŸ‡³",
    "name": "China",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1584",
    "code": "1F1E8 1F1F4",
    "char": "ðŸ‡¨ðŸ‡´",
    "name": "Colombia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1585",
    "code": "1F1E8 1F1F5",
    "char": "ðŸ‡¨ðŸ‡µ",
    "name": "Clipperton Island",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1586",
    "code": "1F1E8 1F1F7",
    "char": "ðŸ‡¨ðŸ‡·",
    "name": "Costa Rica",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1587",
    "code": "1F1E8 1F1FA",
    "char": "ðŸ‡¨ðŸ‡º",
    "name": "Cuba",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1588",
    "code": "1F1E8 1F1FB",
    "char": "ðŸ‡¨ðŸ‡»",
    "name": "Cape Verde",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1589",
    "code": "1F1E8 1F1FC",
    "char": "ðŸ‡¨ðŸ‡¼",
    "name": "CuraÃ§ao",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1590",
    "code": "1F1E8 1F1FD",
    "char": "ðŸ‡¨ðŸ‡½",
    "name": "Christmas Island",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1591",
    "code": "1F1E8 1F1FE",
    "char": "ðŸ‡¨ðŸ‡¾",
    "name": "Cyprus",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1592",
    "code": "1F1E8 1F1FF",
    "char": "ðŸ‡¨ðŸ‡¿",
    "name": "Czech Republic",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1593",
    "code": "1F1E9 1F1EA",
    "char": "ðŸ‡©ðŸ‡ª",
    "name": "Germany",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1594",
    "code": "1F1E9 1F1EC",
    "char": "ðŸ‡©ðŸ‡¬",
    "name": "Diego Garcia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1595",
    "code": "1F1E9 1F1EF",
    "char": "ðŸ‡©ðŸ‡¯",
    "name": "Djibouti",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1596",
    "code": "1F1E9 1F1F0",
    "char": "ðŸ‡©ðŸ‡°",
    "name": "Denmark",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1597",
    "code": "1F1E9 1F1F2",
    "char": "ðŸ‡©ðŸ‡²",
    "name": "Dominica",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1598",
    "code": "1F1E9 1F1F4",
    "char": "ðŸ‡©ðŸ‡´",
    "name": "Dominican Republic",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1599",
    "code": "1F1E9 1F1FF",
    "char": "ðŸ‡©ðŸ‡¿",
    "name": "Algeria",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1600",
    "code": "1F1EA 1F1E6",
    "char": "ðŸ‡ªðŸ‡¦",
    "name": "Ceuta & Melilla",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1601",
    "code": "1F1EA 1F1E8",
    "char": "ðŸ‡ªðŸ‡¨",
    "name": "Ecuador",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1602",
    "code": "1F1EA 1F1EA",
    "char": "ðŸ‡ªðŸ‡ª",
    "name": "Estonia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1603",
    "code": "1F1EA 1F1EC",
    "char": "ðŸ‡ªðŸ‡¬",
    "name": "Egypt",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1604",
    "code": "1F1EA 1F1ED",
    "char": "ðŸ‡ªðŸ‡­",
    "name": "Western Sahara",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1605",
    "code": "1F1EA 1F1F7",
    "char": "ðŸ‡ªðŸ‡·",
    "name": "Eritrea",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1606",
    "code": "1F1EA 1F1F8",
    "char": "ðŸ‡ªðŸ‡¸",
    "name": "Spain",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1607",
    "code": "1F1EA 1F1F9",
    "char": "ðŸ‡ªðŸ‡¹",
    "name": "Ethiopia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1608",
    "code": "1F1EA 1F1FA",
    "char": "ðŸ‡ªðŸ‡º",
    "name": "European Union",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1609",
    "code": "1F1EB 1F1EE",
    "char": "ðŸ‡«ðŸ‡®",
    "name": "Finland",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1610",
    "code": "1F1EB 1F1EF",
    "char": "ðŸ‡«ðŸ‡¯",
    "name": "Fiji",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1611",
    "code": "1F1EB 1F1F0",
    "char": "ðŸ‡«ðŸ‡°",
    "name": "Falkland Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1612",
    "code": "1F1EB 1F1F2",
    "char": "ðŸ‡«ðŸ‡²",
    "name": "Micronesia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1613",
    "code": "1F1EB 1F1F4",
    "char": "ðŸ‡«ðŸ‡´",
    "name": "Faroe Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1614",
    "code": "1F1EB 1F1F7",
    "char": "ðŸ‡«ðŸ‡·",
    "name": "France",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1615",
    "code": "1F1EC 1F1E6",
    "char": "ðŸ‡¬ðŸ‡¦",
    "name": "Gabon",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1616",
    "code": "1F1EC 1F1E7",
    "char": "ðŸ‡¬ðŸ‡§",
    "name": "United Kingdom",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1617",
    "code": "1F1EC 1F1E9",
    "char": "ðŸ‡¬ðŸ‡©",
    "name": "Grenada",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1618",
    "code": "1F1EC 1F1EA",
    "char": "ðŸ‡¬ðŸ‡ª",
    "name": "Georgia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1619",
    "code": "1F1EC 1F1EB",
    "char": "ðŸ‡¬ðŸ‡«",
    "name": "French Guiana",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1620",
    "code": "1F1EC 1F1EC",
    "char": "ðŸ‡¬ðŸ‡¬",
    "name": "Guernsey",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1621",
    "code": "1F1EC 1F1ED",
    "char": "ðŸ‡¬ðŸ‡­",
    "name": "Ghana",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1622",
    "code": "1F1EC 1F1EE",
    "char": "ðŸ‡¬ðŸ‡®",
    "name": "Gibraltar",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1623",
    "code": "1F1EC 1F1F1",
    "char": "ðŸ‡¬ðŸ‡±",
    "name": "Greenland",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1624",
    "code": "1F1EC 1F1F2",
    "char": "ðŸ‡¬ðŸ‡²",
    "name": "Gambia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1625",
    "code": "1F1EC 1F1F3",
    "char": "ðŸ‡¬ðŸ‡³",
    "name": "Guinea",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1626",
    "code": "1F1EC 1F1F5",
    "char": "ðŸ‡¬ðŸ‡µ",
    "name": "Guadeloupe",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1627",
    "code": "1F1EC 1F1F6",
    "char": "ðŸ‡¬ðŸ‡¶",
    "name": "Equatorial Guinea",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1628",
    "code": "1F1EC 1F1F7",
    "char": "ðŸ‡¬ðŸ‡·",
    "name": "Greece",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1629",
    "code": "1F1EC 1F1F8",
    "char": "ðŸ‡¬ðŸ‡¸",
    "name": "South Georgia & South Sandwich Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1630",
    "code": "1F1EC 1F1F9",
    "char": "ðŸ‡¬ðŸ‡¹",
    "name": "Guatemala",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1631",
    "code": "1F1EC 1F1FA",
    "char": "ðŸ‡¬ðŸ‡º",
    "name": "Guam",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1632",
    "code": "1F1EC 1F1FC",
    "char": "ðŸ‡¬ðŸ‡¼",
    "name": "Guinea-Bissau",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1633",
    "code": "1F1EC 1F1FE",
    "char": "ðŸ‡¬ðŸ‡¾",
    "name": "Guyana",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1634",
    "code": "1F1ED 1F1F0",
    "char": "ðŸ‡­ðŸ‡°",
    "name": "Hong Kong SAR China",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1635",
    "code": "1F1ED 1F1F2",
    "char": "ðŸ‡­ðŸ‡²",
    "name": "Heard & McDonald Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1636",
    "code": "1F1ED 1F1F3",
    "char": "ðŸ‡­ðŸ‡³",
    "name": "Honduras",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1637",
    "code": "1F1ED 1F1F7",
    "char": "ðŸ‡­ðŸ‡·",
    "name": "Croatia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1638",
    "code": "1F1ED 1F1F9",
    "char": "ðŸ‡­ðŸ‡¹",
    "name": "Haiti",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1639",
    "code": "1F1ED 1F1FA",
    "char": "ðŸ‡­ðŸ‡º",
    "name": "Hungary",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1640",
    "code": "1F1EE 1F1E8",
    "char": "ðŸ‡®ðŸ‡¨",
    "name": "Canary Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1641",
    "code": "1F1EE 1F1E9",
    "char": "ðŸ‡®ðŸ‡©",
    "name": "Indonesia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1642",
    "code": "1F1EE 1F1EA",
    "char": "ðŸ‡®ðŸ‡ª",
    "name": "Ireland",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1643",
    "code": "1F1EE 1F1F1",
    "char": "ðŸ‡®ðŸ‡±",
    "name": "Israel",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1644",
    "code": "1F1EE 1F1F2",
    "char": "ðŸ‡®ðŸ‡²",
    "name": "Isle of Man",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1645",
    "code": "1F1EE 1F1F3",
    "char": "ðŸ‡®ðŸ‡³",
    "name": "India",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1646",
    "code": "1F1EE 1F1F4",
    "char": "ðŸ‡®ðŸ‡´",
    "name": "British Indian Ocean Territory",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1647",
    "code": "1F1EE 1F1F6",
    "char": "ðŸ‡®ðŸ‡¶",
    "name": "Iraq",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1648",
    "code": "1F1EE 1F1F7",
    "char": "ðŸ‡®ðŸ‡·",
    "name": "Iran",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1649",
    "code": "1F1EE 1F1F8",
    "char": "ðŸ‡®ðŸ‡¸",
    "name": "Iceland",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1650",
    "code": "1F1EE 1F1F9",
    "char": "ðŸ‡®ðŸ‡¹",
    "name": "Italy",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1651",
    "code": "1F1EF 1F1EA",
    "char": "ðŸ‡¯ðŸ‡ª",
    "name": "Jersey",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1652",
    "code": "1F1EF 1F1F2",
    "char": "ðŸ‡¯ðŸ‡²",
    "name": "Jamaica",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1653",
    "code": "1F1EF 1F1F4",
    "char": "ðŸ‡¯ðŸ‡´",
    "name": "Jordan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1654",
    "code": "1F1EF 1F1F5",
    "char": "ðŸ‡¯ðŸ‡µ",
    "name": "Japan",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1655",
    "code": "1F1F0 1F1EA",
    "char": "ðŸ‡°ðŸ‡ª",
    "name": "Kenya",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1656",
    "code": "1F1F0 1F1EC",
    "char": "ðŸ‡°ðŸ‡¬",
    "name": "Kyrgyzstan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1657",
    "code": "1F1F0 1F1ED",
    "char": "ðŸ‡°ðŸ‡­",
    "name": "Cambodia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1658",
    "code": "1F1F0 1F1EE",
    "char": "ðŸ‡°ðŸ‡®",
    "name": "Kiribati",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1659",
    "code": "1F1F0 1F1F2",
    "char": "ðŸ‡°ðŸ‡²",
    "name": "Comoros",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1660",
    "code": "1F1F0 1F1F3",
    "char": "ðŸ‡°ðŸ‡³",
    "name": "St. Kitts & Nevis",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1661",
    "code": "1F1F0 1F1F5",
    "char": "ðŸ‡°ðŸ‡µ",
    "name": "North Korea",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1662",
    "code": "1F1F0 1F1F7",
    "char": "ðŸ‡°ðŸ‡·",
    "name": "South Korea",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1663",
    "code": "1F1F0 1F1FC",
    "char": "ðŸ‡°ðŸ‡¼",
    "name": "Kuwait",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1664",
    "code": "1F1F0 1F1FE",
    "char": "ðŸ‡°ðŸ‡¾",
    "name": "Cayman Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1665",
    "code": "1F1F0 1F1FF",
    "char": "ðŸ‡°ðŸ‡¿",
    "name": "Kazakhstan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1666",
    "code": "1F1F1 1F1E6",
    "char": "ðŸ‡±ðŸ‡¦",
    "name": "Laos",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1667",
    "code": "1F1F1 1F1E7",
    "char": "ðŸ‡±ðŸ‡§",
    "name": "Lebanon",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1668",
    "code": "1F1F1 1F1E8",
    "char": "ðŸ‡±ðŸ‡¨",
    "name": "St. Lucia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1669",
    "code": "1F1F1 1F1EE",
    "char": "ðŸ‡±ðŸ‡®",
    "name": "Liechtenstein",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1670",
    "code": "1F1F1 1F1F0",
    "char": "ðŸ‡±ðŸ‡°",
    "name": "Sri Lanka",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1671",
    "code": "1F1F1 1F1F7",
    "char": "ðŸ‡±ðŸ‡·",
    "name": "Liberia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1672",
    "code": "1F1F1 1F1F8",
    "char": "ðŸ‡±ðŸ‡¸",
    "name": "Lesotho",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1673",
    "code": "1F1F1 1F1F9",
    "char": "ðŸ‡±ðŸ‡¹",
    "name": "Lithuania",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1674",
    "code": "1F1F1 1F1FA",
    "char": "ðŸ‡±ðŸ‡º",
    "name": "Luxembourg",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1675",
    "code": "1F1F1 1F1FB",
    "char": "ðŸ‡±ðŸ‡»",
    "name": "Latvia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1676",
    "code": "1F1F1 1F1FE",
    "char": "ðŸ‡±ðŸ‡¾",
    "name": "Libya",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1677",
    "code": "1F1F2 1F1E6",
    "char": "ðŸ‡²ðŸ‡¦",
    "name": "Morocco",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1678",
    "code": "1F1F2 1F1E8",
    "char": "ðŸ‡²ðŸ‡¨",
    "name": "Monaco",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1679",
    "code": "1F1F2 1F1E9",
    "char": "ðŸ‡²ðŸ‡©",
    "name": "Moldova",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1680",
    "code": "1F1F2 1F1EA",
    "char": "ðŸ‡²ðŸ‡ª",
    "name": "Montenegro",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1681",
    "code": "1F1F2 1F1EB",
    "char": "ðŸ‡²ðŸ‡«",
    "name": "St. Martin",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1682",
    "code": "1F1F2 1F1EC",
    "char": "ðŸ‡²ðŸ‡¬",
    "name": "Madagascar",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1683",
    "code": "1F1F2 1F1ED",
    "char": "ðŸ‡²ðŸ‡­",
    "name": "Marshall Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1684",
    "code": "1F1F2 1F1F0",
    "char": "ðŸ‡²ðŸ‡°",
    "name": "Macedonia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1685",
    "code": "1F1F2 1F1F1",
    "char": "ðŸ‡²ðŸ‡±",
    "name": "Mali",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1686",
    "code": "1F1F2 1F1F2",
    "char": "ðŸ‡²ðŸ‡²",
    "name": "Myanmar (Burma)",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1687",
    "code": "1F1F2 1F1F3",
    "char": "ðŸ‡²ðŸ‡³",
    "name": "Mongolia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1688",
    "code": "1F1F2 1F1F4",
    "char": "ðŸ‡²ðŸ‡´",
    "name": "Macau SAR China",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1689",
    "code": "1F1F2 1F1F5",
    "char": "ðŸ‡²ðŸ‡µ",
    "name": "Northern Mariana Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1690",
    "code": "1F1F2 1F1F6",
    "char": "ðŸ‡²ðŸ‡¶",
    "name": "Martinique",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1691",
    "code": "1F1F2 1F1F7",
    "char": "ðŸ‡²ðŸ‡·",
    "name": "Mauritania",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1692",
    "code": "1F1F2 1F1F8",
    "char": "ðŸ‡²ðŸ‡¸",
    "name": "Montserrat",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1693",
    "code": "1F1F2 1F1F9",
    "char": "ðŸ‡²ðŸ‡¹",
    "name": "Malta",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1694",
    "code": "1F1F2 1F1FA",
    "char": "ðŸ‡²ðŸ‡º",
    "name": "Mauritius",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1695",
    "code": "1F1F2 1F1FB",
    "char": "ðŸ‡²ðŸ‡»",
    "name": "Maldives",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1696",
    "code": "1F1F2 1F1FC",
    "char": "ðŸ‡²ðŸ‡¼",
    "name": "Malawi",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1697",
    "code": "1F1F2 1F1FD",
    "char": "ðŸ‡²ðŸ‡½",
    "name": "Mexico",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1698",
    "code": "1F1F2 1F1FE",
    "char": "ðŸ‡²ðŸ‡¾",
    "name": "Malaysia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1699",
    "code": "1F1F2 1F1FF",
    "char": "ðŸ‡²ðŸ‡¿",
    "name": "Mozambique",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1700",
    "code": "1F1F3 1F1E6",
    "char": "ðŸ‡³ðŸ‡¦",
    "name": "Namibia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1701",
    "code": "1F1F3 1F1E8",
    "char": "ðŸ‡³ðŸ‡¨",
    "name": "New Caledonia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1702",
    "code": "1F1F3 1F1EA",
    "char": "ðŸ‡³ðŸ‡ª",
    "name": "Niger",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1703",
    "code": "1F1F3 1F1EB",
    "char": "ðŸ‡³ðŸ‡«",
    "name": "Norfolk Island",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1704",
    "code": "1F1F3 1F1EC",
    "char": "ðŸ‡³ðŸ‡¬",
    "name": "Nigeria",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1705",
    "code": "1F1F3 1F1EE",
    "char": "ðŸ‡³ðŸ‡®",
    "name": "Nicaragua",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1706",
    "code": "1F1F3 1F1F1",
    "char": "ðŸ‡³ðŸ‡±",
    "name": "Netherlands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1707",
    "code": "1F1F3 1F1F4",
    "char": "ðŸ‡³ðŸ‡´",
    "name": "Norway",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1708",
    "code": "1F1F3 1F1F5",
    "char": "ðŸ‡³ðŸ‡µ",
    "name": "Nepal",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1709",
    "code": "1F1F3 1F1F7",
    "char": "ðŸ‡³ðŸ‡·",
    "name": "Nauru",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1710",
    "code": "1F1F3 1F1FA",
    "char": "ðŸ‡³ðŸ‡º",
    "name": "Niue",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1711",
    "code": "1F1F3 1F1FF",
    "char": "ðŸ‡³ðŸ‡¿",
    "name": "New Zealand",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1712",
    "code": "1F1F4 1F1F2",
    "char": "ðŸ‡´ðŸ‡²",
    "name": "Oman",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1713",
    "code": "1F1F5 1F1E6",
    "char": "ðŸ‡µðŸ‡¦",
    "name": "Panama",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1714",
    "code": "1F1F5 1F1EA",
    "char": "ðŸ‡µðŸ‡ª",
    "name": "Peru",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1715",
    "code": "1F1F5 1F1EB",
    "char": "ðŸ‡µðŸ‡«",
    "name": "French Polynesia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1716",
    "code": "1F1F5 1F1EC",
    "char": "ðŸ‡µðŸ‡¬",
    "name": "Papua New Guinea",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1717",
    "code": "1F1F5 1F1ED",
    "char": "ðŸ‡µðŸ‡­",
    "name": "Philippines",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1718",
    "code": "1F1F5 1F1F0",
    "char": "ðŸ‡µðŸ‡°",
    "name": "Pakistan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1719",
    "code": "1F1F5 1F1F1",
    "char": "ðŸ‡µðŸ‡±",
    "name": "Poland",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1720",
    "code": "1F1F5 1F1F2",
    "char": "ðŸ‡µðŸ‡²",
    "name": "St. Pierre & Miquelon",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1721",
    "code": "1F1F5 1F1F3",
    "char": "ðŸ‡µðŸ‡³",
    "name": "Pitcairn Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1722",
    "code": "1F1F5 1F1F7",
    "char": "ðŸ‡µðŸ‡·",
    "name": "Puerto Rico",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1723",
    "code": "1F1F5 1F1F8",
    "char": "ðŸ‡µðŸ‡¸",
    "name": "Palestinian Territories",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1724",
    "code": "1F1F5 1F1F9",
    "char": "ðŸ‡µðŸ‡¹",
    "name": "Portugal",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1725",
    "code": "1F1F5 1F1FC",
    "char": "ðŸ‡µðŸ‡¼",
    "name": "Palau",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1726",
    "code": "1F1F5 1F1FE",
    "char": "ðŸ‡µðŸ‡¾",
    "name": "Paraguay",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1727",
    "code": "1F1F6 1F1E6",
    "char": "ðŸ‡¶ðŸ‡¦",
    "name": "Qatar",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1728",
    "code": "1F1F7 1F1EA",
    "char": "ðŸ‡·ðŸ‡ª",
    "name": "RÃ©union",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1729",
    "code": "1F1F7 1F1F4",
    "char": "ðŸ‡·ðŸ‡´",
    "name": "Romania",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1730",
    "code": "1F1F7 1F1F8",
    "char": "ðŸ‡·ðŸ‡¸",
    "name": "Serbia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1731",
    "code": "1F1F7 1F1FA",
    "char": "ðŸ‡·ðŸ‡º",
    "name": "Russia",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1732",
    "code": "1F1F7 1F1FC",
    "char": "ðŸ‡·ðŸ‡¼",
    "name": "Rwanda",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1733",
    "code": "1F1F8 1F1E6",
    "char": "ðŸ‡¸ðŸ‡¦",
    "name": "Saudi Arabia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1734",
    "code": "1F1F8 1F1E7",
    "char": "ðŸ‡¸ðŸ‡§",
    "name": "Solomon Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1735",
    "code": "1F1F8 1F1E8",
    "char": "ðŸ‡¸ðŸ‡¨",
    "name": "Seychelles",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1736",
    "code": "1F1F8 1F1E9",
    "char": "ðŸ‡¸ðŸ‡©",
    "name": "Sudan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1737",
    "code": "1F1F8 1F1EA",
    "char": "ðŸ‡¸ðŸ‡ª",
    "name": "Sweden",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1738",
    "code": "1F1F8 1F1EC",
    "char": "ðŸ‡¸ðŸ‡¬",
    "name": "Singapore",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1739",
    "code": "1F1F8 1F1ED",
    "char": "ðŸ‡¸ðŸ‡­",
    "name": "St. Helena",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1740",
    "code": "1F1F8 1F1EE",
    "char": "ðŸ‡¸ðŸ‡®",
    "name": "Slovenia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1741",
    "code": "1F1F8 1F1EF",
    "char": "ðŸ‡¸ðŸ‡¯",
    "name": "Svalbard & Jan Mayen",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1742",
    "code": "1F1F8 1F1F0",
    "char": "ðŸ‡¸ðŸ‡°",
    "name": "Slovakia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1743",
    "code": "1F1F8 1F1F1",
    "char": "ðŸ‡¸ðŸ‡±",
    "name": "Sierra Leone",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1744",
    "code": "1F1F8 1F1F2",
    "char": "ðŸ‡¸ðŸ‡²",
    "name": "San Marino",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1745",
    "code": "1F1F8 1F1F3",
    "char": "ðŸ‡¸ðŸ‡³",
    "name": "Senegal",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1746",
    "code": "1F1F8 1F1F4",
    "char": "ðŸ‡¸ðŸ‡´",
    "name": "Somalia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1747",
    "code": "1F1F8 1F1F7",
    "char": "ðŸ‡¸ðŸ‡·",
    "name": "Suriname",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1748",
    "code": "1F1F8 1F1F8",
    "char": "ðŸ‡¸ðŸ‡¸",
    "name": "South Sudan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1749",
    "code": "1F1F8 1F1F9",
    "char": "ðŸ‡¸ðŸ‡¹",
    "name": "SÃ£o TomÃ© & PrÃ­ncipe",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1750",
    "code": "1F1F8 1F1FB",
    "char": "ðŸ‡¸ðŸ‡»",
    "name": "El Salvador",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1751",
    "code": "1F1F8 1F1FD",
    "char": "ðŸ‡¸ðŸ‡½",
    "name": "Sint Maarten",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1752",
    "code": "1F1F8 1F1FE",
    "char": "ðŸ‡¸ðŸ‡¾",
    "name": "Syria",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1753",
    "code": "1F1F8 1F1FF",
    "char": "ðŸ‡¸ðŸ‡¿",
    "name": "Swaziland",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1754",
    "code": "1F1F9 1F1E6",
    "char": "ðŸ‡¹ðŸ‡¦",
    "name": "Tristan da Cunha",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1755",
    "code": "1F1F9 1F1E8",
    "char": "ðŸ‡¹ðŸ‡¨",
    "name": "Turks & Caicos Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1756",
    "code": "1F1F9 1F1E9",
    "char": "ðŸ‡¹ðŸ‡©",
    "name": "Chad",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1757",
    "code": "1F1F9 1F1EB",
    "char": "ðŸ‡¹ðŸ‡«",
    "name": "French Southern Territories",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1758",
    "code": "1F1F9 1F1EC",
    "char": "ðŸ‡¹ðŸ‡¬",
    "name": "Togo",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1759",
    "code": "1F1F9 1F1ED",
    "char": "ðŸ‡¹ðŸ‡­",
    "name": "Thailand",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1760",
    "code": "1F1F9 1F1EF",
    "char": "ðŸ‡¹ðŸ‡¯",
    "name": "Tajikistan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1761",
    "code": "1F1F9 1F1F0",
    "char": "ðŸ‡¹ðŸ‡°",
    "name": "Tokelau",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1762",
    "code": "1F1F9 1F1F1",
    "char": "ðŸ‡¹ðŸ‡±",
    "name": "Timor-Leste",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1763",
    "code": "1F1F9 1F1F2",
    "char": "ðŸ‡¹ðŸ‡²",
    "name": "Turkmenistan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1764",
    "code": "1F1F9 1F1F3",
    "char": "ðŸ‡¹ðŸ‡³",
    "name": "Tunisia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1765",
    "code": "1F1F9 1F1F4",
    "char": "ðŸ‡¹ðŸ‡´",
    "name": "Tonga",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1766",
    "code": "1F1F9 1F1F7",
    "char": "ðŸ‡¹ðŸ‡·",
    "name": "Turkey",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1767",
    "code": "1F1F9 1F1F9",
    "char": "ðŸ‡¹ðŸ‡¹",
    "name": "Trinidad & Tobago",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1768",
    "code": "1F1F9 1F1FB",
    "char": "ðŸ‡¹ðŸ‡»",
    "name": "Tuvalu",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1769",
    "code": "1F1F9 1F1FC",
    "char": "ðŸ‡¹ðŸ‡¼",
    "name": "Taiwan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1770",
    "code": "1F1F9 1F1FF",
    "char": "ðŸ‡¹ðŸ‡¿",
    "name": "Tanzania",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1771",
    "code": "1F1FA 1F1E6",
    "char": "ðŸ‡ºðŸ‡¦",
    "name": "Ukraine",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1772",
    "code": "1F1FA 1F1EC",
    "char": "ðŸ‡ºðŸ‡¬",
    "name": "Uganda",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1773",
    "code": "1F1FA 1F1F2",
    "char": "ðŸ‡ºðŸ‡²",
    "name": "U.S. Outlying Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1774",
    "code": "1F1FA 1F1F8",
    "char": "ðŸ‡ºðŸ‡¸",
    "name": "United States",
    "date": "2010Ê²",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1775",
    "code": "1F1FA 1F1FE",
    "char": "ðŸ‡ºðŸ‡¾",
    "name": "Uruguay",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1776",
    "code": "1F1FA 1F1FF",
    "char": "ðŸ‡ºðŸ‡¿",
    "name": "Uzbekistan",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1777",
    "code": "1F1FB 1F1E6",
    "char": "ðŸ‡»ðŸ‡¦",
    "name": "Vatican City",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1778",
    "code": "1F1FB 1F1E8",
    "char": "ðŸ‡»ðŸ‡¨",
    "name": "St. Vincent & Grenadines",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1779",
    "code": "1F1FB 1F1EA",
    "char": "ðŸ‡»ðŸ‡ª",
    "name": "Venezuela",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1780",
    "code": "1F1FB 1F1EC",
    "char": "ðŸ‡»ðŸ‡¬",
    "name": "British Virgin Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1781",
    "code": "1F1FB 1F1EE",
    "char": "ðŸ‡»ðŸ‡®",
    "name": "U.S. Virgin Islands",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1782",
    "code": "1F1FB 1F1F3",
    "char": "ðŸ‡»ðŸ‡³",
    "name": "Vietnam",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1783",
    "code": "1F1FB 1F1FA",
    "char": "ðŸ‡»ðŸ‡º",
    "name": "Vanuatu",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1784",
    "code": "1F1FC 1F1EB",
    "char": "ðŸ‡¼ðŸ‡«",
    "name": "Wallis & Futuna",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1785",
    "code": "1F1FC 1F1F8",
    "char": "ðŸ‡¼ðŸ‡¸",
    "name": "Samoa",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1786",
    "code": "1F1FD 1F1F0",
    "char": "ðŸ‡½ðŸ‡°",
    "name": "Kosovo",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1787",
    "code": "1F1FE 1F1EA",
    "char": "ðŸ‡¾ðŸ‡ª",
    "name": "Yemen",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1788",
    "code": "1F1FE 1F1F9",
    "char": "ðŸ‡¾ðŸ‡¹",
    "name": "Mayotte",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1789",
    "code": "1F1FF 1F1E6",
    "char": "ðŸ‡¿ðŸ‡¦",
    "name": "South Africa",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1790",
    "code": "1F1FF 1F1F2",
    "char": "ðŸ‡¿ðŸ‡²",
    "name": "Zambia",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  },
  {
    "no": "1791",
    "code": "1F1FF 1F1FC",
    "char": "ðŸ‡¿ðŸ‡¼",
    "name": "Zimbabwe",
    "date": "2010Ë£",
    "default": "n/a",
    "keywords": "flag"
  }
].forEach(function(e) {
    idx.add(e);
});
    return {
        search: function(q) {
          return idx.search(q);
        }
    };
});