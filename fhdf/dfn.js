let milks=[
    {
        id:1,
        name:"Azersud",
        price:5,
        FatPercent:1.5,
        MadeIn:"Azerbaijan"
    },
      {
        id:2,
        name:"Palsud",
        price:4,
        FatPercent:2,
        MadeIn:"Azerbaijan"
    },
      {
        id:3,
        name:"Atena",
        price:2,
        FatPercent:3,
        MadeIn:"Georgia"
    }
]


// TASK 1.1 : Məhsulların hər birini consoleda göstərin.

// milks.forEach((element) => console.log(element))


// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.

// const id = milks.find((element) => element.id == 1)
// console.log(id);


// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.






// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.

// const fatPercent = milks.find((element) => element.FatPercent > 2)
// console.log(fatPercent);


// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.


// const x = milks.map((milk) => milk.price +2)
// console.log(x);


// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.


// sum = 0
// const x = milks.map((milk) => sum+=milk.price)
// console.log(sum);


// Task 1.7 : Məhsullardan id-si 2-ə bərabər olan məhsulu qaytaran funksiya yazın.

// const id = milks.find((element) => element.id == 2)
// console.log(id);


// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin


// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.


// Task 1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?(true or false)

// Qeyd: Funksiyaları yazarkən, array iteration methodlarından istifadə edin.