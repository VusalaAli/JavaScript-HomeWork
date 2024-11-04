// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");
// Nəticə: "HELLO WORLD"







// let str = "Hello World"
// function convertToUpper(str){
//     return str.toUpperCase()
// }
// console.log(convertToUpper(str));








// # Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın








// let sentence = "JavaScript oyrenmek maraqlidir"
// let words = sentence.split(" ")
// let longword = ""
// function longWord(sentence){
//     const words = sentence.split(" ");
//     let longword = "";
//     for (let i = 0; i < words.length; i++) {
//         if(words[i].length > longword.length){
//         longword= words [i];
//         }
//     }
//     return longword;
// }

// console.log(longWord(sentence));









// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.









// let sentence = "Javascript oyrenmek maraqlidir"

// function reverseWordOrder(sentence){
//     return sentence.split(' ').reverse().join(' ')
// }

// console.log(reverseWordOrder(sentence))











// # Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.

// replaceCharacter("Salam", "a", "o");

// Nəticə: "solom"








// function replaceCharacter(str, replacementChar){
//     str2 = str.toLowerCase()
//     let result = str.split("a").join(replacementChar)
//     return result
// }
// console.log(replaceCharacter("Salam", "o"))









// ARRAY METHODS

// 1) const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// #add 'Meat' in the beginning of your shopping cart if it has not been already added
// #add Sugar at the end of you shopping cart if it has not been already added
// #remove 'Honey' if you are allergic to honey
// #modify Tea to 'Green Tea'




// 2) const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// #Reverse countries array using reverse() method

// #remove "Canada" and "Denmark", and add "Azerbaijan 
// (splice)







// let countries = [
//         'Albania',
//         'Bolivia',
//         'Canada',
//         'Denmark',
//         'Ethiopia',
//         'Finland',
//         'Germany',
//         'Hungary',
//         'Ireland',
//         'Japan',
//         'Kenya'
//       ]
//       function remove(countries){
//         countries.reverse()
//         countries[8] = "Azerbaijan"
//         countries[9] = "Azerbaijan"

//       }

// console.log(countries)








// 3) #Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)










// 4) const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon]

// #Slice out the first 3 companies from the array
// #Slice out the last 3 companies from the array
// #Slice out the middle IT company or companies from the array
// #Sort companies array using sort() method
// #Change each company name to uppercase one by one and print them out
// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
// #Filter out companies which have more than one 'o' without the filter method

// 5) 

// Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.








// let arr1 = [1, 2]
// let arr2 = [3, 4]
// let char = "*"

// function concat(arr1, arr2, char){
//     let combinedarray = arr1.concat(arr2)
//     let result = combinedarray.join(char)
//     return result
// }

// console.log(concat(arr1, arr2, char))