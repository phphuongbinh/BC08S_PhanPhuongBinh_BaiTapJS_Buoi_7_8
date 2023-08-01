let arrNumber = [];
const addBtn = document.querySelector("#add-btn");

const addNumberToArray = () => {
  let arrDom = document.querySelector("#arrayNumbers");
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

const btnCountPositiveNumber = document.querySelector("#countPositiveNumber");

function countPositive() {
  const result = document.querySelector("#resultCountPositiveNumber");
  let positive = arrNumber.filter((num) => num > 0).length;
  result.innerHTML = `Số dương: ${positive}`;
}

btnCountPositiveNumber.addEventListener("click", countPositive);

// Tìm số nhỏ nhất

const findMinNumber = document.querySelector("#findMinNumber");

function findMin() {
  const result = document.querySelector("#resultMinNumber");
  let min = arrNumber[0];
  for (let i = 0; i < arrNumber.length; i++) {
    if (min > arrNumber[i]) {
      min = arrNumber[i];
    }
  }

  result.innerHTML = `Số nhỏ nhất: ${min}`;
}

findMinNumber.addEventListener("click", findMin);

// Tìm số dương nhỏ nhất

const btnFindMinPositiveNumber = document.querySelector(
  "#findMinPositiveNumber"
);

function findMinPositiveNumber() {
  const result = document.querySelector("#resultMinPositiveNumber");
  let newArr = arrNumber.filter((num) => num > 0);
  let min = newArr[0];
  if (newArr.length === 0) {
    result.innerHTML = `Không có số dương`;
  } else {
    newArr.forEach((num) => {
      if (num < min) {
        min = num;
      }
    });
    result.innerHTML = `Số dương nhỏ nhất là: ${min}`;
  }
}

btnFindMinPositiveNumber.addEventListener("click", findMinPositiveNumber);

// Tìm số chẵn cuối cùng

const btnFindLastEvenNumber = document.querySelector("#findLastEvenNumber");
function findLastEvenNumber() {
  const result = document.querySelector("#resultLastEvenNumber");
  let newArr = arrNumber.filter((num) => num % 2 === 0);
  if (newArr.length == 0) {
    resultLastEvenNumber.innerHTML = `Không có số chẵn`;
  } else {
    let lastEvenNumber = newArr[newArr.length - 1];
    result.innerHTML = `Số chẵn cuối cùng là: ${lastEvenNumber}`;
  }
}

btnFindLastEvenNumber.addEventListener("click", findLastEvenNumber);

// Đổi chỗ 2 giá trị trong mảng theo vị trí

const btnTransferNumber = document.querySelector("#transferNumber");

function transferTwoNumber() {
  const result = document.querySelector("#resultTransferNumber");
  const firstIndexValue = document.querySelector("#firstNumberIndex").value * 1;
  const secondIndexValue =
    document.querySelector("#secondNumberIndex").value * 1;
  let tempVar = arrNumber[firstIndexValue];
  arrNumber[firstIndexValue] = arrNumber[secondIndexValue];
  arrNumber[secondIndexValue] = tempVar;
  result.innerHTML = `Mảng sau khi đổi chỗ là: ${arrNumber.join(", ")}`;
}

btnTransferNumber.addEventListener("click", transferTwoNumber);

// Sắp xếp tăng dần

const btnSortUpAscending = document.querySelector("#sortUpAscending");

function sortUpAscending() {
  const result = document.querySelector("#resultSortUpAscending");
  let newArr = arrNumber.sort((a, b) => a - b);
  result.innerHTML = `Mảng sau khi sắp xếp là: ${newArr.join(", ")}`;
}

btnSortUpAscending.addEventListener("click", sortUpAscending);

// Tìm số nguyên tố đầu tiên

const btnFindPrimeNumber = document.querySelector("#findPrimeNumber");

function findFirstPrimeNumber() {
  const result = document.querySelector("#resultFindPrimeNumber");
  let newArr = arrNumber.filter((num) => num > 0);
  if (newArr.length === 0) {
    result.innerHTML = `Không có số nguyên tố`;
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
      result.innerHTML = `Không có số nguyên tố`;
    } else {
      result.innerHTML = `
      Số nguyên tố đầu tiên là: ${newArr[0]}`;
    }
  }
}

btnFindPrimeNumber.addEventListener("click", findFirstPrimeNumber);

// Thêm mảng số thực

let arrFloatNumbers = [];
const addFloatBtn = document.querySelector("#btn-add-float");

const addFloatNumberToArray = () => {
  let arrFloatDom = document.querySelector("#arrayFloatNumbers");
  const floatNumber = document.querySelector("#floatNumber").value * 1;
  arrFloatNumbers.push(floatNumber);
  arrFloatDom.innerHTML = arrFloatNumbers.join(", ");
};
addFloatBtn.addEventListener("click", addFloatNumberToArray);

const btnCountIntegerNumber = document.querySelector("#countIntegerNumber");

// Đếm số nguyên

function countInteger() {
  const result = document.querySelector("#resultCountIntegerNumber");
  let newArr = arrFloatNumbers.filter((num) => Number.isInteger(num));
  result.innerHTML = `Số nguyên: ${newArr.length}`;
}

btnCountIntegerNumber.addEventListener("click", countInteger);

// So sánh số lượng số âm và số dương

const btnCompareNegativeAndPositive = document.querySelector(
  "#compareNegativeAndPositive"
);

function compareNegativeAndPositive() {
  const result = document.querySelector("#resultCompareNegativeAndPositive");
  let arrNegative = arrNumber.filter((num) => num < 0);
  let arrPositive = arrNumber.filter((num) => num > 0);

  if (arrNegative.length > arrPositive.length) {
    result.innerHTML = `Số âm > Số dương`;
  } else if (arrNegative.length < arrPositive.length) {
    result.innerHTML = `Số âm < Số dương`;
  } else {
    result.innerHTML = `Số âm = Số dương`;
  }
}

btnCompareNegativeAndPositive.addEventListener(
  "click",
  compareNegativeAndPositive
);
