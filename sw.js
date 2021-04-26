/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/12/30/2015年度总结/index.html","2baac582c15f8fab9185dad6d27bad5b"],["/2016/12/31/2016年度总结/index.html","3b7d99bca4a6b181b152bc800b916334"],["/2017/12/31/2017年度总结/index.html","d028c192860cbdec73f9fcf4d0e0ff88"],["/2018/02/01/我在北京的2017（壹）/index.html","87d3ae33ea359204ece490ed2a997215"],["/2018/02/06/Papers-of-machine-learning-one/index.html","3b39f989cdda8eff7f8f78aef8ea23f8"],["/2018/04/09/也许真的可以/index.html","188035239235144c7e47a71a59f4f93b"],["/2018/04/09/也许真的可以/改变.jpg","376952bd9f1b2a5d6303150d24721b25"],["/2018/04/09/也许真的可以/改变1.jpg","2976fb987b17d6f601249fbf286a4ae1"],["/2018/04/10/风景独好/1.jpg","ea5540bdd799c301ebd09d149324995e"],["/2018/04/10/风景独好/2.jpg","0aa8a1c93d9dbf9a0595d63727d00bb0"],["/2018/04/10/风景独好/4.jpg","01d2af536a71b0dacd750248beb7838d"],["/2018/04/10/风景独好/index.html","b28c3723f6628c3a69a5e2f1bfdcf7f8"],["/2018/05/29/技术博客汇总/index.html","51b610d53f9cca5c62ccc33f05e2ef3e"],["/2018/05/30/论文研究笔记/index.html","b90fb5658d9de70e5eddec3863ca665e"],["/2018/07/17/行业报告汇总/index.html","d1716c2e33c9547d37866a54222e5de4"],["/2018/09/03/研究论文阅读与写作/index.html","8445ba06cadd5887154b5b8b7c2ea8b0"],["/2018/12/30/2018年度总结/index.html","5da3e44ed958ae172c57e09080fbf88d"],["/2019/01/06/2019论文阅读清单/index.html","ede4cbfa068781ee35aeed3447c8f4d6"],["/2019/04/29/2019阅读书目列表/index.html","7d15b1ea78853fb6b33f56630f7953b2"],["/2019/06/16/文因互联公司面试小记/index.html","8ddf00539173ccb919f501c58a8d6602"],["/2019/10/27/知识图谱关键技术与问答系统/index.html","6755176297731fc3f5ee321293181676"],["/2019/12/08/北京展览馆游览/index.html","523b7b6655e70dccc4c69843f03a2855"],["/2019/12/14/实体及关系的识别与提取180612/index.html","c434d344d3212ccd62d8eb77797f2934"],["/2019/12/16/读李笑来老师/index.html","11fae10324003d1dd71c6cf6e18f8506"],["/2019/12/29/2019年度个人总结/index.html","16ffcff0cac0ac587e2ad08eb3c924a5"],["/2020/02/08/不一样的春节/index.html","8939f98e320bfeeeace64e3d1466e79a"],["/2020/04/06/居家生活、办公的日子里/index.html","47f6874aaa225d54e657e5b14ff56946"],["/2020/05/02/2020个人阅读/index.html","d333804ee5e3175e570742b66184d226"],["/2020/05/02/个人从疫情的防控中学到了什么？/index.html","df7120a5d43d83c8b514b6ef8e4a652b"],["/2021/01/01/2020年度总结/index.html","334860de279488f620059280b4e7ade8"],["/2021/01/03/hello-world/index.html","ac6d95cc80c8ff624c78bc774c42edff"],["/2021/04/26/2021个人阅读/index.html","0fa75160334e9b26906858b6aad5d8c1"],["/about/index.html","32d19bce03de003baae9208e79f2965f"],["/archives/2015/12/index.html","59b8c16ae0f63fd9e090b1d6ac717637"],["/archives/2015/index.html","10143f825863896270e5ec29d9afb385"],["/archives/2016/12/index.html","9dfc94b210ec670bcb9f032e491c080e"],["/archives/2016/index.html","9ec83268de8364248676853cde07a417"],["/archives/2017/12/index.html","003dcf9309af11de083932ef18dda4d0"],["/archives/2017/index.html","dce51af0a7224843d477d67eda99072b"],["/archives/2018/02/index.html","da95ca07810bab8db62c77d03d9b6789"],["/archives/2018/04/index.html","6d92c9918b758f8d148a6595cbdbccf1"],["/archives/2018/05/index.html","ac03148a2055e90567d97a593dbfced7"],["/archives/2018/07/index.html","5e8ad4f4227a40e4f7b925c3b9312a89"],["/archives/2018/09/index.html","62ed6f5bdfa1f7763376ee5e2b3b71e9"],["/archives/2018/12/index.html","f0ec86ca72f0f8830b9dcec6aa1f58b9"],["/archives/2018/index.html","0e05f0c0a4f0adc71dad4126bf09b688"],["/archives/2018/page/2/index.html","815d998d74e353cc44b63f87ed1c5486"],["/archives/2019/01/index.html","976408660341ad455e659a8b7e1a1e6d"],["/archives/2019/04/index.html","fe77c36bb3dd923fc3f6db24671f0abd"],["/archives/2019/06/index.html","6d12c630fdb449abb5eb4b260afa86df"],["/archives/2019/10/index.html","7daa142717ff5295c5f4fff6a9d4bd5f"],["/archives/2019/12/index.html","192324c31ec162162da68be742932e06"],["/archives/2019/index.html","11fec4b487f8e092ca902d7dfcd097b5"],["/archives/2019/page/2/index.html","04984912edc17594a96e7b3de3b1e3cc"],["/archives/2020/02/index.html","3d03058b657d1a943bcd20af72b26581"],["/archives/2020/04/index.html","069d53164a1fb4425798821cc6e34ca1"],["/archives/2020/05/index.html","5ec20fa12d50207f0cef1671980c7aef"],["/archives/2020/index.html","cf5584004cc39626b940cc7633cef9c3"],["/archives/2021/01/index.html","52544e467bc67a1395757554425e6d99"],["/archives/2021/04/index.html","6afa07a4d51e4eea3ef94c3dec2dc4d7"],["/archives/2021/index.html","0a1b21d5b5110023ad9e0383a5e7769f"],["/archives/index.html","f59e95ffff6d65d65eeeccfe34f51533"],["/archives/page/2/index.html","99f7efafb04e63698f6f954f974852e3"],["/archives/page/3/index.html","30603353e966e833cd99d10a0701a7b0"],["/archives/page/4/index.html","bf474fa881f3db5ad407dfe2717833b9"],["/archives/page/5/index.html","57db12c2464dcee3238cd3dbe7a40a26"],["/archives/page/6/index.html","c8a155dffdebd82ac3a8d4108c393802"],["/categories/index.html","9c16976491514a6c3d3680983748a343"],["/categories/start/index.html","a0ae356d31209c7ed74de840a487a5c1"],["/categories/个人总结/index.html","d15676eb2e0bd3239e056e271ed72d80"],["/categories/个人总结/page/2/index.html","12c5a70820b1b826f58e6737ed3bc6db"],["/categories/个人随笔/index.html","ebb8867787206720244e103b97869688"],["/categories/个人随笔/page/2/index.html","7223b6623fa08616647e41e4c5bfe9aa"],["/categories/技术博客汇总/index.html","3184838d8c88a8c2625db9d9c0d59578"],["/categories/方法论/index.html","1a99a93e915a9b8272c44da70598ed17"],["/categories/日常读书/index.html","2a3848f9f98b7ffe409c33ffd1a493da"],["/categories/机器智能论文阅读/index.html","28d9efc3e23fd367795647efeb831ab1"],["/categories/求职与面试/index.html","233006936b7b54f3f4dbcdb4c54eae3e"],["/categories/知识图谱/index.html","51784f391052fb551a715ee060933a76"],["/categories/科技报告/index.html","7cf6e4451c833039ae72ab18bef66b4d"],["/categories/论文笔记/index.html","7e47089c9b5959a0da4dcb64b9e26288"],["/css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/algolia_logo.svg","b0e86b43dab4b257bf40e4da14e5df84"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","f948bba80356eb7e797eeb2f1b1ffa55"],["/images/cc-by-nc-sa.svg","1fc49a6617c8e3abecf53369ceeb4daa"],["/images/cc-by-nc.svg","483cecee8452be71b500c3390998bb3a"],["/images/cc-by-nd.svg","8a1465616bdacfb718e7cc8a42a311a4"],["/images/cc-by-sa.svg","9dd7cc26e58bc19e2cccb0dc6d8c01c4"],["/images/cc-by.svg","d7cc43bac762ec04f57ad4a15424c147"],["/images/cc-zero.svg","b84703e744a9c21e3a0f55feb319d731"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ab4f04911daa778d9b7430c7d0b07336"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","96394b195f577dfdd8449052fc8b9556"],["/images/quote-r.svg","343af43899f514b6d0616a68b6fab199"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/slug/bjzlg.jpg","f9733f0a5297f9d98b4c43b1549b8ffb"],["/images/slug/first_step.png","c7fc33c5c6c3d42515f03dc6c9712633"],["/images/wechatPay.png","babd0d3dc9109ff1fed529bb6e06ecb6"],["/index.html","571f834298a3545a6442c2af0b71847e"],["/js/src/affix.js","adb9a93771bc51ea419e62b29d77e98e"],["/js/src/algolia-search.js","b3debaec061ea42ae3fbc1791ac40ead"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","15148ecb93d08e3b10d84b30510fcf1f"],["/js/src/hook-duoshuo.js","0d208eedf09f1ccce833e188ce4ace5f"],["/js/src/js.cookie.js","73909693ba2c22a0db82adfd4987d64c"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","56602fe567728a70738f50c4a965bfbe"],["/js/src/photoswipe-ui-default.min.js","c061a13816b98ce8c8a7ffb2e62dc403"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","e399a13824700296cbd3b880ec484fcc"],["/js/src/schemes/pisces.js","75acb43e224e521a7c7322c69e2448f5"],["/js/src/scroll-cookie.js","d2247bf724e805935ba76f1b87f8f15f"],["/js/src/scrollspy.js","5df91a0410594f41558a7452bf87828f"],["/js/src/utils.js","bdf903793472a52826e6960e19834070"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","9e9d9f268cc30366c13139d1bcb3a604"],["/lib/Han/dist/han.js","95bb9b3b4112350c94323afc3b8ff2cf"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/album/README.html","b8234375b6c1458bf5d3ac91bff8b8f4"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","2c44e17c898896994e458dcada65a2c9"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b1c88aa663761c95defb64b3bff229e7"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","bfa2ca547c56c50491051cccb1921180"],["/lib/album/ins.js","2cf1605c3121107210d2bc65bcabc84e"],["/lib/album/photoswipe.css","dd59068e0832f028e2d0b8bc309d2289"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","73fbc04a8d87b545446b5d1b44760fc8"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","147124da3fb8f6db52c7c0add81f7c57"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","49c50357a10c51940b36d9f70422d3c6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","545f1e92c7314b3c0e186890c4d580b1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d908dd96d8a7e21e401532ce07030614"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b845f47be198938961dc0374fb714c5a"],["/lib/fancybox/source/jquery.fancybox.css","ecedd4c15ade67d5b570f0eea7c2bbb6"],["/lib/fancybox/source/jquery.fancybox.js","2f58038003272557b5318e892abb4580"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","9a08e86da808d3310170cf16bce9aaa2"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7e2a4ab64a248865e52c83c20fd3bcc7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","d379f0ff610e7d801e93553e3c09e987"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","5caa2f94fdd7d455cc9be3218b8176d3"],["/lib/jquery_lazyload/jquery.scrollstop.js","dc7f32ded4de36bd7005ced70a10fd00"],["/lib/needsharebutton/font-embedded.css","204e1b04836df0321d40e3a971d237a1"],["/lib/needsharebutton/needsharebutton.css","0ec3b0ab953be398e23d2e2e32897838"],["/lib/needsharebutton/needsharebutton.js","b58e4609099a5c6d8cf53676f97ad167"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","23bb7a8a07f16f7d21a933c486b5ccfe"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5366b4e5344ecfc84b173bcfef1a9e3e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/music/index.html","a28a40c0d1a2a3e6d523f2c20f1c1f44"],["/page/2/index.html","082e0873390db98e186d1c3e268b44a8"],["/page/3/index.html","cbc05d260a12122caafae23b541aff2c"],["/page/4/index.html","0d9a69f9af5e84d4e0d1891f84280698"],["/page/5/index.html","a4959a04a2ebaa9a4e3370883f38078c"],["/page/6/index.html","980f107734ec8b8281f7cbd26c06c1c6"],["/photos/index.html","4068a0aeeda44fe4f2482e67ec02dfe2"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","fb4949797e8d5ee757d073edfc9755ad"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","2cdecbeaf8511782f9bf2e55d822dd44"],["/tags/2020新冠疫情/index.html","85475ed0a450000303b9bd0d2b66215f"],["/tags/hello/index.html","eb98f797dbf55f83481db1a25a7eeafa"],["/tags/index.html","4176b7a3f9b83fc82d6181e0692c2dd0"],["/tags/博客汇总/index.html","d1233555006fa5e0018b588bf54ae8d1"],["/tags/年度总结/index.html","7add0ceb68de8979afd2f93776019089"],["/tags/年度总结/page/2/index.html","4be031b7ee5ba790b6eac9e8b5d34761"],["/tags/技术梳理/index.html","c1b6532f5d5f86f708d9543fdebbc704"],["/tags/报告/index.html","f51370e100ac23089c651ca51788a0c8"],["/tags/求职/index.html","d7d212d508c14a2cc0e2b1eedd90de34"],["/tags/笔记/index.html","b373eff18b1b119ab3d8a0a8861cae77"],["/tags/论文/index.html","d80c203e5e622825f7442b74ae5ba75e"],["/tags/读书/index.html","814a6c7198460523cc7bc55c2c7cff46"],["/tags/阅读与写作/index.html","489082ede6afde3d25ce0f7598868a76"],["/tags/随手拍/index.html","e673fa75e136de8124741064ddc0c4b4"],["/tags/随笔/index.html","07a728d6ec6d2212636fe4f88884f80a"],["/test/index.html","9ff395153bb75db816c36bc7d9f494a0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
