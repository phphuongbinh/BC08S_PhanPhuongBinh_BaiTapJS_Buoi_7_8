let arrNumber = [];
let arrDom = document.querySelector("#arrayNumbers");
const addBtn = document.querySelector("#add-btn");

const addNumberToArray = () => {
  const number = document.querySelector("#number").value * 1;
  arrNumber.push(number);
  arrDom.innerHTML = arrNumber.join(", ");
};
addBtn.addEventListener("click", addNumberToArray);

// Tính tổng dương

const btnSum = document.querySelector("#sumBtn");
function sumArray() {
  const sumArray = document.querySelector("#sumArray");
  let sum;
  let newArr = arrNumber.filter((num) => num > 0);
  console.log(newArr.length);
  if (newArr.length === 0) {
    sumArray.innerHTML = "Không có số dương";
  } else {
    sum = newArr.reduce((prev, curr) => {
      return prev + curr;
    });
    sumArray.innerHTML = `Tổng dương là: ${sum}`;
  }
}

btnSum.addEventListener("click", sumArray);

// Đếm số dương

const countPositiveNumber = document.querySelector("#countPositiveNumber");
const resultCountPositiveNumber = document.querySelector(
  "#resultCountPositiveNumber"
);

function countPositive() {
  let positive = arrNumber.filter((num) => num > 0).length;
  resultCountPositiveNumber.innerHTML = `Số dương: ${positive}`;
}

countPositiveNumber.addEventListener("click", countPositive);

// Tìm số nhỏ nhất

const findMinNumber = document.querySelector("#findMinNumber");
const resultMinNumber = document.querySelector("#resultMinNumber");

function findMin() {
  let min = arrNumber[0];
  for (let i = 0; i < arrNumber.length; i++) {
    if (min > arrNumber[i]) {
      min = arrNumber[i];
    }
  }

  resultMinNumber.innerHTML = `Số nhỏ nhất: ${min}`;
}

findMinNumber.addEventListener("click", findMin);

// Tìm số dương nhỏ nhất

const btnFindMinPositiveNumber = document.querySelector(
  "#findMinPositiveNumber"
);
const resultMinPositiveNumber = document.querySelector(
  "#resultMinPositiveNumber"
);

function findMinPositiveNumber() {
  let newArr = arrNumber.filter((num) => num > 0);
  let min = newArr[0];
  if (newArr.length === 0) {
    resultMinPositiveNumber.innerHTML = `Không có số dương`;
  } else {
    newArr.forEach((num) => {
      if (num < min) {
        min = num;
      }
    });
    resultMinPositiveNumber.innerHTML = `Số dương nhỏ nhất là: ${min}`;
  }
}

btnFindMinPositiveNumber.addEventListener("click", findMinPositiveNumber);

// Tìm số chẵn cuối cùng

const btnFindLastEvenNumber = document.querySelector("#findLastEvenNumber");
const resultLastEvenNumber = document.querySelector("#resultLastEvenNumber");
function findLastEvenNumber() {
  let newArr = arrNumber.filter((num) => num % 2 === 0);
  if (newArr.length == 0) {
    resultLastEvenNumber.innerHTML = `Không có số chẵn`;
  } else {
    let lastEvenNumber = newArr[newArr.length - 1];
    resultLastEvenNumber.innerHTML = `Số chẵn cuối cùng là: ${lastEvenNumber}`;
  }
}

btnFindLastEvenNumber.addEventListener("click", findLastEvenNumber);

// Đổi chỗ 2 giá trị trong mảng theo vị trí

const btnTransferNumber = document.querySelector("#transferNumber");
const resultTransferNumber = document.querySelector("#resultTransferNumber");

function transferTwoNumber() {
  const firstIndexValue = document.querySelector("#firstNumberIndex").value * 1;
  const secondIndexValue =
    document.querySelector("#secondNumberIndex").value * 1;
  let tempVar = arrNumber[firstIndexValue];
  arrNumber[firstIndexValue] = arrNumber[secondIndexValue];
  arrNumber[secondIndexValue] = tempVar;
  resultTransferNumber.innerHTML = `Mảng sau khi đổi chỗ là: ${arrNumber.join(
    ", "
  )}`;
}

btnTransferNumber.addEventListener("click", transferTwoNumber);

// Sắp xếp tăng dần

const btnSortUpAscending = document.querySelector("#sortUpAscending");
const resultSortUpAscending = document.querySelector("#resultSortUpAscending");

function sortUpAscending() {
  let newArr = arrNumber.sort((a, b) => a - b);
  resultSortUpAscending.innerHTML = `Mảng sau khi sắp xếp là: ${newArr.join(
    ", "
  )}`;
}

btnSortUpAscending.addEventListener("click", sortUpAscending);

// Tìm số nguyên tố đầu tiên

const btnFindPrimeNumber = document.querySelector("#findPrimeNumber");
const resultFindPrimeNumber = document.querySelector("#resultFindPrimeNumber");

function findFirstPrimeNumber() {
  let newArr = arrNumber.filter((num) => num > 0);
  if (newArr.length === 0) {
    resultFindPrimeNumber.innerHTML = `Không có số nguyên tố`;
  } else {
    arrNumber.forEach((num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          let indexOfNum = newArr.indexOf(num);
          newArr.splice(indexOfNum, 1);
          break;
        }
      }
    });
    if (newArr.length == 0) {
      resultFindPrimeNumber.innerHTML = `Không có số nguyên tố`;
    } else {
      resultFindPrimeNumber.innerHTML = `
      Số nguyên tố đầu tiên là: ${newArr[0]}`;
    }
  }
}

btnFindPrimeNumber.addEventListener("click", findFirstPrimeNumber);

// Đếm số nguyên

// Thêm mảng số thực

let arrFloatNumbers = [];
let arrFloatDom = document.querySelector("#arrayFloatNumbers");
const addFloatBtn = document.querySelector("#btn-add-float");

const addFloatNumberToArray = () => {
  const floatNumber = document.querySelector("#floatNumber").value * 1;
  arrFloatNumbers.push(floatNumber);
  arrFloatDom.innerHTML = arrFloatNumbers.join(", ");
};
addFloatBtn.addEventListener("click", addFloatNumberToArray);

const btnCountIntegerNumber = document.querySelector("#countIntegerNumber");
const resultCountIntegerNumber = document.querySelector(
  "#resultCountIntegerNumber"
);

function countInteger() {
  let newArr = arrFloatNumbers.filter((num) => Number.isInteger(num));
  resultCountIntegerNumber.innerHTML = `Số nguyên: ${newArr.length}`;
}

btnCountIntegerNumber.addEventListener("click", countInteger);

// So sánh số lượng số âm và số dương

const btnCompareNegativeAndPositive = document.querySelector(
  "#compareNegativeAndPositive"
);
const resultCompareNegativeAndPositive = document.querySelector(
  "#resultCompareNegativeAndPositive"
);

function compareNegativeAndPositive() {
  let arrNegative = arrNumber.filter((num) => num < 0);
  let arrPositive = arrNumber.filter((num) => num > 0);

  if (arrNegative.length > arrPositive.length) {
    resultCompareNegativeAndPositive.innerHTML = `Số âm > Số dương`;
  } else if (arrNegative.length < arrPositive.length) {
    resultCompareNegativeAndPositive.innerHTML = `Số âm < Số dương`;
  } else {
    resultCompareNegativeAndPositive.innerHTML = `Số âm = Số dương`;
  }
}

btnCompareNegativeAndPositive.addEventListener(
  "click",
  compareNegativeAndPositive
);
