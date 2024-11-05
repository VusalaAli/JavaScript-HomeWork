// let num = prompt("enter number value:");
// if(num % 2 === 0){
//     alert("even");
// }else{
//     alert("odd")
// }


// let gpa = prompt("enter your gpa");
// if(gpa <=100 && gpa >=0){
//     if(gpa <=100 && gpa >=90){
//         alert("your gpa is A");
//     }else if(gpa <=90 && gpa >=80){
//         alert("your gpa is B");
//     }else if(gpa <=80 && gpa >=70){
//         alert("your gpa is C");
//     }else if(gpa <=70 && gpa >=60){
//         alert("your gpa is D");
//     }else if(gpa <=60 && gpa >=50){
//         alert("your gpa is E")
//     }

// }

// let month = prompt("enter month name").toLowerCase();

// switch(month){
//     case "september":
//     case "october":
//     case "november":
//         alert("Season is Autumn");
//         break;

//     case "december":
//     case "january":
//     case "february":
//         alert("Season is Winter");
//         break;

//     case "mart":
//     case "april":
//     case "may":
//         alert("Season is Spring");
//         break;

//     case "june":
//     case "july":
//     case "august":
//         alert("Season is Summer");
//         break;
        

//     default:
//         alert("Please, enter correct month name")
// }



// let p = prompt("your age:");

// if(p >=0 && p <125){
//     if(p >65){
//         alert("URAAAAA! pensiya alabilirsin, canimm")
//     }else{
//         alert("kul bashuvaa :)))")
//     }
// }else{
//     alert("please, yasi duz yaz!!!")
// }


// let a = prompt("a=");
// let b = prompt("b=");
// let c = prompt("c=");

// if(a > 0 && b > 0 && c > 0){
//     if(a == b && b == c){
//         alert("beraber");
//     }else if(a == b && a != c || a == c && a != b || b == c && b != a){
//         alert("beraberyanli");
//     }else{
//         alert("muxtelifterefli")
//     }

// }else{
//     alert("eded musbet deyil")
// }


// let number = prompt("ededi daxil edin");

// if(number >0){
//     switch (number) {
//         case "1":
//             alert("january");
//             break;
//             case "2":
//             alert("february");
//             break;
//             case "3":
//             alert("march");
//             break;
//             case "4":
//             alert("april");
//             break;
//             case "5":
//             alert("may");
//             break;
//             case "6":
//             alert("june");
//             break;
//             case "7":
//             alert("july");
//             break;
//             case "8":
//             alert("august");
//             break;
//             case "9":
//             alert("september");
//             break;
//             case "10":
//             alert("october");
//             break;
//             case "11":
//             alert("nowember");
//             break;
//             case "12":
//             alert("december");
//             break;
    
//         default:
            
//             break;
//     }
// }else{
//     alert("ededi duzgun yaz");
// }


// let salary = prompt("emek haqqi:")
// let price = prompt("istediyiniz meblegh:")
// let time = prompt("istediyiniz muddet(ay):")
// let kredit;
// if(time == 36){
    
    
// }else{
//     alert("size bu shertlerle kredit dushmur...(");
//     console.log("size bu shertlerle kredit dushmur...(");
// }





//1. Toplama Funksiyası
//İki ədədin cəmini hesablayan bir funksiya yaradın



// let num1 = +prompt("1ci eded")
// let num2 = +prompt("2ci eded")
// function Sum(num1=0, num2=0){
//     let total = num1+num2
//     return total
// }
// let result = Sum(num1, num2)
// console.log(result);




//2. İki Ədədin Maksimumu
//İki ədədin maksimumunu qaytaran bir funksiya yaradın. if-else istifadə edin.


// let num1 =765467
// let num2 =90852
// function max(num1, num2){
//     if(num1 > num2){
//         console.log(num1);
//     }else{
//         console.log(num2);    
//     }
// }

// max(num1, num2)



// 3. 1-dən n-ə Qədər Cəmi
// 1-dən n-ə qədər olan ədədlərin cəmini qaytaran bir funksiya yaradın. dongusu üçün istifadə edin.

// let n = 50
// let sum =0
// function Sum(n){
//     for (let i = 1; i <=n; i++) {
//         sum += i;
//     }
//     return sum
// }
// console.log(Sum(n));



// 4. Tək və Cüt ədədlər
// Verilmiş bir ədədin tək və ya cüt olduğunu göstərən bir funksiya yaradın.



// let a =67487

// function OddEven(a){
//     if(a % 2 === 0) {
//         console.log("eded cutdur");;
//     }else{
//         console.log("eded tekdir");
//     }
    
// }
// OddEven(a)


// 5. Faktorial Hesabı
// Verilmiş bir ədədin faktorialını hesablayan bir funksiya yaradın. dongusu üçün istifadə edin.


// let a =6
// function Factorial(a){
//     let f =1
//     for (let i = 2; i <= a; i++) {
//         f *= i; 
//     }
//     return f
// }
// console.log(Factorial(a));



//6. Nömrələrin Tersinə
// Bir ədədin tərsini qaytaran bir funksiya yaradın (məhz, 123 -> 321).









// 7.
//  N-ə Qədər Cüt ədədlər
// 1-dən n-ə qədər olan cüt ədədləri çap edən bir funksiya yaradın.



// let n =100
// function Even(n){
//     for (let i = 0; i <= n; i++) {
//         if(i % 2 === 0){
//             console.log(i);
//         }
        
//     }
// }
// Even(n)



// 8. FizzBuzz
// 1-dən 100-ə qədər olan ədədlər üçün FizzBuzz problemi: 3-ə bölünəndə "Fizz", 5-ə bölünəndə "Buzz", hər ikisinə bölünəndə "F izzBuzz" yazın.



// let n =100
// function FizzBuzz(n){
//     for (let i = 0; i <= n; i++) {
//         if(i % 15 === 0){
//             console.log("FizzBuzz");
//         }else if(i % 3 === 0){
//             console.log("Fizz");
//         }else if(i % 5 === 0){
//             console.log("Buzz");
//         }
        
//     }
     
// }
// FizzBuzz(n)



// 9. Polindrom Yoxlanması
// Verilmiş bir sözün polindrom olub olmadığını yoxlayan bir funksiya yaradın.


// function Polindrom(str) {
//     let a = ''
//     for (let i = str.length -1; i >= 0; i--) {
//         a += str[i]
        
//     }

//     if(a === str){
//         return true
//     }else{
//         return false
//     }

// }

// const str = 'ənənə'
// console.log(Polindrom(str));




// 10. 1-dən n-ə Qədər ədədlərinin Kvadratı
// 1-dən n-ə qədər olan ədədlərin kvadratlarını çap edən bir funksiya yaradın.


// let n =100
// function Calc(n){
//     for (let i = 1; i <=n; i++) {
//         console.log(i**2);
        
//     }
// }
// Calc(n)



// 11. İki Dəfə Yoxlanma
// Verilmiş bir ədədin 2, 3 və 5-ə bölünüb-bölünmədiyini yoxlayan bir funksiya yaradın


// let x =120
// function Calc(x){
//     if(x % 30 === 0){
//         console.log("bolunur");
//     }else{
//         console.log("bolunmur");
//     }
// }
// Calc(x)


// 12. Array-in Cəmi
// Bir array içindəki ədədlərin cəmini hesablayan bir funksiya yaradın.


// let array =[2,5,7,6,9,3]
// let sum = 0
// function SumArray(array){
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     console.log(sum);
    
// }
// SumArray(array)





// 13. Tərs Array
// Bir array-i tərsinə çevirən bir funksiya yaradın.

 
// let array =[1,6,4,7,3,9,8]
// const arr1 = []

// function ReplaceFunc(array){
//     for (let i = array.length; i >= 0; i--) {
//         const element = array[i];
//         if(element) {
//             arr1.push(element)
//         }
//     }

//     return arr1
// }
// console.log(ReplaceFunc(array));






// 14. Tələbə Qiymətləri
// Tələbələrin qiymətlərini qəbul edir və 60-dan yuxarı olan dəyişiklikləri "keçdi", 60-dan aşağı olanları "qaldı" bir funksiya yaradın.





// let array =[51,67,89,58,91]
// function Students(array){
//     for (let i = 0; i < array.length; i++) {
//     if (array[i] > 60) {
//        console.log("kechdi");
        
//     }else{
//         console.log("qaldi");
        
//     }
    
//     }
// }
// Students(array)





// 15. Kəmiyyət Yoxlanması
// Verilmiş bir ədədin 10-dan kiçik, böyük funksiyası və ya böyük olduğunu yoxlayan bir yaradın.



// let a =7

// function Check(a){
//     if(a < 10){
//         console.log("10dan kicikdir");
//         return a
//     }else if(a > 10){
//         console.log("10dan boyukdur");
//         return a
//     }
// }
// Check(a)




// 16. Array-də Maksimum Dəyər
// Bir massiv-dəki maksimum dəyər taparaq qaytaran bir funksiya yaradın.


// let array =[56,4,677,3,56]

// let maxCount = 0

// function MaxCountFunc(array){
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i]
//         if(item >  maxCount) {
//             maxCount = item
//         }
        
        
//     }
//     return maxCount
// }

// console.log(MaxCountFunc(array));





// 17. Cüt ədədlərin Sayı
// Verilmiş bir array-dəki cüt ədədlərin hesablayan bir funksiyası yaradın.


// let arr =[5,8,4,2,76,9,3]

// function Even(arr){
//     let count =0
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i] % 2 === 0){
//          count++
//       }
//       return count
        
//     }
// }
// console.log(Even(arr))



// 18. Vowel Yoxlanması
// Verilmiş bir xarakterin səsli hərf olub olmadığını yoxlayan bir funksiya yaradın (a, e, i, o, u).


// let array =["a","e","i","o","u"]
// let x = "c"
// function Vowel(array, x){
//     for (let i = 0; i < array.length; i++) {
//         if(x === array[i]){
//            return "sesli herfdir"
//         }
        
        
//     }
//     return "sesli herf deyil"
// }
// console.log(Vowel(array, x));



// 19 Müsbət və Mənfi ədədlərin Sayı
// Verilmiş bir array-dəki görünüş və bir funksiyası olan məbləğlərin qaytaran yaradın.




// let array =[3,-6,7,8,-4,-7,9]
// let countPositive =0
// let countNegative =0
// function number(array){
//     for (let i = 0; i < array.length; i++) {
//        if(array[i] > 0){
//         countPositive++
        
//        }else{
//         countNegative++
//        }
        
        
//     }
//     return {countNegative, countPositive}
    
// }
// console.log(number(array));
