function decoder (str) {
    // take the first character and turn it into a number
    let cipher = +str[0]      // Number(code[0])
    // console.log(cipher)
    let splitStr = str.split('')
    let newStr = ''

    // console.log(splitStr.indexOf('f'))
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    for (let i = 1; i < splitStr.length; i++) {
     // let newLetter = alphabet[alphabet.indexOf(splitStr[i]) + 2]  
    }
 return newStr

}

// find out if first character is a number - assume that it starts with a number. 
//  "2fcjjm" => "hello"
//  We need to get each letter to change it. 
     //  Split the string into an array of characters. => ['2', 'f', 'c', 'j', 'j', 'm']
     //  Loop through that array. 
//  increase by 2. ie f => g => h
//  mkae an alphabet array


decoder("2fcjjm")