var a = 1;
var b = false;
var c = '2';
var e = [1, 2, 3];
var f = [1, 'a', false, {}];
var alan;
alan = {
    beans: 2,
    address: 'any'
};
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backGround = Color.Red;
