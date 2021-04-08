// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

//setting up test that will take diescribe when shuffleBack is called it will test if the first index is removed  and shuffles the remmaining index in array


//??? i tried a few different approches but ended up digging myself a deeper hole with this jest test. 
//the function works just not the test. 

// describe("when shuffleColors is called", () =>{
//     it("if argument is colors1, return slice array",() =>{
//         const argument = "colors1";
//         const actualResults = shuffleColors(argument)
//         expect(actualResults).toEqual(shuffleColors(colors1).sort())
//     })
//     it("if argument is colors2, return slice shuffleColors(colors1).sort()",() =>{
//         const argument = colorsArray;
//         const actualResults = shuffleColors(argument)
//         expect(actualResults).toEqual(colorsArray.sort())
//     })
// })
//for colors1 expect ["yellow", "blue", "pink", "green"]or something else with only 4 index 1->4 index 0 removed


// b) Create the function that makes the test pass.

//create an function that will take in an array as the argumnent

const shuffleColors = (array) =>{
    //filter the array will slice the index of 0
    var colorsArray = array.slice(1,)
    //filter the array will slice the index of 0
//push (Math.floor *Math.random) for index new array to newArray
    var i = colorsArray.length, j, temp;
    while(--i >0) {
        j= Math.floor(Math.random() * (i+1));
        temp= colorsArray[j];
        colorsArray[j] = colorsArray[i];
        colorsArray[i] = temp;
    }

return colorsArray

}

//

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


console.log(shuffleColors(colors1))
console.log(shuffleColors(colors2))






// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with expect statements for each of the variables provided.
//setting up test that will describe when cubedSum gets called 
//it will take the argument and *** by itself and add each new number in that array to get a total. 
describe("when sumUp is called", () =>{
    it("if argument is cubeAndSum1, return 99",() =>{
        const argument = cubeAndSum1;
        const actualResults = sumUp(argument)
        expect(actualResults).toEqual(99)
    })
    it("if argument is cubeAndSum2, return 1125",() =>{
        const argument = cubeAndSum2;
        const actualResults = sumUp(argument)
        expect(actualResults).toEqual(1125)
    })
})


// b) Create the function that makes the test pass.
//setting up function that takes in an array of numbers as the argument


const sumUp = (array) => {
    let cubedArray =[]
    for(let i= 0; i < array.length ; i++){
        cubedArray.push(array[i] * array[i] * array[i])
    }
    return cubedArray.reduce((a,b) => (a + b))
    
}



var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

console.log(sumUp(cubeAndSum1))
console.log(sumUp(cubeAndSum2))








// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
//setting up test that will describe when lowestAndBiggest gets called 
//it will take in the arrgument of an array
//return index 0 and the last index
//for argument nums1 expect out to be [-8, 90]
//for argument nums2 expect out to be [-59, 109]

describe("when sortNums is called", () =>{
    it("if argument is nums1, return -8, 90",() =>{
        const argument = nums1;
        const actualResults = sortNums(argument)
        expect(actualResults).toEqual([-8, 90])
    })
    it("if argument is nums2, return -59, 109",() =>{
        const argument = nums2;
        const actualResults = sortNums(argument)
        expect(actualResults).toEqual([-59, 109])
    })
})
// b) Create the function that makes the test pass.
//create a function that takes in an array and returns a mapped array with sorted array

//filter the newSortedArray push index 0 and last index. 
//return newSortedArray

const sortNums = (array) => {

    function sortNums(a,b) {
        return a-b;}
    
      let sortedArray = array.sort(sortNums)
      let firstAndLast = []
      firstAndLast.push(sortedArray[0]);
      firstAndLast.push(sortedArray[array.length-1])
        return firstAndLast
    
}
    

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

console.log(sortNums(nums1))
console.log(sortNums(nums2))









// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("when upperCased is called", () =>{
    it("if argument is testString1, return aLbAtRoSs",() =>{
        const argument = testString1;
        const actualResults = upperCased(argument)
        expect(actualResults).toEqual("aLbAtRoSs")
    })
    it("if argument is testString2, return jAbBeRwOcKy",() =>{
        const argument = testString2;
        const actualResults = upperCased(argument)
        expect(actualResults).toEqual("jAbBeRwOcKy")
    })
})

// b) Create the function that makes the test pass.

// create a function that takes a string as an argument and returns every other letter caputalized
const upperCased = (array) => {
    let upCassedArray = []
    for (i= 0 ; i< array.length; i++){
        upCassedArray += i %2 !== 0 ? array.charAt(i).toUpperCase() : array.charAt(i);
    }
    return upCassedArray
}
//split the string to create a new array 

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


console.log(upperCased(testString1))
console.log(upperCased(testString2))







// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.


//??? i tried a few different ways of doing this but i kept getting TypeError: array2 is not iterable 
//??? the finction works I just could not get it to test. 

// describe("when onlyOne is called", () =>{
//     it("if argument is testArray1 and testArray2, return [3, 7, 10, 5, 4, 8, 2, 1]",() =>{
//         const argument = (testArray1 && testArray2);
//         const actualResults = onlyOne(argument)
//         expect(actualResults).toEqual([3, 7, 10, 5, 4, 8, 2, 1])

// })
// })

//create a function that takes in 2 arrays and merges the 2 and checks for duplictes
//reomves all duplicates. 

const onlyOne = (array1, array2) =>{
    let mergedArray =[...array1, ...array2]
    let onlyOneOfEach = mergedArray.filter((value, index) =>{
        return mergedArray.indexOf(value) === index;
    })
    return onlyOneOfEach
}

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]

console.log(onlyOne(testArray1,testArray2))

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]





// b) Create the function that makes the test pass.
