// 1 --------- -

function sum(...sumNumbers) {
    let newNumber = 0

    for (let i of sumNumbers) {
        newNumber += i
    }

    return newNumber;
}
let sumAllNumber = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)

console.log(sumAllNumber)

// 2 --------- --

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

function returnFullName(user) {
    if (user.isloggedin === true) {
        return (`${user.firstname} ${user.lastname}`)
    } else {
        console.log(false)
    }
}

let fullName = returnFullName(user)
console.log(fullName)

// 3 --------- ---

const array = [1,5,15,3,38,12]

??





// 4 ---------- ----

function checkOddOrEven(number) {
    if (number % 2 === 0) {
        return "This number is even.";
    } else {
        return "This number is odd.";
    }
}

let answerOddOrEven = checkOddEven(4);
console.log(answerOddOrEven);


// 5  ---------- -----

const array2 = [1, 2, 3, 4, 5]

const reversedArray = []

for(let i = array2.length - 1; i >= 0; i--) {
  const valueAtIndex = array2[i]
  
  reversedArray.push(valueAtIndex)
}

console.log(reversedArray)


// 6 ---------- ------



let AgeStatus = (age) => (age > 18) ? 'სრულწლოვანი' : 'არასრულწლოვანი';


let userAge = 25;
let result = AgeStatus(userAge);
console.log(result)