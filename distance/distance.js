//grid is 5 X 5
// var person = [2, 0];
// var flag = [4, 3];
//
// var getDistance = function (person, flag) {
//   var xHolder = (person[0] - person[1])
//   xHolder = xHolder * xHolder;
//   var yHolder = (flag[0] - flag[1])
//   yHolder = yHolder * yHolder;
//   var squarMe = xHolder + yHolder
//   console.log(Math.sqrt(squarMe));
// }
//
// getDistance(person, flag)

var node1 = {x: 1, y: 5}
var node2 = {x: 4, y: 3}
var node3 = {x: 3, y: 7}
var node4 = {x: 7, y: 9}
var node5 = {x: 10, y: 9}
var nodeArray = [node1, node2, node3, node4, node5];
// var flag = {x: 6, y: 7}

// var getDistance = function (nodeArray) {
// }
  nodeArray.reduce(function (prev, cur, index, array) {
    // console.log(prev);
    // console.log(cur);
    var a = prev.x - cur.x;
    var b = prev.y - cur.y;
    var c = Math.sqrt( a*a + b*b );
    console.log('distance: ', c);
    return prev
    // console.log(c);
  })
// getDistance(nodeArray)
