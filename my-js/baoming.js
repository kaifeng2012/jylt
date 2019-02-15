function checkTel(tel){
    var mobile = /^1[3|4|5|8|7]{1}[0-9]{9}$/;
    return mobile.test(tel);
}
$('#Fpost').submit(function(e){
    var name = $('input[name=name]').val();
    var childName = $('input[name=childName]').val();
    var comp = $('input[name=company]').val();
    var mobile= $('input[name=mycall]').val();
    if(name == '' || comp == '' || mobile== ''){
        e.preventDefault();
        alert('必填项不能为空');
        return false;
    }
    if(checkTel(mobile)==false){
        alert('手机号码有误！');
        document.getElementById('mobile').focus();
        return false;
    }

    //异步请求
    $.ajax({
        async : false,
        url : '',
        data:$('#Fpost').serialize(),
        type: 'POST',
        dataType: 'json',
        success : function(data) {
            if (data.result == 200) {

            }
        },
        error : function(data) {

        }
    });
});

