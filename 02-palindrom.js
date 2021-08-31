const print = console.log

function isPalindrom(str) {
  let l = 0
  let h = str.length - 1

  while (h > 1) {
    if (str[l++] != str[h--]) {
      return print(str, `is not a palindrome`)
    }
  }
  print(str, `is a palindrome`)
}

function isPalindrom_2(str) {
  let reversed = str.split('').reverse().join('')
  return print(str === reversed)
}

function isPalindrom_3(str) {
  let reversed = [...str].reverse().join("")
  return print(str === reversed)
}


print('isPalindrom_1')
isPalindrom('abba')
isPalindrom('abbccbba')
isPalindrom('geeks')
print('isPalindrom_2')
isPalindrom_2('abba')
isPalindrom_2('abbccbba')
isPalindrom_2('geeks')
print('isPalindrom_3')
isPalindrom_3('aabbaa')
isPalindrom_3('abbccbba')
isPalindrom_3('geeks')
isPalindrom_3("tnfodxxzqtivgnostongvitqzxxdofnt")
