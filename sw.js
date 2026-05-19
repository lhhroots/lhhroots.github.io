/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/12/30/2015年度总结/index.html","0cdd6684b7f037b65b10724f1d140ea9"],["/2016/12/31/2016年度总结/index.html","7215304621c55b27169381bb2c9deed7"],["/2017/12/31/2017年度总结/index.html","91bcb8fa3e76b4b80847ac61f796186f"],["/2018/02/01/我在北京的2017（壹）/index.html","137d115345b9e2594ef8664250e082f1"],["/2018/02/06/Papers-of-machine-learning-one/index.html","55aa1fb0485ce10547681a338e60cf02"],["/2018/04/09/也许真的可以/index.html","ce7c6dc269c2c60ee22652272262ff90"],["/2018/04/09/也许真的可以/改变.jpg","376952bd9f1b2a5d6303150d24721b25"],["/2018/04/09/也许真的可以/改变1.jpg","2976fb987b17d6f601249fbf286a4ae1"],["/2018/04/10/风景独好/1.jpg","ea5540bdd799c301ebd09d149324995e"],["/2018/04/10/风景独好/2.jpg","0aa8a1c93d9dbf9a0595d63727d00bb0"],["/2018/04/10/风景独好/4.jpg","01d2af536a71b0dacd750248beb7838d"],["/2018/04/10/风景独好/index.html","58710f663af1e160f49d4cc39de79a6d"],["/2018/05/29/技术博客汇总/index.html","e17c957c22ebbae8d5d49f78e399a899"],["/2018/05/30/论文研究笔记/index.html","6f827ee0f00e43f973da166811596b6b"],["/2018/07/17/行业报告汇总/index.html","bd2c0db65a5fd884d092f7a4d67fbe0b"],["/2018/09/03/研究论文阅读与写作/index.html","6acc6ea28806f10fdb7bfee8d697f8ad"],["/2018/12/30/2018年度总结/index.html","0e324fb5e3c8ddeec2bde3e8d94326ac"],["/2019/01/06/2019论文阅读清单/index.html","2c9b2c17b9d986da97ce6f8f9771f480"],["/2019/04/29/2019阅读书目列表/index.html","be3b887c8b5e5a0a2f34ea21a232e1a1"],["/2019/06/16/文因互联公司面试小记/index.html","e2e7135686ccd774f013fd59b619e2e8"],["/2019/10/27/知识图谱关键技术与问答系统/index.html","6a5c3cc43c8524d8853c02f538fd9d99"],["/2019/12/01/hello-world/index.html","60a01ff40c3907e4354f6e33f2a5499c"],["/2019/12/08/北京展览馆游览/index.html","ec36340a8409831ae5e6e451a8db1c0d"],["/2019/12/14/实体及关系的识别与提取180612/index.html","d5a389a36c594c880cde186bc5555330"],["/2019/12/16/读李笑来老师/index.html","218f934bbb2f94e75c7482041590a3bc"],["/2019/12/29/2019年度个人总结/index.html","bcf5e232899ea6fc537cf304c9ce5add"],["/2020/02/08/不一样的春节/index.html","b4757ebe8c9efc2c24a509802c55f19a"],["/2020/04/06/居家生活、办公的日子里/index.html","67f2304807b9a64c00ba873a972f1831"],["/2020/05/02/2020个人阅读/index.html","9e70a0a148bf03efe3c32870d0bd690a"],["/2020/05/02/个人从疫情的防控中学到了什么？/index.html","19658ee2cb596d655397be196ee6566a"],["/2021/01/01/2020年度总结/index.html","8bbecaeb23558fc4d4a9fb4a16c86a32"],["/2021/04/26/2021个人阅读/index.html","4868416eafc247cb1f778ad5ed6cc7b9"],["/2021/10/31/2021-10个人述职答辩/index.html","d63138e627a06ea9050512c4fc744593"],["/2021/12/31/2021年度总结/index.html","6c60675b896489e9b204dbe9d4e3dbff"],["/2021/12/31/2021年度总结/琳.jpg","f0332fbf43352cd8743c14dc2d699d4e"],["/2022/01/03/2022个人阅读书单/index.html","e03d61103fe7df9844a4adfc1939aefd"],["/2022/12/04/三年疫情下的个人经历-2020至2022年/index.html","6c7095410cbe107e157bca40d32dec04"],["/2023/05/20/2022年度总结/index.html","6cbc9449aa5fbaf88310db7418c4d80c"],["/2023/05/20/2023读书清单/index.html","d39cfc9346ffe023870916b0e5940712"],["/404/index.html","77045d66e60f2d0407a9ea58d8c00f29"],["/about/index.html","227496587fb95029591404bc87e25c3b"],["/archives/2015/12/index.html","94ec1a16088944cdb98c1c9069ca87ed"],["/archives/2015/index.html","381002f4586acfd960f9ac341d6d546d"],["/archives/2016/12/index.html","d5e2154942b6909a1b34d867d36c61a8"],["/archives/2016/index.html","3912a077a1c66f0935909ae12acfbc52"],["/archives/2017/12/index.html","b13ff27fb6052fa89ec628113db5f7a4"],["/archives/2017/index.html","1d05c7de7c6c9943a1493f56addec211"],["/archives/2018/02/index.html","37ed9539139574fe2769d55410b20c09"],["/archives/2018/04/index.html","35d7cc93c342ffbda243754181c79d91"],["/archives/2018/05/index.html","de2ddb5ff2a04aed8ce5845d7bc6bda3"],["/archives/2018/07/index.html","d7f958d333d64b06b100cc2346af863c"],["/archives/2018/09/index.html","ea9d4023ccd7f4793f11161085376c34"],["/archives/2018/12/index.html","d352ee794811ad9169f95bc7b41f2a9e"],["/archives/2018/index.html","ff0ab5cc7a52e142112b69e9a7f09836"],["/archives/2019/01/index.html","a1210af678535598322521630728ddc2"],["/archives/2019/04/index.html","cf739247fa300b07e94bb8021bcbc684"],["/archives/2019/06/index.html","23bc74487f213081cf537da4a0ed5a2c"],["/archives/2019/10/index.html","371e859e984dfeed7701e722a11380c0"],["/archives/2019/12/index.html","01df975973d49aeab0243bc11e917936"],["/archives/2019/index.html","28f43ed2410eacfa19ecfdaabba09bfe"],["/archives/2020/02/index.html","ed22427807a46ce67bced3cbe6730d30"],["/archives/2020/04/index.html","0411bd748d3ee52b8cac4a8075172820"],["/archives/2020/05/index.html","8ff346d6f7e93b756b3f526f145b7372"],["/archives/2020/index.html","56a5b83e635af54ecd563df3060fda8f"],["/archives/2021/01/index.html","fee785b46cbccbc7ba43cc7a673307ee"],["/archives/2021/04/index.html","7d04c05820d014f11df6438ab14584fc"],["/archives/2021/10/index.html","6ab56fe263a281f20247d9a9104cf886"],["/archives/2021/12/index.html","77af494219d389dc06b07bf6e3a6d230"],["/archives/2021/index.html","832af23b188f4e92ad0573238aeae409"],["/archives/2022/01/index.html","b94e0df1415a1cfe1623ea2a371953e8"],["/archives/2022/12/index.html","c1525e5f4dcb768744b39a8aba3904a0"],["/archives/2022/index.html","8055f1d6ec69a7bd6866e8ca3f61ed21"],["/archives/2023/05/index.html","132792cbb86623019deee51a839d0453"],["/archives/2023/index.html","e0a354921ddd4384f892cc032734318d"],["/archives/index.html","ce568556c2ffb02e369c6ce9e0f09572"],["/archives/page/2/index.html","a69bfa0f8aff5349651233f5748dedc7"],["/archives/page/3/index.html","285d4ef8d779b500f6d7324038412d4e"],["/archives/page/4/index.html","8b513618bdabd7c279f768cf54d835f7"],["/categories/index.html","af14ff1ee58cc03aff35ba3631de094a"],["/categories/start/index.html","6d453a79cb32074867a6724dc68d0004"],["/categories/个人总结/index.html","dca380eedb63d0348bb5b0f059777344"],["/categories/个人随笔/index.html","bf0ee7b8adc865aad64401007374b8a2"],["/categories/工作/index.html","4a03d6888a3d1150111b4fef373f268c"],["/categories/技术博客汇总/index.html","f4faa067128a02fd1729125caca541a7"],["/categories/方法论/index.html","96a146a0ed357742cd58fba5fea3e82a"],["/categories/日常读书/index.html","23c424319b7f2f46611499a5785a7b8d"],["/categories/机器智能论文阅读/index.html","f2598b72eafe0170e9f2674c3f3d52e2"],["/categories/求职与面试/index.html","79d9e5efe3b64f219a0a62d9ddef6e51"],["/categories/知识图谱/index.html","fdc2f46e4e9e748ef61f654909a53d77"],["/categories/科技报告/index.html","c18a6b34346d6279881600c50f7927e6"],["/categories/论文笔记/index.html","6c014191a1fae59a0bf9f0f8326a74bf"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","d48bb4e9b02c844419311fccabd89c73"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","09976a0fa7a2f797731d418493d8448f"],["/images/love/琳.jpg","f0332fbf43352cd8743c14dc2d699d4e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/slug/bjzlg.jpg","f9733f0a5297f9d98b4c43b1549b8ffb"],["/images/slug/first_step.png","c7fc33c5c6c3d42515f03dc6c9712633"],["/images/wechatPay.png","babd0d3dc9109ff1fed529bb6e06ecb6"],["/index.html","777ade04e8e87bf3a5ebbde3e1bff65f"],["/js/src/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","8b6864d08134476c1fcb328f5e51dff3"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a94df9d4c18f632e6dc097bfefb0aad8"],["/js/src/photoswipe-ui-default.min.js","c061a13816b98ce8c8a7ffb2e62dc403"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","1ce09d402b4c3aee84ed6299f793cd21"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","199612f47352b65b3f40a5e3141b74dc"],["/lib/album/ins.js","fac9d575c09fc03a332b71eb7acdddcc"],["/lib/album/photoswipe.css","a78e12d3a036307b9ef08fc063278e02"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/README.html","21e72b140f4a75110b78b27cc2fb84f1"],["/lib/needsharebutton/needsharebutton.css","839f806cf996f87b47ca7b8a5a0bfa8f"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/music/index.html","c5cc2d84fc4861d4c529ad87dde82a56"],["/page/2/index.html","3d3e15ef64360d50521865d149447d4a"],["/page/3/index.html","0cacf80ae4d38c1791d807c6153bb4f0"],["/page/4/index.html","359d5bdf855f94a5c7bd379153afc56e"],["/page/5/index.html","b5d864ad94c950c8208f8ae56224c11b"],["/page/6/index.html","f8538fe0e979d7d816cb6530e1552aac"],["/page/7/index.html","5d9b64967930d75351fa37e49ecd2c61"],["/photos/index.html","16ceca84cce3220c6a7b1c101c0531fa"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","8f178400479898048ba56a11d8cf7145"],["/tags/2020新冠疫情/index.html","9a6873535c6b9dee6ca75f74d740c14d"],["/tags/hello/index.html","58024245651d427cdaab0c95cec56211"],["/tags/index.html","92d8cdeafb9892342fa066411af60fd7"],["/tags/博客汇总/index.html","8a0670367557b881517dfe4a560bab33"],["/tags/年度总结/index.html","20331897e41a48cc08b3c0442fe7f6a6"],["/tags/技术梳理/index.html","9aac6be2dd8d7c735893e4f778ccc4bd"],["/tags/报告/index.html","83d1b3ab0248aa1b4dcfab2807e823e8"],["/tags/求职/index.html","5739f61937c6af2a081ae8bdb2bbefdf"],["/tags/笔记/index.html","97a95aa2b6e09b941b99b414c941a19c"],["/tags/论文/index.html","7795d056f2cfeed416a082943a7370f7"],["/tags/读书/index.html","623129c9dfc8544f47aa92291959bff9"],["/tags/述职答辩/index.html","4d1c1c7d42f477415ae77bbb37d09984"],["/tags/阅读与写作/index.html","4492fc736a759120f05f78dff1b6250d"],["/tags/随手拍/index.html","377ecdecc94657ab5dba596396a73ecd"],["/tags/随笔/index.html","750b59a102165cebf017f26a4f9d1f86"],["/test/index.html","8d584c99e4df935f32c735b0c4e56f59"]];
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
