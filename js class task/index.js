// // Qlobal funksiyalar.

//  TASK 1

// 1. sortUsersByUsername() - parametr massivi qəbul edir və geriyə username-ə görə AZ sort edir.

// function sortUsersByUsername(users) {
//     return [...users].sort();
//   }
//   const users = ['Murad', 'Xedice', 'Zerife', 'Feyza', 'Zubeyda'];

//   const sortedUsers = sortUsersByUsername(users);
//   console.log(sortedUsers);

// TASK 2

// 2. filterByBirthYear() - parametr olaraq users array-i, bir year qəbul edir və bu günə qədər böyük olan user-ləri filter edir.

// function filterByBirthYear (users, year){
//     return users.filter(user => user.birthYear > year)
// }

// const users = [
//     { name: 'Jonny', birthYear: 2010 },
//     { name: 'Murphy', birthYear: 1992 },
//     { name: 'Anna', birthYear: 2004 },
//     { name: 'Cillian', birthYear: 2016}
//   ];
//   console.log(filterByBirthYear(users, 2016));

// TASK 3

// 3. Login() - parametr olaraq istifadəçilər array-i, bir istifadəçi adı və bir parol qəbul edir. Və əgər
// a. username-də bir istifadəçi tapılmazsa, 'istifadəçi tapılmadı!'
// b. username ve ya password yalnish olarsa, 'yanlış istifadəçi adı və ya parol'
// c. her ikisi dogru olarsa, ancaq her hansi bir user-in isLogged deyeri true olarsa, o zaman 'başqa bir istifadəçi hazırda daxil olub' geri etmelidir
// d. her ikisi dogru olarsa hemin user-in isLogged deyeri true olur ve alert('successfully logged in') verir

// function Login(users, username, password) {
//   const user = users.find((user) => user.username === username);
//   if (!user) {
//     return "İstifadəçi tapılmadı";
//   }
//   if (user.password !== password) {
//     return "İstifadəçi adı və ya parol yanlışdır";
//   }
//   if (user.isLogged) {
//     return "Başqa bir istifadəçi hal-hazırda daxil olub";
//   }
//   user.isLogged = true;
//   alert("Successfully logged in");
//   return "Successfully logged in";
// }

// let users = [
//   { username: "Pepe", password: "8", isLogged: false },
//   { username: "Mbappe", password: "78", isLogged: true },
//   { username: "Vini", password: "11", isLogged: false },
//   { username: "Arda", password: "password123", isLogged: false },
// ];

// console.log(Login(users, 'Pepe', '8' ));
// console.log(Login(users, 'Mbappe', '78' ));
// console.log(Login(users, 'Drogba', '50' ));
// console.log(Login(users, 'Arda', '10' ));

// TASK 4

// 3. LogOut() - parametr olaraq bir users array-i ve username qebul, Eger,
// a. Daxil olunmush username-de bir user tapmazsa 'istifadəçi tapılmadı'
// b. Daxil olunmush username-de user tapsa, ancaq isLogged deyeri false olarsa o zaman, 'istifadəçi çıxış etmək üçün daxil olmayıb!'
// c. Daxil olunmush username-de user tapsa ve isLogged deyeri true olarsa o zaman, user-in isLogged deyeri false olur və 'uğurla' çıxış etdi

// function LogOut(usersArray, username){
//     const user = usersArray.find(user => user.username == username)
//     if(!user){
//         return "istifadəçi tapılmadı"
//     }
//     if(!user.isLogged) {
//         return "istifadəçi çıxış etmək üçün daxil olmayıb!"
//     }

//     user.isLogged = false;
//     return  "uğurla' çıxış etdi";
// }
// const usersArray = [
//     { username: "vusala.alizadaa", isLogged: false },
//     { username: "vusala.alizadaa", isLogged: true }
// ];

// console.log(LogOut(usersArray, "vusala.alizadaa"));
// console.log(LogOut(usersArray, "vusala.alizadaa"));
// console.log(LogOut(usersArray, "makeup" ));

// TASK 5

// 4. CreateUser() - parametr olaraq bir array və bir User obj qebul edir və hemin user-i array -e elave edir

// function CreateUser (array, userobj) {
//     return [...array,userobj];
// }
// const array = ['HTML', 'CSS', 'JS', 'React'];
// console.log(CreateUser(array , "JAVA"));

// TASK 6

// 5. DeleteUser() - parametr olaraq bir sıra və bir istifadəçi adı qebul edir və daxil olunmush username-de user tapilarsa hemin User-i silir,
// tapmazsa o zaman 'istifadəçi tapılmadı' qaytarır.

// function DeleteUser (users, username) {
//     const index = users.findIndex(user => user === username);

//     if(index !== -1) {
//         users.splice(index , 1);
//         return users ;
//     } else{
//         return 'İstifadəçi tapılmadı';
//     }
// }
//   const users = ['Murad', 'Vusala', 'Zarifa'];
//   console.log(DeleteUser(users, 'Aslan'));
//   console.log(DeleteUser(users, 'Zubeyda'));








// 1)Rectangle adında bir class yaradın.
// Rectangle class-ına calculateArea() adlı bir metod daxil edin. Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının sahəsini hesablayacaq və geri qaytaracaq.
// Rectangle class-ına calculatePerimeter() adlı başqa bir metod daxil edin.
// Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının perimetrini hesablayacaq və geri qaytaracaq.
// Reactangle sinifinin instanceni yaradın və onun sahəsini və perimetrini hesablayın.

// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     calculateArea() {
//       return this.width * this.height;
//     }
  
//     calculatePerimeter() {
//       return 2 * (this.width + this.height);
//     }
//   }
  

//   const probRectangle = new Rectangle(10, 15);
  
//   console.log("Düzbucaqlının sahəsi:", probRectangle.calculateArea());
//   console.log("Düzbucaqlının perimetri:", probRectangle.calculatePerimeter());
 
  
  // BankAccount adlı bir class yaradın.
  // Bu class-da aşağıdakı xüsusiyyətlər olsun:
  // accountNumber (hesab nömrəsi) — Hesabın nömrəsi (string).
  // balance (balans) — Hesabın balansı (rəqəm, ilkin olaraq 0 olaraq təyin edilsin).
  // Metodlar:
  
  // deposit(amount): Bu metod, istifadəçiyə hesabına müəyyən məbləği əlavə etməyə imkan verəcək.
  // Şərt: Əgər əlavə ediləcək məbləğ müsbət deyilsə (sıfır və ya mənfi), xəta mesajı verilməlidir.
  // withdraw(amount): Bu metod, istifadəçiyə hesabından müəyyən məbləği çıxarmağa imkan verəcək.
  // Şərt 1: Çıxarılacaq məbləğ müsbət olmalıdır.
  // Şərt 2: Hesabda kifayət qədər vəsait yoxdursa, xəta mesajı verilməlidir.
  // Şərt 3: Əgər çıxarılacaq məbləğ sıfır və ya mənfi olarsa, xəta mesajı verilməlidir.
  // Nümunələrin Yaradılması:
  
  // BankAccount class-ından iki nümunə yaradın:
  // Birinci hesab üçün:
  // Hesab nömrəsi: "101"
  // İlkin balans: 1000
  // İkinci hesab üçün:
  // Hesab nömrəsi: "102"
  // İlkin balans: 500
  // Əməliyyatlar:
  
  // Hesab 101 (Alice):
  // 500 məbləği əlavə etsin.
  // 200 məbləği çıxarsın.
  // Hesab 102 (Bob):
  // 100 məbləği çıxarsın.
  // 700 məbləği əlavə etsin.
  // Əməliyyatların Nəticələri:
  
  // Hər iki hesab üzrə əməliyyatları yerinə yetirəndən sonra hər birinin balansını çap edin.
  // Əgər əməliyyat düzgün yerinə yetirilməyibsə, müvafiq xəta mesajını göstərmək vacibdir.
  
//   class BankAccount {
//     constructor(accountNumber, balance = 0) {
//       this.accountNumber = accountNumber;
//       this.balance = balance;
//     }
  

  
//     deposit(amount) {
//       if (amount > 0) {
//         this.balance += amount;
//         console.log(
//           ${amount} hesaba pulu əlavə et ${this.accountNumber}. Yeni balans: ${this.balance}
//         );
//       } else {
//         console.log("Error: Deposit müsbət olmalıdır!!!");
//       }
//     }
  
  
//     withdraw(amount){
//       if (amount > 0) {
//           if (this.balance >= amount) {
//               this.balance -= amount;
//               console.log(${amount} Hesabdan çıxarılıb ${this.accountNumber}. Yeni balans: ${this.balance});
//           } else {
//               console.log("Error: Kifayət qədər vəsait yoxdur!!!");
//           }
//       } else {
//           console.log("Error: Çıxarma məbləği mənfi ola bilməz!!!");
//       }
//     }
//   }
  
//   const account1 = new BankAccount("Alice",1000);
//   const account2 = new BankAccount("Bobb",500);
  
  
  
  
//   const aliceDeposit = account1.deposit(500);
//   const aliceWithdraw = account1.withdraw(200);
  

  
//   const bobbDeposit = account2.deposit(700);
//   const bobbWithdraw = account2.withdraw(100);
  
  
  // console.log(aliceDeposit);
  // console.log(aliceWithdraw);
  // console.log(bobbDeposit);
  // console.log(bobbWithdraw);