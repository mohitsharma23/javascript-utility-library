# Javascript Utility Library (__lib.js)
This is a JS library with some utilities not accessible directly by funtions to make the work easier. Will be addding more stuff in the coming time and is open to contributions. 

## Getting Started
1. Install the repo and extract the **__lib.js** to the folder with your js assets.
2. Put this file in your HTML code at the top or before your other Javascript file.
3. Take advantage of the utilities.

## Utilities
#### Array Utilities:
`var arr = [1,2,3,5,5,2,5]`
- Count the number of occurences of a particular element
```
arr.__countNum(5)
-> 3
```
- Get random value from the array elements
```
arr.random()
```
- Get a unique array from the array given
```
arr.__unique()
->[1,2,3,5]
```
- Remove element from the array (by giving the element, not the index of element)
```
arr.__eRemove()
```
- Convert Array to Object
```
arr.__toObj()
```

#### String Utilities:
`var str = 'The quick brown fox jumps over the lazy dog'`
- Get the string with capital first word if not
```
str.__capitalize()
```
- Get the total occurences of a word in a string
```
str.__totalOcc('the')
->2
```
- Return true if the string ends with a particular word or character
```
str.__endsWith('dog')
->true
```
- Check if the string contains only Alphanumeric Characters
```
str.__isAplhaNum()
```
- Returns an array with first element being the longest element and second element being the length of longest element
```
str.__maxWord()
```
- Returns an array with first element being the smalles element and second element being the length of smallest element
```
str.__minWord()
```
- Swapcase the string
```
str.__swapCase()
```

## Contributions
I am happy to take any contributions and increase the utilities the library offers so as to make it easier for everyone.
> No one wants to solve the same problem again and again.




