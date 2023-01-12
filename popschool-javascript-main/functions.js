// Camel case : myNameIsJohn

function add(numbers) {
    let result = 0;
    if ((typeof(numbers) !== 'object') || numbers.length <= 1) {
        return "Les paramètres sont mal définis";
    }
    
    // numbers = [1, 5, 3, 0, 1]
    /* The above code is adding the numbers in the array together. */
    numbers.forEach((number) => {
        result+=number;
        // console.log(result)
    });

    return result;
}

function sub(numbers) {
    let result;

    if ((typeof(numbers) !== 'object') || numbers.length <= 1) {
        return "Les paramètres sont mal définis";
    }

    result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];
        result -= number;
    }

    return result;
}

function sum(numbers) {
    let result = 1;

    if ((typeof(numbers) !== 'object') || numbers.length <= 1) {
        return "Les paramètres sont mal définis";
    }

    numbers.forEach((number) => {
        result *= number;
    });

    return result;
}

function divide(numbers) {
    let result;

    if ((typeof(numbers) !== 'object') || numbers.length <= 1) {
        return "Les paramètres sont mal définis";
    }

    result = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];

        result = result / number;
    }

    return result;
}

console.log(add([1, 5, 3, 0, 1, 5, 10, 6, 951, 213, 51]))
console.log(sub([5, 10]))
console.log(sum([5, 5, 5, 5, 5, 5, 5]))
console.log(divide([10, 3]))

let firstName = 'Alwest'

function changeVar() {
    firstName = 'John';

    console.log(firstName)

}


console.log(firstName)
changeVar()
