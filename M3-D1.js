/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

const sum = function(a, b) {
    if(a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
};
console.log(sum (2,2))

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const isFifty = function(a , b) {
    if(a === 50 || b === 50 || a+b === 50) {
        return true 
    } else {
        return false 
    }
};
console.log(isFifty (50,4))

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const removeChar = function(str , pos) {
    return str.slice(0 , pos) + str.slice(pos , 1)
};
console.log(removeChar ("str" , 3)) 

/* 4. Create a function to find and return the largest of three given integers. */

const findLargestInt = function(...args) {
    const sorted = args.sort((a,b) => (b - a));
    return sorted[0];
};
console.log(findLargestInt (1,3,5));

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

    const checkRange = function(a , b) {
        if(a >= 40 && a <=60 && b >= 40 && b <= 60) {
         console.log("a and b are in the range 40-60");
       } else if(a >= 70 && a <= 100 && b >= 70 && b <= 100) {
          console.log("a and b are in the range 70-100");
       } else {
        console.log("a and b are not in the range");
      }
    };
console.log(checkRange (50 , 55));
console.log(checkRange (80 , 90));

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

    const createCopies = function(str , a) {
        if(a <= 0) {
            return "a should be positive";
        } else {
          let copies = "";
          for(let i = 0; i < a; i++) {
            copies += str + " ";
          }
          return copies;
        }
    };
    console.log(createCopies("Beauty",  3)); 

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

    const startsWith = function(str) {
        if(str.startsWith("Los") || str.startsWith("New")) {
            return str;
        } else {
            return "False";
        }
    };
    console.log(startsWith("Los Angeles"))
    console.log(startsWith("Hamburg"))

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

    const totalSum = function(...args) {
        let sum = 0 
        for(let i = 0; i < args.length; i++) {
            sum += args[i]
        }
        return sum
    }
    console.log(totalSum(3, 6, 4))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

    const checkArray = function(arr) {
        if(arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3) {
            return ("Array contains 1 or 3");
        } else {
            return ("Array does not contain 1 or 3");
        }

    // Alternative Solution 

    //if(arr.includes(1) || arr.includes(3)){
    //    return("Array contains 1 or 3")
    //} else {
    //    return ("Array does not contain 1 or 3")
    //}
    };

    console.log(checkArray([5 , 3]))
    console.log(checkArray([5, 10]))

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */ 

    const doesNotContain = function(arr) {
    //    if(arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3) {
    //        return false;
    //    } else {
    //    return true;
    //}

    //Alternative solution
    if(!checkArray(arr)) {
        return true
    } else {
        return false 
    }
    };

    console.log(doesNotContain([5 , 3]))
    console.log(doesNotContain([5, 10]))

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */ 

    const getLongestString = function(arr) {
        const temp = []; 
        for (let i = 0; i < arr.length; i++) {
            temp.push(arr[i].length);
        }
        const largest = [...temp].sort((a , b) => b - a)[0];
        const index = temp.indexOf(largest)
        
        return arr[index];
    };
    console.log(getLongestString(["dddd", "aaa", "ppppppp"]));

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

const angleType = function(angle) {
    if(angle > 0 && angle < 90) {
        return "acute"
    } else if(angle === 90) {
        return "right"
    } else if(angle > 90 && angle < 180) {
        return "obtuse"
    } else {
        return "straight"
    }
};
console.log(angleType(170));



/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

const findIndexOfGreatestInt = function(arr){
const greatest = [...arr].sort((a , b) => b - a)[0];
console.log(greatest);

}
console.log(findIndexOfGreatestInt([2, 9, 10]));
/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed as parameter. */

const getLargestInt = function(arr) {
        const temp = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0) {
                temp.push(arr[i]);
            }
        }
        return temp.sort((a, b) => b - a[0]);
};
console.log(getLargestInt([2, 5, 6, 7]))

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

    const checkPositiveOrNegative = function(a, b) {
        if(a < 0 && b > 0 || a > 0 && b < 0) {
            return true
        } else {
            return false 
        }
    }
    console.log(checkPositiveOrNegative(2 , 3));


/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

    const convertCase = function(str) {
        if(str.length < 3) {
            return str.toUpperCase();
        } else {
            return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();
        }
    };
    console.log(convertCase("beauty"));
    console.log(convertCase("tw"));

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

    const checkSumRange = function(a, b) {
        if(a + b > 50 && a + b < 80) {
            return 65;
        } else {
            return 80;
        }
    };
    console.log(checkSumRange(2, 2));
    console.log(checkSumRange(30, 30));

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */


/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */