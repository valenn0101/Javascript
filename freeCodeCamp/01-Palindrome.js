function palindrome(str) {
  let nuevoString = str.replace(/\W|_|\s/g, "").toLowerCase()
  let reversedString = nuevoString.split('').reverse('')
  let finalString = reversedString.join('')
  if (finalString === nuevoString) {
    return true
  } 
    return false
}

let result = palindrome("A man, a plan, a canal. Panama");
console.log(result)