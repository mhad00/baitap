let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [3, 4, 8, 9, 12];
let array3 = [1, 7, 9, 2, 5, 3, 8];
let array4 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
let array51 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
let array52 = [3, 5, 9, 10, 88];
// bai 1
function sameNum(arr1, arr2) {
  let arrSameNum = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arrSameNum.push(arr1[i]);
      }
    }
  }
  return arrSameNum;
}
console.log(sameNum(array1, array2));

// bai 2
function bigNum(arrA) {
  let arrBigNum = [];
  arrA.sort((a,b) => a-b);
  for (let i = arrA.length - 2; i < arrA.length; i++) {
    arrBigNum.push(arrA[i]);
  }
  return arrBigNum;
}
console.log(bigNum(array3));

// bai 3
function findSum(arr) {
  let eq10 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10 && i < j) {
        eq10.push([arr[i], arr[j]]);
      }
    }
  }
  return eq10;
}
console.log(findSum(array3));

// bai 4
function noDup(arr) {
  let arrNoDup = [];
  for (i = 0; i < arr.length; i++) {
    if (!arrNoDup.includes(arr[i])) {
      arrNoDup.push(arr[i]);
    }
  }
  return arrNoDup;
}
console.log(noDup(array4));

// bai 5
function sameDupNum(arr1, arr2) {
  let sameDupNum = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !sameDupNum.includes(arr1[i])) {
        sameDupNum.push(arr1[i]);
      }
    }
  }
  return console.log(sameDupNum);
}
sameDupNum(array51, array52);

// bai 6
let arrT = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];
function moreThanOne(arr) {
  let moreThanOne = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i < j && !moreThanOne.includes(arr[i])) {
        moreThanOne.push(arr[i]);
      }
    }
  }
  return console.log(moreThanOne);
}
moreThanOne(arrT);

// bai 7
const array7 = ["face", "zalo", "face", "gmail", "zalo", "zalo"];

function appearTime(arr) {}
