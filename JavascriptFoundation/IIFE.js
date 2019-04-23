//IIFE

(function () {
    var a = 1;
})();

a; //not defined

var myfunc = (function () {
    function a() {
        return 5;
    }
    return {
        a: a
    }
})()

myfunc.a() //5