 /* 获得标签名为tagName,类名className的元素 */
function getClass(tagName, className)
{
    if (document.getElementsByClassName) //支持这个函数
    {
        return document.getElementsByClassName(className);
    }
    else {
        var tags = document.getElementsByTagName(tagName);//获取标签
        var tagArr = [];//用于返回类名为className的元素
        for (var i = 0; i < tags.length; i++) {
            if (tags[i].class == className) {
                tagArr[tagArr.length] = tags[i];//保存满足条件的元素
            }
        }
        return tagArr;
    }

}