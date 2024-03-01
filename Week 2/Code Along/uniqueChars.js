function hasUniqueChars(word) {
    let check = []                                  // ['M', 'o', ]
    let wordArr = word.split('')                    // ['M', 'o', 'n']

    for (let i = 0; i < wordArr.length; i++){
        if (check.includes(wordArr[i])) {
            return false                            // This return will exit the function and give us false
        } else {
            check.push(wordArr[i])
        }
    }
    return true
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));


function hasUniqueChars2(word) {
    for (let i = 0; i < word.length; i++) {                   // 'Monday'  first loop => word[i] ='M'
        for (let j = i + 1; j < word.length; j++) {           // first loop => word[j] = 'o' 2nd loop => 'n'
            if (word[j] === word[i]) {
                return false;
            }
        }
    }
    return true;
}