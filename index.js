/************ Task 2.1: Array Diff ************/

let firstTask = (function() {
    return {
        arrayDiff: function(a, b) {
            let result = [];
            for (let i = 0; i < a.length; i += 1) {
                if(!b.includes(a[i])) {
                    result.push(a[i]);
                }
            }
            return result;
        }
    }
})(); 

let firstTask = (function() {
    return {
        arrayDiff: function(a, b) {
            let result = a.slice();

            for (let j = 0; j < b.length; j += 1) {
                for (let i = 0; i < result.length; i += 1) {
                    if (b[j] === result[i]) {
                        delete result[i];
                    }
                }
            }
            return result.filter(element => element !== null);
        }
    }
})();

console.log(JSON.stringify(firstTask.arrayDiff([1,2],[1])) == JSON.stringify([2]));
console.log(JSON.stringify(firstTask.arrayDiff([1,2,2,2,3],[2])) == JSON.stringify([1,3]));
console.log(JSON.stringify(firstTask.arrayDiff([1,2,2,2,3],[2, 9, 99, -1])) == JSON.stringify([1,3]));

/************ Task 2.2: Replace With Alphabet Position ************/

let secondTask = (function() {
    return {
        alphabetPosition: function(str) {
            const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let result = '';
            for (let i = 0; i < str.length; i += 1) {
                let item = alphabet.indexOf(str[i].toLowerCase());
                if (item != -1) {
                    result += (item + 1 + ' ');
                }
            } 
            return result.trim();
        }
    }
})();

let secondTask = (function() {
    return {
        alphabetPosition: function (str) {
            const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let result = [];

            for (let i = 0; i < str.length; i += 1) {
                let item = alphabet.indexOf(str[i].toLowerCase());
                if (item != -1) {
                    result.push(item + 1);
                }
            } 
            return result.join(' ');
        }
    }
})();

console.log(secondTask.alphabetPosition("The sunset sets at twelve o' clock."));

/************ Task 2.3: Square Every Digit ************/

let thirdTask = (function() {
    return {
        squareEveryDigit: function(num) {
            return (num.toString().split('').map(item => (item * item))).join('');
        }
    }
})();

let thirdTask = (function() {
    return {
        squareEveryDigit: function(num) {
            let str = '';
            for (let i = 0; i < num.toString().length; i += 1) {
                str += num.toString()[i] * num.toString()[i];
            }
            return str;
        }
    }
})();

console.log(thirdTask.squareEveryDigit(9119) == 811181);
console.log(thirdTask.squareEveryDigit(323) == 949);
console.log(thirdTask.squareEveryDigit(101) == 101);  