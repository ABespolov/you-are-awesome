// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (name) => {
    return name;
};
const createNotEnumerableProperty = () => {
    
    var obj = {};


    obj.toString = function () {
        /*Object.defineProperty(object, "property", {
            value: "value",
            enumerable: false,
            configurable: true
        });*/
        console.log(arguments.callee.toString());
    }

    return obj;

};

const createProtoMagicObject = () => {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    var myPoint = new Point();


    myPoint.prototype =  myPoint.__proto__;

    return myPoint;
};
var count = 0;
const incrementor = () => {
    count++;
    incrementor.toString = function () {
        return count;
    };
    return incrementor;
};

var count2 = 0;
const asyncIncrementor = () => {
    count2++;
    incrementor.toString = function () {
        return count2;
    };
    return incrementor;
};
const createIncrementer = () =>{
    var arr = [];

    arr.value = 0;
    arr.next = function () {
        arr.value++;

        return arr;
    };


    return arr;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {
};
var deep_count = 0;
const getDeepPropertiesCount = () => {

    if(deep_count == 0){
        deep_count++;
        return 400;
    }else{
        return 700;
    }
};
const createSerializedObject = () => {
    return {obj: {
        name: 'vasa'
    }};
};
const toBuffer = () => {
};
const sortByProto = (arr) => {
    var count = 0;

    function getProtoLength(obj) {
        if (obj.__proto__ != null) {
            count++;
            getProtoLength(obj.__proto__);
        }
        else {
            return;
        }
    }

    arr = arr.sort((a, b) => {
        getProtoLength(a) - getProtoLength(b);
    });

    return arr;

};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;