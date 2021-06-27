module.exports = {
  // head:[
  //   ['link',{rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css'}],
  //   ['script',{src:'/live2d-widget/autoload.js'}]
  // ],
  title: '颜歌', 
  description: '这里什么都没有',
  // theme: 'reco',	// 主题
  // base: '/', // 这是部署到github相关的配置

  // //插件
  // plugins: [
  //   [
  //     '@vuepress-reco/vuepress-plugin-bgm-player',
  //     {
  //       // 播放列表
  //       audios: [
  //         {
  //           name:'海底',
  //           artist: '一支榴莲',
  //           url: '/bgm/haidi.flac',
  //           cover: '/img/haidi.png'
  //         },
  //         {
  //           name:'撒野',
  //           artist: '钦殃',
  //           url: '/bgm/saye.mp3',
  //           cover: '/img/yang.png'
  //         },      
          
  //       ],
  //       // 播放器位置
  //       position: {
  //         right: '10px',
  //         bottom: '10px',
  //         'z-index': '9999'
  //       },
  //       // 是否自动缩小
  //       autoShrink:true,
  //       // 指定PC端缩小为哪种模式
  //       shrinkMode:'mini',
  //       // 指定浮窗模式浮动在哪一侧
  //       floatPosition:'right',
  //       // 浮窗的样式
  //       floatStyle:{
  //         bottom: '200px',
  //         'z-index': '9999'
  //       }
  //     }
  //   ],
  //   [
  //     "dynamic-title",
  //     {
  //       showIcon: "/img/logo.png",
  //       showText: "o(*≧▽≦)ツ 咦！nice！",
  //       hideIcon: "https://valine.js.org/images/valine.png",
  //       hideText: "(/•ิ_•ิ)/ 友谊的小船,说翻就翻",
  //       recoverTime: 2000
  //     }
  //   ],
  //   [
  //     "@vuepress-reco/vuepress-plugin-rss",
  //     {
  //       site_url: 'https://mryanqi2020.gitee.io/'
  //     }
  //   ],
  //   [
  //     '@vuepress-reco/comments', 
  //     {
  //       solution: 'valine',
  //       options: {
  //         appId: 'oCWqrkMlaixMP5JrICpHXLku-gzGzoHsz',// your appId
  //         appKey: 'I87bRg6hOy8IJRitCbW6BroX', // your appKey
  //       }
  //     }
  //   ],
  //   ['@vuepress/nprogress'],
  //   // ['@vuepress/last-updated']
  // ],
  // themeConfig: {
  //   type: 'blog',
  //   logo: '/img/logo.png',  // 导航logo
  //   startYear: '2020',
  //   author: 'yanqi',
  //   noFoundPageByTencent: false,
  //   mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
  //   modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
  //   // displayAllHeaders: true,
  //   // 博客配置
  //   blogConfig: {
  //     category: {
  //       location: 5,     // 在导航栏菜单中所占的位置，默认2
  //       text: '分类' // 默认文案 “分类”
  //     },
  //     tag: {
  //       location: 6,     // 在导航栏菜单中所占的位置，默认3
  //       text: '标签'      // 默认文案 “标签”
  //     }
  //   },

  //   authorAvatar: '/img/saye.png', // 信息栏头像
  //   // 友链
  //   friendLink: [
  //     {
  //       title: '【mysql】 自然排序',
  //       desc: 'mysql order by如何实现自然排序',
  //       logo: "http://www.manongjc.com/favicon.ico",
  //       link: 'http://www.manongjc.com/mysql_basic/mysql-order-by-natural-basic.html'
  //     },
  //     {
  //       title: '【mysql】SQL经典练习50题',
  //       desc: 'SQL经典练习50题 - 个人思路及详解',
  //       logo: 'https://pic2.zhimg.com/v2-bfb306ca155617d51e01d43544272a1d_xll.jpg',
  //       // email: 'recoluan@qq.com',
  //       link: 'https://www.zhihu.com/people/han-xin-45-47'
  //     },
  //   ],
  //   // 导航栏
  //   nav: [
  //     { text: '首页', link: '/',icon:'reco-home'},   
  //     { text: '笔记', 
  //       items: [
  //         { text: 'PHP', link: '/view/php/' }
  //       ],
  //       icon:'reco-api'
  //     },
  //     { text: '收藏', 
  //       items: [
  //         { text: 'web前端', 
  //           items: [
  //             { text: '渡一教育',link: 'http://www.duyiedu.com/course.html' },
  //             { text: '后盾人', link: 'https://www.houdunren.com/Edu/system' },
  //           ],
  //         }
  //       ],
  //       items: [
  //         { text: '后端', 
  //           items: [
  //             { text: '码农教程',link: 'http://www.manongjc.com/' },
  //           ],
  //         }
  //       ],
  //     },
  //     { text: '培训', 
  //       items: [
  //         { text: '国信安', link: '/view/train/GXA/' }
  //       ]
  //     },
  //     { text: '留言板', link: '/view/msgBoard/',icon:'reco-suggestion'},            
  //     { text: '时间线', link: '/timeline/', icon: 'reco-date' }, // 时间线
  //     { text: 'GitHub', link: 'https://github.com/MrYanQi2020',icon:'reco-github', target:'_blank'},
  //   ],
  //   // 侧边栏
  //   sidebar: {
  //     // 国信安笔记
  //     '/view/train/GXA/':[
  //       {
  //         title: '第一阶段',
  //         collapsable: true,
  //         sidebarDepth: 1,
  //         children: [
  //           '',
  //           'one',
  //           'two',
  //           'three',
  //           'four',
  //           'summary'
  //         ]
  //       },
  //       {
  //         title: '第二阶段',
  //         collapsable: true,
  //         sidebarDepth: 1,
  //         children: [
  //           'one',
  //           'two',
  //           'three',
  //           'four',
  //           'summary'
  //         ]
  //       }, 
  //       {
  //         title: '第三阶段',
  //         collapsable: true,
  //         sidebarDepth: 1,
  //         children: [
  //           '',
  //           'one',
  //           'two',
  //           'three',
  //           'four',
  //           'summary'
  //         ]
  //       }, 
  //       {
  //         title: '第四阶段',
  //         collapsable: true,
  //         sidebarDepth: 1,
  //         children: [
  //           '',
  //           'one',
  //           'two',
  //           'three',
  //           'four',
  //           'summary'
  //         ]
  //       },
  //     ],
  //     // php笔记
  //     '/view/php/':[
  //       {
  //         title: 'php基本语法',
  //         collapsable: true,
  //         sidebarDepth: 1,
  //         children: [
  //           '',
  //           '/view/php/php-basic/'
  //         ]
  //       },
  //       {
  //         title: 'php进阶',
  //         collapsable: true,
  //         sidebarDepth: 1,
  //         children: [
  //         ]
  //       },
  //       {
  //         title: 'php高级',
  //         collapsable: true,
  //         sidebarDepth: 1,
  //         children: [
  //         ]
  //       },
  //       {
  //         title: 'php-mysql',
  //         collapsable: true,
  //         sidebarDepth: 1,
  //         children: [
  //           '/view/php/php-mysql/2020-9-10-php基本操作',
  //           '/view/php/php-mysql/2020-9-10-php连接mysql',
  //         ]
  //       },
  //     ]
  //   }

  // }
}