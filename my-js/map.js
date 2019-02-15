
// 百度地图API功能
var mapopts = {
    enableMapClick:false
}
var map = new BMap.Map("allmap",mapopts);
map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_ZOOM}));
map.disableDoubleClickZoom();
// var point = new BMap.Point(113.685536,34.798413);
map.centerAndZoom("郑州");
var point = new BMap.Point(113.792507,34.778375);
map.centerAndZoom(point, 15);
var marker = new BMap.Marker(point);  // 创建标注
var offset=new BMap.Size(10,-20);
map.addOverlay(marker);


var opts = {
    //width : 200,     // 信息窗口宽度
    //height: 60,     // 信息窗口高度
    title : '<b>郑州市郑东新区  美侨世纪广场</b>' , // 信息窗口标题
    enableMessage:false,//设置允许信息窗发送短息
    enableCloseOnClick:false,
    message:'郑州市郑东新区  美侨世纪广场',
    offset:offset
}
var infoWindow = new BMap.InfoWindow('<div style="border-top:1px solid #999; margin:5px 0px 0px; padding-top:5px;">郑州家音顺达通讯有限公司</div>', opts);  // 创建信息窗口对象
map.openInfoWindow(infoWindow,point); //开启信息窗口
function showInfo(e){
    map.openInfoWindow(infoWindow,point);
}
marker.addEventListener("click", showInfo);

//操作百度地图的控件
// 创建百度地图的控件
var maptypecontrol =new BMap.MapTypeControl();
map.addControl(maptypecontrol);
var scalecontrol=new BMap.ScaleControl;
map.addControl(scalecontrol);
//添加地图的平移缩放
var navcontrol=new BMap.NavigationControl();
map.addControl(navcontrol);
// 启用滚轮放大缩小
map.enableScrollWheelZoom();
//启用双击放大
map.enableDoubleClickZoom();

