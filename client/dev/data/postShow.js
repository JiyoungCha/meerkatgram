export default [
    {
      id: 1,
      postId: 11,
      user: {
        id: 1,
        profile: '/dev/cat.jpg',
        nick: 'JJOLBO',
      },
      content: '나두 델구 가...',
      replyFlg: false,
      replyId: 0,
      replies: [],
    },
    {
      id: 2,
      postId: 11,
      user: {
        id: 2,
        profile: '/dev/icecream.JPG',
        nick: 'ICECREAM',
      },
      content: '후식 아이스크림 먹어.',
      replyFlg: true,
      replyId: 0,
      replies: [],
    },
    {
      id: 3,
      postId: 11,
      user: {
        id: 3,
        profile: '/dev/booggu.jpg',
        nick: 'BOO_bro',
      },
      content: '치돈에 사이에 소스 뿌려 먹어.',
      replyFlg: true,
      replyId: 0,
      replies: [
        {
          id: 4,
          post_id: 11,
          user: {
            id: 20,
            profile: '/dev/cat_2.JPG',
            nick: 'HOHO_CAT',
          },
          content: '천재인가',
          replyFlg: false,
          replyId: 3,
          replies: [],
        },
        {
          id: 5,
          post_id: 11,
          user: {
            id: 10,
            profile: '/dev/hui.jpg',
            nick: 'hui_bao2',
          },
          content: '지저스',
          replyFlg: false,
          replyId: 3,
          replies: [],
        },
      ],
    },
  ]