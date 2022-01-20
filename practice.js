// const generateCipher = (encrypted, k) => {
//     let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let res = ""

//     for(let i = 0; i < encrypted.length; i++) {
//         let currentPosition = alphabet.indexOf(encrypted[i]);
//         let cipheredPosition = currentPosition - k;

//         if(cipheredPosition > alphabet.length) {
//             cipheredPosition -= alphabet.length;
//         } else if(cipheredPosition < 0) {
//             cipheredPosition += alphabet.length;
//         }

//         res += alphabet[cipheredPosition];
//     }
//     return res;
// }

// const _Result = generateCipher('ATTACKATONCE',4);
// console.log(_Result);


//Parking Dilemah 
// let arr = cars.sort((a, b)=> a - b)
// let output = arr[arr.length - 1] - arr[0] + 1

// for(let i = 0; i + k - 1 < arr.length; i++){
//   output = Math.min(output, arr[i + k - 1] - arr[i] + 1) 
// }
// return output
// }```



// function encrypt(text, s)
// {
//     let result=""
//     for (let i = 0; i < text.length; i++)
//     {
//         let char = text[i];
//         if (char.toUpperCase(text[i]))
//         {
//             let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
//             result += ch;
//         }
//         else
//         {
//             let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
//             result += ch;
//         }
//     }
//     return result;
// }


// function closestNumbers(input) {
//     input.sort(function (a, b) {
//         return a - b;
//     });

//     var max = input[1] - input[0];
//     var maxPairs = [input[0], input[1]];

//     for (var i = 2; i < input.length; i++) {
//         var prev = input[i - 1];
//         var next = input[i];
//         var diff = next - prev;

//         if (diff < max) {
//             max = diff;
//             maxPairs = [prev, next];
//         } else if (diff === max) {
//             maxPairs = maxPairs.concat([prev, next]);
//         }
//     }

//    const value = maxPairs.reduce((acc, cur, i) => {
//         if (i % 2 === 1)
//           return `${acc} ${cur} \n`;
//         return `${acc} ${cur}` 
//         }, ''
//       )
//       console.log(value);
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//     var array = String(_input.split('\n').slice(1)).split(' ').map(function(number) { return Number(number); });
//     processData(array);
// });

// const _Result = closestNumbers([4,2,1,3]);
// console.log(_Result);


// const _Test = (fn) => (fn) => (2);

// console.log(_Test(2));




// HackerRank Pracice  Day 1 (20Jan 1:00 am Thursday 2022)






//**********************Challenge no 1
// Objective

// ****************************In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.
function vowelsAndConsonants(s) {
    let _Vovwels = [];
    let _Consonants = [];
    for (let characters of s) {
        if (
            characters === 'a' ||
            characters === 'e' ||
            characters === 'i' ||
            characters === 'o' ||
            characters === 'u'
        ) { _Vovwels.push(characters) }
        if (
            characters !== 'a' &&
            characters !== 'e' &&
            characters !== 'i' &&
            characters !== 'o' &&
            characters !== 'u'
        ) { _Consonants.push(characters) }
    }
    console.log(_Vovwels.toString().replace(/,/g, '\n'));
    console.log(_Consonants.toString().replace(/,/g, '\n'))
}
// vowelsAndConsonants('javascriptloops');

function vowelTest(s) {
    let _Vovwels = s.match(/[aeiou]/gi).toString().replace(/,/g, '');
    let _Consonants = s.match(/[bcdfghjklmnpqrstvwxys]/gi).toString().replace(/,/g, '');

    return {
        Vowels: _Vovwels,
        Consonatns: _Consonants
    };
}

//   console.log(vowelTest('javascriptloops'));



//   Task 3

// Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([a,e,i,o,u]).*\1$/;

    if (s.match(re)) {
        console.log(re, 'yes');
    }
    /*
     * Do not remove the return statement
     */
}

// regexVar('abbcdad');


// ***************Task 4 


// Complete the reverseString function; it has one parameter, . You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

function reverseString(s) {
    if (typeof s == 'number') {
        console.log('s.split is not a function');
    }else {
        // let _SplitTheString  = s.split('').toString().replace(/,/g,'').replace(/\s/g,'');
        // let _SplitTheString  = s.split('').reverse().join('\n').replace(/,/g,'')..replace(/[,\s]/g, '');
        let _SplitTheString = s.split('').reverse().join().replace(/,/g, '');
        return _SplitTheString;
    }
}
// console.log(reverseString(1234));



// kjasdhjaksh
