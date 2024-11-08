function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return 'Ошибка: деление на ноль';
    }
    return a / b;
}

function stringLength(str) {
    return str.length;
}

function checkNumber(num) {
    if (num > 0) {
        console.log("Число положительное");
    } else if (num < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число равно нулю");
    }
}


function average(numbers) {
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    return sum / numbers.length;
}




const person = {
    name: "Иван",
    age: 30
};
console.log(person.name);
console.log(person.age);




function isEven(num) {
    return num % 2 === 0;
}
// Пример использования
console.log(isEven(4)); // true
console.log(isEven(5)); // false




function checkNegative(num) {
    if (num < 0) {
        console.log("Число отрицательное");
    } else {
        console.log("Число не отрицательное");
    }
}






function isDivisible(a, b) {
    if (b === 0) {
        console.log("Ошибка: деление на ноль");
        return;
    }
    if (a % b === 0) {
        console.log(`${a} делится на ${b} без остатка`);
    } else {
        console.log(`${a} не делится на ${b} без остатка`);
    }
}
