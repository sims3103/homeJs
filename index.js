 //ЗАДАЧА №1 ПРО ВОЗРАСТ

 function isAdult(age) {
  if (age >= 18) {
    console.log(true);
  } else {
    console.log(false);
  }
  
}
isAdult(20)
isAdult(4)

// ЗАДАЧА №2 ПРО КРАТНОСТЬ

function checkMultiplicity(num1, num2) {
  if (num1 % num2 === 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}
checkMultiplicity(25, 5)
checkMultiplicity(15, 3)
checkMultiplicity(15, 5)
checkMultiplicity(15, 4)

//ЗАДАЧА №3 ТРЕУГОЛЬНИК

function triangle(num1, num2, num3) {
  if (num1 !== 0 && num2 !== 0 && num3 !== 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}
triangle(50, 50, 50)

//ЗАДАЧА №4 НЕЧЕТНЫЕ ЧИСЛА

const getSum = function(n) {
  let result = 0;
  for (i = 1; i <= n; i++) {
    if ( i % 2 == 1){
      console.log(i)
    }
  }
  return result;
}

getSum(152)

//ЗАДАЧА №5 ПРО ПРОСТЫЕ ЧИСЛА

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(isPrime(3))
