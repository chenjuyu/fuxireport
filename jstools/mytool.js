var module1 = new Object({

 isIntNum: function (val)
{
    var regPos = /^[0-9]+.?[0-9]*$/;
    ; // 非负整数
    var regNeg = /^\-[1-9][0-9]*$/; // 负整数 regPos.test(val) || regNeg.test(val)
    var d=/^\d+(\.\d+)?$/
    if (d.test(val) || regNeg.test(val) ) {
        return true;
    } else {
        return false;
    }
},
     //格式化日期,
    formatDate: function(date,format){
    var paddNum = function(num){
        num += "";
        return num.replace(/^(\d)$/,"0$1");
    }
    //指定格式字符
    var cfg = {
        yyyy : date.getFullYear() //年 : 4位
        ,yy : date.getFullYear().toString().substring(2)//年 : 2位
        ,M  : date.getMonth() + 1  //月 : 如果1位的时候不补0
        ,MM : paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
        ,d  : date.getDate()   //日 : 如果1位的时候不补0
        ,dd : paddNum(date.getDate())//日 : 如果1位的时候补0
        ,hh : date.getHours()  //时
        ,mm : date.getMinutes() //分
        ,ss : date.getSeconds() //秒
    }
    format || (format = "yyyy-MM-dd hh:mm:ss");
    return format.replace(/([a-z])(\1)*/ig,function(m){return cfg[m];});
},
 AddDays:function(date,value)  //没有返回值
{
    date.setDate(date.getDate()+value);
}
 
 
 
 
})
// import module1 from './jstools/mytool' 引用方式
 export default module1
