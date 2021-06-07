export default function positon(point, params, dom, rect, size) {
   
    //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
    var x = point[0]; //
    var y = point[1];
    var viewWidth = size.viewSize[0];
    var viewHeight = size.viewSize[1];
    var boxWidth = size.contentSize[0];
    var boxHeight = size.contentSize[1];
    var posX = 0; //x坐标位置
    var posY = 0; //y坐标位置

    if (x < boxWidth) { //左边放不开
        posX = 5;
    } else { //左边放的下
        posX = x - boxWidth;
    }

    if (y < boxHeight) { //上边放不开
        posY = 5;
    } else { //上边放得下
        posY = y - boxHeight;
    }

    return [posX, posY];

}