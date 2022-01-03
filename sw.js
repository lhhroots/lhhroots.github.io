/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/12/30/2015年度总结/index.html","13b37605aa80fce68950dcd5a9408768"],["/2016/12/31/2016年度总结/index.html","d6b453cbc570a0c641d4b23202c95fc2"],["/2017/12/31/2017年度总结/index.html","4f6868fdb302156d9309b99e3800549c"],["/2018/02/01/我在北京的2017（壹）/index.html","14ecc0b6ff8cb4fece21771225e30681"],["/2018/02/06/Papers-of-machine-learning-one/index.html","d381b5b0e33404ff43334b5ac4e8d636"],["/2018/04/09/也许真的可以/index.html","359ec2456c252ec6e04f5c648e46ed77"],["/2018/04/09/也许真的可以/改变.jpg","376952bd9f1b2a5d6303150d24721b25"],["/2018/04/09/也许真的可以/改变1.jpg","2976fb987b17d6f601249fbf286a4ae1"],["/2018/04/10/风景独好/1.jpg","ea5540bdd799c301ebd09d149324995e"],["/2018/04/10/风景独好/2.jpg","0aa8a1c93d9dbf9a0595d63727d00bb0"],["/2018/04/10/风景独好/4.jpg","01d2af536a71b0dacd750248beb7838d"],["/2018/04/10/风景独好/index.html","8c162118f11ad0957e9b99a328779235"],["/2018/05/29/技术博客汇总/index.html","c242eb41b88fc3474e41cee2b6faac38"],["/2018/05/30/论文研究笔记/index.html","b07a1e223e3f860a3013e7294e3e5924"],["/2018/07/17/行业报告汇总/index.html","8746e17a0f539db50573fc52ebaabda6"],["/2018/09/03/研究论文阅读与写作/index.html","6ee0f4cd42abad001a94e7632ff908ae"],["/2018/12/30/2018年度总结/index.html","c85a3fdc0be9366eb290196eb618a2b4"],["/2019/01/06/2019论文阅读清单/index.html","9f8378491955075702676c0ae93e1cd1"],["/2019/04/29/2019阅读书目列表/index.html","6c3a76fefee679913ab27df2cbab3ff7"],["/2019/06/16/文因互联公司面试小记/index.html","f60d4a0909164b01699db3697326abea"],["/2019/10/27/知识图谱关键技术与问答系统/index.html","75f322f265c903215e9da360d696ee38"],["/2019/12/08/北京展览馆游览/index.html","5c151f1e5208bfe23400acdd26cfd7e1"],["/2019/12/14/实体及关系的识别与提取180612/index.html","86cd4094e15915bbe70ec443a4a27498"],["/2019/12/16/读李笑来老师/index.html","275e10a3bdbdd753d79d2f208f16d2df"],["/2019/12/29/2019年度个人总结/index.html","7fd521a188c82566c0cdefc5bca3aeaf"],["/2020/02/08/不一样的春节/index.html","3052449f2b7a3f06b0a334a0b9b9c5ad"],["/2020/04/06/居家生活、办公的日子里/index.html","cf670652ad42ea9a262936678025fb66"],["/2020/05/02/2020个人阅读/index.html","64d8fddda8665af99a936488c1044056"],["/2020/05/02/个人从疫情的防控中学到了什么？/index.html","1742c7db815a75d677d18f598af528da"],["/2021/01/01/2020年度总结/index.html","3d631e67a8b0739e152aef7571163b5b"],["/2021/01/03/hello-world/index.html","6247c00bc8b5a42d3421650cd00e0772"],["/2021/04/26/2021个人阅读/index.html","8347564143626a969c3e948c47e12130"],["/2021/10/31/2021-10个人述职答辩/index.html","c8d4e3c8589202b15bd3dc5756901ab2"],["/2021/12/31/2021年度总结/index.html","9639dc77f68961f7e363210cbae1f218"],["/2021/12/31/2021年度总结/琳.jpg","f0332fbf43352cd8743c14dc2d699d4e"],["/2022/01/03/2022个人阅读书单/index.html","7d3a40a8e83b85aeb2375fe30ee908b1"],["/404/index.html","6b11942f14a5009716c28bcef00a1ff2"],["/about/index.html","6b8a55a91506f10ecb5d7fd81c702610"],["/archives/2015/12/index.html","3b0b98972eca96aa96f5b610cd18744f"],["/archives/2015/index.html","877fc8544ce133c55c478d39d1df5cb3"],["/archives/2016/12/index.html","e99926837252f8d17eab07b174bbfccf"],["/archives/2016/index.html","82965b675e448f0056b890c8fa942439"],["/archives/2017/12/index.html","beb3f512590330b20681f739cc539eca"],["/archives/2017/index.html","15d35e13781bcf2e855a57684705b587"],["/archives/2018/02/index.html","6d60b73d5e0e2741255f99de5d676fb8"],["/archives/2018/04/index.html","215a72a563767ed2d5918d2b07537a97"],["/archives/2018/05/index.html","10bdd29840babad08de9de983bb6b1bf"],["/archives/2018/07/index.html","3dd262f618d2bd29e8cd2e9159f8167d"],["/archives/2018/09/index.html","91420be1329fd0e29c1a380ede7eb355"],["/archives/2018/12/index.html","8268ab225b27c4d509c92735160f6a73"],["/archives/2018/index.html","48f2c384c1c469d795fb7857853c8d6f"],["/archives/2018/page/2/index.html","84df3b7a85be7627c30577ac4f086f2a"],["/archives/2019/01/index.html","64f5d858252ca570713b454712fd6e3d"],["/archives/2019/04/index.html","d20d01d822c09d777514a73d50cc476b"],["/archives/2019/06/index.html","2377ef9cef37cb769aa0de0c80f2b97f"],["/archives/2019/10/index.html","eca3ee9bb24c13ace4104764441e738e"],["/archives/2019/12/index.html","e0190073d9b3733a3763403e41fca3f8"],["/archives/2019/index.html","df11adbb5c8abe60574778dd9ba372d9"],["/archives/2019/page/2/index.html","dc3e842e833437f574e5a7b36f7f91e1"],["/archives/2020/02/index.html","18fcceff5dec98beec1d4ee99433bf84"],["/archives/2020/04/index.html","9804707d2281d01c5e5ef1d501045664"],["/archives/2020/05/index.html","25f57283ff1c9fd0a19ba2a61c538a55"],["/archives/2020/index.html","4e7400dba516ef2fe539e080ec341136"],["/archives/2021/01/index.html","f16d0ceb98a24d4894f4b2e162df830c"],["/archives/2021/04/index.html","fd77734a97c597055906ed6d76c0fb99"],["/archives/2021/10/index.html","4bbe58898282597f8bbed294b21004fb"],["/archives/2021/12/index.html","fa4a7d44c5287ec4d7f1b1709f838c95"],["/archives/2021/index.html","86cede65c52f53cf99fd08b3763c0fc7"],["/archives/2022/01/index.html","4e65af06864225b5887c3d8f9a9003e6"],["/archives/2022/index.html","f7a9139bc4acce6c7ca30c215850f206"],["/archives/index.html","e038d5fa4a3d01405b7014fe2250126a"],["/archives/page/2/index.html","4a2587baa08536c6e7a47d1a737db468"],["/archives/page/3/index.html","0e9908998078129fb0c13879529344c9"],["/archives/page/4/index.html","b1fdd5bac0018405cd34189d3565ea25"],["/archives/page/5/index.html","ee71b86a72e3bd309a4072da202aa531"],["/archives/page/6/index.html","57c1db7a5f8bbb65b369fa5c897551eb"],["/categories/index.html","10545e4e8e10e0216aa84ea8386f725d"],["/categories/start/index.html","bf05fb988f84ee7ec75ebe8386c0e571"],["/categories/个人总结/index.html","c6092e2411c36eccab7253a8f9a99be1"],["/categories/个人总结/page/2/index.html","35445a6b36a5606254e5d23c48502f67"],["/categories/个人随笔/index.html","36905314fe66507cd22c665a5c982b67"],["/categories/个人随笔/page/2/index.html","0cb55ecc8d4f480314f9885cafd0eeb6"],["/categories/工作/index.html","b3e15c4db00ed39406c499d499defc02"],["/categories/技术博客汇总/index.html","5f8c2c9c0750a3fdbefd98494cca5b34"],["/categories/方法论/index.html","dab613e651e00b0b67cfc50f175cb107"],["/categories/日常读书/index.html","bde9f037be15859b7bf2aa665cfa63ec"],["/categories/机器智能论文阅读/index.html","1fd43c398c710fc94b348ba3a6e42ce4"],["/categories/求职与面试/index.html","9b613b54b326da742294b662e28ce6b6"],["/categories/知识图谱/index.html","7c605933dba432efd1fafbc82e50c166"],["/categories/科技报告/index.html","11fa3be4130e9611058fc55bc1e2f7c3"],["/categories/论文笔记/index.html","d9ebceb9e6538c97ae7a82cc965cb018"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","7ea95874f674e675e7e0dd6b48ba9272"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","09976a0fa7a2f797731d418493d8448f"],["/images/love/琳.jpg","f0332fbf43352cd8743c14dc2d699d4e"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/slug/bjzlg.jpg","f9733f0a5297f9d98b4c43b1549b8ffb"],["/images/slug/first_step.png","c7fc33c5c6c3d42515f03dc6c9712633"],["/images/wechatPay.png","babd0d3dc9109ff1fed529bb6e06ecb6"],["/index.html","d4ead3f5eede9abb17b9ff31bbcde1b6"],["/js/src/Valine.min.js","b1d2c9b89c70dbf0a8541bfd36afafa1"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","8b6864d08134476c1fcb328f5e51dff3"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","a94df9d4c18f632e6dc097bfefb0aad8"],["/js/src/photoswipe-ui-default.min.js","c061a13816b98ce8c8a7ffb2e62dc403"],["/js/src/photoswipe.min.js","90d5a5ff4789f25f79840f95fc089c0e"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/album/assets/empty.png","aa94a1f00834dc9b03ed88423ebb0ef0"],["/lib/album/default-skin/default-skin.css","1ce09d402b4c3aee84ed6299f793cd21"],["/lib/album/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/lib/album/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/lib/album/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/lib/album/ins.css","199612f47352b65b3f40a5e3141b74dc"],["/lib/album/ins.js","fac9d575c09fc03a332b71eb7acdddcc"],["/lib/album/photoswipe.css","a78e12d3a036307b9ef08fc063278e02"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/README.html","18395c919083e41dd082ce2e0c7f68d3"],["/lib/needsharebutton/needsharebutton.css","839f806cf996f87b47ca7b8a5a0bfa8f"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/music/index.html","a28db455b4757a7f343a48fb3a2042af"],["/page/2/index.html","baeb88e9a86dd1d5a98b35975f0639c1"],["/page/3/index.html","f6fc4532bc09ef20cd00cafb25d44b65"],["/page/4/index.html","c2f1e72bcdecdb9509b873588ce26b34"],["/page/5/index.html","030615c20df09b3a0901b6019cbb830e"],["/page/6/index.html","aa06b22d034b1fc42eccee87530bf09a"],["/photos/index.html","f947f91f4a3d208bce242b44ccbd281d"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","1356c257633583e7c77aa61d07e31889"],["/tags/2020新冠疫情/index.html","5be0a019cd742d27d86c8b1b245a990a"],["/tags/hello/index.html","ef0da1eb8729199656333b17f68ab441"],["/tags/index.html","31071e96a098ced8b9c2a6310448e388"],["/tags/博客汇总/index.html","71e65d8e281339b443417af9d403b3a0"],["/tags/年度总结/index.html","dfb1b49184236412ccc3167c6eacff85"],["/tags/年度总结/page/2/index.html","c863573ffcb5dc84f0b39a07ce5e602d"],["/tags/技术梳理/index.html","7eadaaec2cbbb1ed7c75db7524984b4f"],["/tags/报告/index.html","7b73434fbeece5d496fe6e28b6280d78"],["/tags/求职/index.html","dff4084078eb0b2e6950d6872b5c2a0e"],["/tags/笔记/index.html","95fd913cb501bc3434cad0d49aab36a1"],["/tags/论文/index.html","350d62fd23d1932e9d3fa7da209a00df"],["/tags/读书/index.html","f3fb27e8c9085e9112811705b79feef2"],["/tags/述职答辩/index.html","76c7f8dc4f5512da663eb9cd2537b15b"],["/tags/阅读与写作/index.html","033381e0725242340cc77a6c084dc0a3"],["/tags/随手拍/index.html","fc904f317ab8b588baaba852be7b30cb"],["/tags/随笔/index.html","e4b7ba2178006982b5f9550b21eddf0d"],["/test/index.html","1977d0d25d2c86bbc7e24c7245f28140"]];
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
