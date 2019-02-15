wx.config({
    debug: false,
    appId: 'wx8fa0fc1d5e28a8c8',
    timestamp: 1479976422,
    nonceStr: 'u6BhsB6q5m5jvoib',
    signature: 'f557802bbcd2ba860b5e9f9cf14fb1bd63166f8d',
    jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','hideMenuItems','showMenuItems','showAllNonBaseMenuItem','translateVoice','startRecord',
'stopRecord','onRecordEnd','playVoice','pauseVoice','stopVoice','uploadVoice','downloadVoice','chooseImage','previewImage','uploadImage','downloadImage','getNetworkType','openLocation','getLocation',
'hideOptionMenu','showOptionMenu','closeWindow','scanQRCode','chooseWXPay','openProductSpecificView','addCard','chooseCard','openCard']
});
wx.ready(function () {
    wx.onMenuShareTimeline({
        title: "360 推广 • 第四届河南创业者大会",
        link: "http://4.ihenan.com/phone",
        imgUrl: "http://4.ihenan.com/phone/share.jpg",
        success: function (res) {},
        cancel: function (res) {}
    });
    wx.onMenuShareAppMessage({
        title: "360 推广 • 第四届河南创业者大会",
        desc: "57000人疯抢5000张票的河南第二牛逼创业者大会",
        link: "http://4.ihenan.com/phone",
        imgUrl: 'http://4.ihenan.com/phone/share.jpg',
        success: function (res) {},
        cancel: function (res) {}
    });
});