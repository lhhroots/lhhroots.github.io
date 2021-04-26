/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/12/30/2015年度总结/index.html","ddc693c474429571904f0c9ba7724c8d"],["/2016/12/31/2016年度总结/index.html","2dbf24669a8311e52c7dd361d14ab028"],["/2017/12/31/2017年度总结/index.html","f0998d0c49845202c44a88f5be365a4a"],["/2018/02/01/我在北京的2017（壹）/index.html","7a1ea9c25df42fbd26289791822390ce"],["/2018/02/06/Papers-of-machine-learning-one/index.html","7ce48a3966ae8357e0d823e025434573"],["/2018/04/09/也许真的可以/index.html","26814a9be258b735fbcae56ede30eb8d"],["/2018/04/09/也许真的可以/改变.jpg","376952bd9f1b2a5d6303150d24721b25"],["/2018/04/09/也许真的可以/改变1.jpg","2976fb987b17d6f601249fbf286a4ae1"],["/2018/04/10/风景独好/1.jpg","ea5540bdd799c301ebd09d149324995e"],["/2018/04/10/风景独好/2.jpg","0aa8a1c93d9dbf9a0595d63727d00bb0"],["/2018/04/10/风景独好/4.jpg","01d2af536a71b0dacd750248beb7838d"],["/2018/04/10/风景独好/index.html","a009931796e8a489c3d8e98cc3eaf645"],["/2018/05/29/技术博客汇总/index.html","4243dd5c856d98d0ce2767b87e84d453"],["/2018/05/30/论文研究笔记/index.html","1487f630a947fda69aa5c8a7f675ba76"],["/2018/07/17/行业报告汇总/index.html","5d78ce7e49388d5e43a5b107c8ca97c2"],["/2018/09/03/研究论文阅读与写作/index.html","ed362d9b6c75d58f0e51e8f00c4266f6"],["/2018/12/30/2018年度总结/index.html","68547418cfebbcc7c661285476359118"],["/2019/01/06/2019论文阅读清单/index.html","965d2424644e13eb31cab80d047c70b4"],["/2019/04/29/2019阅读书目列表/index.html","d98e7b99068076988f7580b5c3c12b4a"],["/2019/06/16/文因互联公司面试小记/index.html","e07378c375d92c052a96e1f2146b57a3"],["/2019/10/27/知识图谱关键技术与问答系统/index.html","d7cb67eaddb9fe74ae99f1bcebaef296"],["/2019/12/08/北京展览馆游览/index.html","2bcefa364b8de49637469875ae27b8bd"],["/2019/12/14/实体及关系的识别与提取180612/index.html","6f119440f692a37f2ab29af379e7fdb5"],["/2019/12/16/读李笑来老师/index.html","f31467793429b9842d0d2ee2ec7f5fd9"],["/2019/12/29/2019年度个人总结/index.html","2559601e69166a30519d934961b59b61"],["/2020/02/08/不一样的春节/index.html","1d2c802b9d35bd01fb2bbbe452933d14"],["/2020/04/06/居家生活、办公的日子里/index.html","a7340f199f9e4d653b7e0cff4312f5bd"],["/2020/05/02/2020个人阅读/index.html","82555151c64e17a05b66ea701bff4e42"],["/2020/05/02/个人从疫情的防控中学到了什么？/index.html","f9303396b7d09960fdf07ca22cfb308f"],["/2021/01/01/2020年度总结/index.html","89c85c42610ffd5fd8ac7c9bfe7ff517"],["/2021/01/03/hello-world/index.html","ec0ec2f93c890ec744eea766d04056f9"],["/2021/04/26/2021个人阅读/index.html","c83c5634884ec6ff8c447558f8e8e248"],["/about/index.html","7ab9a6473c9441f628768793d262de56"],["/archives/2015/12/index.html","d996696024d2db1a9757b351cf6198f1"],["/archives/2015/index.html","fad4f48dc26e7089a938a056c9f88676"],["/archives/2016/12/index.html","7da989e8555a8909c34b367f77ebcd21"],["/archives/2016/index.html","073b3bb3be937a5af4258f989d21ae6d"],["/archives/2017/12/index.html","51868e571846481a58c8234aa84d84f1"],["/archives/2017/index.html","639af0c50fa92f6bd0f08acbdb355243"],["/archives/2018/02/index.html","915c5a01ea531d5e01e2f3c1ea3d9165"],["/archives/2018/04/index.html","a7a423c6a91a2448f8a3c3c6b9137ac3"],["/archives/2018/05/index.html","09cdebdb53ff6a7c07b86af7d49768bc"],["/archives/2018/07/index.html","d7874aa650ac99ced7d737378124e031"],["/archives/2018/09/index.html","e0bc927eb8764e74dd8892a5e257be8f"],["/archives/2018/12/index.html","fd390c221fa84f94da4115a1e681ac26"],["/archives/2018/index.html","9b7b757dff6b61f8c0cbc888969367bb"],["/archives/2018/page/2/index.html","eb7109014436374860938b93a5c873a3"],["/archives/2019/01/index.html","7c1f5ab28d16241931eee423adfc9ad3"],["/archives/2019/04/index.html","026de2315b377d0e9c7d831e2e87e93d"],["/archives/2019/06/index.html","748093ad6f13690c8331dc5f564d665e"],["/archives/2019/10/index.html","66d4363dbc9fd7a69b0b28d3566b889d"],["/archives/2019/12/index.html","1208ff26fa14bbfc61d387222682a5b5"],["/archives/2019/index.html","815c603d28224e016453cfe8a1826108"],["/archives/2019/page/2/index.html","750b9d42d9d677ece974d0064e8e5e0e"],["/archives/2020/02/index.html","e1e026ae749370e10191cb5e19ad4799"],["/archives/2020/04/index.html","52cee1a69837eb7beea28d362073be34"],["/archives/2020/05/index.html","0f40e00c06ec7e181f8813cf59bfac71"],["/archives/2020/index.html","b05c1a8e7d5de16bfd9cc5ddd285670d"],["/archives/2021/01/index.html","6b466b1a74edd851ec34617ad9c39ffa"],["/archives/2021/04/index.html","f0e117fe8bf0e0c8627a781ae1b16a70"],["/archives/2021/index.html","4713ab466b80bb3f4fdb99eb97a8c692"],["/archives/index.html","2a03d6e82d501b172efd3e6666b2415f"],["/archives/page/2/index.html","dbd3a634c891a0009a5a02e4cc406a1b"],["/archives/page/3/index.html","d5b6a274ea0b459784b20191255b2463"],["/archives/page/4/index.html","d4b04e96f2ceb71f5e9cec041ce76c96"],["/archives/page/5/index.html","1f6ccf18195aeecdc0e5b60165ad7f48"],["/archives/page/6/index.html","1be9b3cfc1526b376d4f1eeab5a50b79"],["/categories/index.html","81f103f83437546088da01b92dc16b8b"],["/categories/start/index.html","9a02a5ca68f5d681947f554189f85024"],["/categories/个人总结/index.html","cbcc5638310dc6da1ab133c6aaeafe15"],["/categories/个人总结/page/2/index.html","419a355af84053cb6f85a1630999a4e5"],["/categories/个人随笔/index.html","62abf4c3ad45c437d209f986027fe63c"],["/categories/个人随笔/page/2/index.html","bfd3872f9e5192b61b666479a2897b16"],["/categories/技术博客汇总/index.html","3595afbc8936878fe31c335466503f1b"],["/categories/方法论/index.html","b3682ce80bdcc99e81c7631e0077b6d0"],["/categories/日常读书/index.html","a58f3a3a69d1e62fbff0e72c5bbc0fb5"],["/categories/机器智能论文阅读/index.html","93da9793e677575ee6f92baaf6792dde"],["/categories/求职与面试/index.html","1c20356470952c8575bf2086273570f0"],["/categories/知识图谱/index.html","9176aa03f55be286d3d3c4e4d335c6e6"],["/categories/科技报告/index.html","b298b9e51ad2e6d279b20da01dddc409"],["/categories/论文笔记/index.html","1db6dd0d6b6b73d9ea91c08752807bd1"],["/css/main.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/algolia_logo.svg","b0e86b43dab4b257bf40e4da14e5df84"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","f948bba80356eb7e797eeb2f1b1ffa55"],["/images/cc-by-nc-sa.svg","1fc49a6617c8e3abecf53369ceeb4daa"],["/images/cc-by-nc.svg","483cecee8452be71b500c3390998bb3a"],["/images/cc-by-nd.svg","8a1465616bdacfb718e7cc8a42a311a4"],["/images/cc-by-sa.svg","9dd7cc26e58bc19e2cccb0dc6d8c01c4"],["/images/cc-by.svg","d7cc43bac762ec04f57ad4a15424c147"],["/images/cc-zero.svg","b84703e744a9c21e3a0f55feb319d731"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ab4f04911daa778d9b7430c7d0b07336"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","96394b195f577dfdd8449052fc8b9556"],["/images/quote-r.svg","343af43899f514b6d0616a68b6fab199"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/slug/bjzlg.jpg","f9733f0a5297f9d98b4c43b1549b8ffb"],["/images/slug/first_step.png","c7fc33c5c6c3d42515f03dc6c9712633"],["/images/wechatPay.png","babd0d3dc9109ff1fed529bb6e06ecb6"],["/index.html","de3558daabdf10b18085d1b3dabcf79f"],["/js/src/affix.js","adb9a93771bc51ea419e62b29d77e98e"],["/js/src/algolia-search.js","b3debaec061ea42ae3fbc1791ac40ead"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","15148ecb93d08e3b10d84b30510fcf1f"],["/js/src/hook-duoshuo.js","0d208eedf09f1ccce833e188ce4ace5f"],["/js/src/js.cookie.js","73909693ba2c22a0db82adfd4987d64c"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","56602fe567728a70738f50c4a965bfbe"],["/js/src/photoswipe-ui-default.min.js","c061a13816b98ce8c8a7ffb2e62dc403"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","e399a13824700296cbd3b880ec484fcc"],["/js/src/schemes/pisces.js","75acb43e224e521a7c7322c69e2448f5"],["/js/src/scroll-cookie.js","d2247bf724e805935ba76f1b87f8f15f"],["/js/src/scrollspy.js","5df91a0410594f41558a7452bf87828f"],["/js/src/utils.js","bdf903793472a52826e6960e19834070"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","9e9d9f268cc30366c13139d1bcb3a604"],["/lib/Han/dist/han.js","95bb9b3b4112350c94323afc3b8ff2cf"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/album/README.html","b8234375b6c1458bf5d3ac91bff8b8f4"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","2c44e17c898896994e458dcada65a2c9"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b1c88aa663761c95defb64b3bff229e7"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","bfa2ca547c56c50491051cccb1921180"],["/lib/album/ins.js","2cf1605c3121107210d2bc65bcabc84e"],["/lib/album/photoswipe.css","dd59068e0832f028e2d0b8bc309d2289"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","73fbc04a8d87b545446b5d1b44760fc8"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","147124da3fb8f6db52c7c0add81f7c57"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","49c50357a10c51940b36d9f70422d3c6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","545f1e92c7314b3c0e186890c4d580b1"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","d908dd96d8a7e21e401532ce07030614"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","b845f47be198938961dc0374fb714c5a"],["/lib/fancybox/source/jquery.fancybox.css","ecedd4c15ade67d5b570f0eea7c2bbb6"],["/lib/fancybox/source/jquery.fancybox.js","2f58038003272557b5318e892abb4580"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","9a08e86da808d3310170cf16bce9aaa2"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","7e2a4ab64a248865e52c83c20fd3bcc7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","d379f0ff610e7d801e93553e3c09e987"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","5caa2f94fdd7d455cc9be3218b8176d3"],["/lib/jquery_lazyload/jquery.scrollstop.js","dc7f32ded4de36bd7005ced70a10fd00"],["/lib/needsharebutton/font-embedded.css","204e1b04836df0321d40e3a971d237a1"],["/lib/needsharebutton/needsharebutton.css","0ec3b0ab953be398e23d2e2e32897838"],["/lib/needsharebutton/needsharebutton.js","b58e4609099a5c6d8cf53676f97ad167"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","23bb7a8a07f16f7d21a933c486b5ccfe"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","5366b4e5344ecfc84b173bcfef1a9e3e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/music/index.html","6797182e698d5cb5dfcc55b4685c5048"],["/page/2/index.html","cb090e1df40f673cf31e17695710e17b"],["/page/3/index.html","5dfeceff85f92cdf325c5fb026a12da6"],["/page/4/index.html","ece1efc9a9a960a54d38d866145951dd"],["/page/5/index.html","cc20b089d6ed738e182166b99a4f662c"],["/page/6/index.html","d81f017e4a94a7b81dea7771ed6afcbb"],["/photos/index.html","3fe4126216c0c9e8d24a4451649f1d1d"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","fb4949797e8d5ee757d073edfc9755ad"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","eab8d7c9f5a807675b3e04b44e243ce8"],["/tags/2020新冠疫情/index.html","49171afb634ced27245f5d5327f00d1b"],["/tags/hello/index.html","18b09eb4de45093e1e2c782882ed9786"],["/tags/index.html","5cbfda6452e7cb120f3bb1a398c1e4d2"],["/tags/博客汇总/index.html","039e91364aa62b23058bd5617947fa54"],["/tags/年度总结/index.html","508edcd1d44fdc35846bd6632e268f89"],["/tags/年度总结/page/2/index.html","486ff3acbf3bfc8ccbdb5eb9acece629"],["/tags/技术梳理/index.html","9fa78ac3e4c90c591d78c3b41833d315"],["/tags/报告/index.html","026e4522065b02c5e4eb54e7dc8bd77d"],["/tags/求职/index.html","a891aa44537e428ed3472163ce9dcdaf"],["/tags/笔记/index.html","a8b64bdf8450172dd60019b244020ef4"],["/tags/论文/index.html","ef49ea9d2a72010529c5d500f449a3ad"],["/tags/读书/index.html","4f9564c0d4534bdac95e380b2e703ad6"],["/tags/阅读与写作/index.html","032bc4bae2c32af388e66a98f96f5425"],["/tags/随手拍/index.html","2061750d3d7be00891bdd72da27973eb"],["/tags/随笔/index.html","1e60598c06dee503ec17d0a5aa5edc22"],["/test/index.html","e739ef7edb95c24a03e28311f7f9c92b"]];
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
