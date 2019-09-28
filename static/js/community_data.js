const CommunityJSON = function() {
    let d =[
      {
        "community": "苹果社区(南区)",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 1999,
        "averagePrice": 86806,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/24cf6ecb6949ebae17e15e06aa51b775?w=280&h=210"
      },
      {
        "community": "后现代城A区",
        "area": "百子湾",
        "location": "三四环之间",
        "completiondDate": 2003,
        "averagePrice": 71896,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/b83d7c3ee8d8ae2516d11ffd16ba7f64?w=280&h=210"
      },
      {
        "community": "百环家园",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 2005,
        "averagePrice": 59484,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/69bd5276c2af8dd46617812a9a9a4935?w=280&h=210"
      },
      {
        "community": "太阳公元北区",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2010,
        "averagePrice": 145318,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/1ff5ca94488a956f3ed599b83b58eeee?w=280&h=210"
      },
      {
        "community": "棕榈泉国际公寓",
        "area": "朝阳公园",
        "location": "三四环之间",
        "completiondDate": 2004,
        "averagePrice": 103451,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/22988beceaecf93062c18cd03f6c06be?w=280&h=210"
      },
      {
        "community": "鸿博家园一期C区",
        "area": "小红门",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 34285,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/e5fb6d169ce12c3bc194b3818536c2fd?w=280&h=210"
      },
      {
        "community": "富力又一城A区",
        "area": "豆各庄",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 52994,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/38e3babc0d5ecfbfb98521cb802abf9e?w=280&h=210"
      },
      {
        "community": "首城国际",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 2010,
        "averagePrice": 94624,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/86af946e86a2687f1ffa1420bcb9c673?w=280&h=210"
      },
      {
        "community": "广渠金茂府北区",
        "area": "大望路",
        "location": "三四环之间",
        "completiondDate": 2011,
        "averagePrice": 146116,
        "photoUrl": "https://pic3.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwkei6zuvnadbiegq.jpg"
      },
      {
        "community": "北京新天地(东区)",
        "area": "管庄",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 57503,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/af44ec029a280adfac6cbd7d7868fa62?w=280&h=210"
      },
      {
        "community": "阳光上东",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 93212,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/8cb4013ec740acfeca45cab6bf707296?w=280&h=210"
      },
      {
        "community": "嘉铭桐城A区",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 89341,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/01d69ddc92e9713247f837b152a5318d?w=280&h=210"
      },
      {
        "community": "望京西园三区",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 67418,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/42f4624499700ea0b82a97674a7db308?w=280&h=210"
      },
      {
        "community": "芍药居北里小区",
        "area": "芍药居",
        "location": "三四环之间",
        "completiondDate": 1999,
        "averagePrice": 85339,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/8db536dfbe1a3c539003c5464bf1483c?w=280&h=210"
      },
      {
        "community": "茉藜园",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 58389,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/262e0eb76e2b11eb685a42629f6367dc?w=280&h=210"
      },
      {
        "community": "天鹅湾北区",
        "area": "朝青板块",
        "location": "四五环之间",
        "completiondDate": 2008,
        "averagePrice": 114965,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/0ce81366bedc1aa076d052c933723277?w=280&h=210"
      },
      {
        "community": "融科橄榄城(一期)",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 101352,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/e43e3979c0cf86a4dcea2237a092a3ab?w=280&h=210"
      },
      {
        "community": "国奥村(西区)",
        "area": "奥林匹克公园",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 127779,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/7aa8fe9a39e207816a991d4e50218699?w=280&h=210"
      },
      {
        "community": "远洋天地",
        "area": "四惠",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 74923,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/2a224c938864e5cab54e2f28c3ee2072?w=280&h=210"
      },
      {
        "community": "华腾园",
        "area": "劲松",
        "location": "三四环之间",
        "completiondDate": 1999,
        "averagePrice": 71067,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/c276f2e34c6245d1f7fc87dd2179186b?w=280&h=210"
      },
      {
        "community": "UHN国际村",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2002,
        "averagePrice": 93182,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/e8a53e2a74a917f29937254ecb64f6c6?w=280&h=210"
      },
      {
        "community": "百子湾家园(A区)",
        "area": "百子湾",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 56641,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/74abc0d372d0ce63063c0b6be5244c3d?w=280&h=210"
      },
      {
        "community": "季景沁园",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 82551,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/9922e55e1ecd155d17e325abadf00340?w=280&h=210"
      },
      {
        "community": "公园大道",
        "area": "朝阳公园",
        "location": "三四环之间",
        "completiondDate": 2004,
        "averagePrice": 99976,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/5e358c3a17affbebfd045fbcd42d1852?w=280&h=210"
      },
      {
        "community": "国兴观湖国际",
        "area": "朝阳公园",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 97913,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/3aa180fae310282c61001862ee44e681?w=280&h=210"
      },
      {
        "community": "公园1872",
        "area": "十里堡",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 92836,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/d53faf593fe487b820e2de83653c9c45?w=280&h=210"
      },
      {
        "community": "华纺易城",
        "area": "朝青板块",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 75955,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/68e3b069b025629259b7683316483d06?w=280&h=210"
      },
      {
        "community": "富力城D区",
        "area": "双井",
        "location": "二三环之间",
        "completiondDate": 2015,
        "averagePrice": 112481,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/197026dc21f81080c92ad3eaf4b57b4c?w=280&h=210"
      },
      {
        "community": "凤凰城",
        "area": "三元桥",
        "location": "三四环之间",
        "completiondDate": 2002,
        "averagePrice": 108070,
        "photoUrl": "https://pic4.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwtigybuvndm2gr2q.jpg"
      },
      {
        "community": "望春园",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2008,
        "averagePrice": 61560,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/114cc0f98866c3ac887aaec40303d873?w=280&h=210"
      },
      {
        "community": "富力城A区",
        "area": "双井",
        "location": "二三环之间",
        "completiondDate": 2000,
        "averagePrice": 104458,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/927ef024059fe98d189dff1608524ae2?w=280&h=210"
      },
      {
        "community": "安慧北里逸园",
        "area": "大屯",
        "location": "四五环之间",
        "completiondDate": 1993,
        "averagePrice": 73445,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/c0214a85cefc56749cf245a6e2d92957?w=280&h=210"
      },
      {
        "community": "亚运新新家园",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2014,
        "averagePrice": 99279,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/5760d5b44ffe136cbf6c5a3a9c17962f?w=280&h=210"
      },
      {
        "community": "美景东方",
        "area": "华威桥",
        "location": "三四环之间",
        "completiondDate": 2003,
        "averagePrice": 71729,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/764812f57fc1fee1069a43001f50b6d8?w=280&h=210"
      },
      {
        "community": "兴隆家园南区",
        "area": "高碑店",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 65320,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/43d2ffa803828083401834da3f0e9def?w=280&h=210"
      },
      {
        "community": "红玺台",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2012,
        "averagePrice": 161193,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/7ce06a44bbed004c441297b79eef968e?w=280&h=210"
      },
      {
        "community": "华贸天地",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2014,
        "averagePrice": 89126,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/0900c4a9ac311c94388bc2a4340942be?w=280&h=210"
      },
      {
        "community": "九龙花园",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 1998,
        "averagePrice": 62340,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/75a0aee00a74f2c3d8ee5070839f7fec?w=280&h=210"
      },
      {
        "community": "华贸公寓",
        "area": "大望路",
        "location": "三四环之间",
        "completiondDate": 2005,
        "averagePrice": 95234,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/3ee7aab38004c1e85e035a2c44ec2e5a?w=280&h=210"
      },
      {
        "community": "绣菊园北区",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2000,
        "averagePrice": 52972,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/3ffa9ced154f612cadacb044f1d40055?w=280&h=210"
      },
      {
        "community": "国风上观",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 86662,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/88c219d87f85727546c33ac7bdbb5385?w=280&h=210"
      },
      {
        "community": "金海国际",
        "area": "百子湾",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 62015,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/cded3f1b25f9bed69fee0681d93b9849?w=280&h=210"
      },
      {
        "community": "珠江罗马嘉园(西区)",
        "area": "朝青板块",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 74564,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/60c8aa58765eb20fc6d07cbd30aa5380?w=280&h=210"
      },
      {
        "community": "金港国际",
        "area": "大望路",
        "location": "三四环之间",
        "completiondDate": 2002,
        "averagePrice": 86811,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/be25d20ac03108de7913ad1b3f36c087?w=280&h=210"
      },
      {
        "community": "金地国际花园",
        "area": "国贸",
        "location": "三四环之间",
        "completiondDate": 2003,
        "averagePrice": 109521,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/8f2ce575ae4cfe5f962e4a0993258d68?w=280&h=210"
      },
      {
        "community": "紫薇天悦",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 2008,
        "averagePrice": 85362,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/ca898c0f1fc1708f3fad4fc802ebccbd?w=280&h=210"
      },
      {
        "community": "宝星国际",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2006,
        "averagePrice": 78000,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/44075b4db1c83c3f11ca90078bc0e4c7?w=280&h=210"
      },
      {
        "community": "南新园小区",
        "area": "华威桥",
        "location": "三四环之间",
        "completiondDate": 1995,
        "averagePrice": 60538,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/52330fd2605ec173f0aa3f4b8c46c7a4?w=280&h=210"
      },
      {
        "community": "悠乐汇",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 38801,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/8ffda9ff96b497f834147cbf84979402?w=280&h=210"
      },
      {
        "community": "垡头翠成馨园(A区)",
        "area": "垡头",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 52480,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/cd588c4cda2ec55644346bd2b48f9a9c?w=280&h=210"
      },
      {
        "community": "慧忠北里",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 1998,
        "averagePrice": 67790,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/6b464ffe24ded4085c56bf7912117964?w=280&h=210"
      },
      {
        "community": "合生国际花园(一期)",
        "area": "双井",
        "location": "二三环之间",
        "completiondDate": 2000,
        "averagePrice": 92831,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/9f388184fa4ba4185952908de31cb915?w=280&h=210"
      },
      {
        "community": "清友园",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2000,
        "averagePrice": 56670,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/ad0c0c7beed0402e270a40fde632f4d1?w=280&h=210"
      },
      {
        "community": "农光里小区",
        "area": "劲松",
        "location": "三四环之间",
        "completiondDate": 1985,
        "averagePrice": 66994,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/a96b5f89efce08778f07e5e49a77b7fd?w=280&h=210"
      },
      {
        "community": "上元君庭",
        "area": "媒体村",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 77978,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/330c2d16714ca3e1e1185a72f7c3f4b0?w=280&h=210"
      },
      {
        "community": "世茂奥临花园",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2000,
        "averagePrice": 83786,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/44fe57fe3ac9e920948974f358a786ad?w=280&h=210"
      },
      {
        "community": "松榆西里",
        "area": "潘家园",
        "location": "三四环之间",
        "completiondDate": 2015,
        "averagePrice": 65189,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/be10aab7ae7bb1c4e0f8703b3481a4ae?w=280&h=210"
      },
      {
        "community": "富力城C区",
        "area": "双井",
        "location": "二三环之间",
        "completiondDate": 2005,
        "averagePrice": 102444,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/52b984f56b967b1e91f9cf18a65c2f67?w=280&h=210"
      },
      {
        "community": "北京香颂",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 84033,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/38bd34636d0ba92e7ac4074ba1fee106?w=280&h=210"
      },
      {
        "community": "弘善家园",
        "area": "潘家园",
        "location": "二三环之间",
        "completiondDate": 2009,
        "averagePrice": 58491,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/d2abb836ca79a6d3782062c3f40c7e41?w=280&h=210"
      },
      {
        "community": "鹿港嘉苑",
        "area": "花家地",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 82801,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/fd7ea1d0c947929205f1ba93c16903bf?w=280&h=210"
      },
      {
        "community": "保利中央公园",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2012,
        "averagePrice": 120855,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/a11e760a447c31923bfb868c96341146?w=280&h=210"
      },
      {
        "community": "佳艺青年汇",
        "area": "朝青板块",
        "location": "四五环之间",
        "completiondDate": 2006,
        "averagePrice": 72611,
        "photoUrl": "https://pic2.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bkuyfvomtvuvmtwufvqq.jpg"
      },
      {
        "community": "嘉美风尚中心",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2006,
        "averagePrice": 70140,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/361618a2635a15fca7512ad77a7e1b82?w=280&h=210"
      },
      {
        "community": "珠江绿洲家园",
        "area": "定福庄",
        "location": "五六环之间",
        "completiondDate": 2003,
        "averagePrice": 51229,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/ec7b41d0808400543a0da5424cc15702?w=280&h=210"
      },
      {
        "community": "建工双合家园B区",
        "area": "垡头",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 46428,
        "photoUrl": "https://pic7.58cdn.com.cn/images/xq_img/n_s12350716558723671094.jpg"
      },
      {
        "community": "华鼎世家",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 70296,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/5278fa50bec75ad0989df8ba0d5ce739?w=280&h=210"
      },
      {
        "community": "首开铂郡",
        "area": "三里屯",
        "location": "二三环之间",
        "completiondDate": 2011,
        "averagePrice": 96103,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/015d263cfef4b57f23fdcf59d8c96da4?w=280&h=210"
      },
      {
        "community": "远洋一方花语苑",
        "area": "管庄",
        "location": "五六环之间",
        "completiondDate": 2013,
        "averagePrice": 58615,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/dc2a857645807ea99d3c80b8ae77ad13?w=280&h=210"
      },
      {
        "community": "炫特区",
        "area": "石佛营",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 67054,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/00f5bd1bf022a1aa952ab93bcdccc510?w=280&h=210"
      },
      {
        "community": "通惠家园惠民园",
        "area": "四惠",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 59423,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/a51a5b0b9845fc0ea867f9e3a8bbc2b0?w=280&h=210"
      },
      {
        "community": "卡夫卡公社",
        "area": "常营",
        "location": "五六环之间",
        "completiondDate": 2010,
        "averagePrice": 52500,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/22938becebb2a2792e2a193900443260?w=280&h=210"
      },
      {
        "community": "时代国际嘉园",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 2006,
        "averagePrice": 87530,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/8baee84507a06e0cb0c8ac3e118eb271?w=280&h=210"
      },
      {
        "community": "中海城紫鑫阁",
        "area": "十里河",
        "location": "三四环之间",
        "completiondDate": 2008,
        "averagePrice": 35405,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/8ffc502ef7c07e5df1ab1517ee4010b7?w=280&h=210"
      },
      {
        "community": "国典华园",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 2003,
        "averagePrice": 98580,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/1fd0c964c45645dfbd7050fee73b5fa6?w=280&h=210"
      },
      {
        "community": "慧谷阳光",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 91838,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/3729c0a8cc1780eefa6436dc9237aa70?w=280&h=210"
      },
      {
        "community": "幸福二村",
        "area": "工体",
        "location": "二三环之间",
        "completiondDate": 1992,
        "averagePrice": 85663,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/784ef426a70dff42bc8a74cc476c9d03?w=280&h=210"
      },
      {
        "community": "管庄西里",
        "area": "管庄",
        "location": "五六环之间",
        "completiondDate": 1998,
        "averagePrice": 53449,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/07f581ffa127e394057ad4363776b328?w=280&h=210"
      },
      {
        "community": "南湖东园(一区)",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 65683,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/03cbb087d52ed99cc232035b9860df82?w=280&h=210"
      },
      {
        "community": "柏林爱乐(一期)",
        "area": "常营",
        "location": "五六环之间",
        "completiondDate": 2008,
        "averagePrice": 63457,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/6aaa1c690428879a813ee7292d4877c4?w=280&h=210"
      },
      {
        "community": "周庄嘉园B区",
        "area": "华威桥",
        "location": "三四环之间",
        "completiondDate": 2000,
        "averagePrice": 61695,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/87c839bd8a96fdfbd6e97d6315497cfa?w=280&h=210"
      },
      {
        "community": "银领国际",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 66161,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/0823b1b651d00b457b013d526c4391b5?w=280&h=210"
      },
      {
        "community": "乐成国际",
        "area": "国贸",
        "location": "三四环之间",
        "completiondDate": 2006,
        "averagePrice": 99288,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/9a34d7de36bf8ce1334a0b4579069e0c?w=280&h=210"
      },
      {
        "community": "南湖东园(二区)",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 78703,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/56f04d7e71bc6fb46bc8c52cfa4b1432?w=280&h=210"
      },
      {
        "community": "风度柏林",
        "area": "大望路",
        "location": "三四环之间",
        "completiondDate": 2003,
        "averagePrice": 80135,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/e4ba1e895d217f5786fa0ced7397df78?w=280&h=210"
      },
      {
        "community": "紫玉山庄",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 160860,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/4807f8ef5b08cdb76bf2a06cb90d9fd9?w=280&h=210"
      },
      {
        "community": "东区国际公寓",
        "area": "四惠",
        "location": "三四环之间",
        "completiondDate": 2000,
        "averagePrice": 69748,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/dcce2f756e40cd1226db9783a6d2092f?w=280&h=210"
      },
      {
        "community": "上京新航线",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 89334,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/f6a58a9c1e6c16496fbf89ef74b83062?w=280&h=210"
      },
      {
        "community": "融华世家",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 2010,
        "averagePrice": 98980,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/36a24c2c7f395b2fbdc300e1169674e9?w=280&h=210"
      },
      {
        "community": "南平里",
        "area": "首都机场",
        "location": "五六环之间",
        "completiondDate": 1996,
        "averagePrice": 40740,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/b1ae79673e8b749018593d6cec3b5ffa?w=280&h=210"
      },
      {
        "community": "利泽西园",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 72183,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/94e5c25ca6900f2e5e953cc208fb2998?w=280&h=210"
      },
      {
        "community": "半岛国际公寓",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2005,
        "averagePrice": 94498,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/baf84732ed66a0cfe1ae827b4ddfde0c?w=280&h=210"
      },
      {
        "community": "三里屯SOHO公寓",
        "area": "三里屯",
        "location": "二三环之间",
        "completiondDate": 2015,
        "averagePrice": 77089,
        "photoUrl": ""
      },
      {
        "community": "丽都水岸",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 87496,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/ffe88d8c004b812d10368230f2fbf440?w=280&h=210"
      },
      {
        "community": "慧忠里小区",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 1996,
        "averagePrice": 93742,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/575311e4cfca6217fa03efa637901891?w=280&h=210"
      },
      {
        "community": "丽水嘉园",
        "area": "朝阳公园",
        "location": "三四环之间",
        "completiondDate": 1997,
        "averagePrice": 82300,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/070e5a931ff20a903288116bd0d323ee?w=280&h=210"
      },
      {
        "community": "万科星园",
        "area": "媒体村",
        "location": "五六环之间",
        "completiondDate": 2001,
        "averagePrice": 81224,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/75f0270013fa924286deb6dc95adbde0?w=280&h=210"
      },
      {
        "community": "安贞西里一区",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 1985,
        "averagePrice": 90325,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/c4667bd32a68eda92832bda304441aa9?w=280&h=210"
      },
      {
        "community": "阳光100国际公寓",
        "area": "CBD ",
        "location": "三四环之间",
        "completiondDate": 2001,
        "averagePrice": 80734,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/de1f3374ae2c43b2f986f8d3f9d91fa2?w=280&h=210"
      },
      {
        "community": "日坛国际公寓",
        "area": "朝外大街",
        "location": "二三环之间",
        "completiondDate": 2008,
        "averagePrice": 81031,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/4612f13a5931f99f0fc240bad2742daf?w=280&h=210"
      },
      {
        "community": "千鹤家园",
        "area": "惠新西街",
        "location": "三四环之间",
        "completiondDate": 2002,
        "averagePrice": 80350,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/980400655f40df5936917c18ba1f0960?w=280&h=210"
      },
      {
        "community": "远洋万和公馆",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2016,
        "averagePrice": 127296,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/b8875839839c5d84eb1c4cf5634eadb6?w=280&h=210"
      },
      {
        "community": "双龙南里小区",
        "area": "潘家园",
        "location": "三四环之间",
        "completiondDate": 1998,
        "averagePrice": 59339,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/30b6c7c26856b1d45119615a0c9c7e76?w=280&h=210"
      },
      {
        "community": "天创世缘",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 63426,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/96b58064ec16fed0f96f129f6046161d?w=280&h=210"
      },
      {
        "community": "小关北里",
        "area": "小关",
        "location": "三四环之间",
        "completiondDate": 1992,
        "averagePrice": 76369,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/b4391f438aed7d168b1584c1c0c2038f?w=280&h=210"
      },
      {
        "community": "恋日绿岛小区",
        "area": "十八里店",
        "location": "四五环之间",
        "completiondDate": 2002,
        "averagePrice": 48245,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/a40ae7b3520c06e70b8de2a2436eb19e?w=280&h=210"
      },
      {
        "community": "力鸿花园",
        "area": "左家庄",
        "location": "二三环之间",
        "completiondDate": 1997,
        "averagePrice": 80132,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/242201ef8de2695e57a9b5663b08ff67?w=280&h=210"
      },
      {
        "community": "梵谷水郡",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 61679,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/988c40296169cd72035c63b753ba5742?w=280&h=210"
      },
      {
        "community": "朝阳园",
        "area": "甘露园",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 63884,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/8ddaa123e128a5051ec164799cee4709?w=280&h=210"
      },
      {
        "community": "西坝河东里",
        "area": "西坝河",
        "location": "三四环之间",
        "completiondDate": 1990,
        "averagePrice": 73534,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/c51abd862e35abceea45f90e7d6be527?w=280&h=210"
      },
      {
        "community": "泛海国际碧海园",
        "area": "朝阳公园",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 109363,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/ce8d9b98d1c01607b02d4baf7e7080d3?w=280&h=210"
      },
      {
        "community": "安贞西里二区",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 1985,
        "averagePrice": 88110,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/1b5c7b0be88d06994eca11803cdfd5bb?w=280&h=210"
      },
      {
        "community": "香江花园(别墅)",
        "area": "来广营",
        "location": "五六环之间",
        "completiondDate": 1997,
        "averagePrice": 92328,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/8973478539c11096ec2e7e6368fac1a0?w=280&h=210"
      },
      {
        "community": "保利嘉园3号院",
        "area": "常营",
        "location": "五六环之间",
        "completiondDate": 2010,
        "averagePrice": 52541,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/b326472088d7adf35cbbbc3087a5278f?w=280&h=210"
      },
      {
        "community": "火星园",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2010,
        "averagePrice": 124679,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/5d16d141e1b71e7034a6369f02c700bd?w=280&h=210"
      },
      {
        "community": "龙湖长楹天街(东区)",
        "area": "常营",
        "location": "五六环之间",
        "completiondDate": 2014,
        "averagePrice": 68814,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/05a459056ff9524e9b6712e603c51f5d?w=280&h=210"
      },
      {
        "community": "瞰都",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 78633,
        "photoUrl": "https://pic6.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bkujjd5wa5vfmbgbpuqq.jpg"
      },
      {
        "community": "华龙美树",
        "area": "管庄",
        "location": "五六环之间",
        "completiondDate": 2005,
        "averagePrice": 62601,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/5eb0bddc932f9ac7526dbf0411c70086?w=280&h=210"
      },
      {
        "community": "大悦公寓",
        "area": "朝青板块",
        "location": "四五环之间",
        "completiondDate": 2010,
        "averagePrice": 48148,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/9391354ba0e56e5adb799478b5c85193?w=280&h=210"
      },
      {
        "community": "首创禧瑞都",
        "area": "CBD ",
        "location": "三四环之间",
        "completiondDate": 2015,
        "averagePrice": 120012,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/4829b4cf417dcdb58f73e934fc47ed8f?w=280&h=210"
      },
      {
        "community": "冠城大通澜石",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2013,
        "averagePrice": 137960,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/da0293d784bca916dd0ab4d0faf05cd0?w=280&h=210"
      },
      {
        "community": "东恒时代(一期)",
        "area": "四惠",
        "location": "四五环之间",
        "completiondDate": 2002,
        "averagePrice": 69058,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/9c2d8d32ecd6494a05962bd1cb034b51?w=280&h=210"
      },
      {
        "community": "南沙滩小区",
        "area": "南沙滩",
        "location": "四五环之间",
        "completiondDate": 1981,
        "averagePrice": 76249,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/158b84f8fb05a8e25c94c2c85cc4c8ee?w=280&h=210"
      },
      {
        "community": "富力城B区",
        "area": "双井",
        "location": "二三环之间",
        "completiondDate": 2005,
        "averagePrice": 103623,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/1c4a2ba0dbe0569aefad9d2366eaaffa?w=280&h=210"
      },
      {
        "community": "康营家园A区",
        "area": "孙河",
        "location": "五六环之间",
        "completiondDate": 2010,
        "averagePrice": 71111,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/4f366d6b3e6665b87e91828318ffb0be?w=280&h=210"
      },
      {
        "community": "金驹家园F区",
        "area": "东坝",
        "location": "五六环之间",
        "completiondDate": 2012,
        "averagePrice": 30117,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/fe9af6f2b096ab25afe7072cadedc184?w=280&h=210"
      },
      {
        "community": "天溪园",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2005,
        "averagePrice": 106704,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/be0043a0b91a34b3d44cf051f3e80b93?w=280&h=210"
      },
      {
        "community": "金泽家园A区",
        "area": "东坝",
        "location": "五六环之间",
        "completiondDate": 2012,
        "averagePrice": 30328,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/d467667741cd092ff884cc2e0a776b3b?w=280&h=210"
      },
      {
        "community": "风林绿洲",
        "area": "南沙滩",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 96566,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/d15e1750e23f9c62b55483c5bb7d911d?w=280&h=210"
      },
      {
        "community": "望京西园一区",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 1993,
        "averagePrice": 69236,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/dd16796e131f37df9c24068514d3f31f?w=280&h=210"
      },
      {
        "community": "光大名筑",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 92149,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/754193fed8579a1847bb616d8977fc88?w=280&h=210"
      },
      {
        "community": "天润福熙大道",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2016,
        "averagePrice": 83138,
        "photoUrl": "https://pic4.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bkuyfvph5fuvntwdnq4q.jpg"
      },
      {
        "community": "安华西里(一区)",
        "area": "安贞",
        "location": "二三环之间",
        "completiondDate": 1988,
        "averagePrice": 85912,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/76ba6050aa601c6d10094bac28fcad43?w=280&h=210"
      },
      {
        "community": "金星园",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 1995,
        "averagePrice": 99118,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/42e3af87e19916a0baf45bc006837fb9?w=280&h=210"
      },
      {
        "community": "润枫嘉尚",
        "area": "十里堡",
        "location": "四五环之间",
        "completiondDate": 2009,
        "averagePrice": 42857,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/5b749b8585afaaa71747a66e6782e8bd?w=280&h=210"
      },
      {
        "community": "金泰先锋",
        "area": "百子湾",
        "location": "四五环之间",
        "completiondDate": 2008,
        "averagePrice": 77334,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/4a034da9605f5b1cfaff24fc69779f6a?w=280&h=210"
      },
      {
        "community": "潘家园东里",
        "area": "潘家园",
        "location": "二三环之间",
        "completiondDate": 1994,
        "averagePrice": 64161,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/8a4f0ae0bd885425c215cf3897145b61?w=280&h=210"
      },
      {
        "community": "华威北里",
        "area": "潘家园",
        "location": "二三环之间",
        "completiondDate": 1996,
        "averagePrice": 65920,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/e1293a82cd08e3c80457b54fa69bf5c8?w=280&h=210"
      },
      {
        "community": "华发颐园",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2000,
        "averagePrice": 63248,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/f95d821b4829428268f3e83269e145c6?w=280&h=210"
      },
      {
        "community": "丽都壹号",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2011,
        "averagePrice": 86829,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/d9ab3d1d60d9e3ef29b68c455157be1a?w=280&h=210"
      },
      {
        "community": "朝阳旺角",
        "area": "双桥",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 48154,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/c9687e9e8a171c1f4546c551dd766ec8?w=280&h=210"
      },
      {
        "community": "京润水上花园(别墅)",
        "area": "三元桥",
        "location": "三四环之间",
        "completiondDate": 2001,
        "averagePrice": 136938,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/767c6f2a806caf62c9472d26a9fe9959?w=280&h=210"
      },
      {
        "community": "左家庄北里",
        "area": "左家庄",
        "location": "二三环之间",
        "completiondDate": 1993,
        "averagePrice": 74713,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/a6aa767cbc17f38afd704fa10c9b16ba?w=280&h=210"
      },
      {
        "community": "东方瑞景",
        "area": "建外大街",
        "location": "二三环之间",
        "completiondDate": 2004,
        "averagePrice": 76306,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/f7753a56d0a9c0e05e9429e06e561b93?w=280&h=210"
      },
      {
        "community": "城市出品",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 2005,
        "averagePrice": 97576,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/1eb4f7927b2ae386fae9dbcfaa90bbbb?w=280&h=210"
      },
      {
        "community": "金隅国际",
        "area": "花家地",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 72948,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/2361fb44b04e26d921f5762eff1fc374?w=280&h=210"
      },
      {
        "community": "华远九都汇",
        "area": "燕莎",
        "location": "二三环之间",
        "completiondDate": 2010,
        "averagePrice": 85933,
        "photoUrl": "https://pic2.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bkuyfvlzynuvmcdzvfpq.jpg"
      },
      {
        "community": "坝鑫家园",
        "area": "东坝",
        "location": "五六环之间",
        "completiondDate": 2013,
        "averagePrice": 33980,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/1ead434912e163ae8a139baa9d6d513e?w=280&h=210"
      },
      {
        "community": "汇园公寓",
        "area": "亚运村",
        "location": "五六环之间",
        "completiondDate": 1997,
        "averagePrice": 67354,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/b915c290fcd82d8b786f303b1b7804fd?w=280&h=210"
      },
      {
        "community": "奥林匹克花园(一期)",
        "area": "东坝",
        "location": "五六环之间",
        "completiondDate": 2003,
        "averagePrice": 76460,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/05e04d0568cf3fd247f0f8d958f78f98?w=280&h=210"
      },
      {
        "community": "山水文园东园",
        "area": "华威桥",
        "location": "三四环之间",
        "completiondDate": 2018,
        "averagePrice": 98658,
        "photoUrl": "https://pic6.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwkaavjuvmiwjxiva.jpg"
      },
      {
        "community": "中海城香克林",
        "area": "小红门",
        "location": "三四环之间",
        "completiondDate": 2008,
        "averagePrice": 68382,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/f02223077e2034cdfa02649fa1afe9a1?w=280&h=210"
      },
      {
        "community": "红庙北里",
        "area": "红庙",
        "location": "三四环之间",
        "completiondDate": 1989,
        "averagePrice": 71801,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/682d5c2ee525ec59e2feb7b653b54c8e?w=280&h=210"
      },
      {
        "community": "九台2000家园",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 68473,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/c38bdd62e276fb806b67511e9d5a0a05?w=280&h=210"
      },
      {
        "community": "长岛澜桥",
        "area": "来广营",
        "location": "五六环之间",
        "completiondDate": 2005,
        "averagePrice": 73307,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/7219596c0375c24969671ef633b6fe70?w=280&h=210"
      },
      {
        "community": "阳光新干线",
        "area": "大屯",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 85576,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/573f3e83269ec69c06d99384b0ca1dfb?w=280&h=210"
      },
      {
        "community": "安慧里一区",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 1990,
        "averagePrice": 77997,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/b474148ee416a04376e3dff95bc88ea4?w=280&h=210"
      },
      {
        "community": "水郡长安1号院",
        "area": "双桥",
        "location": "五六环之间",
        "completiondDate": 2008,
        "averagePrice": 51889,
        "photoUrl": "https://pic5.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwjbcwfuvmtsm4fnq.jpg"
      },
      {
        "community": "苹果派",
        "area": "常营",
        "location": "五六环之间",
        "completiondDate": 2007,
        "averagePrice": 65306,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/fefc3ec8d236cc4fbb8c736ca60b2868?w=280&h=210"
      },
      {
        "community": "嘉润花园",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 63626,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/6b6fb4c634099ba24fae3355d88fa291?w=280&h=210"
      },
      {
        "community": "南湖中园小区",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 1999,
        "averagePrice": 71919,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/4565e1e60212ac21f1f4a77e498c2e53?w=280&h=210"
      },
      {
        "community": "都会华庭",
        "area": "十里堡",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 64247,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/c5b612107ea1b0bba7b415fe7c321014?w=280&h=210"
      },
      {
        "community": "京棉新城",
        "area": "十里堡",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 58071,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/efc53d0137175ee0c44cc523ddb4f5fc?w=280&h=210"
      },
      {
        "community": "东一时区",
        "area": "双桥",
        "location": "五六环之间",
        "completiondDate": 2003,
        "averagePrice": 51580,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/6226e3aaf9c94c3d6471c267f31831a5?w=280&h=210"
      },
      {
        "community": "大成国际公寓",
        "area": "国贸",
        "location": "四五环之间",
        "completiondDate": 1999,
        "averagePrice": 69002,
        "photoUrl": "https://pic5.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwi4dnruvn54o655a.jpg"
      },
      {
        "community": "安慧里二区",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 1996,
        "averagePrice": 80452,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/e03b1c82602aa41276ab787df16203e2?w=280&h=210"
      },
      {
        "community": "凯旋城",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 95791,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/18aa2bb22ba54d4ee52f69d2418a8b98?w=280&h=210"
      },
      {
        "community": "新纪家园",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2002,
        "averagePrice": 87063,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/d8e88d76099d305887e9f71f11b2f1e1?w=280&h=210"
      },
      {
        "community": "10AM新坐标",
        "area": "潘家园",
        "location": "二三环之间",
        "completiondDate": 2005,
        "averagePrice": 75378,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/8db86c3f972e613f4e715d35bc98c8bc?w=280&h=210"
      },
      {
        "community": "首开常青藤B区",
        "area": "东坝",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 73080,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/9e31e73bc3052be32856bae49f7af3eb?w=280&h=210"
      },
      {
        "community": "乐成豪丽公寓",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 2006,
        "averagePrice": 76139,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/80495055bb62be057f24129c2ee0fc40?w=280&h=210"
      },
      {
        "community": "大湖山庄",
        "area": "来广营",
        "location": "五六环之间",
        "completiondDate": 2003,
        "averagePrice": 79471,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/4da86cb868a8d8c29236759608092954?w=280&h=210"
      },
      {
        "community": "万象新天家园",
        "area": "常营",
        "location": "五六环之间",
        "completiondDate": 2003,
        "averagePrice": 60183,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/aeb954596b1279846668766e61e2208a?w=280&h=210"
      },
      {
        "community": "青年汇佳园",
        "area": "朝青板块",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 75577,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/36727ae444b704134ad8e6689fdba407?w=280&h=210"
      },
      {
        "community": "观唐",
        "area": "来广营",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 98111,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/928676c9030258e7809cf7fcfb83f8b1?w=280&h=210"
      },
      {
        "community": "中国铁建国际城",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2011,
        "averagePrice": 85694,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/f636674d09685126998a4dd204fa5b2c?w=280&h=210"
      },
      {
        "community": "润泽悦溪",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2010,
        "averagePrice": 83390,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/c530a0f551441b2be508a44ec4f59724?w=280&h=210"
      },
      {
        "community": "长安驿",
        "area": "建外大街",
        "location": "二三环之间",
        "completiondDate": 2005,
        "averagePrice": 75994,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/ebe47db35c7931aba0a6caff2316117a?w=280&h=210"
      },
      {
        "community": "圣世一品",
        "area": "东大桥",
        "location": "二三环之间",
        "completiondDate": 2010,
        "averagePrice": 94626,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/b04f2d0336dde313539145afe8567a44?w=280&h=210"
      },
      {
        "community": "甘露园南里二区",
        "area": "甘露园",
        "location": "四五环之间",
        "completiondDate": 1995,
        "averagePrice": 59334,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/337a77499c12cebab97c82190b5d16de?w=280&h=210"
      },
      {
        "community": "圣馨大地家园",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 67747,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/beddfe9f18f32d55e8be284697104b9b?w=280&h=210"
      },
      {
        "community": "银河湾",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2010,
        "averagePrice": 94512,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/6f27d744c953c6825a9b902e0fdaf87f?w=280&h=210"
      },
      {
        "community": "世安家园",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 1998,
        "averagePrice": 68125,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/1cd64485b6794c6a3c3a8ae8c56eefc6?w=280&h=210"
      },
      {
        "community": "博雅园",
        "area": "朝阳公园",
        "location": "三四环之间",
        "completiondDate": 2000,
        "averagePrice": 84688,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/8cf2d4b07b21b58b88aa6336a9636d5a?w=280&h=210"
      },
      {
        "community": "CLASS果岭里",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 104028,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/84848e1ca0ef9f3d1871df3d2286fe4e?w=280&h=210"
      },
      {
        "community": "金泉家园",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2008,
        "averagePrice": 89016,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/535c71acdd3e3ab290a6e411a4f5ca40?w=280&h=210"
      },
      {
        "community": "华威西里",
        "area": "潘家园",
        "location": "二三环之间",
        "completiondDate": 1993,
        "averagePrice": 63799,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/c1bff25368e4fcd3921fe986c485da22?w=280&h=210"
      },
      {
        "community": "松榆东里",
        "area": "潘家园",
        "location": "三四环之间",
        "completiondDate": 1992,
        "averagePrice": 62532,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/344c0d02d773a332af04c924f0b7acc9?w=280&h=210"
      },
      {
        "community": "京城雅居",
        "area": "豆各庄",
        "location": "五六环之间",
        "completiondDate": 2001,
        "averagePrice": 51052,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/11ee583813758854306fd0977fe54ecc?w=280&h=210"
      },
      {
        "community": "金泰丽富嘉园(28号院)",
        "area": "东坝",
        "location": "五六环之间",
        "completiondDate": 2011,
        "averagePrice": 40604,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/0222ab8712589c37391c04165c1577c5?w=280&h=210"
      },
      {
        "community": "慧谷金色家园(一期)",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 78989,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/397bc5b6dac1a49db75e7279deefaf2c?w=280&h=210"
      },
      {
        "community": "宝星园",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2009,
        "averagePrice": 74675,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/b1524c10744501d1dec5a46734b18d80?w=280&h=210"
      },
      {
        "community": "海润国际公寓",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2002,
        "averagePrice": 77300,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/b9231e4a90213924dc2a0b56557001e6?w=280&h=210"
      },
      {
        "community": "中海城圣朝菲",
        "area": "小红门",
        "location": "三四环之间",
        "completiondDate": 2008,
        "averagePrice": 68958,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/f02223077e2034cdfa02649fa1afe9a1?w=280&h=210"
      },
      {
        "community": "花家地小区",
        "area": "花家地",
        "location": "四五环之间",
        "completiondDate": 1993,
        "averagePrice": 74998,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/65c9da6311cf587a82ec99b2f309548f?w=280&h=210"
      },
      {
        "community": "安慧北里秀园",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 1999,
        "averagePrice": 89035,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/2269e2f22795cf883469680f9515cd6b?w=280&h=210"
      },
      {
        "community": "新荣家园",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 77021,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/8f57af46e2d42e920095cd9136bc6a76?w=280&h=210"
      },
      {
        "community": "石韵浩庭",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 2004,
        "averagePrice": 86120,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/47162754203c354808c5f3e01843b707?w=280&h=210"
      },
      {
        "community": "A派公寓",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 2007,
        "averagePrice": 95356,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/300725d99cbf771a8dc0b3cc83af9138?w=280&h=210"
      },
      {
        "community": "天之骄子",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 2005,
        "averagePrice": 85658,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/2b29f02eace1d49415e78eaa5a1a0381?w=280&h=210"
      },
      {
        "community": "逸盛阁",
        "area": "三里屯",
        "location": "二三环之间",
        "completiondDate": 2010,
        "averagePrice": 75259,
        "photoUrl": "https://pic8.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwi4h6buvn7amtyta.jpg"
      },
      {
        "community": "胜古家园",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 1999,
        "averagePrice": 85123,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/f028e366ca3b783e47300adbbe9d4077?w=280&h=210"
      },
      {
        "community": "浩运园",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 93628,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/fc1d7ced19766f0ffdf03c2a303bbf13?w=280&h=210"
      },
      {
        "community": "首开知语城",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 85652,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/f6a58a9c1e6c16496fbf89ef74b83062?w=280&h=210"
      },
      {
        "community": "周庄嘉园C区",
        "area": "华威桥",
        "location": "三四环之间",
        "completiondDate": 2000,
        "averagePrice": 61911,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/9122b9c613604fc4e336c415cee72a3e?w=280&h=210"
      },
      {
        "community": "东恒时代(三期)",
        "area": "四惠",
        "location": "三四环之间",
        "completiondDate": 2006,
        "averagePrice": 68832,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/81876ca8a7a470185485892f17ef8337?w=280&h=210"
      },
      {
        "community": "燕莎后",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 78518,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/f4fda4abe357a71d77ac7f848fd4d7c8?w=280&h=210"
      },
      {
        "community": "柳芳北里社区",
        "area": "柳芳",
        "location": "二三环之间",
        "completiondDate": 1988,
        "averagePrice": 80033,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/e6d65b634757c27736e21030530da7bf?w=280&h=210"
      },
      {
        "community": "SOHO北京公馆",
        "area": "燕莎",
        "location": "二三环之间",
        "completiondDate": 2008,
        "averagePrice": 100204,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/6a4597caa1b782dd87d86c1908c6225f?w=280&h=210"
      },
      {
        "community": "卧龙小区",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 89873,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/4c0d18f11b08b14b1722df8d796f05c8?w=280&h=210"
      },
      {
        "community": "望京花园东区",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2002,
        "averagePrice": 72635,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/227ccfdf0fc4250be27fa62c3dcb8426?w=280&h=210"
      },
      {
        "community": "欧陆经典万兴苑",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 1999,
        "averagePrice": 81625,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/1e2551dfba6fe03774749bc7cc4c685e?w=280&h=210"
      },
      {
        "community": "安苑北里",
        "area": "惠新西街",
        "location": "三四环之间",
        "completiondDate": 1986,
        "averagePrice": 79428,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/676603a81b25e7334b46ff8500023daa?w=280&h=210"
      },
      {
        "community": "北纬40度(东区)",
        "area": "望京",
        "location": "五六环之间",
        "completiondDate": 2008,
        "averagePrice": 82031,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/38aa40df97c6bcd220a942b41295e95f?w=280&h=210"
      },
      {
        "community": "方舟苑",
        "area": "花家地",
        "location": "四五环之间",
        "completiondDate": 1998,
        "averagePrice": 71544,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/330d84ce865b28f6ba4b7ac8dbaf7ba5?w=280&h=210"
      },
      {
        "community": "安贞里(二区)",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 1995,
        "averagePrice": 80330,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/24cb1c6597bd2ccf1e9d86bea1f6cb2e?w=280&h=210"
      },
      {
        "community": "大屯里小区",
        "area": "大屯",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 67312,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/235b2d2dd80b0ae2590bfbb872023116?w=280&h=210"
      },
      {
        "community": "逸翠园(南区)",
        "area": "朝青板块",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 92665,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/c11389066f1c5710ec4cc22360836f54?w=280&h=210"
      },
      {
        "community": "万科公园五号",
        "area": "团结湖",
        "location": "三四环之间",
        "completiondDate": 2004,
        "averagePrice": 93538,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/1a18f0351847492414024f0c0bd378fb?w=280&h=210"
      },
      {
        "community": "平乐园小区",
        "area": "潘家园",
        "location": "三四环之间",
        "completiondDate": 1996,
        "averagePrice": 65782,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/f941421783f1241b4cf853d6de3c48fc?w=280&h=210"
      },
      {
        "community": "三源里街小区",
        "area": "三元桥",
        "location": "二三环之间",
        "completiondDate": 1980,
        "averagePrice": 72633,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/a3e4ed913d9b15b987a01513b79e80ae?w=280&h=210"
      },
      {
        "community": "莲葩园",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2003,
        "averagePrice": 56244,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/c57d4ab990822bfab4a29cfaee2cc1d7?w=280&h=210"
      },
      {
        "community": "拂林园",
        "area": "媒体村",
        "location": "五六环之间",
        "completiondDate": 2000,
        "averagePrice": 65542,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/41972bf535d49ece041df2343cd6632a?w=280&h=210"
      },
      {
        "community": "紫绶园",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 1998,
        "averagePrice": 53173,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/24e8d949d52284238022b7cce1e6ca16?w=280&h=210"
      },
      {
        "community": "胜古南里",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 1960,
        "averagePrice": 78837,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/3778b20b69bfba67479703ca890aa1a5?w=280&h=210"
      },
      {
        "community": "柳芳南里社区",
        "area": "柳芳",
        "location": "二三环之间",
        "completiondDate": 1988,
        "averagePrice": 75988,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/1790710ac5d7eaaded55d5dcfae4c4b3?w=280&h=210"
      },
      {
        "community": "光熙门北里",
        "area": "西坝河",
        "location": "二三环之间",
        "completiondDate": 2010,
        "averagePrice": 75523,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/a730e1451db227ecbde8df5b202f9a1f?w=280&h=210"
      },
      {
        "community": "天月园",
        "area": "媒体村",
        "location": "五六环之间",
        "completiondDate": 2006,
        "averagePrice": 86696,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/d9e4da207232eb5582eb64d718764631?w=280&h=210"
      },
      {
        "community": "炫彩嘉轩",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2006,
        "averagePrice": 79281,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/77c926593d6f4363a790b17ce183a0a2?w=280&h=210"
      },
      {
        "community": "泛海国际香海园",
        "area": "朝阳公园",
        "location": "四五环之间",
        "completiondDate": 2007,
        "averagePrice": 102466,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/a33b09b3038ddf3554b792fbb35b240a?w=280&h=210"
      },
      {
        "community": "晶都国际",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 66894,
        "photoUrl": "https://pic1.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwi6hbzuvmf25rmpq.jpg"
      },
      {
        "community": "亮马名居",
        "area": "朝阳公园",
        "location": "三四环之间",
        "completiondDate": 2002,
        "averagePrice": 92006,
        "photoUrl": "https://pic7.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwkawmnufmxmvcbbq.jpg"
      },
      {
        "community": "冠军城",
        "area": "南沙滩",
        "location": "四五环之间",
        "completiondDate": 2006,
        "averagePrice": 85835,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/00f0fabb66d71f19ed5b4b0eba27d12d?w=280&h=210"
      },
      {
        "community": "泰华滨河苑",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 62112,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/6684ca305795f13c816399e94fba22d8?w=280&h=210"
      },
      {
        "community": "定福家园北里",
        "area": "定福庄",
        "location": "五六环之间",
        "completiondDate": 2006,
        "averagePrice": 48607,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/12a7f75d13cc79f06c4a6d1f4c3f0dc3?w=280&h=210"
      },
      {
        "community": "世纪村(一区)",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 1994,
        "averagePrice": 74560,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/3ea8f8b67f8f30ded6da54d4d0fc592a?w=280&h=210"
      },
      {
        "community": "胜古北里",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 1997,
        "averagePrice": 79545,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/e9a130df2a78fe7b91a78cf3e2f186c9?w=280&h=210"
      },
      {
        "community": "大西洋新城F区",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2002,
        "averagePrice": 102929,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/ab4751703df89ffc2e22d3d5c69a63e0?w=280&h=210"
      },
      {
        "community": "安慧东里",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 1994,
        "averagePrice": 72169,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/930d1e5924dc4f986da301e48c1ae269?w=280&h=210"
      },
      {
        "community": "定福庄西街小区",
        "area": "定福庄",
        "location": "五六环之间",
        "completiondDate": 1990,
        "averagePrice": 53310,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/58bc6be2d9786cac10fe72f40114a3ac?w=280&h=210"
      },
      {
        "community": "万方景轩",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2005,
        "averagePrice": 88567,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/2f4c965d7dcf8dd66a2604cdb06bfc24?w=280&h=210"
      },
      {
        "community": "燕归宁馨园",
        "area": "十八里店",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 44522,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/765dbe01b0315b53c247bd7095388156?w=280&h=210"
      },
      {
        "community": "泛海国际樱海园",
        "area": "朝阳公园",
        "location": "四五环之间",
        "completiondDate": 2008,
        "averagePrice": 118714,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/70c51a544fa3e0292b72417049455d8c?w=280&h=210"
      },
      {
        "community": "嘉和丽园公寓",
        "area": "三元桥",
        "location": "三四环之间",
        "completiondDate": 2001,
        "averagePrice": 69243,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/f90969e6d42edecb598a85f01dc3333b?w=280&h=210"
      },
      {
        "community": "甜水园北里",
        "area": "甜水园",
        "location": "三四环之间",
        "completiondDate": 2000,
        "averagePrice": 69981,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/af4121fcd6e5a91a1662e7a8ddc49c70?w=280&h=210"
      },
      {
        "community": "融域嘉园",
        "area": "奥林匹克公园",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 94633,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/abf6facbe7b47f6559a1026387cb4a5a?w=280&h=210"
      },
      {
        "community": "懿品阁",
        "area": "北沙滩",
        "location": "四五环之间",
        "completiondDate": 2006,
        "averagePrice": 82153,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/660fe964050ffd1982a2ab2a0e083def?w=280&h=210"
      },
      {
        "community": "山水文园中园",
        "area": "华威桥",
        "location": "三四环之间",
        "completiondDate": 2005,
        "averagePrice": 89541,
        "photoUrl": "https://pic3.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwwpstzuvmcmipigq.jpg"
      },
      {
        "community": "道家园小区",
        "area": "甜水园",
        "location": "三四环之间",
        "completiondDate": 1990,
        "averagePrice": 69218,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/b3372dd70177f3be80927e97c6f15f5c?w=280&h=210"
      },
      {
        "community": "金台里",
        "area": "红庙",
        "location": "三四环之间",
        "completiondDate": 1991,
        "averagePrice": 67808,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/11f27371ebc89e791cc6e8019ca1e9ba?w=280&h=210"
      },
      {
        "community": "US联邦公寓",
        "area": "燕莎",
        "location": "三四环之间",
        "completiondDate": 2006,
        "averagePrice": 74829,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/e71093646dbb0ca8f2ebe26b76b0c33b?w=280&h=210"
      },
      {
        "community": "艺水芳园",
        "area": "双桥",
        "location": "五六环之间",
        "completiondDate": 2005,
        "averagePrice": 49803,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/5260db96c6c7d58dc05e2aa66a832bd8?w=280&h=210"
      },
      {
        "community": "芳园里南区",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 63045,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/a95f949fd1eede35fba1e917d4316a81?w=280&h=210"
      },
      {
        "community": "嘉里星源汇",
        "area": "三元桥",
        "location": "二三环之间",
        "completiondDate": 2009,
        "averagePrice": 105412,
        "photoUrl": "https://pic7.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bkujjd5o2fuvm3asaiaa.jpg"
      },
      {
        "community": "通用时代国际公寓",
        "area": "国贸",
        "location": "二三环之间",
        "completiondDate": 2002,
        "averagePrice": 84829,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/161e791dcaf6153ba7c0b0cd55581bbc?w=280&h=210"
      },
      {
        "community": "万达大湖公馆",
        "area": "奥林匹克公园",
        "location": "五六环之间",
        "completiondDate": 2008,
        "averagePrice": 76513,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/e2cec278762ae8cc9f9e4dedc991fa42?w=280&h=210"
      },
      {
        "community": "倚林佳园",
        "area": "奥林匹克公园",
        "location": "四五环之间",
        "completiondDate": 2002,
        "averagePrice": 119984,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/6dc4c383dca888b5fc8bc4b090631de5?w=280&h=210"
      },
      {
        "community": "安华里四区",
        "area": "安贞",
        "location": "二三环之间",
        "completiondDate": 1986,
        "averagePrice": 81009,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/0cf01710cc2f0475cbbfd76eb51123c8?w=280&h=210"
      },
      {
        "community": "观音惠园",
        "area": "四惠",
        "location": "四五环之间",
        "completiondDate": 2006,
        "averagePrice": 49643,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/a26d5a8199709aa2054677ab1342a099?w=280&h=210"
      },
      {
        "community": "西坝河中里",
        "area": "西坝河",
        "location": "二三环之间",
        "completiondDate": 1990,
        "averagePrice": 71558,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/0d54be0c0566a91095bfc0cedc6b5dab?w=280&h=210"
      },
      {
        "community": "华严北里小区",
        "area": "健翔桥",
        "location": "三四环之间",
        "completiondDate": 1993,
        "averagePrice": 84642,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/2143a0b1071ef28610787b00dbb2e1e5?w=280&h=210"
      },
      {
        "community": "甘露园南里一区",
        "area": "甘露园",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 58547,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/286ccb5b21500f7300caf69b95f51527?w=280&h=210"
      },
      {
        "community": "朝丰家园(8号院)",
        "area": "豆各庄",
        "location": "五六环之间",
        "completiondDate": 2007,
        "averagePrice": 49236,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/11313adec5ae25954718f55ce182ae57?w=280&h=210"
      },
      {
        "community": "CBD高尔夫球会别墅",
        "area": "高碑店",
        "location": "四五环之间",
        "completiondDate": 2006,
        "averagePrice": 81508,
        "photoUrl": "https://pic8.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bkujjd2nkruvmeifxv2q.jpg"
      },
      {
        "community": "西坝河北里",
        "area": "西坝河",
        "location": "三四环之间",
        "completiondDate": 1988,
        "averagePrice": 75970,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/3ae430a6681670f87cc4c9a825897f7e?w=280&h=210"
      },
      {
        "community": "松榆里社区",
        "area": "潘家园",
        "location": "三四环之间",
        "completiondDate": 2015,
        "averagePrice": 62119,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/e8e6e89b05473076adb4a0fdf0d3104a?w=280&h=210"
      },
      {
        "community": "和平街十一区",
        "area": "和平街",
        "location": "二三环之间",
        "completiondDate": 1985,
        "averagePrice": 88972,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/81706cb1a007af3a40b0d420d8a1b55c?w=280&h=210"
      },
      {
        "community": "东润枫景(北区)",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 70072,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/57049e2e5bb88ddeead3976ad6af3ade?w=280&h=210"
      },
      {
        "community": "农光东里",
        "area": "劲松",
        "location": "三四环之间",
        "completiondDate": 1983,
        "averagePrice": 67036,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/7f83c08b8121c9ac7aa0fab92282df6c?w=280&h=210"
      },
      {
        "community": "乐成公馆",
        "area": "双井",
        "location": "三四环之间",
        "completiondDate": 2007,
        "averagePrice": 114150,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/8b24f077d25c5c808e6c34effc40d8e4?w=280&h=210"
      },
      {
        "community": "北京青年城",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2015,
        "averagePrice": 62243,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/f438248d197301554ac35a0350cfa284?w=280&h=210"
      },
      {
        "community": "鸿坤花语墅",
        "area": "华威桥",
        "location": "三四环之间",
        "completiondDate": 2011,
        "averagePrice": 111773,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/b5a61b34dddc0411f9cfd9ac421a1eeb?w=280&h=210"
      },
      {
        "community": "卓锦万代",
        "area": "来广营",
        "location": "五六环之间",
        "completiondDate": 2006,
        "averagePrice": 72691,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/d2c987845549290ac53a75bb7653a182?w=280&h=210"
      },
      {
        "community": "曙光里",
        "area": "西坝河",
        "location": "三四环之间",
        "completiondDate": 2015,
        "averagePrice": 71577,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/77e4a0e61fa9d205951c4be25275ac02?w=280&h=210"
      },
      {
        "community": "蓝色家园",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 68878,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/2fd6cd4c53f0b542ed0b588898216470?w=280&h=210"
      },
      {
        "community": "筑华年",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2010,
        "averagePrice": 72640,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/ac22a32477a45eb0f480c214c4a52fe8?w=280&h=210"
      },
      {
        "community": "金隅丽景园",
        "area": "常营",
        "location": "五六环之间",
        "completiondDate": 2010,
        "averagePrice": 44913,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/5a0c9c9ddde3cb79ae4acc55df9a3b94?w=280&h=210"
      },
      {
        "community": "安华里一区",
        "area": "安贞",
        "location": "二三环之间",
        "completiondDate": 1988,
        "averagePrice": 84130,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/b106b8ca522fdb83972118593cbf0b43?w=280&h=210"
      },
      {
        "community": "怡景园",
        "area": "朝外大街",
        "location": "二三环之间",
        "completiondDate": 2002,
        "averagePrice": 76934,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/a07d8d9fc4c737f411dba59f47fd92a8?w=280&h=210"
      },
      {
        "community": "澳景花庭",
        "area": "奥林匹克公园",
        "location": "四五环之间",
        "completiondDate": 2003,
        "averagePrice": 80046,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/590f4ca9e01ce7893925cdb519a22c51?w=280&h=210"
      },
      {
        "community": "霞光里小区",
        "area": "三元桥",
        "location": "三四环之间",
        "completiondDate": 2004,
        "averagePrice": 73555,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/7c7a033272ef6d36a2a2d912eb3a28cb?w=280&h=210"
      },
      {
        "community": "北京城建福润四季A区",
        "area": "东坝",
        "location": "五六环之间",
        "completiondDate": 2014,
        "averagePrice": 37333,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/f38fd0d8e5ef094c71c021f1ded7a3a9?w=280&h=210"
      },
      {
        "community": "花家地南里",
        "area": "花家地",
        "location": "四五环之间",
        "completiondDate": 1999,
        "averagePrice": 71968,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/fb9d499ab5e049752a6929bb41b96623?w=280&h=210"
      },
      {
        "community": "润泽公馆",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2015,
        "averagePrice": 81482,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/027537c534aa80e03c0032a6b5f8fee1?w=280&h=210"
      },
      {
        "community": "建东苑西区",
        "area": "管庄",
        "location": "五六环之间",
        "completiondDate": 2003,
        "averagePrice": 50362,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/08cfd8f7024cbd18a75d566d9e0ed6e1?w=280&h=210"
      },
      {
        "community": "美华世纪大厦",
        "area": "建外大街",
        "location": "二三环之间",
        "completiondDate": 2004,
        "averagePrice": 74235,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/c97cbb1d3d1930a8c5192236bb71ffa2?w=280&h=210"
      },
      {
        "community": "加利大厦",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 57376,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/0d5a6312d33c5898a30521d82c78ca45?w=280&h=210"
      },
      {
        "community": "卡布其诺",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2005,
        "averagePrice": 76589,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/584db216306c82d539aa6735a8e1ee58?w=280&h=210"
      },
      {
        "community": "和乔丽晶",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 78246,
        "photoUrl": "https://pic6.58cdn.com.cn/images/xq_img/big/902/n_1631780142957592.jpg"
      },
      {
        "community": "花家地西里一区",
        "area": "花家地",
        "location": "四五环之间",
        "completiondDate": 1986,
        "averagePrice": 67859,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/e85b58f84aba5ae11c15e25f2ae428f6?w=280&h=210"
      },
      {
        "community": "山水文园西园",
        "area": "华威桥",
        "location": "三四环之间",
        "completiondDate": 2002,
        "averagePrice": 97302,
        "photoUrl": "https://pic5.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bkujjd2xyvuvmjvayy5q.jpg"
      },
      {
        "community": "亚运花园",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 1996,
        "averagePrice": 59287,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/219e0d24c1d79b13b5ac9b2a41f58d53?w=280&h=210"
      },
      {
        "community": "双桥温泉东里小区南区",
        "area": "管庄",
        "location": "五六环之间",
        "completiondDate": 2008,
        "averagePrice": 47778,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/91afbb831daa6ae16f74e86c5551e693?w=280&h=210"
      },
      {
        "community": "泰禾北京院子",
        "area": "孙河",
        "location": "五六环之间",
        "completiondDate": 2015,
        "averagePrice": 87912,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/8a3f4758e4df5169b95ce03a51fdbf90?w=280&h=210"
      },
      {
        "community": "山水LAVIE",
        "area": "北苑",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 74481,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/8345fd93c2f864ef020719b07e739b55?w=280&h=210"
      },
      {
        "community": "南湖渠西里",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 1988,
        "averagePrice": 71893,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/dfb61ae1b1d1fa64e264d028a650a177?w=280&h=210"
      },
      {
        "community": "劲松一区",
        "area": "劲松",
        "location": "二三环之间",
        "completiondDate": 1977,
        "averagePrice": 63796,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/9c5dd8a0fe189e6f50dfff242bf7c4d7?w=280&h=210"
      },
      {
        "community": "劲松三区",
        "area": "劲松",
        "location": "二三环之间",
        "completiondDate": 1980,
        "averagePrice": 64227,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/2df3ef3f32484312d625b3c43ac3572a?w=280&h=210"
      },
      {
        "community": "天和人家",
        "area": "南沙滩",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 75052,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/a20362cb6cd33c8d0d74eca10e821310?w=280&h=210"
      },
      {
        "community": "望京明苑",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 58289,
        "photoUrl": "https://pic5.58cdn.com.cn/anjuke_58/59588dea8d2915dc4b4b1332aa3945af?w=280&h=210"
      },
      {
        "community": "安贞西里四区",
        "area": "安贞",
        "location": "三四环之间",
        "completiondDate": 1988,
        "averagePrice": 87555,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/4f21be0fee66f4ce77ad43f92ba13326?w=280&h=210"
      },
      {
        "community": "华馨公寓",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 1999,
        "averagePrice": 76733,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/ef514ffbbc6f45d9f73d0c4acf92f0ba?w=280&h=210"
      },
      {
        "community": "港湾国际",
        "area": "三里屯",
        "location": "二三环之间",
        "completiondDate": 2004,
        "averagePrice": 78905,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/c13c8e16ea0a8bace37f646361c2b065?w=280&h=210"
      },
      {
        "community": "宝星华庭",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2008,
        "averagePrice": 79419,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/ab4d7c925e3356a506308581b2620a5b?w=280&h=210"
      },
      {
        "community": "世纪宝鼎公寓",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 1998,
        "averagePrice": 65152,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/f06a3dad2408a1f292b89694e3641170?w=280&h=210"
      },
      {
        "community": "金隅丽港城",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2000,
        "averagePrice": 91461,
        "photoUrl": "https://pic6.58cdn.com.cn/anjuke_58/66c81064530a13f548e5d29d6cd8b946?w=280&h=210"
      },
      {
        "community": "双惠苑",
        "area": "双桥",
        "location": "五六环之间",
        "completiondDate": 2002,
        "averagePrice": 51634,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/d665dcf732be037ca10065f8d021ffec?w=280&h=210"
      },
      {
        "community": "安华里五区",
        "area": "安贞",
        "location": "二三环之间",
        "completiondDate": 1982,
        "averagePrice": 84232,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/22112e91671125e5806aaebd0866dbae?w=280&h=210"
      },
      {
        "community": "润泽庄园",
        "area": "来广营",
        "location": "五六环之间",
        "completiondDate": 2008,
        "averagePrice": 90857,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/0de70e08300b7b64590029646ba79f27?w=280&h=210"
      },
      {
        "community": "时间国际中心",
        "area": "三元桥",
        "location": "三四环之间",
        "completiondDate": 2005,
        "averagePrice": 80658,
        "photoUrl": "https://pic8.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwka36zufm4aaumhq.png"
      },
      {
        "community": "长安6号小区",
        "area": "建外大街",
        "location": "二三环之间",
        "completiondDate": 2010,
        "averagePrice": 52246,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/d8248863988ff1765a49d1baa114dbbf?w=280&h=210"
      },
      {
        "community": "朝阳雅筑",
        "area": "朝青板块",
        "location": "四五环之间",
        "completiondDate": 2001,
        "averagePrice": 63175,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/50577a58bee580599c94211e274ffa8e?w=280&h=210"
      },
      {
        "community": "龙湖双珑原著",
        "area": "孙河",
        "location": "五六环之间",
        "completiondDate": 2015,
        "averagePrice": 74510,
        "photoUrl": "https://pic1.58cdn.com.cn/anjuke_58/798f63b31f800486ef8de73cd66af036?w=280&h=210"
      },
      {
        "community": "南湖中园一区",
        "area": "望京",
        "location": "四五环之间",
        "completiondDate": 2015,
        "averagePrice": 71613,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/6411de087e78108d5de8475f912d9162?w=280&h=210"
      },
      {
        "community": "上东三角洲",
        "area": "酒仙桥",
        "location": "四五环之间",
        "completiondDate": 2004,
        "averagePrice": 52785,
        "photoUrl": "https://pic4.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bkujjdzew5uvn6rhffea.jpg"
      },
      {
        "community": "十里堡北里",
        "area": "十里堡",
        "location": "四五环之间",
        "completiondDate": 1995,
        "averagePrice": 63407,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/931473ca0139e5fe24ade13f01e2a861?w=280&h=210"
      },
      {
        "community": "芳林苑",
        "area": "潘家园",
        "location": "二三环之间",
        "completiondDate": 2000,
        "averagePrice": 59077,
        "photoUrl": "https://pic3.58cdn.com.cn/anjuke_58/726a0232ca388814f22294990fd00873?w=280&h=210"
      },
      {
        "community": "育慧西里",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 1995,
        "averagePrice": 68933,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/94a9dcf545cd5e932348100b2fc65f4a?w=280&h=210"
      },
      {
        "community": "天翠园",
        "area": "媒体村",
        "location": "五六环之间",
        "completiondDate": 2015,
        "averagePrice": 85551,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/5c7ada601574d7b6bc9dc3468b5d4a8f?w=280&h=210"
      },
      {
        "community": "泰福苑三区",
        "area": "定福庄",
        "location": "五六环之间",
        "completiondDate": 2004,
        "averagePrice": 48712,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/36142ee9fc7d00e52367cf98a7c16457?w=280&h=210"
      },
      {
        "community": "安慧北里安园",
        "area": "亚运村",
        "location": "四五环之间",
        "completiondDate": 1993,
        "averagePrice": 78906,
        "photoUrl": "https://pic8.58cdn.com.cn/anjuke_58/16010245861732ebb84749e4f1253537?w=280&h=210"
      },
      {
        "community": "常楹公元",
        "area": "常营",
        "location": "五六环之间",
        "completiondDate": 2013,
        "averagePrice": 75551,
        "photoUrl": "https://pic4.58cdn.com.cn/anjuke_58/f42953d465f1b097b6cbca9a70f2fe78?w=280&h=210"
      },
      {
        "community": "枣营北里",
        "area": "麦子店",
        "location": "三四环之间",
        "completiondDate": 2015,
        "averagePrice": 71637,
        "photoUrl": "https://pic7.58cdn.com.cn/anjuke_58/08914f29aa1660d80e3f2afd4e736bd2?w=280&h=210"
      },
      {
        "community": "锦绣馨园",
        "area": "亚运村小营",
        "location": "四五环之间",
        "completiondDate": 1999,
        "averagePrice": 70608,
        "photoUrl": "https://pic2.58cdn.com.cn/anjuke_58/2e86ebcaa301b2112d02383d8bde1d1d?w=280&h=210"
      },
      {
        "community": "丰和园",
        "area": "太阳宫",
        "location": "三四环之间",
        "completiondDate": 2009,
        "averagePrice": 125504,
        "photoUrl": "https://pic3.58cdn.com.cn//images/xq_img/origin/ajk/n_v1bl2lwi4vdjvfmzoqjjaq.jpg"
      }
    ]
    return d
}
