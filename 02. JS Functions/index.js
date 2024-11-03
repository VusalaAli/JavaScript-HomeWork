// 1. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)





// let num1 = +prompt("1ci eded");
// let num2 = +prompt("2ci eded");

// function Power(){
//     return Math.pow(num1,num2)
// }
// console.log(Power(2,3));




 
// 2.Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]













// 3.Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
// Məsələn:
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
// console.log(deleteRepeate([1, 2, 3, 4, 5])) 
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]






// let array = [1, 2, 2, 3, 4, 4, 5];
// function deleteRepeate(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//       let a = false;
//       for (let j = 0; j < result.length; j++) {
//           if (array[i] === result[j]) { 
//               a = true;
//               break;
//           }
//       }
//       if (!a) {
//           result.push(array[i]);
//       }
//   }
//   return result;
// }
// console.log(deleteRepeate(array))








// 4.Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

// sentenceCapitalization("a short sentence")
// Expected Output:
// "A Short Sentence" 


// let sentence = "a short sentence"
// function sentenceCapitalization(sentence) {
//     let result = '';
//     let word = '';
  
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === ' ') {
//             if (word) {
//                 result += word[0].toUpperCase();
//                 for (let j = 1; j < word.length; j++) {
//                     result += word[j];
//                 }
//                 result += ' ';
//                 word = '';
//             }
//         } else {
//             word += sentence[i];
//         }
//     }
  
   
//     if (word) {
//         result += word[0].toUpperCase();
//         for (let j = 1; j < word.length; j++) {
//             result += word[j];
//         }
//     }
    
//     return result;
//   }
  
//   console.log(sentenceCapitalization(sentence));





// 5. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]





// let arr1 =[1,2,3,4,5]
// let arr2 =[6,7,8,9]

// function concatArray(arr1, arr2) {
//     for (let i = 0; i <= arr1.length; i++) {
       
        
//     }
//     return [...arr1, ...arr2];
// }
// console.log(concatArray(arr1, arr2));






// 6. Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.





// let str ="Cof Akademiyə umicli piroq apardig)))";
// let count =0;
// function Sentence(str){
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] !==" " && i == 0 || str[i-1] == " ")
//         count++
//     }
//     return count
// }
// console.log(Sentence(str));





// 7. Function yazın. Parametr qəbul etsin və bu parametr bir array (ədədlərdən ibraət array) olsun. Funksiya həmin arrayin medianını tapsın.Median ən ortada dayanan ədədi bildirir. Əgər array uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin yarısı median olacaqdır.





// let array= [8,3,4,9,6,7];

// function median(array) {


//   const length = array.length;
//   const mid = Math.floor(length / 2);

//   if (length % 2 === 0) {
//     return (array[mid - 1] + array[mid]) / 2;
//   } else {
//     return array[mid];
//   }
// }
// console.log(median(array));





// 8. 

// Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]




// let array = [1,2,1,2,3];
// function clearDublicate(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//       let a = false;
//       for (let j = 0; j < result.length; j++) {
//           if (array[i] === result[j]) { 
//               a = true;
//               break;
//           }
//       }
//       if (!a) {
//           result.push(array[i]);
//       }
//   }
//   return result;
// }
// console.log(clearDublicate(array))








// 9. 

// Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.





// let string ="JavaScript"
// let char ="a"
// function Index(string, char){
    
//     let indexSum = 0;
//         let x = false;
    
//         for (let i = 0; i < string.length; i++) {
//             if (string[i] === char) {
//                 indexSum += i;
//                 x = true;
//             }
//         }
    
//         return x ? indexSum : -1;
    
// }
// console.log(Index(string, char));








// 10. 

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın

// output: ["FIN", "DEN", "SWE", "NOR", "ICE"];





// const countries = ["Finlandiya", "Danimarka", "İsveç", "Norveç", "İslandiya"]
// const firstthrid = []
// for (let i = 0; i < countries.length; i++) {
//   let country = countries[i];
//   let thrid = "";
//   for (let j = 0; j < 3; j++) {
//     if (j < country.length) {
//       thrid += country[j].toUpperCase()
//     }
//   }

//   firstthrid.push(thrid)
// }

// console.log(firstthrid)







// 11. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'Example: 
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN













// 12. 

// Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true




// function isEqual(arr1, arr2){
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i]!==arr2[i])
//       return false;
//   }
//     return true;
//   }

