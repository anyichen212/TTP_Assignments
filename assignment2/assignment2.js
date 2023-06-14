// forEach
function myEach(arr, cb){
    for(let i of arr){
        cb(i);
    }
}

// Map
function myMap(arr, cb){
    let newArr = [];
    for(let i = 0 ; i < arr.length ; i++){
        newArr[i] = cb(arr[i]);
    }

    return newArr;
}

// Filter
function myFilter(arr, cb){
    let newArr = [];
    let size = 0;
    for(let i of arr){
        if(cb(i)){
            newArr[size] = i;
            size++;
        }
    }

    return newArr;
}

// Some (Any)
function mySome(arr,cb){
    
    for(let i in arr){
        if(cb(i))
        return true;
    }

    return false;
}

// Every
function myEvery(arr, cb){

    for(let i in arr){
        if(!cb(i))
        return false;
    }

    return true;
}

// Reduce
function myReduce(arr,cb,value=undefined){

    for(let i of arr){
        if(value === undefined){
            value = i;
        }
        else{
            value = cb(value,i);
        }
    }

    return value;
}

// Includes
function myIncludes(arr, ele){
    
    for(let i of arr){
        if(i == ele)
        return true;
    }

    return false;
}

// indexOf
function myIndexOf(arr, ele, index=0){
    
    for(let i = index; i < arr.length ; i++){
        if(arr[i] == ele)
            return i;
    }

    return -1;
}

// Push
function myPush(arr,item){
    let length = arr.length
    if(typeof item == "object"){
        for(let i of item){
            arr[length] = i;
            length++;
        }
    }
    else{
        arr[length] = item;
        length++;
    }

    return length;
}

// lastIndexOf
function myLastIndexOf(arr, ele, index = arr.length-1){
    if(index >= arr.length){
        index = arr.length-1;
    }
    else if(index < 0){
        index += arr.length;
    }

    for(let i = index ; i >= 0 ; i--){
        if(ele == arr[i])
        return i;
    }

    return -1
}

// Object.keys()
Object.grabKeys = function (obj){
    let keys = [];
    let size = 0;
    for(let key in obj){
        keys[size] = key;
        size++;
    }

    return keys;
};

// Object.values()
Object.grabValues = function (obj){
    let values = [];
    let size = 0;
    for(let key in obj){
        values[size] = obj[key];
        size++;
    }

    return values;
};



// testing
/*
let arr = [1,2,3,4,5,6];

// test myEach
myEach(arr,ele =>{
     console.log(ele)
});

//test myMap
let map = myMap(arr,ele => {
    return ele * 2;
});

console.log("Print Map :", map);

//test myFilter
let fil = myFilter(arr,ele =>{
    return ele % 2 === 0;
});

console.log("Print Filter Array :", fil);

//test mySome
let s = mySome(arr,ele =>{
    return ele % 2 === 0;
});

console.log("Test MySome, arr contains even elements?", s);

//test myReduce

//test myIncludes
let include = myIncludes(arr,8)
console.log("Test myIncludes :", include);

//test myIndexOf
console.log("Test myIndexOf :", myIndexOf(arr,2));

//test myPush
console.log("Test myPush:", myPush(arr, [1,2,2,3,2]), ",New Arr:", arr);

//text myLastIndexOf
console.log("Test myLastIndexOf :", myLastIndexOf(arr,2));

//test grabKeys and grabValues
let o = {
    "key1" : 1,
    "key2" : 2,
    "key3" : 3
};

console.log("Keys : ", Object.grabKeys(o));
console.log("Values : ", Object.grabValues(o));
*/

//Sum of a Range
function range(start,end,step = 1){
    let arr = [];
    if(step >= 0){
        while(start <= end){
            arr.push(start);
            start += step;
        }
    }
    else{
        while(start >= end){
            arr.push(start);
            start += step;
        }
    }

    return arr;
}

function sum(arr){
    let count = 0;
    for(let i of arr){
        count += i;
    }

    return count;
}

console.log("Sum of a range :", sum(range(1, 10)));

//Reversing an Array
function reverseArray(arr){
    let newArr = [];
    for(let i = arr.length-1 ; i >= 0 ; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    for(let i = 0 ; i < arr.length/2 ; i++ ){
        let pointer = arr.length-i-1;
        let temp = arr[i];
        arr[i] = arr[pointer];
        arr[pointer] = temp;
    }
}

console.log("Reverse Array :", reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log("Reverse Array In Place :",arrayValue); // → [5, 4, 3, 2, 1]

//A List
function arrayToList(arr){
    let list = null;

    for(let i = arr.length-1 ; i >= 0 ; i--){
        let newList = {
            "value" : arr[i],
            "rest" : list
        }

        list = newList;
    }

    return list;
}

function listToArray(list){
    let arr = [];

    function next(l) {
        if(l.rest !== null){
            arr.push(l.value);
            next(l.rest);
        }
        else{
            arr.push(l.value);
        }
    }

    next(list);
    return arr;
}

function prepend(ele,list){
    return {
        "value" : ele,
        "rest" : list
    };
}

function nth(list, pos){
    while (pos != 0){
        list = list.rest
        pos--;
    }

    return list.value;
}

console.log("Array to List :", arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("List to Array :", listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log("Prepend :", prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("nth :", nth(arrayToList([10, 20, 30]), 1));
// → 20

//Deep Comparison
function deepEqual(a,b){
    if(a === b){
        return true;
    }

    if((typeof a === typeof b) && (typeof a === "object") && (typeof a != null) ){
        keyA = Object.grabKeys(a);
        keyB = Object.grabKeys(b);

        if(keyA.length !== keyB.length)
            return false;
        for(let key of keyA){
            if(b[key] == null || !deepEqual(a[key],b[key])){
                return false;
            }
        }
    }
    else{
        return false;
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
function moveZeros (nums) {
    // Code logic goes here
}