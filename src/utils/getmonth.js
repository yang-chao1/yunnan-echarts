export default function getmonth() {
    var dataArr = [];
    var data = new Date();
    var year = data.getFullYear();
    data.setMonth(data.getMonth()+1, 1)//获取到当前月份,设置月份
    for (var i = 0; i < 12; i++) {
        data.setMonth(data.getMonth() - 1);//每次循环一次 月份值减1
        var m = data.getMonth() + 1;
        // m = m < 10 ? "0" + m : m;
        // dataArr.push(data.getFullYear() + "-" + (m))
        dataArr.push(m+'月')
    }
 
   
    return dataArr.reverse()
}