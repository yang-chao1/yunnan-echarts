export default function getmonth() {
    var dataArr = [];
    var data = new Date();
    var year = data.getFullYear();
    // data.setMonth(data.getMonth()+1, 1)//获取到当前月份,设置月份
    for (var i = 0; i < 5; i++) {
        data.setFullYear(data.getFullYear()-1)
        // data.setMonth(data.getMonth() - 1);//每次循环一次 月份值减1
        var m = data.getFullYear() + 1;
        // m = m < 10 ? "0" + m : m;
        // dataArr.push(data.getFullYear() + "-" + (m))
        dataArr.push(m+'年')
    }
 
   
    return dataArr.reverse()
}