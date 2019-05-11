
/**
 * 判断数据的类型
 * object array function number boolean string 
 * 
 */

var getType = function (data) {
    var type = Object.prototype.toString.call(data);
    return type.slice(1,-1).split(' ')[1].toLowerCase();
}


/**
 * 数组的each遍历
 */
var each = function (arr, callback) {
    for(var i=0; i<arr.length; i++) {
        callback.call(arr[i], i, arr[i])
    }
}

