/**
 * Created by Jaylen on 2016/12/3.
 */
interface LabelledValue {
    label:string
}

function printLabel(labelledObj:LabelledValue) {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface SquareConfig {
    color?:string;
    width?:number;
    [propName:string]:any
}

function createSquare(config:SquareConfig):{color:string; area:number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySuqare = createSquare(<SquareConfig>{color: "black", aaa: 'aaa'});

interface Point {
    readonly x:number;
    readonly y:number;
}

let p1:Point = {x: 10, y: 20};

let a:number[] = [1, 2, 3, 4];
let ro:ReadonlyArray<number> = a;

interface SearchFunc {
    (source:string, subString:string):boolean
}

let mySearch:SearchFunc;

mySearch = function (source:string, subString:string):boolean {
    let result = source.search(subString);
    return result !== -1
};

interface StringArray {
    [index:number]:string
}
let myArray:StringArray;
myArray = ["Bob", "Fred"];

let myStr:string = myArray[0];

class Animal {
    name:string
}

class Dog extends Animal {
    breed:string
}

interface NotOkay {
    [x:number]:Dog;
    [x:string]:Animal;
}

console.log(new Dog());